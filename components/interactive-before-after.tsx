"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function InteractiveBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newPosition = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const newPosition = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-center mb-6">See the Transformation</h3>
      <div
        ref={containerRef}
        className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/projects/kitchen-before.png"
            alt="Kitchen Before Renovation"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* After Image (clipped) */}
        <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image src="/projects/kitchen-after.png" alt="Kitchen After Renovation" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Slider */}
        <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <div className="flex flex-col">
              <span className="block w-1 h-4 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">Before</div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">After</div>
      </div>
      <p className="text-center text-gray-600 mt-4">Drag the slider to compare before and after</p>
    </div>
  )
}
