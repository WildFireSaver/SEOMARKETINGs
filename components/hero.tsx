"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MapPin, Lock, ShieldCheck, Star, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

interface HeroProps {
  onGetStarted?: () => void
  zipVerified?: boolean
  zipCodeCheckerSlot?: React.ReactNode
}

export function Hero({ onGetStarted, zipVerified = false, zipCodeCheckerSlot }: HeroProps) {
  const router = useRouter()

  const handleGetStartedClick = () => {
    if (onGetStarted) {
      onGetStarted()
    } else {
      router.push("/survey")
    }
  }

  return (
    <>
      {/* Full-bleed cinematic hero */}
      <section
        id="check-eligibility"
        className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden"
      >
        {/* Background photo with slow zoom */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-backyard.png"
            alt="Luxury Southern California backyard at golden hour with a paver patio, outdoor kitchen, and fire pit built by a Consult and Build CA crew"
            fetchPriority="high"
            className="hero-zoom h-full w-full object-cover"
          />
          {/* Legibility overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: copy + CTA */}
            <div className="max-w-xl lg:col-span-7">
              <div
                className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
                style={{ animationDelay: "0.05s" }}
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-medium text-white">Licensed &amp; insured · Serving all of California</span>
              </div>

              <h1
                className="hero-rise font-display mt-6 text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "0.15s" }}
              >
                Your dream backyard,
                <br />
                <span className="text-gold italic">designed &amp; built</span> across California
              </h1>

              <p
                className="hero-rise mt-6 max-w-lg text-pretty text-lg leading-relaxed text-slate-200"
                style={{ animationDelay: "0.28s" }}
              >
                Paver patios, retaining walls, outdoor kitchens, fire pits, pools, turf, and full landscape design. Tell
                us what you have in mind and we&apos;ll match you with vetted local crews, then send a clear, itemized
                quote before any work begins.
              </p>

              {/* Trust chips */}
              <ul
                className="hero-rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-200"
                style={{ animationDelay: "0.4s" }}
              >
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  Licensed &amp; insured
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" />
                  Pre-screened local crews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gold" />
                  Free, no-obligation quotes
                </li>
              </ul>

              <div
                className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "0.52s" }}
              >
                <Button
                  onClick={handleGetStartedClick}
                  size="lg"
                  className="group bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
                >
                  Get My Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <span className="text-sm text-slate-300">A few spots open each week.</span>
              </div>
            </div>

            {/* Right: ZIP glass card */}
            <div className="hero-rise lg:col-span-5" style={{ animationDelay: "0.35s" }}>
              <div className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
                {!zipVerified ? (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">See what&apos;s available near you</h2>
                      <p className="mt-1 text-sm text-slate-600">
                        Enter your ZIP code and we&apos;ll show you the services we offer in your area.
                      </p>
                    </div>
                    {zipCodeCheckerSlot}
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Lock className="h-3.5 w-3.5 text-primary" />
                      <span>Your information stays private. We never share or sell it.</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <h2 className="text-lg font-bold text-primary">Good news, we&apos;re in your area</h2>
                    </div>
                    <p className="text-sm text-slate-600">
                      We have crews working right near you. Let&apos;s talk about your project.
                    </p>
                    <Button
                      onClick={handleGetStartedClick}
                      className="w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      Get My Free Estimate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#how-it-works"
          aria-label="Scroll to see how it works"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white lg:block"
        >
          <ChevronDown className="hero-bob h-7 w-7" />
        </a>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Simple by design</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-slate-900 lg:text-4xl">How it works</h2>
              <p className="mt-3 text-lg text-slate-600">Four steps from first conversation to finished backyard.</p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Tell us your vision", text: "Share the outdoor project you have in mind in about two minutes." },
                { title: "Get matched", text: "We connect you with licensed, insured local crews we have already vetted." },
                { title: "Review your quote", text: "Receive a free, itemized, no-pressure estimate to look over on your schedule." },
                { title: "Watch it come to life", text: "Approve the quote and your crew schedules the build." },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="font-display mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-gold">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
