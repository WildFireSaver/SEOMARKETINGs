"use client"

import { useEffect, useState } from "react"
import { X, PlayCircle } from "lucide-react"

/**
 * Small, dismissible video popup that appears 5 s after page load.
 * • Uses the existing https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create_a_1520_202506171118-TEvZRlrYlLIfU9T7ZZxh6k6NwA5Y7O.mp4 asset.
 * • Remembers dismissal for the current session so it won’t re-open.
 */
export function PersonalVideoPopup() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // show popup 5 s after mount (only if not dismissed this session)
  useEffect(() => {
    const dismissed = sessionStorage.getItem("popupDismissed")
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 5000)
      return () => clearTimeout(t)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("popupDismissed", "true")
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col rounded-xl border border-slate-200 bg-white shadow-lg transition-all ${
        expanded ? "w-80 sm:w-96" : "w-72"
      }`}
    >
      {/* header */}
      <div className="flex items-start justify-between gap-2 p-3">
        <div className="text-sm font-semibold text-slate-800">Meet Consult&#38;Build&nbsp;™</div>
        <button
          aria-label="Close video message"
          onClick={handleClose}
          className="rounded-md p-1 text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* video */}
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create_a_1520_202506171118-TEvZRlrYlLIfU9T7ZZxh6k6NwA5Y7O.mp4"
        controls
        className={`mx-3 mb-3 rounded-lg ${expanded ? "h-48 sm:h-56" : "h-40"} w-auto`}
      >
        Sorry, your browser doesn’t support embedded videos.
      </video>

      {/* footer / expand-collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center gap-2 rounded-b-xl bg-orange-500 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
      >
        <PlayCircle className="h-4 w-4" />
        {expanded ? "Minimize" : "Watch Full Message"}
      </button>
    </div>
  )
}
