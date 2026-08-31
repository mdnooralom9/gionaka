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
  const isAutoScrolling = useRef(false)
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
        isAutoScrolling.current = true
        scroller.scrollLeft += delta * 0.035
        isAutoScrolling.current = false
        const loopPoint = scroller.scrollWidth / 2
        if (scroller.scrollLeft >= loopPoint) scroller.scrollLeft -= loopPoint
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
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
      className="absolute inset-x-3 bottom-3 z-10 flex cursor-grab touch-pan-x snap-x gap-2 overflow-x-auto overscroll-x-contain rounded-xl bg-background/20 p-2 pb-2 backdrop-blur-[2px] active:cursor-grabbing sm:inset-x-5 sm:bottom-5 sm:gap-3 sm:p-2.5"
        onPointerDown={pauseForInteraction}
        onPointerUp={resumeAfterInteraction}
        onPointerCancel={resumeAfterInteraction}
        onPointerLeave={resumeAfterInteraction}
        onScroll={() => {
          if (!isAutoScrolling.current) pauseForInteraction()
        }}
        aria-label="Local service categories"
      >
        {[...categories, ...categories].map((category, index) => {
          const Icon = category.icon
          return (
            <article
              key={`${category.label}-${index}`}
              className="flex h-16 min-w-44 shrink-0 snap-start items-center gap-3 rounded-xl border border-border bg-card px-4 shadow-sm"
            >
              <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <h3 className="whitespace-nowrap text-sm font-semibold text-foreground">{category.label}</h3>
            </article>
          )
        })}
      </div>
  )
} 
