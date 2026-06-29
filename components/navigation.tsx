/*import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-foreground">
            Sarah Chen
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/#work" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase">
              Work
            </Link>
            <Link href="/about" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase">
              About Me
            </Link>
            <Link href="/#contact" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase">
              Connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}*/

/*'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/" && currentHash === path.substring(1)
    }
    return pathname === path && currentHash === ""
  }

  // Refined: Dynamically maps the hover state text color to match the active theme's accent color
  const linkStyles = (path: string) => {
    const active = isActive(path)
    return `
      text-sm font-semibold tracking-wider uppercase relative py-2 transition-colors duration-300 ease-out
      ${active 
        ? "text-[#06402B] dark:text-[#D4F15E]" 
        : "text-muted-foreground hover:text-[#06402B] dark:hover:text-[#D4F15E]"
      }
    `.trim()
  }

  // Refined: Replaced scale-x with transition-all, opacity, and translateY for a fixed-width rise effect
  const underlineElement = (path: string) => (
    <span 
      className={`
        absolute bottom-0 left-0 w-full h-[2px] 
        bg-[#06402B] dark:bg-[#D4F15E] 
        transition-all duration-300 ease-out
        ${isActive(path) 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
        }
      `}
    />
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F0]/50 dark:bg-[#03271a]/50 backdrop-blur-sm border-b border-border/50 ">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-foreground">
            Sarah Chen
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/#work" className={`group ${linkStyles("/#work")}`}>
              Work
              {underlineElement("/#work")}
            </Link>
            
            <Link href="/about" className={`group ${linkStyles("/about")}`}>
              About Me
              {underlineElement("/about")}
            </Link>
            
            <Link href="/#contact" className={`group ${linkStyles("/#contact")}`}>
              Connect
              {underlineElement("/#contact")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}*/

'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"

export function Navigation() {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const [isOpen, setIsOpen] = useState(false) // Component state tracking for mobile overlay layout

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Auto-collapse mobile drawer menu whenever route location changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/" && currentHash === path.substring(1)
    }
    return pathname === path && currentHash === ""
  }

  const linkStyles = (path: string) => {
    const active = isActive(path)
    return `
      text-sm font-semibold tracking-wider uppercase relative py-2 transition-colors duration-300 ease-out
      ${active 
        ? "text-[#06402B] dark:text-[#D4F15E]" 
        : "text-muted-foreground hover:text-[#06402B] dark:hover:text-[#D4F15E]"
      }
    `.trim()
  }

  const underlineElement = (path: string) => (
    <span 
      className={`
        absolute bottom-0 left-0 w-full h-[2px] 
        bg-[#06402B] dark:bg-[#D4F15E] 
        transition-all duration-300 ease-out
        ${isActive(path) 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
        }
      `}
    />
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F0]/80 dark:bg-[#03271a]/80 backdrop-blur-sm ">
      <div className="container mx-auto px-6 py-4 max-w-6xl relative z-50">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center text-xl font-semibold text-foreground focus:outline-none"
            aria-label="Home Link"
          >
            {/* Replaced static link text with your responsive dynamic component */}
            <Logo className="w-9 h-9" />
          </Link>

          {/* DESKTOP NAVIGATION: Completely unchanged, strictly hidden on mobile devices via hidden md:flex */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className={`group ${linkStyles("/#work")}`}>
              Work
              {underlineElement("/#work")}
            </Link>
            
            <Link href="/about" className={`group ${linkStyles("/about")}`}>
              About Me
              {underlineElement("/about")}
            </Link>
            
            <Link href="/#contact" className={`group ${linkStyles("/#contact")}`}>
              Connect
              {underlineElement("/#contact")}
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON: strictly isolated to mobile screen dimensions via md:hidden */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 relative z-50 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <span 
              className={`w-full h-[2px] bg-foreground rounded absolute transition-all duration-300 ease-out origin-center
                ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
              `} 
            />
            
            {/* Middle Line */}
            <span 
              className={`w-full h-[2px] bg-foreground rounded absolute transition-all duration-300 ease-out
                ${isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}
              `} 
            />
            
            {/* Bottom Line */}
            <span 
              className={`w-full h-[2px] bg-foreground rounded absolute transition-all duration-300 ease-out origin-center
                ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}
              `} 
            />
          </button>
        </div>
      </div>

      {/* MOBILE PANEL SLIDE DRAWER MENU */}
      <div 
        className={`
          fixed inset-0 top-0 left-0 w-full h-screen bg-[#FAF8F0] dark:bg-[#03271a] z-40
          flex flex-col items-center justify-center gap-8 px-6 transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        <Link 
          href="/#work" 
          onClick={() => setIsOpen(false)}
          className={`group ${linkStyles("/#work")} text-xl`}
        >
          Work
          {underlineElement("/#work")}
        </Link>
        
        <Link 
          href="/about" 
          onClick={() => setIsOpen(false)}
          className={`group ${linkStyles("/about")} text-xl`}
        >
          About Me
          {underlineElement("/about")}
        </Link>
        
        <Link 
          href="/#contact" 
          onClick={() => setIsOpen(false)}
          className={`group ${linkStyles("/#contact")} text-xl`}
        >
          Connect
          {underlineElement("/#contact")}
        </Link>
      </div>
    </nav>
  )
}