"use client"

import { useState, useEffect, useRef } from "react"

export function InteractiveStats() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)
  const [counts, setCounts] = useState({
    projects: 0,
    specialists: 0,
    satisfaction: 0,
    savings: 0,
  })

  const targetCounts = {
    projects: 1250,
    specialists: 75,
    satisfaction: 98,
    savings: 15000,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setCounts({
        projects: Math.floor(targetCounts.projects * Math.min(progress, 1)),
        specialists: Math.floor(targetCounts.specialists * Math.min(progress, 1)),
        satisfaction: Math.floor(targetCounts.satisfaction * Math.min(progress, 1)),
        savings: Math.floor(targetCounts.savings * Math.min(progress, 1)),
      })

      if (frame === totalFrames) {
        clearInterval(timer)
      }
    }, frameDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <div ref={statsRef} className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 my-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact in California</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">{counts.projects.toLocaleString()}+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">{counts.specialists}</div>
            <div className="text-gray-600">Qualified Specialists</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">{counts.satisfaction}%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">${counts.savings.toLocaleString()}</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
        </div>
      </div>
    </div>
  )
}
