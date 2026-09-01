import { Layers3, ListFilter, MapPin, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: Layers3,
    title: 'Wide Range of Services',
    description:
      "Explore a wide range of local work and everyday service needs in one place. Gionaka brings different types of local services together so you don't have to search across multiple platforms.",
  },
  {
    icon: ListFilter,
    title: 'Categories & Sub-Categories',
    description:
      'Choose a relevant category and narrow down your requirement with suitable sub-categories. This helps you find more specific services instead of searching through unrelated results.',
  },
  {
    icon: MapPin,
    title: 'Find Help Near You',
    description:
      'Use your location to discover relevant workers and service providers nearby. Gionaka makes it easier to find local help based on what you need and where you need it.',
  },
  {
    icon: Sparkles,
    title: 'Simple & Convenient',
    description:
      'Whether you need help for your home, work, or everyday requirements, Gionaka makes discovering local workers simple, quick, and convenient.',
  },
]

export function CategoriesServices() {
  return (
    <section id="categories-services" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Categories & Services"
          title="Find the Right Local Worker for Your Needs"
          description="Gionaka gives you access to a wide range of local work and service categories, with relevant sub-categories to help you find exactly what you need. Choose your requirement, explore suitable options, and connect with nearby workers or service providers in just a few minutes."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal
                key={benefit.title}
                delay={index * 80}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
