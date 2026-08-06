import {
  MapPin,
  PhoneCall,
  LayoutGrid,
  Flag,
  Shield,
  Check,
} from "lucide-react";
import { PhoneMockup } from "./phone-mockup";
import { Reveal } from "./reveal";

const reasons = [
  {
    icon: MapPin,
    title: "Nearby Connections",
    description:
      "Find nearby people based on your selected location for faster and more relevant local connections.",
  },
  {
    icon: PhoneCall,
    title: "Direct Communication",
    description:
      "Call directly or post your requirement if you don't find the right match — no middlemen involved.",
  },
  {
    icon: LayoutGrid,
    title: "Simple & Easy to Use",
    description:
      "A clean, user-friendly interface designed to make finding work or hiring locally simple for everyone.",
  },
  {
    icon: Flag,
    title: "Made for Local Communities",
    description:
      "Built to help people connect within their local area for everyday work and services across India.",
  },
  {
    icon: MapPin,
    title: "Location-Based Matching",
    description:
      "Connect with nearby people based on your selected location to save time and improve local visibility.",
  },
  {
    icon: Shield,
    title: "Phone Number Sign-In",
    description:
      "Sign in quickly using your phone number for a simple and convenient experience.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-gionaka"
      className="bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Why Choose Gionaka
            </span>

            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Connect Locally. Communicate Directly.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              A simple location-based platform that helps people connect
              directly for local work and services without middlemen.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal
                  as="li"
                  key={reason.title}
                  delay={index * 80}
                  className="flex gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>

                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                      {reason.title}

                      <Check
                        className="h-4 w-4 text-primary"
                        strokeWidth={3}
                      />
                    </h3>

                    <p className="mt-1 leading-7 text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* Right Image */}
        <Reveal
          className="relative flex justify-center"
          delay={150}
        >
          <div className="absolute inset-0 -z-10 mx-auto h-[82%] w-[82%] translate-y-8 rounded-[3rem] bg-gradient-to-b from-secondary/15 to-transparent" />

          <PhoneMockup
            src="/app-results-screen.png"
            alt="Gionaka app displaying nearby local professionals with direct call options"
          />
        </Reveal>
      </div>
    </section>
  );
}