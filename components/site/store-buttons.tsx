import { cn } from '@/lib/utils'

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        fill="#00d3f2"
        d="M47 32.6C40.6 39 37 48.6 37 61v390c0 12.4 3.6 22 10 28.4L269 256 47 32.6z"
      />
      <path fill="#00e676" d="M47 32.6 349 205l63-63L92 22C74 12 58 22 47 32.6z" />
      <path fill="#ffd600" d="M412 142 349 205l63 51 61-35c18-11 18-40 0-51l-61-28z" />
      <path fill="#ff3d00" d="M47 479.4C58 490 74 500 92 490l320-178-63-51L47 479.4z" />
    </svg>
  )
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} aria-hidden="true" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

export function GooglePlayButton({ className }: { className?: string }) {
  return (
    <a
      href="#download"
      className={cn(
        'group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background shadow-lg shadow-foreground/10 transition-transform hover:-translate-y-0.5',
        className,
      )}
      aria-label="Download Gionaka on Google Play"
    >
      <GooglePlayIcon className="h-7 w-7" />
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">
          Get it on
        </span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  )
}

export function AppStoreButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-foreground',
        className,
      )}
      aria-label="Gionaka on the App Store, coming soon"
    >
      <AppleIcon className="h-7 w-7" />
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Coming soon on
        </span>
        <span className="text-lg font-semibold">App Store</span>
      </span>
    </div>
  )
}
