"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300"
        style={{ 
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          backgroundColor: "var(--card)"
        }}
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-primary" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-6 left-6 z-50 w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
        isDark ? "bg-primary hover:bg-primary/90" : "bg-card hover:bg-secondary"
      )}
      style={{ 
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon shown in dark mode (click to go light) */}
      <Sun 
        className={cn(
          "absolute w-5 h-5 transition-all duration-300",
          isDark 
            ? "opacity-100 rotate-0 scale-100 text-primary-foreground" 
            : "opacity-0 -rotate-90 scale-0 text-primary"
        )} 
      />
      {/* Moon icon shown in light mode (click to go dark) */}
      <Moon 
        className={cn(
          "absolute w-5 h-5 transition-all duration-300",
          isDark 
            ? "opacity-0 rotate-90 scale-0 text-primary-foreground" 
            : "opacity-100 rotate-0 scale-100 text-primary"
        )} 
      />
    </button>
  )
}
