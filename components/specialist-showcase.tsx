"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { LazySection } from "./lazy-section"
import { Heart, Coffee, Home } from "lucide-react"

export function SpecialistShowcase() {
  return (
    <section className="py-10 bg-white">
      <div className="container px-4">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Meet Our Home Specialists</h2>
            <p className="text-muted-foreground">Friendly experts who feel like family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100 overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src="/specialists/james-w.png"
                    alt="James Wilson"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">James</h3>
                  <p className="text-blue-600 text-sm mb-2">Kitchen & Bath Expert</p>
                  <p className="text-sm text-gray-600 mb-3">
                    "I love helping families create spaces where they can make memories together."
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Heart className="h-3 w-3" /> Family-focused
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src="/specialists/maria-r.png"
                    alt="Maria Rodriguez"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Maria</h3>
                  <p className="text-blue-600 text-sm mb-2">Home Addition Specialist</p>
                  <p className="text-sm text-gray-600 mb-3">
                    "I treat every home as if it were my own, with care and attention to detail."
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Coffee className="h-3 w-3" /> Warm & friendly
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src="/specialists/robert-j.png"
                    alt="Robert Johnson"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Robert</h3>
                  <p className="text-blue-600 text-sm mb-2">Roofing & Exterior Pro</p>
                  <p className="text-sm text-gray-600 mb-3">
                    "Your home protects your family. I make sure it's safe and beautiful."
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Home className="h-3 w-3" /> Protective approach
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
