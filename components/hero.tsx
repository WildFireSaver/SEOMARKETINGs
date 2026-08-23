"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, ArrowRight, MapPin, Lock, Trees, Hammer } from "lucide-react"
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
      className="relative bg-slate-50 overflow-hidden flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 lg:py-16"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy + CTA */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-6">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-slate-700">Licensed &amp; insured. Serving all of California.</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] text-balance mb-6">
              Your dream backyard, built by licensed California crews
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed text-pretty mb-6">
              From the coast to the valley, we design and build the outdoor spaces California homeowners love: paver
              patios and driveways, retaining walls, outdoor kitchens and fire pits, pools and water features,
              artificial turf, planting, and landscape lighting. Tell us what you have in mind and we&apos;ll match you
              with vetted local landscaping and hardscaping crews, then send you a clear, itemized quote before any work
              begins.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 mb-8">
              <Trees className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Water-wise designs that save you money.</span>{" "}
                Drought-tolerant planting and turf conversions may qualify for local rebates. We&apos;ll help you find
                out for free.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Hammer className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Custom hardscaping, built to last</p>
                  <p className="text-sm text-slate-600">Pavers, stone walls, walkways, and outdoor living areas.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Permit-ready and code-compliant</p>
                  <p className="text-sm text-slate-600">Handled end to end by licensed local crews.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                onClick={handleGetStartedClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 font-semibold"
              >
                Get My Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Free, no obligation. A few spots open each week.</span>
              </div>
            </div>
          </div>

          {/* Right: ZIP checker card over hero image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/projects/landscape-hero.png"
                alt="Completed backyard hardscape with paver patio, outdoor kitchen, and fire pit by a Consult and Build CA crew"
                className="w-full h-72 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
            </div>

            <div className="relative -mt-20 mx-4 lg:mx-6 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              {!zipVerified ? (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">See what&apos;s available near you</h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Enter your ZIP code and we&apos;ll show you the services we offer in your area.
                    </p>
                  </div>
                  {zipCodeCheckerSlot}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="h-3.5 w-3.5 text-green-600" />
                    <span>Your information stays private. We never share or sell it.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h2 className="text-lg font-bold text-green-700">Good news, we&apos;re in your area</h2>
                  </div>
                  <p className="text-slate-600 text-sm">
                    We have crews working right near you. Let&apos;s talk about your project.
                  </p>
                  <Button
                    onClick={handleGetStartedClick}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Get My Free Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-5xl mx-auto mt-20 lg:mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">How it works</h2>
            <p className="text-slate-600">Four simple steps from first call to finished project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", text: "Tell us about the outdoor project you have in mind." },
              { step: "2", text: "We connect you with trusted, licensed local landscaping crews near you." },
              { step: "3", text: "You receive a free, no-pressure estimate to review." },
              { step: "4", text: "Approve the quote and your crew schedules the build." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-primary font-bold mb-4">
                  {item.step}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
