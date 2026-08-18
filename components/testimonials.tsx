"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react"
import { LazySection } from "./lazy-section"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  title: string
  location: string
  quote: string
  projectType?: string
  projectValue: string
  timeline: string
  rating: number
  consultationFee: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Rodriguez",
    title: "Homeowner",
    location: "San Diego, CA",
    quote:
      "I wanted to turn a plain dirt yard into a real outdoor living space and this service made it easy. The consultation was thorough and professional - they took time to understand how we use the yard and our budget. The crew they matched me with built a stunning paver patio with a built-in fire pit and finished right on schedule. We use it every weekend now.",
    projectType: "Paver Patio & Fire Pit",
    projectValue: "$38,000",
    timeline: "3 weeks",
    rating: 5,
    consultationFee: 75,
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Homeowner",
    location: "Los Angeles, CA",
    quote:
      "Finding the right crew for our full backyard landscape was challenging until we used this service. The consultation was detailed and honest - no pressure, just good advice about drought-tolerant planting, irrigation, and turf that would work for our space and budget. The landscapers they recommended did beautiful work and we're thrilled with how low-maintenance it all is.",
    projectType: "Full Landscape Design",
    projectValue: "$52,000",
    timeline: "6 weeks",
    rating: 5,
    consultationFee: 85,
  },
  {
    id: 3,
    name: "David Thompson",
    title: "Homeowner",
    location: "San Francisco, CA",
    quote:
      "Our sloped backyard was unusable until we needed a retaining wall to level it out. The consultation was comprehensive and they connected me with a licensed hardscaper who engineered the wall, added steps, and terraced the planting beds. The process was smooth and stress-free, and now we have twice the usable yard.",
    projectType: "Retaining Wall & Terracing",
    projectValue: "$31,000",
    timeline: "2 weeks",
    rating: 5,
    consultationFee: 90,
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    title: "Homeowner",
    location: "Sacramento, CA",
    quote:
      "We wanted a pool with a water feature but weren't sure where to start. The consultation process was educational and professional. The crew they connected me with was knowledgeable and walked us through the decking, waterfall, and drought-tolerant surrounds. The finished pool and patio look incredible and the installation was completed efficiently.",
    projectType: "Pool & Water Feature",
    projectValue: "$74,000",
    timeline: "4 weeks",
    rating: 5,
    consultationFee: 80,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setExpandedTestimonial(null)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setExpandedTestimonial(null)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const toggleTestimonial = (id: number) => {
    setExpandedTestimonial((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-slate-600 bg-white px-4 py-2 rounded-full border">
              <MapPin className="h-4 w-4" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Our Customers Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Read reviews from California homeowners who found quality contractors through our professional
              consultation service.
            </p>
          </div>
        </LazySection>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <Card className="border border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative h-16 w-16 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xl font-semibold text-white">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="mb-4">
                            <p className="text-slate-700 leading-relaxed">
                              {expandedTestimonial === testimonial.id
                                ? testimonial.quote
                                : testimonial.quote.substring(0, 200) + "..."}
                            </p>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                <div className="flex">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-slate-600 text-sm">{testimonial.title}</p>
                              <p className="text-slate-500 text-sm">{testimonial.location}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                {testimonial.projectType}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500 font-medium">Project Value</p>
                                <p className="font-semibold text-slate-900">{testimonial.projectValue}</p>
                              </div>
                              <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-xs text-slate-500 font-medium">Timeline</p>
                                <p className="font-semibold text-slate-900">{testimonial.timeline}</p>
                              </div>
                            </div>
                            {testimonial.quote.length > 200 && (
                              <Button
                                variant="link"
                                size="sm"
                                onClick={() => toggleTestimonial(testimonial.id)}
                                className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                              >
                                {expandedTestimonial === testimonial.id ? "Show Less" : "Read More"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 ease-in-out",
                  activeIndex === index ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400",
                )}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setActiveIndex(index)
                  setExpandedTestimonial(null)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {testimonials.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 h-10 w-10 rounded-full bg-white shadow-md hidden md:flex"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 h-10 w-10 rounded-full bg-white shadow-md hidden md:flex"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
