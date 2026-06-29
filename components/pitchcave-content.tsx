import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ExpandableImage } from "@/components/image-lightbox"

export function BrandIdentityContent() {
  return (
    <article className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          PitchCave: Full-Stack Redesign & Platform Development
        </h1>
      </section>

      {/* Objectives */}
      <section id="objectives" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Objectives</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            A comprehensive overhaul of a service-based website, modernizing the visual identity and restructuring the user experience to serve a diverse audience of students, professionals, and corporate partners.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Design Goals</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Create a memorable and distinctive visual identity</li>
            <li>Communicate premium quality and artisanal values</li>
            <li>Develop a cohesive system that works across all touchpoints</li>
            <li>Emphasize sustainability and ethical sourcing</li>
          </ul>
        </div>
      </section>

      {/* Problem */}
      <section id="problem-statement" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Problem</h2>

        {/* Brand Strategy */}
        <div className="space-y-4">
          
          <p className="text-muted-foreground leading-relaxed">
            With three distinct target groups, young professionals, company representatives and speakers, the primary challenge was to create a unified experience that provided relevant, accessible information to each group without overwhelming the visitor.
          </p>
          
        </div>

        
      </section>
      
      <section id="goals" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-medium text-foreground">Goals</h2>
        <div className="prose prose-lg max-w-none">
          
          
          <ul className="space-y-6 mb-6">
            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Restructure information architecture
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Create clear, intuitive pathways for three different user personas.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Modernize brand identity
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Develop a fresh color palette and typography system that balances youthful energy with corporate professionalism.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Scale the Platform
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Extend the site's footprint with new, high-conversion pages while improving the responsiveness and accessibility of existing layouts.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      

      {/* Ideation */}
      <section id="process" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Process</h2>

        {/* Logo Exploration */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Discovery & Requirements</h3>
          <p className="text-muted-foreground leading-relaxed">
            The process began with deep-dive stakeholder interviews to extract business goals, and I conducted competitive benchmarking against modern industry leaders to identify best practices. 
          </p>
          
        </div>

        {/* Information Architecture */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Information Architecture</h3>
          <p className="text-muted-foreground leading-relaxed">
            To manage the complexity of the new pages and content, I first developed a comprehensive Information Architecture (IA) to understand the connections within the page and clearly communicate the structure. 
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/wireframes.png"
              alt="A low-fidelity wireframe layout showing the structural skeleton and placement of UI elements on a webpage."
              width={3150} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To manage the complexity of the new pages and content, I first developed a comprehensive Information Architecture (IA) to understand the connections within the page and clearly communicate the structure. 
          </p>
          <h3 className="text-xl font-semibold text-foreground">Wireframes</h3>
          <p className="text-muted-foreground leading-relaxed">
            The rebranding phase focused on creating a versatile, modern aesthetic. I curated a triadic color palette, performing rigorous WCAG contrast audits on the main color pairings to guarantee an inclusive experience. 
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/wireframes.png"
              alt="A low-fidelity wireframe layout showing the structural skeleton and placement of UI elements on a webpage."
              width={3150} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Typography</h3>
          <p className="text-muted-foreground leading-relaxed">
            For typography, I selected Frutiger and SF Pro Display for their high legibility and professional-yet-approachable feel. Throughout the build, I maintained an agile feedback loop with the client, ensuring every milestone was met with total alignment. 
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/wireframes.png"
              alt="A low-fidelity wireframe layout showing the structural skeleton and placement of UI elements on a webpage."
              width={3150} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          
        </div>
      </section>

      {/* Prototyping */}
      <section id="prototyping" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Prototyping</h2>

        {/* Brand Guidelines */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">TEXT</h3>
          <p className="text-muted-foreground leading-relaxed">
            TEXT
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-stone-700 to-stone-800">
            <ExpandableImage
              src="/design-system-components-library-with-buttons-card.jpg" 
              alt="Brand guidelines spreads showing logo and typography" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        
      </section>

      {/* Testing */}
      <section id="testing" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Testing</h2>
        <p className="text-muted-foreground leading-relaxed">
          To validate the design, I conducted brief testing sessions with potential audiences, mostly with students and young professionals. The feedback was overwhelmingly positive, with 100% of participants rating the new design as &quot;modern&quot; and &quot;premium&quot;. The visual identity successfully communicated the brand values, and the new information architecture made it easier for users to find relevant content.
        </p>
        
        
      </section>

      
      {/* Impact */}
      <section id="impact" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Impact</h2>

        

        {/* List */}
        <ul className="space-y-6 mb-6">
            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Client Autonomy & Operational Efficiency
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Developed a streamlined event management system within a custom CMS structure. This empowered the internal team to independently add and update events without requiring technical knowledge, reducing maintenance friction.
                  
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Technical Accessibility Excellence
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Achieved a 95% Accessibility score via Lighthouse audits. By optimizing the site to the highest possible threshold within the platform's constraints, I ensured a more inclusive experience for users with diverse needs.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Modernized Brand Identity
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Successfully pivoted the visual direction from an outdated aesthetic to a cohesive, contemporary digital presence. This shift was validated by 100% positive stakeholder feedback, confirming that the new look better resonates with the target student and corporate demographics.
                </p>
              </div>
            </li>
          </ul>

      </section>

      {/* Learnings */}
      <section id="learnings" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Learnings</h2>

        {/* List */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">WIX website builder</p>
          <p className="text-muted-foreground leading-relaxed">
            Choosing Wix was a strategic decision based on the client's existing comfort level. This project allowed me to master a new site-builder's logic, expanding my technical versatility.
          </p>
          
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Documentation of process</p>
          <p className="text-muted-foreground leading-relaxed">
            Maintaining a "single source of truth" for research, ideation, and technical requirements kept the project on track and served as a vital reference point for both the client and myself. I now view documentation not as a task, but as a safeguard against scope creep and misalignment.
          </p>
          
        </div>


        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Accessibility aspects</p>
          <p className="text-muted-foreground leading-relaxed">
            This project served as a significant milestone in my professional evolution. While I had previously studied the theory of inclusive design, this was the first time I moved from simply knowing the guidelines to intentionally implementing them from day one. This involved the intentional application of accessible color contrast, screen-reader optimization with descriptive alt-text, or a logical content hierarchy among others.
          </p>
          
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Iterative feedback loop</p>
          <p className="text-muted-foreground leading-relaxed">
            Regular client check-ins taught me the value of progressive approval. By showing wireframes early and often, we avoided major revisions at the development stage, keeping the project within the original timeline and scope.
          </p>
          
        </div>


      </section>
        
    </article>
  )
}
