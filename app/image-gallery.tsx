"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ImageGalleryProps {
  orientation?: 'horizontal' | 'vertical'
}

export default function ImageGallery({ orientation = 'vertical' }: ImageGalleryProps) {
  // Images array to be duplicated for infinite scroll
  const images = [
    { src: "/photo1.jpg?height=400&width=600", alt: "Event photo" },
    { src: "/photo2.jpg?height=400&width=600", alt: "Presentation photo" },
    { src: "/photo3.jpg?height=400&width=600", alt: "Conference photo" },
    { src: "/photo4.jpg?height=400&width=600", alt: "Additional photo" },
    { src: "/photo5.jpg?height=400&width=600", alt: "Summit photo" },
  ]

  // Duplicate the images array to create the illusion of infinite scrolling
  const allImages = [...images, ...images, ...images]

  // Generate random tilts for each image (between -3 and 3 degrees)
  const imageTilts = allImages.map(() => (Math.random() * 6 - 3).toFixed(2))

  // Ref for the container to control scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // State to track if user is manually scrolling
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const userScrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Set initial scroll position to start in the middle of the duplicated images
    container.scrollTop = container.scrollHeight / 3

    // Animation function for continuous scrolling
    let animationFrameId: number
    let lastTime = 0
    const scrollSpeed = 0.2 // pixels per millisecond - reduced for slower scrolling

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime
      lastTime = timestamp

      // Only auto-scroll if user isn't manually scrolling
      if (!isUserScrolling && container) {
        container.scrollTop += scrollSpeed * deltaTime

        // If we've scrolled past the second set of images, reset to the first set
        if (container.scrollTop >= (container.scrollHeight * 2) / 3) {
          container.scrollTop = container.scrollHeight / 3 - images.length * 100
        }

        // If we've scrolled above the first set, reset to the second set
        if (container.scrollTop <= container.scrollHeight / 3 - images.length * 100) {
          container.scrollTop = (container.scrollHeight * 2) / 3 - 100
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start the animation
    animationFrameId = requestAnimationFrame(animate)

    // Handle user scroll events
    const handleScroll = () => {
      setIsUserScrolling(true)

      // Clear any existing timeout
      if (userScrollTimeout.current) {
        clearTimeout(userScrollTimeout.current)
      }

      // Set a timeout to resume auto-scrolling after user stops scrolling
      userScrollTimeout.current = setTimeout(() => {
        setIsUserScrolling(false)
      }, 2000)
    }

    container.addEventListener("touchstart", () => setIsUserScrolling(true), { passive: true })
    container.addEventListener(
      "touchend",
      () => {
        if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
        userScrollTimeout.current = setTimeout(() => setIsUserScrolling(false), 2000)
      },
      { passive: true },
    )
    container.addEventListener("mousedown", () => setIsUserScrolling(true))
    container.addEventListener("mouseup", () => {
      if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
      userScrollTimeout.current = setTimeout(() => setIsUserScrolling(false), 2000)
    })
    container.addEventListener("wheel", handleScroll, { passive: true })

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current)
      container.removeEventListener("touchstart", () => setIsUserScrolling(true))
      container.removeEventListener("touchend", () => setIsUserScrolling(false))
      container.removeEventListener("mousedown", () => setIsUserScrolling(true))
      container.removeEventListener("mouseup", () => setIsUserScrolling(false))
      container.removeEventListener("wheel", handleScroll)
    }
  }, [isUserScrolling, images.length])

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

