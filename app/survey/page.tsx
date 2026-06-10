"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Survey } from "@/components/survey"
import { ProgressIndicator } from "@/components/progress-indicator"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { trackPageView } from "@/components/analytics-events"

const formSteps = [
  { id: 1, label: "Your Home", path: "/survey" },
  { id: 2, label: "Project Ideas", path: "/project-questions" },
  { id: 3, label: "Contact Details", path: "/contact-form" },
]

function LoadingComponent() {
  return (
    <div className="flex flex-col justify-center items-center py-20 min-h-[400px] text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
      <p className="mt-6 text-xl text-gray-700 font-semibold">Loading...</p>
    </div>
  )
}

export default function SurveyPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [formData, setFormData] = useState(() => getSessionData()?.formData || {})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Track page view
    trackPageView("survey", 1)

    // Load data on mount
    const savedData = getSessionData()
    if (savedData?.formData) {
      setFormData(savedData.formData)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // Save data whenever formData changes
    if (isLoaded) {
      saveSessionData({ formData })
    }
  }, [formData, isLoaded])

  const handleFormChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleNextStep = useCallback(() => {
    router.push("/project-questions")
  }, [router])

  const handlePrevStep = useCallback(() => {
    router.push("/") // Go back to the main landing page
  }, [router])

  const currentStepIndex = formSteps.findIndex((step) => step.path === pathname)

  if (!isLoaded) {
    return <LoadingComponent />
  }

  return (
    <section aria-labelledby="form-step-heading" className="container max-w-3xl mx-auto px-3 py-5 sm:px-4 sm:py-8">
      <h2 id="form-step-heading" className="sr-only">
        Home Renovation Qualification Form - Step 1 of {formSteps.length}
      </h2>
      <ProgressIndicator currentStep={currentStepIndex} steps={formSteps} />
      <div className="my-4 text-center text-sm text-muted-foreground">
        Step {currentStepIndex + 1} of {formSteps.length}: {formSteps[currentStepIndex]?.label}
      </div>
      <Suspense fallback={<LoadingComponent />}>
        <Survey
          formData={formData}
          onFormChange={handleFormChange}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      </Suspense>
    </section>
  )
}
