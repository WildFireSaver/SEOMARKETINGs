"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Hero } from "./hero"
import { ProjectGallery } from "./project-gallery"
import { ZipCodeChecker } from "./zip-code-checker"
import { LeadCapturePopup } from "./lead-capture-popup"
import { ServicesShowcase } from "./home/services-showcase"
import { EstimatorTeaser } from "./home/estimator-teaser"
import { WhyUs } from "./home/why-us"
import { HomeownerReviews } from "./home/homeowner-reviews"
import { FinalCta } from "./home/final-cta"
import { SectionErrorBoundary } from "./error-boundary"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { useErrorHandler } from "@/hooks/use-error-handler"

export function LandingPage() {
  const router = useRouter()
  const { handleError } = useErrorHandler()
  const [isZipVerified, setIsZipVerified] = useState(false)

  // Restore ZIP verification state after hydration. We deliberately do not
  // block rendering on this so the page stays fully server-rendered for SEO.
  useEffect(() => {
    try {
      const saved = getSessionData()
      if (saved?.isZipVerifiedState) setIsZipVerified(true)
    } catch (err) {
      console.error("Failed to load session data:", err)
    }
  }, [])

  const handleZipCodeSuccess = useCallback(
    (zipCode: string) => {
      try {
        const current = getSessionData() || {}
        saveSessionData({
          ...current,
          formData: { ...(current.formData || {}), zipCode },
          isZipVerifiedState: true,
        })
        setIsZipVerified(true)
        // Brief pause so the success state is visible before moving on.
        setTimeout(() => router.push("/survey"), 1200)
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

  return (
    <div className="min-h-screen bg-transparent font-normal">
      <LeadCapturePopup />

      <SectionErrorBoundary name="Hero">
        <Hero
          onGetStarted={handleGetStarted}
          zipVerified={isZipVerified}
          zipCodeCheckerSlot={<ZipCodeChecker onSuccess={handleZipCodeSuccess} />}
        />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="EstimatorTeaser">
        <EstimatorTeaser />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="ServicesShowcase">
        <ServicesShowcase />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="WhyUs">
        <WhyUs />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="ProjectGallery">
        <ProjectGallery />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="HomeownerReviews">
        <HomeownerReviews />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="FinalCta">
        <FinalCta />
      </SectionErrorBoundary>
    </div>
  )
}
