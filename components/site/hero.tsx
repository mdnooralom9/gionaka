import { MapPin, Star } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { GooglePlayButton, AppStoreButton } from './store-buttons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-blob [animation-delay:3s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <MapPin className="h-4 w-4" />
            India’s Digital Labour Chowk
          </span>

          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Find Work.
            <br />
            <span className="text-primary">Hire Local.</span>
            <br />
            Build India.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            connects nearby workers and employers.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <GooglePlayButton />
            <AppStoreButton />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start">
            <div className="flex -space-x-2">
              {['#06b6d4', '#f97316', '#0e7490', '#fb923c'].map((c) => (
                <span
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-background"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <strong className="font-semibold text-foreground">4.8</strong>
              rated by 10,000+ workers
            </span>
          </div>
        </div>

        <div className="relative flex justify-center animate-float">
          <div className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] translate-y-6 rounded-[3rem] bg-gradient-to-b from-accent to-transparent" />
          <PhoneMockup
            src="/app-home-screen.png"
            alt="Gionaka app home screen showing Find Work and Hire Worker options with nearby workers"
            priority
          />
        </div>
      </div>
    </section>
  )
}
