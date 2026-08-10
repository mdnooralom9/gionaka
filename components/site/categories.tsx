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
} from "lucide-react";

import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

type Category = {
  label: string;
  description: string;
  icon: LucideIcon;
};

const categories: Category[] = [
  {
    label: "Electriciaan",
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
    description: "Bike • Car • Repair",
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
    description: "Home • Office Cleaning",
    icon: Sparkles,
  },
  {
    label: "Gardener",
    description: "Garden • Lawn Care",
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
    description: "Building • Civil Work",
    icon: HardHat,
  },
  {
    label: "AC Technician",
    description: "Repair • Installation",
    icon: Wind,
  },
  {
    label: "Mobile Repair",
    description: "Screen • Battery • Software",
    icon: Smartphone,
  },
  {
    label: "Computer Repair",
    description: "Laptop • Desktop • Repair",
    icon: Laptop,
  },
  {
    label: "Security Guard",
    description: "Residential • Commercial",
    icon: Shield,
  },
  {
    label: "Cook",
    description: "Home • Restaurant • Catering",
    icon: CookingPot,
  },
  {
    label: "Babysitter",
    description: "Child Care Services",
    icon: Baby,
  },
  {
    label: "Elder Care",
    description: "Senior Care Assistance",
    icon: HeartHandshake,
  },
  {
    label: "Packers & Movers",
    description: "Home & Office Shifting",
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
    label: "Delivery Partner",
    description: "Food • Parcel • Courier",
    icon: Truck,
  },
  {
    label: "Tile Worker",
    description: "Floor • Wall Installation",
    icon: BrickWall,
  },
  {
    label: "Fabricator",
    description: "Steel • Gates • Railings",
    icon: Flame,
  },
  {
    label: "Glass Worker",
    description: "Glass Fitting • Repair",
    icon: Sparkles,
  },
  {
    label: "Aluminium Worker",
    description: "Doors • Windows • Frames",
    icon: Wrench,
  },
  {
    label: "Interior Worker",
    description: "Modular • False Ceiling",
    icon: Home,
  },
  {
    label: "Helper",
    description: "Construction • Loading • General",
    icon: HardHat,
  },
  {
    label: "House Maid",
    description: "Cleaning • Cooking • Home Care",
    icon: BedDouble,
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        eyebrow="Categories"
        title="Find Local Services Across Multiple Categories"
        description="Browse skilled local professionals across popular service categories. Whether you're looking for work or hiring nearby workers, Gionaka helps you connect quickly."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <Reveal
              key={category.label}
              delay={(index % 4) * 70}
              className="group"
            >
              <article
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-xl
                  hover:shadow-primary/10
                  min-h-26
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-accent
                    text-primary
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={2}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {category.label}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* SEO Content */}
      <div className="mt-12 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-7 text-muted-foreground">
          Gionaka helps people find local workers and local jobs across
          multiple service categories including electricians, plumbers,
          carpenters, painters, drivers, mechanics, construction workers,
          cleaners, delivery partners and many more. Connect directly with
          nearby professionals without middlemen.
        </p>
      </div>
    </section>
  );
}
