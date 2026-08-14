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
      'Gionaka is a location-based platform that connects people looking for work with people searching for local workers. Whether you are looking for a job, hiring someone for a service, or exploring other local categories, Gionaka helps you connect with nearby people based on your location and selected category. By showing relevant nearby results, Gionaka makes it simple to find the right person for work or hire the right local worker, all without unnecessary middlemen.',
  },
  {
    question: 'Who can use Gionaka?',
    answer:
      'Anyone looking to find work or hire local professionals. Gionaka supports skilled workers, service providers, homeowners, contractors, businesses, and anyone looking to connect locally.',
  },
  {
    question: 'Is Gionaka free to use?',
    answer:
      'Yes. Gionaka is free to download and use for finding work, hiring local professionals, and connecting directly without middlemen or commissions.',
  },
  {
    question: 'How does Gionaka work?',
    answer:
      'Select your role, choose your category and location, browse nearby results, then call directly or post your requirement if you do not find the right match.',
  },
  {
    question: 'Can I hire local professionals nearby?',
    answer:
      'Yes. Gionaka helps you discover nearby local professionals based on your selected location, making it easier to connect with the right people nearby.',
  },
  {
    question: 'How can I find work on Gionaka?',
    answer:
      'Create your profile, choose your skills and location, browse nearby opportunities, or receive direct calls from people looking for your services.',
  },
  {
    question: 'Why is location required?',
    answer:
      'Your selected location helps Gionaka show more relevant nearby people and improves local matching while keeping you in control of your location permissions.',
  },
  {
    question: 'Is Gionaka available across India?',
    answer:
      'Gionaka is designed for local connections and is expanding to support more cities and regions across India.',
  },
  {
    question: 'Do I need to pay to use Gionaka?',
    answer:
      'No. Gionaka is free to download and use. You can find work, hire local professionals, and connect directly without paying commissions.',
  },
  {
    question: 'How can I contact Gionaka support?',
    answer:
      'Need help? Contact our support team at support@gionaka.com and we will be happy to assist you.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Everything You Need to Know About Gionaka"
        description="Learn how Gionaka helps people find work, hire local professionals, and connect nearby through a simple location-based platform."
      />

      <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">

        <div className="divide-y divide-border">
          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div
                key={faq.question}
                className="transition-colors duration-300 hover:bg-muted/30"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </h3>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}