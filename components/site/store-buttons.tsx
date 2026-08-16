'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const PLAY_STORE_URL = 'https://play.google.com/store/search?q=gionaka&c=apps'
const APP_STORE_URL = 'https://apps.apple.com/us/search?term=gionaka'

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path fill="#00d3f2" d="M47 32.6C40.6 39 37 48.6 37 61v390c0 12.4 3.6 22 10 28.4L269 256 47 32.6z" />
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

function getDownloadUrl() {
  if (typeof navigator === 'undefined') return PLAY_STORE_URL
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    ? APP_STORE_URL
    : PLAY_STORE_URL
}

export function DownloadAppButton({ className }: { className?: string }) {
  return (
    <a
      href={getDownloadUrl()}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className,
      )}
      aria-label="Download Gionaka app"
    >
      <span className="flex items-center gap-2" aria-hidden="true">
        <GooglePlayIcon className="size-6" />
        <AppleIcon className="size-5" />
      </span>
      <span>Download App</span>
    </a>
  )
}

export function StickyDownloadApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting), { threshold: 0.05 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
      aria-hidden={!isVisible}
    >
      <DownloadAppButton className="w-full max-w-[420px] bg-primary/95 shadow-2xl backdrop-blur-md" />
    </div>
  )
}
