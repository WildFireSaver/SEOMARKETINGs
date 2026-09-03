"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { calculateEstimate, currency, type EstimateInput } from "@/lib/estimator/pricing"

// Real examples computed by the same engine, so the teaser never lies.
const EXAMPLES: { label: string; input: EstimateInput }[] = [
  { label: "400 sq ft paver patio in Irvine", input: { slug: "paver-patios", size: 400, tier: "better", zip: "92618" } },
  { label: "800 sq ft turf lawn in San Diego", input: { slug: "artificial-turf", size: 800, tier: "better", zip: "92101" } },
  { label: "Outdoor kitchen with fire pit in Pasadena", input: { slug: "outdoor-kitchens", scope: "medium", tier: "better", zip: "91101" } },
  { label: "120 sq ft retaining wall in Riverside", input: { slug: "retaining-walls", size: 120, tier: "good", zip: "92501" } },
  { label: "Landscape lighting in Long Beach", input: { slug: "landscape-lighting", scope: "medium", tier: "better", zip: "90802" } },
]

export function EstimatorTeaser() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % EXAMPLES.length)
        setVisible(true)
      }, 300)
    }, 3400)
    return () => clearInterval(id)
  }, [])

  const example = EXAMPLES[index]
  const est = calculateEstimate(example.input)

  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24" aria-labelledby="estimator-teaser-heading">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
              <Calculator className="h-4 w-4" />
              Free instant calculator
            </p>
            <h2
              id="estimator-teaser-heading"
              className="font-display mt-3 text-3xl font-semibold text-balance lg:text-5xl"
            >
              Know what it costs before anyone calls you.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
              Our cost calculator uses real 2026 California contractor pricing, adjusted for your ZIP code. Drag a
              slider, pick a finish, and get a range in seconds. No email, no phone number, no pressure.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-7 h-13 bg-white px-7 py-4 text-base font-semibold text-slate-900 hover:bg-white/90"
            >
              <Link href="/estimate">
                Try the cost calculator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Live rotating example */}
          <div className="rounded-3xl bg-slate-900 p-8 shadow-2xl ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Example estimate</p>
            <div
              className="mt-4 transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
              aria-live="polite"
            >
              <p className="text-lg font-medium text-slate-200">{example.label}</p>
              <p className="font-display mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {currency.format(est.low)}
                <span className="text-slate-500"> – </span>
                {currency.format(est.high)}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {est.tier === "good" ? "Good" : est.tier === "better" ? "Better" : "Best"} finish, {est.regionName}{" "}
                pricing
              </p>
            </div>
            <div className="mt-6 flex gap-1.5" aria-hidden="true">
              {EXAMPLES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${i === index ? "bg-gold" : "bg-white/15"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
