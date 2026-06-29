"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const ZOOM_STEP = 0.5

type LightboxImage = { src: string; alt: string }

type LightboxContextValue = {
  open: (image: LightboxImage) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider")
  }
  return ctx
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [expandedImage, setExpandedImage] = useState<LightboxImage | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  const resetZoom = useCallback(() => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  const open = useCallback(
    (image: LightboxImage) => {
      resetZoom()
      setExpandedImage(image)
    },
    [resetZoom],
  )

  const closeLightbox = useCallback(() => {
    setExpandedImage(null)
    resetZoom()
  }, [resetZoom])

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)))
  }, [])

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2))
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 })
      return next
    })
  }, [])

  // Close on Escape key, zoom with +/- and lock body scroll while open
  useEffect(() => {
    if (!expandedImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "+" || e.key === "=") zoomIn()
      if (e.key === "-") zoomOut()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [expandedImage, closeLightbox, zoomIn, zoomOut])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return
    isDragging.current = true
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || zoom <= 1) return
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    try {
      ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {}
  }

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {expandedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={expandedImage.alt}
          onClick={closeLightbox}
          onWheel={handleWheel}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-foreground/90 p-4 md:p-12 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close expanded image"
            className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Zoom controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background/10 p-1 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              className="flex items-center justify-center w-10 h-10 rounded-full text-background hover:bg-background/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="min-w-14 text-center text-sm font-medium tabular-nums text-background">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              className="flex items-center justify-center w-10 h-10 rounded-full text-background hover:bg-background/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              disabled={zoom === MIN_ZOOM && offset.x === 0 && offset.y === 0}
              aria-label="Reset zoom"
              className="flex items-center justify-center w-10 h-10 rounded-full text-background hover:bg-background/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={expandedImage.src || "/placeholder.svg"}
            alt={expandedImage.alt}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={(e) => {
              e.stopPropagation()
              zoom > 1 ? resetZoom() : zoomIn()
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            draggable={false}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? (isDragging.current ? "grabbing" : "grab") : "zoom-in",
              transition: isDragging.current ? "none" : "transform 0.2s ease-out",
            }}
            className="max-w-full max-h-full select-none object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </LightboxContext.Provider>
  )
}

type ExpandableImageProps = {
  src: string
  alt: string
  /** Use next/image fill mode. The parent must be positioned (relative) with a defined size. */
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  /** Classes for the button/container wrapper. */
  className?: string
  /** Classes for the underlying image element. */
  imageClassName?: string
  /** Whether to show the "Click to expand" hover overlay. Defaults to true. */
  showLabel?: boolean
}

/**
 * An image that opens in the shared zoomable lightbox when clicked.
 * Works in both next/image `fill` mode and standard width/height mode.
 */
export function ExpandableImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority,
  sizes,
  className,
  imageClassName,
  showLabel = true,
}: ExpandableImageProps) {
  const { open } = useLightbox()

  return (
    <button
      type="button"
      onClick={() => open({ src, alt })}
      aria-label={`Expand image: ${alt}`}
      className={cn(
        "group cursor-zoom-in overflow-hidden",
        fill ? "absolute inset-0 h-full w-full" : "relative block w-full",
        className,
      )}
    >
      {fill ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
      ) : width && height ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={cn("transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={cn("transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
      )}

      {showLabel && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 text-primary-foreground font-medium text-sm tracking-wide">
            <Maximize2 className="h-4 w-4" />
            Click to expand
          </span>
        </div>
      )}
    </button>
  )
}