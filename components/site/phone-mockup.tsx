import Image from "next/image"
import { cn } from "@/lib/utils"

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
        "relative mx-auto w-full max-w-[550px] overflow-hidden rounded-[1.5rem] bg-muted shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 550px"
        />
      </div>
    </div>
  )
}