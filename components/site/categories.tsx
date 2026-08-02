import {
  Zap,
  Wrench,
  Hammer,
  Paintbrush,
  Cog,
  Car,
  BrickWall,
  Sparkles,
  Trees,
  Flame,
  BedDouble,
  HardHat,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const categories: { label: string; icon: LucideIcon }[] = [
  { label: 'Electrician', icon: Zap },
  { label: 'Plumber', icon: Wrench },
  { label: 'Carpenter', icon: Hammer },
  { label: 'Painter', icon: Paintbrush },
  { label: 'Mechanic', icon: Cog },
  { label: 'Driver', icon: Car },
  { label: 'Mason', icon: BrickWall },
  { label: 'Cleaner', icon: Sparkles },
  { label: 'Gardener', icon: Trees },
  { label: 'Welder', icon: Flame },
  { label: 'Housekeeping', icon: BedDouble },
  { label: 'Construction', icon: HardHat },
]

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        eyebrow="Categories"
        title="Skills for every job"
        description="Whatever you need done — or whatever you do best — there’s a category for it."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <Reveal
              key={cat.label}
              delay={(i % 4) * 70}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="font-semibold text-foreground">{cat.label}</span>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
