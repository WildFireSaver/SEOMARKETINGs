"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LazySection } from "./lazy-section"

export function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(true)

  const toggleBeforeAfter = () => {
    setShowAfter((prev) => !prev)
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container px-4">
        <LazySection animationDirection="up" delay={100}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Family Home Transformations</h2>
            <p className="text-muted-foreground">See the amazing changes we've helped create</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-blue-100 overflow-hidden shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={showAfter ? "/projects/kitchen-after.png" : "/projects/kitchen-before.png"}
                      alt={showAfter ? "Kitchen After" : "Kitchen Before"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {showAfter ? "AFTER" : "BEFORE"}
                  </div>
                  <Button
                    onClick={toggleBeforeAfter}
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-blue-600 border border-blue-200"
                  >
                    Show {showAfter ? "Before" : "After"}
                  </Button>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">The Rodriguez Family Kitchen</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    "Our kitchen is now the heart of our home where we gather as a family. The specialist understood
                    exactly what we needed!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
