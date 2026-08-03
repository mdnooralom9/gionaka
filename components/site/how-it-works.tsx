import { MousePointerClick, ListChecks, MapPinned, PhoneCall } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Choose your role',
    description: 'Select whether you want to find work or hire a worker.',
  },
  {
    icon: ListChecks,
    title: 'Select category',
    description: 'Choose a category and subcategory to find the most relevant matches.',
  },
  {
    icon: MapPinned,
    title: 'View nearby results',
    description: 'See the closest matches ranked by distance from you.',
  },
  {
    icon: PhoneCall,
    title: 'Call or post',
    description: 'Call directly or post your requirement — no middleman.',
  },
]

export function HowItWorks() {
  return (
    <section id="about" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Get started in four simple steps"
          description="From opening the app to your first call — Gionaka keeps it effortless."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line on desktop */}
          <span
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary/30 via-primary/30 to-secondary/30 md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 120}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
