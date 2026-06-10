"use client"

import { Suspense } from "react"
import { LandingPage } from "@/components/landing-page"
import { SectionErrorBoundary } from "@/components/error-boundary"

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-700">Loading...</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <SectionErrorBoundary name="LandingPage">
          <Suspense fallback={<LoadingFallback />}>
            <LandingPage />
          </Suspense>
        </SectionErrorBoundary>
      </main>
    </div>
  )
}
