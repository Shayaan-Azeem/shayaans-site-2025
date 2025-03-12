"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement> }) {
  const [showIndicator, setShowIndicator] = useState(true)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      // Hide indicator after user has scrolled a bit
      if (scrollTop > 100) {
        setShowIndicator(false)
      } else {
        setShowIndicator(true)
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [scrollContainerRef])

  return (
    <div
      className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white transition-opacity duration-500 ${
        showIndicator ? "opacity-70" : "opacity-0"
      }`}
    >
      <ChevronDown className="animate-bounce w-6 h-6" />
    </div>
  )
}

