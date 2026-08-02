import { GooglePlayButton, AppStoreButton } from './store-buttons'
import { Reveal } from './reveal'

export function DownloadCta() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-2xl shadow-primary/30 sm:px-12 md:py-20">
        {/* decorative accents */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Your next job — or your next hire — is one tap away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Join thousands of workers and employers already building India with
            Gionaka. Download the app and get started today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GooglePlayButton className="bg-background text-foreground shadow-xl" />
            <AppStoreButton className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
