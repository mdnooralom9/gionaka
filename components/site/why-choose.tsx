import {
  MapPin,
  PhoneCall,
  LayoutGrid,
  Flag,
  Shield,
  Check,
} from "lucide-react";
import { Reveal } from "./reveal";

const reasons = [
  {
    icon: MapPin,
    title: "Location-Based Matching",
    description:
      "Connect with nearby workers or employers based on your selected location for faster and more relevant local connections.",
  },
  {
    icon: PhoneCall,
    title: "Direct Communication",
    description:
      "Call directly or post your requirement if you don't find the right match — no middlemen involved.",
  },
  {
    icon: LayoutGrid,
    title: "Easy to Use",
    description:
      "A clean and simple interface designed to help anyone find work or hire locally with ease.",
  },
  {
    icon: Shield,
    title: "Phone Number Sign-In",
    description:
      "Sign in securely using your phone number with a fast and hassle-free verification process.",
  },
  {
    icon: Flag,
    title: "Built for India",
    description:
      "Designed for India's local workforce and everyday service needs across cities, towns, and villages.",
  },
  {
    icon: Check,
    title: "Multiple Service Categories",
    description:
      "Browse a wide range of local service categories to quickly find the right worker or job nearby.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why-gionaka"
      className="bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

      </div>
    </section>
  );
}
