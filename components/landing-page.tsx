"use client"

import { useState, useEffect, useCallback } from "react"
import { Hero } from "./hero"
import { ProjectGallery } from "./project-gallery"
import { SurveyPreview } from "./survey-preview"
import { ZipCodeChecker } from "./zip-code-checker"
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

      <SectionErrorBoundary name="SurveyPreview">
        <SurveyPreview />
      </SectionErrorBoundary>

      {/* Personal Video Popup */}
      <PersonalVideoPopup />
    </div>
  )
}
