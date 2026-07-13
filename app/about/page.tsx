import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'About Me | Rita Kerkovits',
  description: 'UX/UI Designer and Web Developer specialized in user-centered digital products.',
  keywords: ['UX Design', 'UI Design', 'Web Development', 'Portfolio'],
  openGraph: {
    title: 'About Me | Rita Kerkovits',
    description: 'Explore my design journey, toolsets, and industry experience.',
    url: 'https://kerkorita.com/about',
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

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden dark:bg-[#03271a]">
         
      <div className="relative z-10">
        <Navigation />

        <div className="container mx-auto px-6 py-12 max-w-6xl mt-24 ">
          {/* Hero Section - Biography */}
          <section className="mb-32 relative">
            <div className="grid md:grid-cols-2 gap-12 items-start group/profile">
              <div>
                {/* Biography Label */}
                <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-6 block">
                  Biography
                </span>

                {/* Main Heading with wave emoji */}
                <h1 className="text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-4 leading-tight">
                  Hey there,<br />
                  I&apos;m Rita <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
                </h1>


                {/* Italic Subheading */}
                <p className="text-xl lg:text-2xl text-primary italic leading-relaxed mb-8">
                  I&apos;m a Vienna-based UX/UI Designer with a technical foundation in web development and Business Informatics.
                </p>

                
                <Button
                  size="lg"
                  variant="outline"
                  // Cleaned: All color swaps and animations are now unified on the parent button container
                  className="w-full md:w-auto px-6 py-6 text-md bg-primary text-primary-foreground dark:bg-accent group border border-primary dark:border-border rounded-none transition-all duration-300 ease-out hover:bg-primary/80 hover:text-primary-foreground dark:hover:bg-accent/80  "
                  asChild 
                >
                  <a href="https://www.linkedin.com/in/rita-kerkovits/" target="_blank"  className="justify-center">
                  Connect with me on LinkedIn
                <ArrowUpRight 
                  className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
                </a>
                
                </Button>
                
              </div>

              {/* Portrait Image */}
              <div className="relative flex justify-center md:justify-end transform origin-center transition-transform duration-500 ease-out group-hover/profile:rotate-2">
                <div className="relative overflow-hidden shadow-2xl w-4/5 lg:w-3/4 ">
                  <img
                    src="/profile.jpg"
                    alt="Rita - UX/UI Designer portrait"
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover/profile:scale-102"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Experience Timeline Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-serif font-medium text-foreground mb-12">Experience</h2>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-1.75 top-3 bottom-3 w-px bg-primary/30" />

              
              <div className="relative pl-12 pb-32">
                {/* Rhombus marker */}
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rotate-45" />

                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12">
                  {/* Left: Date, Company, Role */}
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">2025 MARCH — PRESENT</p>
                    
                    <h3 className="text-xl font-mono font-semibold uppercase text-primary  mb-1">UX Designer & <br />Website builder</h3>
                    <p className="text-sm font-medium uppercase text-muted-foreground tracking-wider mb-2">Freelance</p>
                    <p className="text-xs font-regular  text-muted-foreground tracking-wider uppercase">Vienna | Austria</p>
                  </div>

                  {/* Right: Description + Bullet Points */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I partner with small businesses and startups to design and build their digital presence from the ground up. I act as an end-to-end product partner, bridging the gap between business goals and a live, functional website.
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          I manage the full product lifecycle, starting with UX evaluations and requirement documentation to ensure every design decision is backed by solid business logic.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          I translate complex needs into intuitive low-to-high fidelity wireframes and interactive Figma prototypes, focusing on seamless user flows and clear information architecture.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          I handle the technical development and launch of responsive websites, using platforms such as Webflow, Framer, or Wix, balancing user accessibility with easy client management.
                        </span>
                      </li>
                    </ul>

                    {/* Case Studies Link */}
                    <a
                    href="/#work"
                    className="group inline-flex items-center gap-2 text-primary text-sm underline underline-offset-4 hover:text-primary/80 transition-colors "
                  >
                    View my recent project case studies
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  </div>
                </div>
              </div>

              
              <div className="relative pl-12 pb-12">
                {/* Rhombus marker */}
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rotate-45" />

                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12">
                  {/* Left: Date, Company, Role */}
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">2024 MAY — 2024 AUG</p>
                    
                    <h3 className="text-xl font-mono font-semibold uppercase text-primary mb-1">Business Analyst</h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Intuitech</p>
                    <p className="text-xs font-regular  text-muted-foreground tracking-wider  uppercase">Budapest | Hungary</p>
                    
                  </div>

                  {/* Right: Description */}
                  <div>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          Translated complex business needs into technical specifications, collaborating closely with UX designers and developers to ensure design feasibility and alignment with the product roadmap.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          Designed and produced a 2-minute animated explainer video in canva to simplify onboarding, helping internal users easily understand and adopt the our internal product.
                        </span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </section>

          {/* Education & Certifications Section */}
          <section className="mb-32 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Education Column */}
              <div>
                <h2 className="text-4xl font-serif font-medium text-foreground mb-8">Education</h2>

                {/* TU WIEN */}
                <div className="mb-12">
                  <h3 className="text-lg font-sans text-primary font-semibold uppercase tracking-wider mb-1">
                    MSC IN HUMAN-COMPUTER INTERACTION
                  </h3>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-md font-medium text-foreground">Vienna University of Technology</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    Vienna, Austria | 2024 - Present (Expected Graduation: 2026)
                  </p>
                  <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                    <li>
                      Specializing in the intersection of human behavior and digital systems, with a deep dive into inclusive design and accessibility.
                    </li>
                    <li>
                      <span className="text-foreground">Thesis Research:</span> Investigating how Interactive Sketches can be utilized in constantly improving UX design workflows.
                    </li>
                  </ul>
                </div>

                {/* Corvinus */}
                <div>
                  <h3 className="text-lg font-sans text-primary font-semibold uppercase tracking-wider mb-1">
                    BSC IN BUSINESS INFORMATICS
                    </h3>
                  <div className="flex items-center gap-3 mb-1">                    
                    <span className="text-md font-medium text-foreground ">Corvinus University of Budapest</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    Budapest, Hungary | 2020 - 2024
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized in business processes, statistics, and web development which gave me the foundational logic layer for my design career
                  </p>
                </div>
              </div>

              {/* Certifications & Projects Column */}
              <div>
                <h2 className="text-4xl font-serif font-medium text-foreground mb-8">Certifications &amp; Projects</h2>

                {/* Udemy UX Course */}
                

                <div className="relative group p-4 -mx-4 border border-transparent hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer mb-12">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl text-primary">Udemy UX Course</span>
                    
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Established my foundations in web and mobile design through a core understanding of user-centred design principles.
                  </p>
                  <a
                    href="/certification_udemy.pdf"
                    target="_blank"          
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-primary text-sm underline underline-offset-4 hover:text-primary/80 transition-colors after:absolute after:inset-0 after:z-10"
                  >
                    See my certificate
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    
                  </a>
                </div>

                {/* Kreativstorm Intensive */}
                <div className="relative group p-4 -mx-4 border border-transparent hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl text-primary">Kreativstorm Intensive Course</span>
                    
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Completed an intensive, practical training program focused on end-to-end digital product design. Applied the Laws of UX, accessibility standards, and scalable UI components.
                  </p>
                  <a
                    href="/work/moneymate"
                    className="group inline-flex items-center gap-2 text-primary text-sm underline underline-offset-4 hover:text-primary/80 transition-colors after:absolute after:inset-0 after:z-10"
                  >
                    Explore the Moneymate Case Study
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Toolset Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-serif font-medium text-foreground mb-10">Technical Toolset</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Web Development */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 border border-primary rotate-45" />
                  <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">Web Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS", "JAVASCRIPT", "FRAMER", "WIX", "WEBFLOW"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design & Process */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 border border-primary rotate-45" />
                  <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">Design & Process</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["FIGMA", "USER RESEARCH", "PROTOTYPING", "DESIGN SYSTEMS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialized */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 border border-primary rotate-45" />
                  <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">Specialized</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["ACCESSIBILITY (WCAG)", "DATA VISUALIZATION"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-medium uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Design Section */}
          <section className="mb-20 hidden">
            <h2 className="text-4xl font-serif text-foreground mb-6">When I'm not designing</h2>

            {/* Text Content */}
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              TEXT
            </p>

            {/* Image Gallery - Horizontal Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/mountain-hiking-trail-with-forest-and-scenic-view.jpg"
                  alt="Hiking trail with scenic mountain view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/vintage-film-camera-photography.jpg"
                  alt="Film photography hobby"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/design-workshop-mentoring-session.jpg"
                  alt="Design workshop and mentoring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/conference-speaking-presentation.jpg"
                  alt="Speaking at design conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
}
