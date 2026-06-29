"use client"

import { useEffect, useState, useCallback } from "react"

const roles = ["Web Designer", "Business Analyst", "UI/UX Designer"]

export function AvailabilityBadge() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const currentRole = roles[currentRoleIndex]

  const typeWriter = useCallback(() => {
    if (isPaused) return

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deleting (backspacing)
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1))
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, [displayText, currentRole, isDeleting, isPaused])

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100
    const timer = setTimeout(typeWriter, typingSpeed)
    return () => clearTimeout(timer)
  }, [typeWriter, isDeleting])

  return (
    <div className="inline-flex items-center">
      <span 
        className="text-[#06402B] dark:text-[#D4F15E] font-mono font-semibold text-sm md:text-base tracking-wide"
      >
        Available to work as{" "}
        <span className="underline underline-offset-4 decoration-current">
          {displayText}
        </span>
        <span className="animate-pulse inline-block w-[2px] h-[1.1em] bg-[#06402B] dark:bg-[#D4F15E] ml-0.5 align-middle" />
      </span>
    </div>
  )
}
