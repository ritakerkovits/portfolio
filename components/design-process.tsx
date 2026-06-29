import { Search, Lightbulb, Pencil, Rocket } from "lucide-react"

export function DesignProcess() {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding user needs, market trends, and business objectives through comprehensive research.",
    },
    {
      icon: Lightbulb,
      title: "Ideation",
      description:
        "Brainstorming creative solutions and exploring multiple design directions through sketching and workshops.",
    },
    {
      icon: Pencil,
      title: "Design",
      description: "Creating detailed visual designs, establishing design systems, and refining the user interface.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Delivering the final product with proper documentation and supporting the implementation process.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Design Process</h2>
          <p className="text-muted-foreground text-lg">
            My systematic approach to creating meaningful design solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent rotate-45 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white -rotate-45" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
