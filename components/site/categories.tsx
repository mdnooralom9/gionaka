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
  Wind,
  Smartphone,
  Laptop,
  Shield,
  CookingPot,
  Baby,
  HeartHandshake,
  Truck,
  Droplets,
  Tv,
  Camera,
  Home,
  type LucideIcon,
} from "lucide-react"

import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

type Category = {
  label: string
  description: string
  icon: LucideIcon
}

const categories: Category[] = [
  {
    label: "Electrician",
    description: "Wiring • Repair • Installation",
    icon: Zap,
  },
  {
    label: "Plumber",
    description: "Pipe Repair • Fittings • Leakage",
    icon: Wrench,
  },
  {
    label: "Carpenter",
    description: "Furniture • Woodwork • Doors",
    icon: Hammer,
  },
  {
    label: "Painter",
    description: "Interior • Exterior • Polish",
    icon: Paintbrush,
  },
  {
    label: "Mechanic",
    description: "Bike • Car • Service",
    icon: Cog,
  },
  {
    label: "Driver",
    description: "Taxi • Personal • Delivery",
    icon: Car,
  },
  {
    label: "Mason",
    description: "Brickwork • Concrete • Tiles",
    icon: BrickWall,
  },
  {
    label: "Cleaner",
    description: "Home • Office • Deep Cleaning",
    icon: Sparkles,
  },
  {
    label: "Gardener",
    description: "Garden • Lawn • Maintenance",
    icon: Trees,
  },
  {
    label: "Welder",
    description: "Steel • Iron • Fabrication",
    icon: Flame,
  },
  {
    label: "Housekeeping",
    description: "Home • Office Assistance",
    icon: BedDouble,
  },
  {
    label: "Construction",
    description: "Building • Labour • Civil Work",
    icon: HardHat,
  },
  {
    label: "AC Technician",
    description: "AC Repair • Installation",
    icon: Wind,
  },
  {
    label: "Mobile Repair",
    description: "Android • iPhone Service",
    icon: Smartphone,
  },
  {
    label: "Computer Repair",
    description: "Laptop • Desktop Service",
    icon: Laptop,
  },
  {
    label: "Security Guard",
    description: "Residential • Commercial",
    icon: Shield,
  },
  {
    label: "Cook",
    description: "Home • Event • Catering",
    icon: CookingPot,
  },
  {
    label: "Babysitter",
    description: "Child Care • Home Support",
    icon: Baby,
  },
  {
    label: "Elder Care",
    description: "Senior Assistance",
    icon: HeartHandshake,
  },
  {
    label: "Packers & Movers",
    description: "Home • Office Shifting",
    icon: Truck,
  },
  {
    label: "RO Technician",
    description: "Water Purifier Service",
    icon: Droplets,
  },
  {
    label: "Appliance Repair",
    description: "TV • Fridge • Washing Machine",
    icon: Tv,
  },
  {
    label: "CCTV Installation",
    description: "Home • Office Security",
    icon: Camera,
  },
  {
    label: "Home Services",
    description: "General Household Assistance",
    icon: Home,
  },
]

export function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28"
    >
      <SectionHeading
        eyebrow="Popular Categories"
        title="Find Local Professionals by Category"
        description="Browse skilled professionals across popular service categories. Whether you're looking for work or hiring locally, Gionaka helps you connect with the right people nearby."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <Reveal key={category.label} delay={index * 40}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {category.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
