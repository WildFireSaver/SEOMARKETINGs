"use client"

import { useEffect, useState, type ComponentType } from "react"

/**
 * Vercel Speed Insights – loaded ONLY in production.
 *
 * • In dev/preview (NODE_ENV !== 'production') this component renders `null`
 *   and performs *zero* network requests, preventing the “Unexpected token '<'”
 *   error you’ve been seeing.
 * • In a production build (including Vercel Preview/Production deployments)
 *   it lazy-imports `@vercel/speed-insights/next` after mount and renders it.
 */
export function SpeedInsightsClient() {
  const [Widget, setWidget] = useState<ComponentType | null>(null)

  useEffect(() => {
    // Skip in development to avoid loading a non-existent chunk.
    if (process.env.NODE_ENV !== "production") return
    ;(async () => {
      try {
        const mod = await import("@vercel/speed-insights/next")
        setWidget(() => mod.SpeedInsights ?? (mod as any).default ?? (() => null))
      } catch {
        /* silently ignore – safest fallback */
      }
    })()
  }, [])

  return Widget ? <Widget /> : null
}
