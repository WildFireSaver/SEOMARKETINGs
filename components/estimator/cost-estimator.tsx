"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check, Link2, MapPin, ShieldCheck, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { trackCTAClick } from "@/components/analytics-events"
import {
  PROJECTS,
  calculateEstimate,
  currency,
  getProject,
  toEstimateParams,
  type EstimateInput,
  type Scope,
  type Tier,
} from "@/lib/estimator/pricing"

const TIERS: { value: Tier; label: string }[] = [
  { value: "good", label: "Good" },
  { value: "better", label: "Better" },
  { value: "best", label: "Best" },
]

const SCOPES: { value: Scope; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
]

/** Smoothly animates a number toward its target. */
function useCountUp(target: number, duration = 500) {
  const [value, setValue] = useState(target)
  const fromRef = useRef(target)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const next = from + (target - from) * eased
      setValue(next)
      if (t < 1) frame.current = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [target, duration])

  return value
}

type Props = {
  initial: EstimateInput
  /** Compact mode hides the long-form explainer for embedding on the homepage. */
  compact?: boolean
}

export function CostEstimator({ initial, compact = false }: Props) {
  const router = useRouter()
  const [slug, setSlug] = useState(initial.slug)
  const [tier, setTier] = useState<Tier>(initial.tier)
  const [scope, setScope] = useState<Scope>(initial.scope ?? "medium")
  const [size, setSize] = useState<number>(initial.size ?? getProject(initial.slug).size?.default ?? 400)
  const [zip, setZip] = useState(initial.zip ?? "")
  const [copied, setCopied] = useState(false)

  const project = getProject(slug)

  // Reset size to the new project's default when switching between sqft projects.
  const handleProject = (next: string) => {
    setSlug(next)
    const p = getProject(next)
    if (p.size) setSize(p.size.default)
  }

  const input: EstimateInput = useMemo(
    () => ({ slug, tier, scope, size, zip }),
    [slug, tier, scope, size, zip],
  )
  const estimate = useMemo(() => calculateEstimate(input), [input])

  const low = useCountUp(estimate.low)
  const high = useCountUp(estimate.high)

  // Keep the URL in sync so the estimate is shareable, without a server round-trip.
  useEffect(() => {
    if (compact) return
    const qs = toEstimateParams(input)
    window.history.replaceState(null, "", `${window.location.pathname}?${qs}`)
  }, [input, compact])

  const share = async () => {
    const url = `${window.location.origin}/estimate?${toEstimateParams(input)}`
    try {
      if (navigator.share) {
        await navigator.share({ title: "My backyard cost estimate", url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      /* user dismissed */
    }
  }

  const lockIn = () => {
    try {
      const existing = getSessionData() || {}
      saveSessionData({
        ...existing,
        zipCode: estimate.zip || existing.zipCode,
        formData: { ...(existing.formData || {}), projectType: project.surveyValue },
        estimate: {
          project: project.label,
          slug: project.slug,
          tier,
          scope: estimate.scope,
          size: estimate.size,
          low: estimate.low,
          high: estimate.high,
          zip: estimate.zip,
          region: estimate.regionName,
        },
      })
    } catch {
      /* storage unavailable, continue anyway */
    }
    trackCTAClick("estimator_lock_in", project.label)
    router.push("/survey")
  }

  const zipValid = estimate.zip.length === 5

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3 lg:p-8">
        {/* Project */}
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-wider text-primary">1. Your project</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {PROJECTS.map((p) => {
              const active = p.slug === slug
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => handleProject(p.slug)}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                    active
                      ? "border-primary bg-primary/5 text-slate-900 shadow-sm ring-1 ring-primary"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                  )}
                >
                  {p.label}
                  {active && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Size or scope */}
        <fieldset className="mt-8">
          <legend className="text-sm font-semibold uppercase tracking-wider text-primary">
            2. {project.measure === "project" ? "Project scope" : "Approximate size"}
          </legend>

          {project.measure === "project" ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {SCOPES.map((s) => {
                const active = s.value === scope
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setScope(s.value)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all",
                      active
                        ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                    )}
                  >
                    <span className="block text-sm font-semibold text-slate-900">{s.label}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-600">
                      {project.scopes?.[s.value]}
                    </span>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="mt-3">
              <div className="flex items-baseline justify-between">
                <label htmlFor="size" className="text-sm text-slate-600">
                  Drag to set the area
                </label>
                <output htmlFor="size" className="font-display text-2xl font-semibold text-slate-900">
                  {size.toLocaleString()} <span className="text-base font-normal text-slate-500">{project.size!.unitLabel}</span>
                </output>
              </div>
              <input
                id="size"
                type="range"
                min={project.size!.min}
                max={project.size!.max}
                step={project.size!.step}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="estimator-range mt-3 w-full"
                aria-valuetext={`${size} ${project.size!.unitLabel}`}
              />
              <div className="mt-1 flex justify-between text-xs text-slate-500">
                <span>{project.size!.min.toLocaleString()}</span>
                <span>{project.size!.max.toLocaleString()}+</span>
              </div>
            </div>
          )}
        </fieldset>

        {/* Finish tier */}
        <fieldset className="mt-8">
          <legend className="text-sm font-semibold uppercase tracking-wider text-primary">3. Finish level</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {TIERS.map((t) => {
              const active = t.value === tier
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTier(t.value)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-xl border p-4 text-left transition-all",
                    active
                      ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                  )}
                >
                  <span className="block text-sm font-semibold text-slate-900">{t.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-600">{project.tiers[t.value]}</span>
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* ZIP */}
        <fieldset className="mt-8">
          <legend className="text-sm font-semibold uppercase tracking-wider text-primary">
            4. Your ZIP <span className="font-normal normal-case tracking-normal text-slate-500">(adjusts for local labor rates)</span>
          </legend>
          <div className="relative mt-3 max-w-xs">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              id="estimate-zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="e.g. 92618"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              aria-label="ZIP code"
              className="h-12 pl-10 text-lg tracking-wider"
            />
          </div>
          {zipValid && !estimate.inCalifornia && (
            <p className="mt-2 flex items-start gap-2 text-sm text-amber-700">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              We currently match crews in California only. The estimate below uses a statewide average.
            </p>
          )}
        </fieldset>
      </div>

      {/* Result */}
      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-28 rounded-2xl bg-slate-900 p-6 text-white shadow-xl lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">Your estimate</p>
          <p className="mt-1 text-sm text-slate-300">{project.label}</p>

          <div className="mt-5">
            <p className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl" aria-live="polite">
              {currency.format(low)}
              <span className="text-slate-400"> – </span>
              {currency.format(high)}
            </p>
            {estimate.unitLow !== undefined && (
              <p className="mt-3 text-sm text-slate-300">
                About {currency.format(estimate.unitLow)}–{currency.format(estimate.unitHigh!)} per{" "}
                {project.measure === "wallface" ? "sq ft of wall" : "sq ft"} installed
              </p>
            )}
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-white/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Finish</dt>
              <dd className="mt-1 font-medium capitalize">{tier}</dd>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Region</dt>
              <dd className="mt-1 font-medium">{estimate.regionName}</dd>
            </div>
          </dl>

          <Button
            onClick={lockIn}
            size="lg"
            className="mt-6 h-13 w-full bg-primary py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Lock in an exact quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Free, no obligation. Licensed and insured crews only.
          </p>

          {!compact && (
            <button
              type="button"
              onClick={share}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5"
            >
              <Link2 className="h-4 w-4" />
              {copied ? "Link copied" : "Share this estimate"}
            </button>
          )}

          <p className="mt-5 text-xs leading-relaxed text-slate-400">
            Planning range based on 2026 California market rates. Site conditions, access, permits, and demolition can
            move the final number. Your matched crew provides an itemized, fixed quote.
          </p>
        </div>
      </div>
    </div>
  )
}
