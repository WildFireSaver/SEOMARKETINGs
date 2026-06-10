"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoShowcaseProps {
  className?: string
  autoPlay?: boolean
  showControls?: boolean
  enableAudio?: boolean // New prop to control audio
}

export function VideoShowcase({
  className,
  autoPlay = true,
  showControls = true,
  enableAudio = true, // Default to true now
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(!enableAudio) // Start unmuted if audio is enabled
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          if (autoPlay && videoRef.current) {
            // Try to play with audio first, fallback to muted if needed
            const playPromise = videoRef.current.play()
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay with audio failed, try muted
                if (videoRef.current) {
                  videoRef.current.muted = true
                  setIsMuted(true)
                  videoRef.current.play().catch(() => {
                    setIsPlaying(false)
                  })
                }
              })
            }
          }
        } else {
          setIsVisible(false)
          if (videoRef.current) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        }
      },
      { threshold: 0.3 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [autoPlay])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={cn("relative group rounded-lg overflow-hidden shadow-lg", className)}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create_a_1520_202506171118-TEvZRlrYlLIfU9T7ZZxh6k6NwA5Y7O.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with controls */}
      {showControls && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={togglePlay}
              className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleMute}
              className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* Play indicator when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="secondary"
            size="icon"
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white text-gray-800 shadow-lg h-12 w-12"
          >
            <Play className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Audio indicator */}
      {enableAudio && !isMuted && isPlaying && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Volume2 className="h-3 w-3" />
          AUDIO ON
        </div>
      )}
    </div>
  )
}
