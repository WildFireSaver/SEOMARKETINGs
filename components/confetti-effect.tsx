"use client"

import { useEffect } from "react"

interface ConfettiEffectProps {
  duration?: number
}

export function ConfettiEffect({ duration = 1500 }: ConfettiEffectProps) {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    let myCanvas: HTMLCanvasElement | null = null

    const runConfetti = async () => {
      try {
        // Dynamically import the confetti library
        const confettiModule = await import("canvas-confetti").catch(() => null)

        if (!confettiModule) {
          console.warn("Canvas confetti module could not be loaded")
          return
        }

        const confetti = confettiModule.default

        // Create a canvas for the confetti
        myCanvas = document.createElement("canvas")
        myCanvas.style.position = "fixed"
        myCanvas.style.inset = "0"
        myCanvas.style.width = "100%"
        myCanvas.style.height = "100%"
        myCanvas.style.zIndex = "999"
        myCanvas.style.pointerEvents = "none"
        document.body.appendChild(myCanvas)

        // Create the confetti instance
        const myConfetti = confetti.create(myCanvas, {
          resize: true,
          useWorker: true,
        })

        // Fire the confetti - optimized for mobile
        const isMobile = window.innerWidth < 768

        myConfetti({
          particleCount: isMobile ? 50 : 100,
          spread: isMobile ? 50 : 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true, // Respect user preferences
          colors: ["#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#fffbeb"],
        })
      } catch (error) {
        console.error("Error running confetti:", error)
      }
    }

    runConfetti()

    // Clean up after duration
    const timer = setTimeout(() => {
      if (myCanvas && document.body.contains(myCanvas)) {
        document.body.removeChild(myCanvas)
      }
    }, duration)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      if (myCanvas && document.body.contains(myCanvas)) {
        document.body.removeChild(myCanvas)
      }
    }
  }, [duration])

  return null
}
