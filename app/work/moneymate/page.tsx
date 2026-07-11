import { MoneyMateSidebar } from "@/components/moneymate-sidebar"
import { MoneyMateContent } from "@/components/moneymate-content"
import { Navigation } from "@/components/navigation"
import { ExpandableImage } from "@/components/image-lightbox"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import { Footer } from "react-day-picker"
import { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'MoneyMate Case Study | Rita Kerkovits',
  description: 'See how I transformed a conceptual financial dashboard into a polished, high-fidelity UX prototype during an intensive design course with Kreativstorm.',
  keywords: ['UX Design', 'UI Design', 'Financial Dashboard', 'Portfolio', 'Wireframe', 'Prototyping', 'Information Architecture', 'Design System', 'Typography', 'Color Palette'],
  openGraph: {
    title: 'MoneyMate Case Study | Rita Kerkovits',
    description: 'Explore the design process and final prototype for the MoneyMate financial dashboard.',
    url: 'https://kerkorita.com/work/moneymate',
    images: [
      {
        url: '/logos/logo_green.png', 
        width: 1200,
        height: 630,
        alt: 'Rita Kerkovits Portfolio Website',
      },
    ],
  },
}


const projectInfo = {
  timeline: "February 2025",
  role: "UX/UI Designer in Intensive UX Design Course Project",
  tools: ["Figma"],
}

export default function MoneyMateCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 w-full">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto lg:ml-48">
            {/* Back Link */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 font-semibold transition-transform duration-300 ease-out transform group-hover:-translate-y-0 group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            {/* Page Title & Description */}
            <div className="max-w-5xl mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-foreground mb-6 ">
                MoneyMate Case Study for UX design workshop
              </h1>

            </div>

            {/* Hero Visual */}
            <div className="relative w-full max-w-5xl mx-auto mb-16">
              <div className="w-full rounded-lg overflow-hidden">
                <ExpandableImage
                  src="/moneymate/moneymate-cover.webp"
                  alt="MoneyMate financial mockup"
                  className="w-full h-auto object-contain rounded-md shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Key Info Section */}
            <div className="border-t border-b border-border py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Timeline</span>
                  <p className="text-foreground font-medium">{projectInfo.timeline}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Role</span>
                  <p className="text-foreground font-medium">{projectInfo.role}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Toolset</span>
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

      <MoneyMateSidebar />

      {/* Content Section with Sidebar */}
      <div id="content-section-start" className="container mx-auto px-6 lg:px-24 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto lg:ml-48">
          <MoneyMateContent />
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </main>
  )
}