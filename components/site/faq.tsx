'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export const faqs = [
  {
    question: 'What is Gionaka?',
    answer:
      'Gionaka is India’s Digital Labour Chowk — a mobile app that connects nearby workers with people looking to hire local workers, quickly and directly.',
  },
  {
    question: 'Who can use Gionaka?',
    answer:
      'Anyone. Daily wage workers, electricians, plumbers, carpenters, painters, drivers and helpers can find work, while homeowners, contractors and small businesses can hire them.',
  },
  {
    question: 'Is Gionaka free?',
    answer:
      'Yes, Gionaka is free to download and use for both finding work and hiring workers. There are no middleman charges or commissions.',
  },
  {
    question: 'How does Gionaka work?',
    answer:
      'Choose whether you want to find work or hire a worker, select a category, view nearby results ranked by distance, and then call directly or post your requirement.',
  },
  {
    question: 'Can I hire workers nearby?',
    answer:
      'Absolutely. Gionaka uses your location to show the closest available workers first, so you can hire someone right in your area.',
  },
  {
    question: 'How do workers find jobs?',
    answer:
      'Workers create a profile, select their skills, and see nearby job requirements. They can respond to postings or receive direct calls from employers.',
  },
  {
    question: 'Is my location required?',
    answer:
      'Location powers nearby matching, so enabling it gives the best results. You stay in control of your privacy and can manage permissions any time.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach our team any time at support@gionaka.com and we’ll be happy to help you get the most out of Gionaka.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about Gionaka."
      />

      <Reveal className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
              </h3>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
