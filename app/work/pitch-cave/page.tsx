import { CaseStudySidebar } from "@/components/case-study-sidebar"
import { PitchCaveContent } from "@/components/pitchcave-content"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { ExpandableImage } from "@/components/image-lightbox"
import { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'PitchCave Redesign & Rebrand | Rita Kerkovits',
  description: 'See how I redesigned the PitchCave platform to scale the website and improve user experience.',
  keywords: ['UX Design', 'UI Design', 'Website Redesign', 'Portfolio', 'Wireframe', 'Prototyping', 'Design System', 'Typography', 'Color Palette'],
  openGraph: {
    title: 'PitchCave Redesign & Rebrand | Rita Kerkovits',
    description: 'Explore the design process and final prototype for the PitchCave redesign.',
    url: 'https://kerkorita.com/work/pitch-cave',
    images: [
      {
        url: 'https://kerkorita.com/logos/opengraph-light.png', // Placed inside your /public folder
        width: 1200,
        height: 630,
        alt: 'Rita Kerkovits Portfolio Website',
      },
    ],
  },
}


const projectInfo = {
  timeline: "December 2025 – May 2026",
  role: "UX/UI Designer & Web developer",
  tools: ["Figma", "Wix"],
  site: {
    label: "See Pitch Cave site",
    url: "https://www.dextrovert.at",
  }
}

export default function BrandIdentityCaseStudy() {
  return (
    <main className="min-h-screen  bg-[#FAF8F0]/50 dark:bg-[#03271a]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 w-full">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto lg:ml-48">
            {/* Back Link */}
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
            <div className="max-w-3xl mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                PitchCave: Full-Stack Redesign & Platform Development
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A complete end-to-end transformation of the PitchCave website, from conceptualizing the information architecture and design system to developing an accessible, and client-manageable CMS.
              </p>
            </div>

            {/* Hero Visual - Centered Image with Rounded Corners */}
            <div className="relative w-full max-w-5xl mx-auto mb-16">
              <div className="w-full rounded-lg overflow-hidden">
                <ExpandableImage
                  src="/pitchcave/mockup_cover.webp"
                  alt="Pitch Cave final design mockup"
                  className="w-full h-autoobject-contain rounded-md shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Key Info Section - Framed Info Bar */}
            <div className="border-t border-b border-border py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
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
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    Live Site
                  </span>
                  <p className="text-foreground font-medium">
                    <a 
                      href={projectInfo.site.url}
                      target="_blank"          
                      rel="noopener noreferrer" 
                      className="group inline-flex items-center gap-1 hover:text-primary transition-colors duration-200"
                    >
                      <span className="underline decoration-primary/30 group-hover:decoration-primary transition-colors">
                        {projectInfo.site.label}
                      </span>
                      <ArrowUpRight 
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 ease-out transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                      />
                    </a>
                  </p>
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
          <PitchCaveContent />
        </div>
      </div>
    </main>
  )
}
