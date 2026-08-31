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
    <section id="categories" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <SectionHeading
        eyebrow="Local categories"
        title="Find Local Work. Hire Local Workers."
        description="Gionaka helps people discover nearby work opportunities and connect directly with local workers for everyday services and skilled jobs. From electricians, plumbers, and carpenters to painters, drivers, and repair specialists, find the right local connection in your area."
      />
    </section>
  )
} 
