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

      {/* PART 2 STARTS HERE */}