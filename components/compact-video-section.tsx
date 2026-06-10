"use client"

import { useState, useEffect } from "react"
import { VideoShowcase } from "./video-showcase"
import { LazySection } from "./lazy-section"
import { ArrowRight, Users, Play, Building2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CompactVideoSection() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCTAClick = () => {
    try {
      router.push("/survey")
    } catch (error) {
      console.error("Navigation error:", error)
    }
  }

  if (!mounted) {
    return (
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container px-4 max-w-6xl mx-auto">
        <LazySection animationDirection="up" delay={100}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-sm border mb-4">
              <Building2 className="h-4 w-4" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">See Our Work in Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Watch how our network of licensed contractors delivers quality results for California homeowners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Column */}
            <div className="relative group">
              <VideoShowcase
                className="aspect-video rounded-lg border border-slate-200 shadow-lg"
                autoPlay={true}
                showControls={true}
                enableAudio={false}
              />
              {/* Stats Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-3 shadow-lg border border-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Users className="h-4 w-4 text-blue-600" />
                  1,250+ Projects Completed
                </div>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-16 w-16 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center">
                  <Play className="h-6 w-6 text-slate-700 ml-1" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Quality Work, Licensed Professionals</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our network includes over 500 licensed contractors across California. Each professional is
                  pre-screened, insured, and committed to delivering quality results for your home improvement projects.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-slate-700">Licensed & Insured</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-slate-700">Quality Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-slate-50 rounded-lg p-6 border">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    onClick={handleCTAClick}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 flex-1 sm:flex-none"
                  >
                    Find Contractors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-slate-700">Professional Consultations</p>
                    <p className="text-xs text-slate-600">Up to $100 consultation compensation</p>
                  </div>
                </div>
              </div>

              {/* Simple Quote */}
              <blockquote className="border-l-4 border-blue-200 pl-4 py-2 bg-blue-50 rounded-r-lg">
                <p className="text-sm text-slate-700">
                  "Professional service and quality work. The contractor they matched me with was reliable and completed
                  the project on time."
                </p>
                <cite className="text-xs text-slate-500 mt-1 block">— Sarah C., Los Angeles</cite>
              </blockquote>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
