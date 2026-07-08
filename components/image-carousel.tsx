"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Slide = {
  src: string
  alt: string
}

const slides: Slide[] = [
  {
    src: "/moneymate/landing.png",
    alt: "MoneyMate application landing page mockup",
  },
  {
    src: "/moneymate/personalization.png",
    alt: "Mockup of MoneyMate personalization flow",
  },
  {
    src: "/moneymate/registration.png",
    alt: "Mockup of MoneyMate registration and Login screens",
  },
  {
    src: "/moneymate/budget_tracking.png",
    alt: "Mockup of MoneyMate budget tracking feature",
  },
  {
    src: "/moneymate/dashboard.png",
    alt: "Mockup of MoneyMate dashboard",
  },
  {
    src: "/moneymate/expense_tracking.png",
    alt: "Mockup of MoneyMate expense tracking feature",
  },
  {
    src: "/moneymate/financial_goals.png",
    alt: "Mockup of MoneyMate financial goals feature",
  },
    {
    src: "/moneymate/financial_reports.png",
    alt: "Mockup of MoneyMate financial reports feature",
  },
]

export function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next()
    if (e.key === "ArrowLeft") prev()
  }

  // Auto-advance every 6 seconds; pause is implicit on unmount
  /*useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])*/

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Design system gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full overflow-hidden rounded-xl bg-card shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* Sliding track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== current}
            className="relative w-full shrink-0"
          >
            <div className="relative aspect-[16/9] w-full">
              <img
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
              {/* Gradient scrim for text legibility */}
              
              
            </div>
          </div>
        ))}
      </div>

      {/* Previous arrow */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background md:left-4 md:h-10 md:w-10 cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background md:right-4 md:h-10 md:w-10 cursor-pointer"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot pagination */}
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 md:bottom-4">
        {slides.map((slide, i) => (
          <button
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === current ? "w-6 bg-background" : "w-2.5 bg-background/50 hover:bg-background/80 cursor-pointer",
            )}
          />
        ))}
      </div>
    </div>
  )
}