"use client"

import { useState, useEffect, useCallback } from "react"
import { Hero } from "./hero"
import { ProjectGallery } from "./project-gallery"
import { Survey } from "./survey"
import { ZipCodeChecker } from "./zip-code-checker"
import { Clock, Shield, CheckSquare } from "lucide-react"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { useRouter } from "next/navigation"
import { SectionErrorBoundary } from "./error-boundary"
import { useErrorHandler } from "@/hooks/use-error-handler"
import { PersonalVideoPopup } from "./personal-video-popup"

function LoadingComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-700">Loading...</p>
      </div>
    </div>
  )
}

const defaultSessionState = {
  formData: {
    zipCode: "",
    homeInfo: "",
    projectType: "",
    projectDetails: "",
    timelineAndBudget: "",
    otherProjectSpecify: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bestTimeToContact: "",
    financingInterest: "",
  },
  currentStep: 0,
  isSubmittedState: false,
  isZipVerifiedState: false,
}

export function LandingPage() {
  const router = useRouter()
  const { handleError } = useErrorHandler()
  const [formData, setFormData] = useState(defaultSessionState.formData)
  const [isZipVerified, setIsZipVerified] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load session data on mount
  useEffect(() => {
    const loadSessionData = async () => {
      try {
        const savedSession = getSessionData()
        if (savedSession) {
          const mergedFormData = { ...defaultSessionState.formData, ...(savedSession.formData || {}) }
          setFormData(mergedFormData)
          setIsZipVerified(savedSession.isZipVerifiedState || false)
        }
        setIsLoaded(true)
      } catch (err) {
        console.error("Failed to load session data:", err)
        setError("Failed to load session data")
        setIsLoaded(true)
      }
    }

    loadSessionData()
  }, [])

  // Save session data when form data changes
  useEffect(() => {
    if (!isLoaded) return

    const saveSessionDataAsync = async () => {
      try {
        const sessionStateToSave = {
          formData,
          isZipVerifiedState: isZipVerified,
        }
        saveSessionData(sessionStateToSave)
      } catch (err) {
        console.error("Failed to save session data:", err)
      }
    }

    saveSessionDataAsync()
  }, [formData, isZipVerified, isLoaded])

  const handleFormChange = useCallback(
    (field: string, value: any) => {
      try {
        setFormData((prev) => ({ ...prev, [field]: value }))
      } catch (err) {
        handleError(err instanceof Error ? err : new Error("Form change error"))
      }
    },
    [handleError],
  )

  const handleZipCodeSuccess = useCallback(
    (zipCode: string) => {
      try {
        setFormData((prev) => ({ ...prev, zipCode }))
        setIsZipVerified(true)
        // Auto-redirect to survey after a brief moment to show success state
        setTimeout(() => {
          router.push("/survey")
        }, 1500)
      } catch (err) {
        handleError(new Error("Navigation failed after zip code verification"))
      }
    },
    [router, handleError],
  )

  const handleGetStarted = useCallback(() => {
    try {
      router.push("/survey")
    } catch (err) {
      handleError(new Error("Navigation to survey failed"))
    }
  }, [router, handleError])

  if (!isLoaded) {
    return <LoadingComponent />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-xl text-red-600 font-semibold">Something went wrong</p>
          <p className="text-slate-600 mt-2">Please refresh the page to try again</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-normal bg-transparent">
      <SectionErrorBoundary name="Hero">
        <Hero
          onGetStarted={handleGetStarted}
          zipVerified={isZipVerified}
          zipCodeCheckerSlot={<ZipCodeChecker onSuccess={handleZipCodeSuccess} />}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="ProjectGallery">
        <ProjectGallery />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="Survey">
        <section id="assessment" className="bg-slate-50 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-balance">
                Start your free assessment
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-pretty mb-6">
                Answer a few quick questions about your property and the work you have in mind. It takes about two
                minutes, with no cost or obligation to get matched with a licensed specialist.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  About 2 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Your information stays private
                </span>
                <span className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  Matched with a local specialist
                </span>
              </div>
            </div>
            <Survey
              formData={formData}
              onFormChange={handleFormChange}
              onNextStep={() => {
                try {
                  router.push("/project-questions")
                } catch (err) {
                  handleError(new Error("Navigation to project questions failed"))
                }
              }}
              onPrevStep={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            />
          </div>
        </section>
      </SectionErrorBoundary>

      {/* Personal Video Popup */}
      <PersonalVideoPopup />
    </div>
  )
}
