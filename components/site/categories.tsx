"use client"

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
 
import { useEffect, useRef, useState } from "react"
 
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
 
export function CategoryCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const interactionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let frame = 0
    let lastTime = performance.now()

    const tick = (time: number) => {
      const scroller = scrollerRef.current
      const delta = time - lastTime
      lastTime = time

      if (scroller && !isInteracting && !document.hidden) {
        scroller.scrollLeft += delta * 0.035
        const loopPoint = (scroller.scrollWidth - scroller.clientWidth) / 2
        if (scroller.scrollLeft >= loopPoint) scroller.scrollLeft -= loopPoint
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      if (interactionTimeout.current) clearTimeout(interactionTimeout.current)
    }
  }, [isInteracting])

  const pauseForInteraction = () => {
    setIsInteracting(true)
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current)
  }

  const resumeAfterInteraction = () => {
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current)
    interactionTimeout.current = setTimeout(() => setIsInteracting(false), 900)
  }

  return (
    <div
      ref={scrollerRef}
      className="scrollbar-none absolute inset-x-2 bottom-2 z-10 flex cursor-grab touch-pan-x gap-1.5 overflow-x-auto overscroll-x-contain rounded-lg bg-background/20 p-1.5 pb-1.5 backdrop-blur-[2px] active:cursor-grabbing sm:inset-x-4 sm:bottom-4 sm:gap-2 sm:p-2"
        onPointerDown={pauseForInteraction}
        onPointerUp={resumeAfterInteraction}
        onPointerCancel={resumeAfterInteraction}
        onPointerLeave={resumeAfterInteraction}
        onWheel={() => {
          pauseForInteraction()
          resumeAfterInteraction()
        }}
        aria-label="Local service categories"
      >
        {[...categories, ...categories].map((category, index) => {
          const Icon = category.icon
          return (
            <article
              key={`${category.label}-${index}`}
              className="flex h-10 w-max shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-2.5 shadow-sm sm:h-11 sm:px-3"
            >
              <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <h3 className="whitespace-nowrap text-xs font-semibold text-foreground sm:text-sm">{category.label}</h3>
            </article>
          )
        })}
      </div>
  )
} 
