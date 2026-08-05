import {
  Briefcase,
  Users,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  accent: 'cyan' | 'orange'
}

const features: Feature[] = [
  {
    icon: Briefcase,
    title: 'Find Work',
    description:
      'Discover nearby jobs, daily work, and local opportunities that match your skills.',
    accent: 'cyan',
  },
  {
    icon: Users,
    title: 'Hire Locally',
    description:
      'Post your requirement or browse local professionals to find the right match.',
    accent: 'orange',
  },
  {
    icon: MapPin,
    title: 'Nearby Search',
    description:
      'Location-based matching helps you discover the most relevant people and opportunities nearby.',
    accent: 'cyan',
  },
  {
    icon: PhoneCall,
    title: 'Direct Calling',
    description:
      'Call directly or post your requirement if no suitable match is found.',
    accent: 'orange',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Community',
    description:
      'Every account is verified with a phone number before getting started.',
    accent: 'cyan',
  },
  {
    icon: Zap,
    title: 'Fast & Easy',
    description:
      'A simple interface built for everyone — find or hire in minutes.',
    accent: 'orange',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to work or hire"
        description="Gionaka brings the local labour chowk to your phone with powerful, simple tools."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon
          const isCyan = feature.accent === 'cyan'
          return (
            <Reveal
              key={feature.title}
              delay={i * 80}
              className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <span
                className={
                  isCyan
                    ? 'flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110'
                    : 'flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-transform duration-300 group-hover:scale-110'
                }
              >
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
