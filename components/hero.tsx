"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, ArrowRight, MapPin, Lock, Star, Hammer } from "lucide-react"
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
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-orange-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <section
      id="check-eligibility"
      className="relative bg-orange-50 overflow-hidden flex flex-col justify-center min-h-[calc(100vh-80px)] pt-3 pb-3 lg:pt-4 lg:pb-4"
    >
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply">
        {/* Base Layer - Full Coverage */}
        <img
          src="/modern-home-renovation.png"
          alt="Background texture of a modern home renovation"
          className="absolute inset-0 w-full h-full object-cover opacity-40" // Covers everything, lower opacity
        />
        <img
          src="/kitchen-remodeling-tools-blueprints.png"
          alt="Background texture of kitchen blueprints"
          className="absolute inset-0 w-full h-full object-cover opacity-30 transform scale-110" // Slightly scaled to ensure edge coverage, lower opacity
        />

        {/* Mid-ground, larger elements for texture */}
        <img
          src="/backyard-adu-construction.png"
          alt="Detail of ADU construction"
          className="absolute top-0 left-0 w-3/4 h-3/4 object-cover opacity-60"
        />
        <img
          src="/projects/roof-replacement-hero.png"
          alt="Detail of roof replacement"
          className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover opacity-60"
        />

        {/* Smaller, more focused elements for visual interest, carefully placed */}
        <img
          src="/placeholder-n9k9i.png" // Modern roof detail
          alt="Detail of a modern roof"
          className="absolute top-1/4 right-1/4 w-1/2 h-1/2 object-contain opacity-50" // Using object-contain to see more
        />
        <img
          src="/bathroom-renovation.png"
          alt="Detail of bathroom renovation"
          className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 object-contain opacity-50" // Using object-contain
        />

        {/* Subtle corner/edge accents if needed, ensuring they blend */}
        <img
          src="/projects/modern-kitchen-hero.png"
          alt="Accent image of a modern kitchen"
          className="absolute bottom-5 left-5 w-1/3 h-1/3 object-cover opacity-40"
        />
        <img
          src="/projects/luxury-bathroom-hero.png"
          alt="Accent image of a luxury bathroom"
          className="absolute top-5 right-5 w-1/3 h-1/3 object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* ... rest of the hero content remains the same ... */}
        <div className="max-w-4xl mx-auto text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <Hammer className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-slate-900">Consult & Build CA</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 leading-tight">
            🏠 Transform Your Backyard or Roof — Without Paying Upfront!
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-orange-600 mb-3">
            Sacramento & Valley homeowners: we specialize in complete outdoor remodels — pools, landscaping, roofing,
            patios, and more — with no upfront cost to get started.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            💰 In-house options tailored to your needs
            <br />🌿 Energy-efficient upgrades may qualify for rebates
            <br />
            ⏱️ Fast project turnaround — limited spots weekly
            <br />📍 Local crews, local service — done right the first time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6 items-start max-w-6xl mx-auto">
          <div className="bg-yellow-50/95 backdrop-blur-sm rounded-xl border border-yellow-200 p-4 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Why It's Safe
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Licensed & insured Sacramento Valley contractors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>No upfront payments — we work with your budget</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Local crews who understand California building codes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl p-4 lg:p-6 border-2 border-primary h-full">
            {!zipVerified ? (
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
                  🔍 Check Your Area:
                </h3>
                <div className="flex items-center gap-2 justify-center text-base">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-slate-700 font-medium">Enter your ZIP code to see available services:</span>
                </div>
                {zipCodeCheckerSlot}
                <div className="flex items-center justify-center gap-1 text-sm text-slate-600 pt-1">
                  <Lock className="h-3.5 w-3.5 text-green-600" />
                  <span className="font-medium">We never share or sell your info. Period.</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-7 w-7 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700">✅ We Serve Your Area!</h3>
                </div>
                <p className="text-slate-700 text-base">
                  Perfect! We have crews in your neighborhood. Let's discuss your project.
                </p>
                <Button
                  onClick={handleGetStartedClick}
                  size="default"
                  className="w-full bg-primary hover:bg-orange-600 text-primary-foreground px-6 py-2.5 text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 p-4 h-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center flex items-center justify-center gap-2">
              🎯 Here’s How It Works
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">1.</span>
                <span>Tell us about your backyard or roof project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">2.</span>
                <span>Get matched with local outdoor specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">3.</span>
                <span>Receive your free, no-obligation estimate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">4.</span>
                <span>Start your transformation — no money down</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl text-slate-900 p-4 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-1 text-white">🌟 Ready to Transform Your Outdoor Space?</h3>
          <p className="text-base mb-2 text-white/90">
            Get your free estimate and start planning your dream backyard or roof upgrade.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-yellow-300" />
              Limited spots weekly
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-yellow-300" />
              Zero pressure
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-yellow-300" />
              Real guidance
            </span>
          </div>
          <Button
            onClick={handleGetStartedClick}
            size="default"
            className="w-full bg-primary hover:bg-orange-600 text-primary-foreground px-6 py-2.5 text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
          >
            👉 Get Free Estimate — Risk-Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
