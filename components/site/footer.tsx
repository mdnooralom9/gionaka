import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const companyLinks = [
  { label: "About", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Categories", href: "#categories" },
  { label: "FAQ", href: "#faq" },
  { label: "Download App", href: "#download" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Help Centre", href: "#faq" },
  { label: "Contact Support", href: "mailto:support@gionaka.com" },
];

const socials = [
  {
    label: "Twitter",
    href: "https://twitter.com/gionakaxnoor",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/gionakaxnoor",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/gionakaxnoor",
    path: "M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z",
  },
  {
  label: "YouTube",
  href: "https://youtube.com/@gionakaxnoor",
  path: "M10 15L15 12L10 9V15ZM21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19Z",
},
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

        <div className="mb-14 rounded-3xl border border-border bg-card p-8 text-center shadow-sm">

          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Find Work. Hire Local. Connect Nearby.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Gionaka is a location-based platform that helps people find work,
            hire local professionals, and connect directly with nearby people
            through a simple and trusted experience.
          </p>

        </div>

        <div className="grid gap-12 md:grid-cols-[1.7fr_1fr_1fr_1fr]">

          <div>

            <a
              href="#top"
              className="flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </span>

              <span className="text-2xl font-extrabold tracking-tight">
                Gionaka
              </span>
            </a>

            <p className="mt-5 max-w-sm leading-8 text-muted-foreground">
              Helping local communities connect for work and services through
              a simple location-based platform.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:support@gionaka.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                support@gionaka.com
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                Available Across India
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Stay connected for updates, new features, and announcements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-border pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gionaka. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground">
              Connecting local communities through trusted local services.
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}