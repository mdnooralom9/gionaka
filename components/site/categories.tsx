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
    description: "Android • iPhone",
    icon: Smartphone,
  },
  {
    label: "Computer Repair",
    description: "Laptop • Desktop",
    icon: Laptop,
  },
  {
    label: "Security Guard",
    description: "Residential • Commercial",
    icon: Shield,
  },
  {
    label: "Cook",
    description: "Home • Event Catering",
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
    icon: Home,
  },
  {
    label: "Tile Worker",
    description: "Floor • Wall Tile Installation",
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
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28"
    >
      <SectionHeading
        eyebrow="Popular Categories"
        title="Find Local Professionals by Category"
        description="Browse skilled professionals across popular service categories. Whether you're looking for work or hiring locally, Gionaka helps you connect with the right people nearby."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  min-h-[104px]
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

      <div className="mt-16 rounded-3xl border border-border bg-gradient-to-r from-primary/5 via-background to-secondary/5 p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Growing Every Month
            </span>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground">
              Can't find your category?
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Gionaka continuously adds new service categories to help more
              workers and employers connect locally. Our platform is designed
              to support a growing range of skilled professionals across India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-primary">
                30+
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Service Categories
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-primary">
                Local
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Location Based
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-primary">
                Direct
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                No Middlemen
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-primary">
                Fast
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Easy to Connect
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className="mt-10 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-7 text-muted-foreground">
          Gionaka connects local professionals and people looking for services
          through a simple location-based platform. Browse categories, choose
          the right service, and connect directly without middlemen.
        </p>
      </div>
    </section>
  );
}