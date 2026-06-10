"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
  threshold?: number
  rootMargin?: string
  className?: string
  containerClassName?: string
  loadingClassName?: string
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  lowQualitySrc,
  threshold = 0.1,
  rootMargin = "200px 0px",
  className,
  containerClassName,
  loadingClassName,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Set up intersection observer to detect when image is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imageRef}
      className={cn("relative overflow-hidden", containerClassName)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {/* Low quality placeholder */}
      {lowQualitySrc && !isLoaded && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={cn("object-cover transition-opacity duration-300", loadingClassName)}
          style={{ filter: "blur(10px)" }}
        />
      )}

      {/* Main image - only load when in viewport */}
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={props.fill !== undefined ? props.fill : true}
          width={!props.fill ? width : undefined}
          height={!props.fill ? height : undefined}
          className={cn(
            "object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className,
          )}
          onLoad={handleImageLoad}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}
