import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    label: "WEBSITE REBRANDING",
    title: "PitchCave: Full-Stack Redesign & Platform Development",
    description:
      "End-to-end transformation of PitchCave, from UI/UX design to developing a responsive, accessible CMS.",
    
    image: "/green-mobile-app-interface-with-eco-technology.jpg",
    link: "/work/pitch-cave",
    cta: "View Case Study",
  },
  {
    label: "WEBSITE REDESIGN",
    title: "beWANTED Website & Branding Refresh",
    description:
      "Complete visual identity transformation for the beWANTED career event.",
    
    image: "/bewanted/cover-image.png",
    link: "/work/bewanted",
    cta: "Explore Project",
  },
]

export function FeaturedWorks() {
  return (
    <section id="work"className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl font-mono font-semibold tracking-[0.1em] text-[#06402B] dark:text-[#D4F15E] uppercase">Case studies / Portfolio items</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my design approach and problem-solving skills
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group/card relative"
            >
              {/* Mobile: stacked layout */}
              <div className="lg:hidden w-full overflow-hidden bg-card dark:bg-[#032015] border border-[#06402B] dark:border-[#2dca91] shadow-xl">
  
                {/* Unified Padding Wrapper - Encloses both Image and Text for perfect width alignment */}
                <div className="px-6 pt-6 pb-6">
                  
                  {/* Image Component - Now respects parent padding parameters instead of bleeding edge-to-edge */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Text Content Block */}
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#06402B] dark:text-[#D4F15E] uppercase mb-3 block">
                      {project.label}
                    </span>
                    <h3 className="text-2xl font-medium text-[#1a1a1a] dark:text-[#FAF8F0] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#4a4a4a] dark:text-[#FAF8F0]/80 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <Link href={project.link}>
                      <button className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider text-sm px-6 py-3 transition-all duration-300 ease-out cursor-pointer">
                        <span>{project.cta}</span>
                        <span className="w-2 h-2 rotate-45 border border-primary-foreground group-hover:bg-primary-foreground group-hover:rotate-[225deg] transition-all duration-300 ease-out" />
                      </button>
                    </Link>
                  </div>

                </div>
              </div>

              {/* Desktop: asymmetric overlapping layout */}
              <div className="hidden lg:block relative">
                {/* Content card - theme aware styling */}
                <div 
                  className={`relative bg-card dark:bg-[#06402B] border border-[#06402b59] dark:border-[#368d6d80] ${index % 2 === 0 ? 'mr-[25%]' : 'ml-[25%]'}`}
                >
                  <div className={`py-12 ${index % 2 === 0 ? 'pl-10 pr-[22%]' : 'pr-10 pl-[22%]'}`}>
                    {/* Overline - theme aware accent */}
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#06402B] dark:text-[#D4F15E] uppercase mb-4 block">
                      {project.label}
                    </span>
                    
                    {/* Primary Heading */}
                    <h3 className="text-3xl xl:text-4xl font-medium text-[#1a1a1a] dark:text-[#FAF8F0] mb-4 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Body Content */}
                    <p className="text-[#4a4a4a] dark:text-[#FAF8F0]/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    
                    {/* CTA Button */}
                    <Link href={project.link}>
                      <button className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider text-sm px-8 py-3.5 transition-all duration-300 ease-out cursor-pointer">
                        <span>{project.cta}</span>
                        <span className="w-2.5 h-2.5 rotate-45 border border-primary-foreground group-hover:bg-primary-foreground group-hover:rotate-[225deg] transition-all duration-300 ease-out" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Overlapping image - sized to fit with content, extending beyond card edges */}
                <div 
                  className={`absolute w-[36%] top-[-6%] bottom-[-6%] shadow-2xl overflow-hidden z-20 transition-transform duration-500 ease-out group-hover/card:rotate-3 ${index % 2 === 0 ? 'right-[-2%]' : 'left-[-2%]'}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


