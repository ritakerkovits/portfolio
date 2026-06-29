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
            The goal of this project was to design and update the website and promotional materials for beWANTED, an annual career event organized by TU Wien. The event provides TU Wien students with scheduled, one-on-one sessions with company representatives, offering a structured alternative to traditional career fairs.
          </p>
          
          <br />
          <p className="text-muted-foreground leading-relaxed">
            I was responsible for the complete website design, as well as the event poster. I collaborated closely with the PR team, specifically working alongside the Campus PR and Digital PR divisions to ensure cohesive communication across all channels.
          </p>
        </div>
      </section>
      <section id="problem-statement" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-medium text-foreground">Problem</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            The beWANTED website serves as the primary platform for TU Wien students to explore participating companies and apply for interview slots. However, as the main entry point to the event, it lacked clear, reliable information and a seamless user experience, which hindered student engagement and the application process for the event.
          </p>
          
          <ul className="space-y-10 mb-6">
            <li className="flex items-start gap-4 transition-all duration-300 ease-in-out hover:translate-x-2">
              {/* Rhombus marker cleanly aligned with mt-1.5 to match center height of text-lg header */}
              <span className="w-2 h-2 bg-primary rotate-45 mt-2 shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-[135deg]" />
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-semibold text-lg leading-snug group-hover:text-[#beee2b] transition-colors">
                  The old website was outdated
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  The previous website did not contain relevant information. Even though there is not an event running, it should communicate a "Stay tuned" message or refer to the upcoming event. 
                  <br />
                  The content was no longer accurate as several companies from previous years were not participating this year.
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
                  Inconsistent typography and colors were used throughout the site. This lack of visual harmony made the website appear unpolished and reduced trust in the platform.
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
                  Given that the website functions as the official source of information and the application portal, it was essential to redesign it to ensure clarity, consistency, and ease of use.
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
                Increase the number of applications
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The redesigned website aimed to encourage more students to apply for interview slots by offering a clear, engaging interface and easy navigation.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex items-start gap-2  transition-all duration-300 ease-in-out hover:translate-x-2">
            <ArrowRight className="w-4 h-4 stroke-[3] text-emerald-900 dark:text-[#d4ff00] mt-1 shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-foreground leading-snug">
                Establish a consistent visual design
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Both the website and physical materials, such as posters, needed to follow a cohesive design language to reinforce brand identity and create a seamless user experience across digital and offline platforms.
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
                The website was designed to serve as an intuitive, straightforward hub where students could easily find event information, browse participating companies, and submit applications for interviews.
              </p>
            </div>
          </li>
        </ul>
      </section>


      {/* Ideation */}
      <section id="process" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-medium text-foreground">Process</h2>
        <p className="text-muted-foreground leading-relaxed">
            Since this was a relatively small project, I attended monthly marketing team meetings and event team meetings. The purpose of these meetings was to test the current design and ensure alignment on the shared goal: <span className="text-primary italic font-medium">increasing the number of applications</span>. These regular check-ins helped refine the design direction and confirm that the project was on track.
          </p>

        {/* Visual Design Language */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">Research</h3>
          <p className="text-muted-foreground leading-relaxed">
            I began by conducting competitive research, analyzing websites of similar career events. This helped me identify key strengths and weaknesses in their design. Key insights from this research included the importance of clear navigation, intuitive layouts, and easy access to event details and application forms.
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
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/color_palette.png"
                alt="A curated color palette consisting of primary, secondary, and accent colors for the design system."
                fill
                className="object-contain rounded-md  shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw" 
                priority
              />
            </div>

            {/* Right Card: Color Shades */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/color_shades.png"
                alt="A UI design reference chart displaying a single base color with its various tint and shade variations for interface states."
                fill
                className="object-contain rounded-md shadow-2xl"
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
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden from-slate-800 to-slate-900">
            <ExpandableImage
              src="/bewanted/Logos.png"
              alt="A collection of logo design iterations showcasing the necessary logos of TU WIEN, beWANTED, HTU WIEN, and BEST Vienna in various color combinations and background contrasts."
              fill
              className="object-contain"
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
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/Font_Open_Sans.png"
                alt="Examples of the Open Sans font in different sizes and thicknesses."
                fill
                className="object-contain rounded-md  shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw" // Helps the browser download the optimal image size based on the viewport
                priority
              />
            </div>

            {/* Right Card: Color Shades */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden ">
              <ExpandableImage
                src="/bewanted/Font_Montserrat.png"
                alt="Examples of the Montserrat font in different sizes and thicknesses."
                fill
                className="object-contain rounded-md shadow-2xl"
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
