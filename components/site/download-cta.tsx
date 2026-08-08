import { GooglePlayButton, AppStoreButton } from "./store-buttons";
import { Reveal } from "./reveal";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
    >
      <Reveal
        className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          bg-primary
          px-6
          py-16
          text-center
          shadow-2xl
          shadow-primary/30
          sm:px-12
          md:py-20
        "
      >
        {/* Background Effects */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Small Badge */}
          <span className="inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground">
            Get the App
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Find Work or Hire Local
          </h2>

{/* Description */}
<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-primary-foreground/90">
  Download Gionaka to find work, hire local professionals, and connect with nearby people across India.
</p>

          {/* Store Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GooglePlayButton className="bg-background text-foreground shadow-xl hover:scale-105 transition-transform duration-300" />

            <AppStoreButton className="border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors duration-300" />
          </div>

          {/* Bottom Text */}
          <p className="mt-8 text-sm text-primary-foreground/80">
            Available on Android • iOS Support Coming Soon
          </p>
        </div>
      </Reveal>
    </section>
  );
}