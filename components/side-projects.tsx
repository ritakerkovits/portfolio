import { ExpandableImage } from "@/components/image-lightbox"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Optimizing Financial Dashboard",
    image: "/Dashboard_Wireframe.png",
    alt: "Financial dashboard wireframe showcasing data visualization and user interface design",
    description:
      "This UX optimization refines a financial tracking dashboard by introducing smarter data visualizations, such as a scalable treemap and portfolio trend line charts, to make complex investment data instantly actionable.",
    reversed: false,
    href: null,
  },
  {
    title: "MoneyMate Financial App Dashboard",
    image: "/moneymate/moneymate-cover.png",
    alt: "MoneyMate financial mockup",
    description:
      "A comprehensive component library and design system created to streamline design workflows and ensure consistency across projects. Features reusable components, color palettes, typography scales, and detailed documentation for developers and designers.",
    reversed: true,
    href: "/work/moneymate",
  },
  {
    title: "Illustration Series",
    image: "/digital-illustration-of-trees-and-landscape-with-w.jpg",
    alt: "Illustration series",
    description:
      "An ongoing weekly illustration series that explores themes of technology, human connection, and the natural world. Each piece is created digitally using a combination of vector and raster techniques, focusing on storytelling through visual metaphors and contemporary aesthetics.",
    reversed: false,
    href: null,
  },
]

export function SideProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Other things I'm proud of</h2>
          <p className="text-muted-foreground text-lg">
            Experimental work and passion projects that fuel my creativity
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.title} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={project.reversed ? "md:order-2" : ""}>
                <div className="relative w-full overflow-hidden  bg-gray-100 aspect-[4/3]">
                  <ExpandableImage
                    src={project.image}
                    alt={project.alt}
                    fill
                    
                  />
                </div>
              </div>
              <div className={project.reversed ? "md:order-1" : ""}>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                {project.href && (
                  <Link
                    href={project.href}
                    className="group mt-6 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    See details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
