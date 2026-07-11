import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AvailabilityBadge } from "@/components/availability-badge"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-serif text-foreground leading-tight text-balance">
              Product Designer & Web Developer
            </h1>
            
            <AvailabilityBadge />

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I listen. I plan. I design. I validate. I deliver.
            </p>

            <div className="flex flex-col gap-4 md:flex-row w-full">
              <Button 
                size="lg" 
                className="w-full md:w-auto px-6 py-6 text-md bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
                asChild // Transfers styling properties to the internal anchor element
              >
                <a href="/#work" className="justify-center">
                  View My Work
                </a>
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  // Cleaned: All color swaps and animations are now unified on the parent button container
                  className="w-full md:w-auto  py-6 text-md group border border-primary dark:border-border text-foreground bg-card rounded-none transition-all duration-300 ease-out hover:bg-primary hover:text-background dark:hover:bg-primary "
                  asChild 
                >
                  <a 
                    href="/CV_Rita.pdf" 
                    target="_blank"          
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 "
                  >
                    <span>View my CV</span>
                    <ArrowUpRight 
                      // Refined: Increased translation vectors to make the upward-right diagonal slip highly visible
                      className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </a>
                </Button>
            </div>
          </div>

          {/* Right image 
          <div className="relative flex justify-center md:justify-end">
            <div className="relative overflow-hidden shadow-2xl w-4/5 lg:w-3/4">
              <Image
                src="/modern-designer-workspace-with-computer-and-plants.jpg"
                alt="Designer workspace"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}
