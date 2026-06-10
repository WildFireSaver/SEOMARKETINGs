"use client"

import { Suspense, lazy, useEffect } from "react"
import { trackPageView } from "@/components/analytics-events"

const Confirmation = lazy(() => import("@/components/confirmation"))

function LoadingComponent() {
  return (
    <div className="flex flex-col justify-center items-center py-20 min-h-[400px] text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
      <p className="mt-6 text-xl text-gray-700 font-semibold">Loading...</p>
    </div>
  )
}

export default function ConfirmationPage() {
  useEffect(() => {
    // Track successful form completion
    trackPageView("confirmation", 4)
  }, [])

  return (
    <section
      aria-labelledby="confirmation-heading"
      className="container max-w-3xl mx-auto px-3 py-6 sm:px-4 sm:py-10 animate-fade-in"
    >
      <h2 id="confirmation-heading" className="sr-only">
        Application Confirmation
      </h2>
      <Suspense fallback={<LoadingComponent />}>
        <Confirmation />
      </Suspense>
    </section>
  )
}
