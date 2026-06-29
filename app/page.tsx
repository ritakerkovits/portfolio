import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedWorks } from "@/components/case-studies"
import { SideProjects } from "@/components/side-projects"
import { DesignProcess } from "@/components/design-process"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F0]/50 dark:bg-[#03271a]">
      <Navigation />
      <HeroSection />
      <FeaturedWorks />
      <SideProjects />
      {/* <DesignProcess /> */}
      <Footer />
    </main>
  )
}
