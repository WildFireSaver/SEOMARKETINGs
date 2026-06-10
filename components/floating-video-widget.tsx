"use client"

import { useState, useEffect } from "react"
import { VideoShowcase } from "./video-showcase"
import { X, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingVideoWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [showWidget, setShowWidget] = useState(false) // New state to control widget visibility

  useEffect(() => {
    // Show the floating video after user scrolls down a bit
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  // Don't render anything if dismissed or not shown
  if (isDismissed || !showWidget) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        isExpanded ? "w-80 h-48" : "w-48 h-32",
      )}
    >
      <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-2 flex justify-between items-start">
          <div className="text-white text-xs font-medium">See How We Help CA Homeowners</div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 text-white hover:bg-white/20"
            >
              {isExpanded ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDismissed(true)}
              className="h-6 w-6 text-white hover:bg-white/20"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Video */}
        <VideoShowcase className="w-full h-full" autoPlay={true} showControls={isExpanded} />

        {/* Bottom overlay with CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <div className="text-white text-xs text-center">
            <span className="font-medium">Get Your $100 Cash Offer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export a function to show the widget (can be called from other components)
export function showFloatingVideo() {
  // This would need to be implemented with a global state manager like Zustand or Context
  // For now, we'll handle it differently
}
