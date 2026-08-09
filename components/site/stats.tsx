import { AnimatedCounter } from './animated-counter'
import { Reveal } from './reveal'

const stats = [
  { value: 10, suffix: 'K+', label: 'Workers' },
  { value: 500, suffix: '+', label: 'Cities' },
  { value: 2, suffix: 'K+', label: 'Jobs Posted' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-10">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
