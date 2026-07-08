"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "objectives", label: "Objectives" },
  { id: "process", label: "Design Process" },
  { id: "prototyping", label: "Prototyping" },
  { id: "learnings", label: "Learnings" },
]

export function MoneyMateSidebar() {
  const [activeSection, setActiveSection] = useState("objectives")
  const [isScrolling, setIsScrolling] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = useCallback(() => {
    // Check if we've scrolled past the content trigger point
    const contentTrigger = document.getElementById("content-section-start")
    if (contentTrigger) {
      const triggerTop = contentTrigger.getBoundingClientRect().top
      setIsVisible(triggerTop <= 120)
    }

    if (isScrolling) return

    const scrollPosition = window.scrollY + window.innerHeight * 0.3

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].id)
      if (element) {
        const elementTop = element.offsetTop
        if (scrollPosition >= elementTop) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
  }, [isScrolling])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setIsScrolling(true)
      setActiveSection(id)

      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 800)
    }
  }

  return (
    <nav 
      className={cn(
        "hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-300",
        isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 -translate-x-4 pointer-events-none"
      )}
    >
      <ul className="space-y-0.5">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={cn(
                  "group flex items-center text-left w-full py-2.5 text-sm transition-all duration-150",
                  isActive 
                    ? "text-primary font-semibold" 
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {/* Rhombus/Diamond indicator - only visible on hover or active */}
                <span
                  className={cn(
                    "w-2 h-2 rotate-45 mr-3 shrink-0 transition-all duration-150",
                    isActive
                      ? "bg-primary border border-primary opacity-100"
                      : "bg-transparent border border-primary opacity-0 group-hover:opacity-100"
                  )}
                />
                <span>{label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
