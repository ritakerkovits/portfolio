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
            Redesign and rebrand an existing service-based website to create a more intuitive interface and provide richer content. The goal was to modernize the visual identity and improve the user experience for a diverse audience, including students, professionals, and corporate partners.
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
            With three distinct target groups, young professionals, company representatives, and speakers, the main challenge was to design a unified experience that delivers relevant and easy-to-find information for each audience without overwhelming visitors.
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
                  Refresh the brand look
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Choose colors and fonts that feel both energetic and professional to appeal to all audiences.
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
                  Add new pages that encourage engagement and make sure the whole site works smoothly on any device.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      

      {/* Ideation */}
      <section id="process" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Process</h2>

        {/* Discovery & Requirements */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Discovery & Requirements</h3>
          <p className="text-muted-foreground leading-relaxed">
            The process began with a deep-dive client interview to understand their needs and business goals. I also conducted benchmarking by analyzing websites in the same industry to identify trends and gather inspiration.
          </p>
          
        </div>

        {/* Information Architecture */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Information Architecture</h3>
          <p className="text-muted-foreground leading-relaxed">
            To handle the complexity of the new pages and content, I started by creating a clear Information Architecture (IA) that mapped out how everything connects and helped communicate the site's structure. 
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/pitchcave/information_architecture.webp"
              alt="Information Architecture diagram for the PitchCave website"
              width={3150} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Wireframes</h3>
          <p className="text-muted-foreground leading-relaxed">
          Next, I turned this structure into low-fidelity wireframes, giving a simple visual layout that let the client review and confirm the content hierarchy and user flows before moving on to detailed design
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
          <ExpandableImage
            src="/pitchcave/wireframe_1.webp"
            alt="A low-fidelity wireframe layout showing the structural skeleton and placement of UI elements on a webpage."
            width={3150} 
            height={1600} 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          </div>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
          <ExpandableImage
            src="/pitchcave/wireframe_2.webp"
            alt="A low-fidelity wireframe layout showing the structural skeleton and placement of UI elements on a webpage."
            width={3150} 
            height={1600} 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Typography</h3>
          <p className="text-muted-foreground leading-relaxed">
            For typography, I selected Frutiger and SF Pro Display because they are highly readable and strike the right balance between professional and approachable. Throughout the process, I kept an open feedback loop with the client to make sure every step aligned with their vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  
            {/* Left Card: Color Palette */}
            <div className="w-full rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/pitchcave/sf_pro.svg"
                alt="Examples of the SF Pro Display font in different sizes and thicknesses."
                className="w-full h-autoobject-contain rounded-md shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Card: Color Shades */}
            <div className="w-full rounded-lg overflow-hidden">
              <ExpandableImage
                src="/pitchcave/frutiger.svg"
                alt="Examples of the Frutiger font in different sizes and thicknesses."
                className="w-full h-autoobject-contain rounded-md shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>

      
          
          
  

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Color Palette</h3>
          <p className="text-muted-foreground leading-relaxed">
            During the rebranding phase, I focused on developing a versatile, modern look. I chose a triadic color palette and carefully tested the main color combinations with WCAG contrast audits to ensure an inclusive experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="w-full rounded-lg overflow-hidden ">
            <ExpandableImage
              src="/pitchcave/color_palette.svg"
              alt="Color palette for the design system"
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw" 
              
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden ">
            <ExpandableImage
              src="/pitchcave/color_ratios.svg"
              alt="Color ratios for the design system"
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
          </div>
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
          To validate the design, I conducted brief testing sessions with potential audiences, mostly with students and young professionals. The feedback was overwhelmingly positive, with 100% of participants rating the new design as &quot;modern&quot; and &quot;premium&quot;. 
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
                  Empowering the Client
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  I built a simple event management system within a custom CMS, making it easy for the team to add and update events on their own no technical skills needed. 
                  
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Strong Focus on Accessibility
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The site scored 95% on Lighthouse accessibility audits. By optimizing within the platform's limits, I made sure the experience is welcoming and usable for people with different needs.
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
          <p className="text-lg font-semibold text-foreground">Getting comfortable with Wix</p>
          <p className="text-muted-foreground leading-relaxed">
            Choosing Wix was a strategic decision since the client was already familiar with it. This project helped me learn how to work effectively with a new site builder, broadening my technical skills.
          </p>
          
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Keeping everything organized</p>
          <p className="text-muted-foreground leading-relaxed">
            Keeping a clear, single source of truth for research, ideas, and technical details helped keep the project on track. I now see documentation not just as a task, but as a way to prevent misunderstandings and keep everyone aligned.
          </p>
          
        </div>


        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Putting Accessibility into practice</p>
          <p className="text-muted-foreground leading-relaxed">
            This project was a big step in my growth. While I'd studied inclusive design before, this was the first time I actively applied accessibility principles from the very start - like choosing accessible colors, adding descriptive alt text, or logical content hierarchy.
          </p>
          
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">The power of regular feedback</p>
          <p className="text-muted-foreground leading-relaxed">
            Frequent check-ins with the client showed me how valuable early and ongoing feedback is. Sharing wireframes often helped us avoid major changes later on, keeping the project on schedule and within scope.
          </p>
          
        </div>


      </section>
        
    </article>
  )
}
