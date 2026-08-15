import Image from 'next/image'
import { cn } from '@/lib/utils'

export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        'relative mx-auto w-[260px] rounded-[2.75rem] border-[10px] border-foreground bg-foreground p-0 shadow-2xl shadow-primary/20 sm:w-[300px]',
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-foreground" />
      <div className="relative overflow-hidden rounded-[2.1rem] bg-card">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          width={600}
          height={1280}
          priority={priority}
          className="h-auto w-full object-cover"
          sizes="(max-width: 640px) 260px, 300px"
        />
      </div>
    </div>
  )
}
