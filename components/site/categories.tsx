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
} from "lucide-react"

import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

const categories: { label: string; icon: LucideIcon }[] = [
  { label: "Electrician", icon: Zap },
  { label: "Plumber", icon: Wrench },
  { label: "Carpenter", icon: Hammer },
  { label: "Painter", icon: Paintbrush },
  { label: "Mechanic", icon: Cog },
  { label: "Driver", icon: Car },
  { label: "Mason", icon: BrickWall },
  { label: "Cleaner", icon: Sparkles },
  { label: "Gardener", icon: Trees },
  { label: "Welder", icon: Flame },
  { label: "Housekeeping", icon: BedDouble },
  { label: "Construction", icon: HardHat },
]

export function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        eyebrow="Popular Categories"
        title="Find the Right Local Professional"
        description="Browse skilled local workers across multiple categories. Whether you're looking for work or hiring locally, Gionaka helps you connect with the right people nearby."
      />

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon

          return (
            <li key={cat.label} className="list-none">
              <Reveal
                delay={(i % 4) * 70}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>

                <div>
                  <h3 className="font-semibold text-foreground">
                    {cat.label}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Local {cat.label.toLowerCase()} services
                  </p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}