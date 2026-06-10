"use client"

import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AvailabilityIndicatorProps {
  initialSpots?: number
  totalSpots?: number
  className?: string
}

export function AvailabilityIndicator({ initialSpots = 3, totalSpots = 10, className }: AvailabilityIndicatorProps) {
  const [spotsRemaining, setSpotsRemaining] = useState(initialSpots)
  const [isFlashing, setIsFlashing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Randomly decrease spots over time to create urgency
  useEffect(() => {
    if (!mounted) return

    // Only decrease if more than 1 spot remains
    if (spotsRemaining <= 1) return

    // Random interval between 30-120 seconds
    const randomInterval = Math.floor(Math.random() * (120000 - 30000) + 30000)

    const interval = setInterval(() => {
      // 30% chance to decrease a spot
      if (Math.random() < 0.3) {
        setSpotsRemaining((prev) => {
          const newValue = prev - 1
          if (newValue <= 2) {
            setIsFlashing(true)
            setTimeout(() => setIsFlashing(false), 3000)
          }
          return newValue
        })
      }
    }, randomInterval)

    return () => clearInterval(interval)
  }, [spotsRemaining, mounted])

  if (!mounted) {
    return (
      <div className={cn("space-y-1", className)}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600">Loading availability...</p>
        </div>
      </div>
    )
  }

  // Calculate filled and empty spots
  const filledSpots = spotsRemaining
  const emptySpots = totalSpots - filledSpots

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {spotsRemaining <= 2 && (
            <AlertCircle className={cn("h-3.5 w-3.5 text-red-600", isFlashing && "animate-pulse")} />
          )}
          <p className={cn("text-sm font-medium", spotsRemaining <= 2 ? "text-red-600" : "text-blue-600")}>
            {spotsRemaining === 1 ? "Only 1 consultation remaining" : `${spotsRemaining} consultations available`}
          </p>
        </div>
        <p className="text-xs text-slate-500">{Math.floor(Math.random() * 5) + 2} viewing now</p>
      </div>

      <div className="flex gap-1 h-2">
        {[...Array(filledSpots)].map((_, i) => (
          <div
            key={`filled-${i}`}
            className={cn("h-full flex-1 rounded-full", spotsRemaining <= 2 ? "bg-red-500" : "bg-green-500")}
          />
        ))}
        {[...Array(emptySpots)].map((_, i) => (
          <div key={`empty-${i}`} className="h-full flex-1 rounded-full bg-gray-200" />
        ))}
      </div>
    </div>
  )
}
