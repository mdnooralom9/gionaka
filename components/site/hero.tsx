import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { DownloadAppButton } from './store-buttons'

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
            The Digital Labour Chowk
          </span>

          <h1 className="mt-6 whitespace-nowrap text-[clamp(1.5rem,4vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            <span className="text-primary">Find Work</span>
            <span className="px-2 text-muted-foreground">|</span>
            <span className="text-secondary">Hire Locally</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Gionaka connects people seeking local work with nearby workers and skilled service providers, making it easier to find opportunities or hire trusted help in your area.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <DownloadAppButton className="w-full max-w-xs sm:w-auto" />
          </div>

        </div>

        <div className="relative flex justify-center animate-float">
          <div className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] translate-y-6 rounded-[3rem] bg-linear-to-b from-accent to-transparent" />
          <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/local-hiring-success.png"
              alt="A happy local customer watches a skilled worker complete a service job"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
