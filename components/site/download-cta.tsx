import { GooglePlayButton, AppStoreButton } from "./store-buttons";
import { Reveal } from "./reveal";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 to-cyan-400 px-6 py-16 text-center shadow-2xl sm:px-10 md:px-16">

          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10">

            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              Get the App
            </span>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              One simple platform to find work, hire local professionals, and
              connect with people nearby.
            </p>

            {/* Store Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GooglePlayButton className="bg-background text-foreground shadow-xl transition-transform duration-300 hover:scale-105" />

              <AppStoreButton className="border border-white/30 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20" />
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}