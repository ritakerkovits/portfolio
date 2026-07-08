import { ExpandableImage } from "@/components/image-lightbox"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import { ProcessTimeline } from "@/components/process-timeline"

export function MoneyMateContent() {
  return (
    <article className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          MoneyMate Case Study for UX design workshop
        </h1>
      </section>
      
      {/* Objectives */}
      <section id="objectives" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Objectives</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            For this case study, the objective was to transform a given concept into a polished design prototype. As part of a UX design course held by Kreativstorm, I was provided with a description of a financial app dashboard called MoneyMate, along with detailed screens and tasks within the app. My goal was to take these ideas and develop them into a fully realized, user-friendly interface that effectively communicates the app's functionality.
          </p>
          
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Process</h2>
        <ProcessTimeline />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Discovery</h3>
          <p className="text-muted-foreground leading-relaxed">
            During the discovery phase, I conducted benchmarking to gather inspiration and understand current trends in the financial industry and fintech applications. This involved analyzing and testing various financial apps to identify best practices, common features, and design patterns. These insights helped shape the direction of the MoneyMate dashboard, ensuring the design would be relevant and user-friendly within the competitive fintech landscape.
          </p>
          
        </div>


        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Information Architecture</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Information Architecture illustrates the structure and organization of MoneyMate's content and features, also detailing the specific actions users can perform on each page. This mapping helped visualize how different features connect and interact, which ensures a seamless user flow. The IA provided a solid foundation for the wireframing and overall design process.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <ExpandableImage
              src="/moneymate/information_architecture.svg"
              alt="UI audit and component inventory mapping"
              className="w-full h-autoobject-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Personas</h3>
          <p className="text-muted-foreground leading-relaxed">
            Based on the research findings, I developed user personas that represent the typical users of MoneyMate. 
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <ExpandableImage
              src="/moneymate/personas.svg"
              alt="User personas for the design system"
              
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Wireframing</h3>
          <p className="text-muted-foreground leading-relaxed">
            In the wireframing phase, I created simple, rough visualizations of the app to get a clear idea of its overall structure and layout. This helped me bring my ideas to life in a visible way, making it easier to think through how everything would work together. It was a useful step for exploring different options and planning the app's flow before moving on to more detailed design.
          </p>
          <div className="w-full rounded-xl overflow-hidden">
            <ExpandableImage
              src="/moneymate/wireframe_login.png"
              alt="MoneyMate wireframe for login and registration screens"
              width={885}
              height={954}
              
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <ExpandableImage
              src="/moneymate/wireframe_onboarding.png"
              alt="MoneyMate wireframe for onboarding screens"
              width={1811}
              height={1253}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <ExpandableImage
              src="/moneymate/wireframe_financial.png"
              alt="MoneyMate wireframe for financial goal screens"
              width={1134}
              height={1106}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Color Palette</h3>
          <p className="text-muted-foreground leading-relaxed">
            For the color palette, I chose green because it's often linked to wealth and also conveys a sense of harmony, which fits well with a financial management app. I added yellow to represent the color of gold coins, bringing a more optimistic vibe to the design. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="w-full rounded-lg overflow-hidden ">
            <ExpandableImage
              src="/moneymate/color_palette.svg"
              alt="Color palette for the design system"
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw" 
              
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden ">
            <ExpandableImage
              src="/moneymate/color_shades.svg"
              alt="Color shades for the design system"
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
          </div>
          </div>
          
            
          
          
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">UI Kit</h3>
          <p className="text-muted-foreground leading-relaxed">
            After finalizing the colors and typography, I created a quick UI kit containing all the recurring elements needed for the prototype. The prototype was built on the polished wireframes, with adjustments to element positioning and container widths to better fit the mobile screen and enhance the overall color scheme.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <ExpandableImage
              src="/moneymate/ui_kit.svg"
              alt="UI kit for the design system"
              className="w-full h-autoobject-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
        </div>

        <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Typography</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For typography, I chose Arvo for headlines and the logo because of its decorative serif style, which adds character. Since serif fonts aren't always ideal for longer digital text, I paired Arvo with Geologica, a more structured and balanced font. Geologica is versatile and works well in different weights, making it a great choice for body text and supporting content throughout the app.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
                    {/* Left Card: Color Palette */}
                    <div className="w-full rounded-lg overflow-hidden ">
                      <ExpandableImage
                        src="/moneymate/geologica.svg"
                        alt="Examples of the Geologica font in different sizes and thicknesses."
                        className="w-full h-autoobject-contain rounded-md shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
        
                    {/* Right Card: Color Shades */}
                    <div className="w-full rounded-lg overflow-hidden">
                      <ExpandableImage
                        src="/moneymate/arvo.svg"
                        alt="Examples of the Arvo font in different sizes and thicknesses."
                        className="w-full h-autoobject-contain rounded-md shadow-2xl"
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
          <h3 className="text-xl font-semibold text-foreground">Final Visual Design</h3>
          <p className="text-muted-foreground leading-relaxed">
            The final 
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden ">
            <ExpandableImage
              src="/moneymate/prototype_landing.png"
              alt="MoneyMate prototype of login, registration and landing page component library"
              width={1134}
              height={1106}
              fill
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <ExpandableImage
              src="/moneymate/prototype_personalization.png"
              alt="MoneyMate prototype of financial dashboards screens"
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <ExpandableImage
              src="/moneymate/prototype_dashboards.png"
              alt="MoneyMate prototype of financial dashboards screens"
              
              className="w-full h-auto object-contain rounded-md shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Mockups</h3>
          <p className="text-muted-foreground leading-relaxed">
            The presentation created for the final submission of the project included mockups of the app's key screens.
          </p>
          <div className="w-full max-w-5xl justify-center">
          
          <ImageCarousel />
        </div>
        </div>
        

      
      </section>

      
      {/* Launching */}
      <section id="learnings" className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Learnings</h2>

        

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Key Learnings</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Importance of Wireframing</h4>
              <p className="text-muted-foreground leading-relaxed">
                Building the wireframe early on is essential to define the structure and guide the final prototype.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Font Pairing</h4>
              <p className="text-muted-foreground leading-relaxed">
                Combining different fonts can create a balanced and engaging visual hierarchy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Color Usage</h4>
              <p className="text-muted-foreground leading-relaxed">
                I learned that yellow is a bold color choice because its contrast ratio can be challenging to balance with other colors, so I will use it more cautiously in future designs.
              </p>
            </div>
          </div>
        </div>

        
        
      </section>
    </article>
  )
}
