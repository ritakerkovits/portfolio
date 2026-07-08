import React from 'react'

const steps = [
  { number: "1", label: "Discovery" },
  { number: "2", label: "Ideation & Wireframing" },
  { number: "3", label: "Prototyping" },
  { number: "4", label: "Reflection" },
]

export function ProcessTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center flex-1 group">
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 border border-[var(--primary)] rotate-45 bg-background" />
                <span className="relative z-10 font-mono text-lg font-bold text-[var(--primary)]">
                  {step.number}
                </span>
              </div>
              <span className="mt-6 text-sm font-medium text-[var(--primary)] text-center tracking-wide whitespace-nowrap">
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block flex-1 h-[1px] bg-[var(--primary)]/40 mx-2 self-start mt-7" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}