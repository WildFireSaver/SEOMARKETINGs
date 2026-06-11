"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, ArrowRight, MapPin, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

interface HeroProps {
  onGetStarted?: () => void
  zipVerified?: boolean
  zipCodeCheckerSlot?: React.ReactNode
}

export function Hero({ onGetStarted, zipVerified = false, zipCodeCheckerSlot }: HeroProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStartedClick = () => {
    if (onGetStarted) {
      onGetStarted()
    } else {
      router.push("/survey")
    }
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section
      id="check-eligibility"
      className="relative bg-white overflow-hidden flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 lg:py-16"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy + CTA */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 mb-5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-slate-700">Serving Sacramento &amp; the Central Valley</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight text-balance mb-5">
              Transform your backyard or roof &mdash; without paying upfront
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed text-pretty mb-8">
              Complete outdoor remodels for California homeowners &mdash; pools, landscaping, roofing, and patios.
              Get matched with licensed local crews and start with no money down.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Flexible in-house options tailored to your budget</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Energy-efficient upgrades that may qualify for rebates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Licensed, insured local crews &mdash; done right the first time</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                onClick={handleGetStartedClick}
                size="lg"
                className="bg-primary hover:bg-orange-600 text-primary-foreground px-7 font-semibold"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Shield className="h-4 w-4 text-green-600" />
                <span>No obligation. Limited spots each week.</span>
              </div>
            </div>
          </div>

          {/* Right: ZIP checker card over hero image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/backyard-adu-construction.png"
                alt="Completed backyard remodel by a Consult &amp; Build CA crew"
                className="w-full h-72 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <div className="relative -mt-20 mx-4 lg:mx-6 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              {!zipVerified ? (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Check your area</h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Enter your ZIP code to see the services available near you.
                    </p>
                  </div>
                  {zipCodeCheckerSlot}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="h-3.5 w-3.5 text-green-600" />
                    <span>We never share or sell your information.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h2 className="text-lg font-bold text-green-700">We serve your area</h2>
                  </div>
                  <p className="text-slate-600 text-sm">
                    We have crews in your neighborhood. Let&apos;s discuss your project.
                  </p>
                  <Button
                    onClick={handleGetStartedClick}
                    className="w-full bg-primary hover:bg-orange-600 text-primary-foreground font-semibold"
                  >
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-5xl mx-auto mt-16 lg:mt-20">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500 mb-8">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", text: "Tell us about your backyard or roof project" },
              { step: "2", text: "Get matched with local outdoor specialists" },
              { step: "3", text: "Receive your free, no-obligation estimate" },
              { step: "4", text: "Start your transformation with no money down" },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-primary font-bold mb-3">
                  {item.step}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
