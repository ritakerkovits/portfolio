import { CaseStudySidebar } from "@/components/case-study-sidebar"
import { BeWantedContent } from "@/components/bewanted-content"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ExpandableImage } from "@/components/image-lightbox"
import { Footer } from "react-day-picker"
import { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'beWANTED Website Redesign | Rita Kerkovits',
  description: 'See how I redesigned the beWANTED career event website to improve user experience and engagement.',
  keywords: ['UX Design', 'UI Design', 'Website Redesign', 'Portfolio', 'Wireframe', 'Prototyping', 'Design System', 'Typography', 'Color Palette'],
  openGraph: {
    title: 'beWANTED Website Redesign | Rita Kerkovits',
    description: 'Explore the design process and final prototype for the beWANTED website redesign.',
    url: 'https://kerkorita.com/work/bewanted',
    images: [
      {
        url: 'https://kerkorita.com/logos/opengraph-light.png', 
        width: 1200,
        height: 630,
        alt: 'Rita Kerkovits Portfolio Website',
      },
    ],
  },
}

const projectInfo = {
  timeline: "December 2024 – March 2025",
  role: "Lead UX/UI Designer",
  tools: ["Figma", "Canva"],
}

export default function BeWantedStudy() {
  return (
    <main className="min-h-screen  bg-[#FAF8F0]/50 dark:bg-[#03271a]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 w-full">
        <div className="container mx-auto px-6 lg:px-24">
          {/* Back Link */}
          <div className="max-w-4xl mx-auto lg:ml-48">
            <Link 
            href="/" 
            // Refined: Added 'group' to the class string to catch parent hover states smoothly
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft 
                // Refined: Replaced static classes with a smooth horizontal translation transition
                className="w-4 h-4 font-semibold transition-transform duration-300 ease-out transform group-hover:-translate-y-0 group-hover:-translate-x-1" 
              />
              <span>Back to Portfolio</span>
            </Link>

            {/* Page Title & Description */}
            <div className="max-w-5xl mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                beWANTED Website & Branding Refresh
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A comprehensive UI/UX redesign of the beWANTED career event portal, resulting in a significant increase in student applications and a unified cross-platform brand identity for the year 2025.
              </p>
            </div>

            {/* Hero Visual - Centered Image with Rounded Corners */}
            <div className="relative w-full max-w-5xl mx-auto mb-16">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-xl ">
                <ExpandableImage
                  src="/bewanted/bewanted_cover.webp"
                  alt="beWANTED website mockups showing desktop and mobile views"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Key Info Section - Framed Info Bar */}
            <div className="border-t border-b border-border py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Timeline */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    Timeline
                  </span>
                  <p className="text-foreground font-medium">
                    {projectInfo.timeline}
                  </p>
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    Role
                  </span>
                  <p className="text-foreground font-medium">
                    {projectInfo.role}
                  </p>
                </div>

                {/* Toolset */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    Toolset
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full uppercase tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Fixed Sidebar Navigation - appears on scroll */}
      <CaseStudySidebar />

      {/* Content Section */}
      <div id="content-section-start" className="container mx-auto px-6 lg:px-24 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto lg:ml-48">
          <BeWantedContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
