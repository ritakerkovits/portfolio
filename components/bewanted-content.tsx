import Image from "next/image"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ExpandableImage } from "@/components/image-lightbox"



export function CaseStudyContent() {
  return (
    <article className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          beWANTED Website & Branding Refresh
        </h1>
      </section>

      {/* Objectives */}
      <section id="objectives" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-medium text-foreground">Objectives</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            The goal of this project was to redesign the website and update promotional materials for beWANTED, an annual career event hosted by TU Wien. The event connects TU Wien students with company representatives through scheduled one-on-one sessions, offering a more organized and personal alternative to typical career fairs.
          </p>
          
          <br />
          <p className="text-muted-foreground leading-relaxed">
            I was responsible for the complete website design, as well as the event poster. Throughout the project, I worked closely with the PR team, especially the Campus PR and Digital PR divisions, to make sure all communications were clear and consistent across every channel.
          </p>
        </div>
      </section>
      <section id="problem-statement" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-medium text-foreground">Problem</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            The beWANTED website is the main place where TU Wien students explore participating companies and sign up for interview slots. However, the old site lacked clear and reliable information, making it hard for students to engage and apply smoothly.
          </p>
          
          <ul className="space-y-10 mb-6">
            <li className="flex items-start gap-4 transition-all duration-300 ease-in-out hover:translate-x-2">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-[135deg]" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug group-hover:text-[#beee2b] transition-colors">
                  Outdated content
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The previous website didn't provide up-to-date information. Even when the event wasn't happening, it didn't clearly communicate that students should "stay tuned" or when the next event would be. Some company listings were also outdated, showing participants from past years who weren't involved this time.
                  
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 transition-all duration-300 ease-in-out hover:translate-x-2">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-[135deg]" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug transition-colors duration-300 ease-in-out group-hover:text-emerald-900 dark:group-hover:text-[#d4ff00]">
                  Inconsistent visual style
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The site used different fonts and colors inconsistently, which made it look unpolished and less trustworthy.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 transition-all duration-300 ease-in-out hover:translate-x-2">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-[135deg]" />
              <div className="flex flex-col gap-2 ">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  The need for reliable information
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Since the website is the official source for event details and applications, it was crucial to redesign it to be clear, consistent, and easy to use.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-medium text-foreground">Goals</h2>

        <ul className="space-y-10 mb-6">
          {/* Item 1 */}
          <li className="flex items-start gap-2  transition-all duration-300 ease-in-out hover:translate-x-2">
            {/* Thick arrow icon aligned cleanly with mt-1 to match text-lg header. 
              Color: Dark green in light mode, Neon Lemon in dark mode.
            */}
            <ArrowRight className="w-4 h-4 stroke-[3] text-emerald-900 dark:text-[#d4ff00] mt-1 shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-foreground leading-snug ">
                Encourage more applications
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The redesigned website aimed to make it easy and inviting for students to apply for interview slots through a clear and engaging interface.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex items-start gap-2  transition-all duration-300 ease-in-out hover:translate-x-2">
            <ArrowRight className="w-4 h-4 stroke-[3] text-emerald-900 dark:text-[#d4ff00] mt-1 shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-foreground leading-snug">
                Create a consistent visual identity
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Both the website and printed materials like posters, flyers needed a unified look to strengthen the brand across online and offline channels.
              </p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="flex items-start gap-2  transition-all duration-300 ease-in-out hover:translate-x-2">
            <ArrowRight className="w-4 h-4 stroke-[3] text-emerald-900 dark:text-[#d4ff00] mt-1 shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-foreground leading-snug">
                Provide a clear platform for students
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The site was designed to be a simple, intuitive hub where students can quickly find event details, explore participating companies, and submit their interview applications.
              </p>
            </div>
          </li>
        </ul>
      </section>


      {/* Ideation */}
      <section id="process" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-medium text-foreground">Process</h2>
        <p className="text-muted-foreground leading-relaxed">
            Since this was a smaller project, I joined monthly marketing and event team meetings to review the current design and make sure we were all focused on the same goal: <span className="text-primary italic font-medium">increasing the number of applications</span>. These regular check-ins helped shape the design and kept the project moving in the right direction.
          </p>

        {/* Visual Design Language */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Research</h3>
          <p className="text-muted-foreground leading-relaxed">
            I started by researching similar career event websites to see what worked well and what didn't. This showed me the importance of clear navigation, simple layouts, and easy access to event details and application forms.
          </p>
          
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Wireframing</h3>
          <p className="text-muted-foreground leading-relaxed">
            I started by mapping out the current website's structure and identifying areas for improvement.
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




        {/*Color palette */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Color Palette</h3>
          <p className="text-muted-foreground leading-relaxed">
            I chose brighter colors to enhance visibility and create a more energetic, engaging atmosphere. This decision was aimed at making the platform feel more dynamic and approachable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  
            {/* Left Card: Color Palette */}
            <div className="w-full rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/color_palette.svg"
                alt="A curated color palette consisting of primary, secondary, and accent colors for the design system."
                className="w-full h-auto object-contain rounded-md shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Card: Color Shades */}
            <div className="w-full rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/color_shades.svg"
                alt="A UI design reference chart displaying a single base color with its various tint and shade variations for interface states."
                className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              />
              
            </div>

          </div>
          
          
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Logo selection</h3>
          <p className="text-muted-foreground leading-relaxed">
            TEXT HERE
          </p>
          <div className="w-full rounded-lg overflow-hidden ">
            <ExpandableImage
              src="/bewanted/Logos.svg"
              alt="A collection of logo design iterations showcasing the necessary logos of TU WIEN, beWANTED, HTU WIEN, and BEST Vienna in various color combinations and background contrasts."
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Typography</h3>
          <p className="text-muted-foreground leading-relaxed">
            I combined two popular sans-serif fonts that are highly legible on digital interfaces, ensuring the text is easy to read across various devices and screen sizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  
            {/* Left Card: Color Palette */}
            <div className="w-full rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/Font_Open_Sans.svg"
                alt="Examples of the Open Sans font in different sizes and thicknesses."
                className="w-full h-auto object-contain rounded-md shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Card: Color Shades */}
            <div className="w-full rounded-lg overflow-hidden">
              <ExpandableImage
                src="/bewanted/Font_Montserrat.svg"
                alt="Examples of the Montserrat font in different sizes and thicknesses."
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

        

        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">High-Fidelity Prototypes</h3>
          <p className="text-muted-foreground leading-relaxed">
            CHANGE TEXT
          </p>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/Main-page-1.png"
              alt=""
              width={3150} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <h3 className="text-xl font-medium text-foreground">High-Fidelity Mobile versions</h3>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/Mobile-version.png"
              alt=""
              width={1380} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <h3 className="text-xl font-medium text-foreground">Mockups</h3>
          <div className="relative w-full h-auto rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/Mockups.png"
              alt=""
              width={1630} 
              height={1600} 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* Testing */}
      <section id="testing" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-medium text-foreground">Testing</h2>
        <p className="text-muted-foreground leading-relaxed">
          To validate the design, I conducted usability tests with 7 participants, asking them to navigate the website and apply for the event. Key feedback included:
        </p>
        
        <div className="bg-card rounded-sm p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Testing Insights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">Focus on improving content clarity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">
                Increasing button sizes for better clickability, especially on mobile devices
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">Change information order (date before event description)</span>
            </li>
          </ul>
          
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Based on these insights, I iterated the design to enhance usability and meet user expectations.
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
                <p className="text-foreground font-semibold text-lg leading-snug ">
                  Increase in Applications
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The number of applications for the event increased by 61% compared to last year, rising from 132 to 213 applications. This significant boost was directly linked to the redesigned website and marketing efforts.
                  
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug">
                  Foundation for Future Events
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The website's redesign established a solid foundation for upcoming years, with the flexible design system and scalable structure allowing for easy updates and continued improvements.
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
          <p className="text-lg font-semibold text-foreground">UX Writing Practice</p>
          <p className="text-muted-foreground leading-relaxed">
            During this project, I had the opportunity to practice UX writing. I focused on making the content clear and user-friendly, ensuring that the language on the website was simple and easy to understand for students.
          </p>
          
        </div>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">First Usability Test Experience</p>
          <p className="text-muted-foreground leading-relaxed">
            This project marked my first experience conducting usability tests. I realized how valuable these tests are in identifying real user pain points. The feedback provided direct insights that guided design improvements, helping me refine the website to better meet user needs.
          </p>
          
        </div>


        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Importance of iterative Process</p>
          <p className="text-muted-foreground leading-relaxed">
            The iterative nature of this project allowed me to continuously improve the design. Each round of feedback helped me identify areas for refinement and provided opportunities to make meaningful adjustments, ultimately leading to a more polished final product. </p>
          
        </div>


      </section>
        

      
    
      
    </article>
    
  )
}
