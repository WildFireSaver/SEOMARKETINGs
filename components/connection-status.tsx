"use client"

import { useState, useEffect } from "react"
import { Wifi, WifiOff } from "lucide-react"
import { cn } from "@/lib/utils"

export function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [showStatus, setShowStatus] = useState(false)

  useEffect(() => {
    // Set initial status
    setIsOnline(navigator.onLine)

    // Add event listeners for online/offline events
    const handleOnline = () => {
      setIsOnline(true)
      setShowStatus(true)
      // Hide the notification after 3 seconds
      setTimeout(() => setShowStatus(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowStatus(true)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!showStatus) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300",
        isOnline ? "bg-green-100 text-green-800 animate-fade-in" : "bg-red-100 text-red-800 animate-pulse-slow",
      )}
    >
      {isOnline ? (
        <>
          <Wifi className="h-4 w-4" />
          <span>You're back online</span>
        </>
      ) : (
        <>
          <WifiOff className="h-4 w-4" />
          <span>You're offline</span>
        </>
      )}
    </div>
  )
}
