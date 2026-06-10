"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animationDirection?: "up" | "down" | "left" | "right" | "fade" | "none"
  delay?: number
  placeholder?: ReactNode
  minHeight?: string | number
}

export function LazySection({
  children,
  className,
  threshold = 0.1,
  rootMargin = "100px 0px",
  animationDirection = "up",
  delay = 0,
  placeholder,
  minHeight = "100px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay before showing content to prevent jank during scrolling
          setTimeout(() => {
            setIsVisible(true)
            // Mark as animated after the animation duration (500ms)
            setTimeout(() => {
              setHasAnimated(true)
            }, 500)
          }, delay)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, delay])

  // Define animation styles based on direction
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animationDirection) {
        case "up":
          return "opacity-0 translate-y-8"
        case "down":
          return "opacity-0 -translate-y-8"
        case "left":
          return "opacity-0 translate-x-8"
        case "right":
          return "opacity-0 -translate-x-8"
        case "fade":
          return "opacity-0"
        case "none":
          return ""
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-x-0 translate-y-0"
  }

  return (
    <div ref={sectionRef} className={cn(className)} style={{ minHeight: !isVisible ? minHeight : undefined }}>
      {isVisible ? (
        <div
          className={cn(
            "transition-all duration-500 ease-out",
            getAnimationStyles(),
            // Once animation is complete, remove the transition to avoid performance issues
            hasAnimated ? "transition-none" : "",
          )}
        >
          {children}
        </div>
      ) : (
        placeholder || <div style={{ minHeight }} />
      )}
    </div>
  )
}
