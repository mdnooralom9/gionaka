import { MapPin, Ban, PhoneCall, LayoutGrid, Flag, Check } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { Reveal } from './reveal'

const reasons = [
  {
    icon: MapPin,
    title: 'Nearby Matching',
    description: 'We rank results by distance so you connect with the closest match.',
  },
  {
    icon: Ban,
    title: 'No Middleman',
    description: 'Talk and deal directly — no agents, no commissions, no delays.',
  },
  {
    icon: PhoneCall,
    title: 'Easy Calling',
    description: 'One tap to call. Get to work or get hired without the hassle.',
  },
  {
    icon: LayoutGrid,
    title: 'Simple Interface',
    description: 'Clean, intuitive design that anyone can use from day one.',
  },
  {
    icon: Flag,
    title: 'Made for India',
    description: 'Built for Indian workers and employers, in your city, your way.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Why Gionaka
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Built to get you working, faster
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <Reveal as="li" key={reason.title} delay={i * 90} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                      {reason.title}
                      <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>

        <Reveal className="relative flex justify-center" delay={150}>
          <div className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] translate-y-8 rounded-[3rem] bg-gradient-to-b from-secondary/15 to-transparent" />
          <PhoneMockup
            src="/app-results-screen.png"
            alt="Gionaka app showing nearby electricians with call buttons and distance"
          />
        </Reveal>
      </div>
    </section>
  )
}
