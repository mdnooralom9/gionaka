import Image from 'next/image'
import { BriefcaseBusiness, Handshake, MapPin, Sparkles } from 'lucide-react'
import { DownloadAppButton } from './store-buttons'
import { CategoryCarousel } from './categories'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-b from-primary/8 via-primary/3 to-background pt-28 pb-16 sm:pt-32 md:pb-24"
    >

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <p className="order-1 mx-auto max-w-xl text-center text-pretty text-lg leading-relaxed text-muted-foreground lg:col-start-1 lg:row-start-2 lg:mx-0 lg:text-left">
          Gionaka connects people seeking local work with nearby workers and skilled service providers, making it easier to find opportunities or hire trusted help in your area.
        </p>

        <h1 className="order-2 whitespace-nowrap text-center text-[clamp(1.5rem,4vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight text-foreground lg:col-start-1 lg:row-start-1 lg:text-left">
          <span className="text-primary">Find Work</span>
          <span className="px-2 text-muted-foreground">|</span>
          <span className="text-secondary">Hire Locally</span>
        </h1>

        <div className="order-3 grid w-full max-w-sm grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3 lg:col-start-1 lg:row-start-3 lg:justify-start">
          {[
            { label: 'Find Work Easily', icon: BriefcaseBusiness },
            { label: 'Hire Locally', icon: MapPin },
            { label: 'Connect Directly', icon: Handshake },
            { label: 'Always Free', icon: Sparkles },
          ].map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-2 text-xs font-medium text-foreground shadow-sm sm:gap-2 sm:px-4 sm:text-sm"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <div className="relative order-4 flex w-full justify-center lg:col-start-2 lg:row-span-4 lg:row-start-1">
          <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <Image
                src="/local-hiring-success.png"
              alt="A happy local customer watches a skilled worker complete a service job"
              fill
              priority
              className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <CategoryCarousel />
            </div>
          </div>
        </div>

        <div className="order-5 flex justify-center lg:col-start-1 lg:row-start-4 lg:justify-start">
          <DownloadAppButton className="w-full max-w-xs sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
