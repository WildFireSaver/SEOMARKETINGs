"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { Grid, Flame, Sprout, Waves, Trees, LayoutGrid, X, ArrowRight, ShieldCheck, Clock } from "lucide-react"
import { getSessionData, saveSessionData } from "@/lib/offline-storage"
import { trackCTAClick } from "./analytics-events"

// Session-storage key so the popup only interrupts a visitor once per visit.
const SEEN_KEY = "cb_lead_popup_seen"

// Values MUST match the `projectType` options in components/survey.tsx so the
// choice pre-fills step 2 of the funnel.
const PROJECT_CHOICES = [
  { value: "patio-driveway", label: "Paver Patio", icon: Grid },
  { value: "outdoor-kitchen", label: "Kitchen & Fire Pit", icon: Flame },
  { value: "turf", label: "Artificial Turf", icon: Sprout },
  { value: "pool-water", label: "Pool & Water", icon: Waves },
  { value: "full-landscape", label: "Full Landscape", icon: Trees },
  { value: "outdoor-living", label: "Pergola & Living", icon: LayoutGrid },
] as const

export function LeadCapturePopup() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  const reveal = useCallback(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return
      sessionStorage.setItem(SEEN_KEY, "1")
      setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  // Trigger 1: after a short dwell. Trigger 2: exit-intent (mouse leaves top).
  useEffect(() => {
    const timer = setTimeout(reveal, 6000)

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) reveal()
    }
    document.addEventListener("mouseout", onMouseOut)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseout", onMouseOut)
    }
  }, [reveal])

  // Lock body scroll + focus the close button + allow Escape to dismiss.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const handleChoose = (value: string, label: string) => {
    try {
      const existing = getSessionData() || {}
      saveSessionData({
        ...existing,
        formData: { ...(existing.formData || {}), projectType: value },
      })
    } catch {
      // Non-fatal — the funnel still works, the user just re-picks in step 2.
    }
    trackCTAClick("lead_popup", label)
    setOpen(false)
    router.push("/survey")
  }

  if (!mounted || !open) return null

  return createPortal(
    <div
      className="backdrop-in fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="popup-in relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-card shadow-2xl sm:rounded-3xl">
        <button
          ref={closeRef}
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-500 transition-colors hover:bg-black/10 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-primary px-6 pb-6 pt-8 text-center text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
            Free &amp; no obligation
          </p>
          <h2 id="lead-popup-title" className="mt-2 font-display text-2xl font-semibold text-balance sm:text-3xl">
            What do you want to build?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-primary-foreground/85 text-pretty">
            Pick a project and get matched with a licensed California crew in about two minutes.
          </p>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-2 gap-3 px-6 py-6 sm:grid-cols-3">
          {PROJECT_CHOICES.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => handleChoose(value, label)}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium leading-tight text-foreground">{label}</span>
            </button>
          ))}
        </div>

        {/* Footer / secondary CTA + trust */}
        <div className="border-t border-border bg-muted/40 px-6 py-4">
          <button
            onClick={() => handleChoose("", "Not sure yet")}
            className="flex w-full items-center justify-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            I&apos;m not sure yet — help me decide
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="mt-3 flex items-center justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Licensed &amp; insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              Takes ~2 minutes
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
