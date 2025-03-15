"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ImageGalleryProps {
  orientation?: 'horizontal' | 'vertical'
}

export default function ImageGallery({ orientation = 'vertical' }: ImageGalleryProps) {
  // Keep track of number of complete scrolls
  const [scrollCount, setScrollCount] = useState(0)
  // Track if animation should continue
  const [shouldAnimate, setShouldAnimate] = useState(true)

  const images = [
    { src: "/homephotos/photo1.jpg?height=400&width=600", alt: "Event photo" },
    { src: "/homephotos/photo2.jpg?height=400&width=600", alt: "Presentation photo" },
    { src: "/homephotos/photo3.jpg?height=400&width=600", alt: "Conference photo" },
    { src: "/homephotos/photo4.jpg?height=400&width=600", alt: "Additional photo" },
    { src: "/homephotos/photo5.jpg?height=400&width=600", alt: "Summit photo" },
    { src: "/homephotos/photo6.jpg?height=400&width=600", alt: "Team photo" },
    { src: "/homephotos/photo7.jpg?height=400&width=600", alt: "Project photo" },
  ]

  // Only duplicate images twice now instead of three times
  const allImages = [...images, ...images]

  const imageTilts = allImages.map(() => (Math.random() * 6 - 3).toFixed(2))
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const userScrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Set initial scroll position to start at the beginning
    container.scrollTop = 0

    let animationFrameId: number
    let lastTime = 0
    const scrollSpeed = 0.2

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime
      lastTime = timestamp

      if (!isUserScrolling && container && shouldAnimate) {
        container.scrollTop += scrollSpeed * deltaTime

        // Check if we've completed a full scroll
        if (container.scrollTop >= container.scrollHeight / 2) {
          setScrollCount(prev => {
            const newCount = prev + 1
            // Stop animation after 2 complete scrolls
            if (newCount >= 2) {
              setShouldAnimate(false)
              // Reset to the beginning
              container.scrollTop = 0
            }
            return newCount
          })
        }
      }

      if (shouldAnimate) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    if (shouldAnimate) {
      animationFrameId = requestAnimationFrame(animate)
    }

    // Handle user scroll events
    const handleScroll = () => {
      setIsUserScrolling(true)
      if (userScrollTimeout.current) {
        clearTimeout(userScrollTimeout.current)
      }
      userScrollTimeout.current = setTimeout(() => {
        setIsUserScrolling(false)
      }, 2000)
    }

    container.addEventListener("touchstart", () => setIsUserScrolling(true), { passive: true })
    container.addEventListener("touchend", () => {
      if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
      userScrollTimeout.current = setTimeout(() => setIsUserScrolling(false), 2000)
    }, { passive: true })
    container.addEventListener("mousedown", () => setIsUserScrolling(true))
    container.addEventListener("mouseup", () => {
      if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
      userScrollTimeout.current = setTimeout(() => setIsUserScrolling(false), 2000)
    })
    container.addEventListener("wheel", handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
      container.removeEventListener("touchstart", () => setIsUserScrolling(true))
      container.removeEventListener("touchend", () => setIsUserScrolling(false))
      container.removeEventListener("mousedown", () => setIsUserScrolling(true))
      container.removeEventListener("mouseup", () => setIsUserScrolling(false))
      container.removeEventListener("wheel", handleScroll)
    }
  }, [isUserScrolling, shouldAnimate])

  if (orientation === 'horizontal') {
    return (
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((item) => (
            <div 
              key={item.src} 
              className="flex-shrink-0 w-[85vw] h-[200px] mx-2 snap-center"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[80vh] md:h-[90vh]">
      {/* Gradient overlay at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      {/* Scrolling container */}
      <div ref={scrollContainerRef} className="absolute inset-0 overflow-y-auto scrollbar-hide px-6">
        <div className="space-y-6 pb-6 pt-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="rounded-[2rem] overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-xl mx-auto max-w-[85%]"
              style={{ transform: `rotate(${imageTilts[index]}deg)` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  )
}

