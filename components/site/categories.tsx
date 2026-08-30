import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const categoryKeywords = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Mason",
  "Mechanic",
  "Driver",
  "Welder",
  "Cleaner",
  "Gardener",
  "AC Technician",
  "Mobile Repair",
  "Computer Repair",
  "Security Guard",
  "Cook",
  "Babysitter",
  "Elder Care",
  "Delivery Partner",
  "RO Technician",
  "CCTV Installation",
  "Appliance Repair",
  "Tile Worker",
  "Fabricator",
  "Glass Worker",
  "Aluminium Worker",
  "Interior Worker",
  "Helper",
  "House Maid",
  "Construction Worker",
];

export function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        eyebrow="LOCAL WORK & SERVICES"
        title="A Wide Range of Local Work & Service Categories"
        description="Find skilled workers, service professionals, and local job opportunities across a wide range of everyday needs — all in one platform."
      />

      <Reveal className="mx-auto mt-10 max-w-5xl">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
          <p className="text-center text-base leading-8 text-muted-foreground sm:text-lg">
            Gionaka brings together local workers and service professionals
            across home services, construction, repair and maintenance,
            transportation, delivery, cleaning, security, caregiving,
            technical services, and many other types of local work.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {categoryKeywords.map((category) => (
              <span
                key={category}
                className="
                  rounded-full
                  border
                  border-border
                  bg-background
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  text-foreground
                  transition-colors
                  duration-200
                  hover:border-primary/40
                  hover:bg-accent
                  hover:text-primary
                "
              >
                {category}
              </span>
            ))}

            <span
              className="
                rounded-full
                border
                border-primary/20
                bg-primary/5
                px-3.5
                py-2
                text-sm
                font-semibold
                text-primary
              "
            >
              And More
            </span>
          </div>

          <div className="mx-auto mt-8 max-w-4xl border-t border-border pt-7">
            <p className="text-center text-sm leading-7 text-muted-foreground sm:text-base">
              Whether you're looking for work or hiring locally, Gionaka helps
              you discover the right category and connect with people nearby.
              From electricians, plumbers, carpenters and painters to drivers,
              mechanics, technicians, delivery partners, construction workers
              and more, Gionaka is built to support a wide range of local work
              and service needs.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}