'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqSections } from '@/app/help/page'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const homeFaqs = faqSections.slice(0, 4)

function answerToText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(answerToText).join(' ')
  if (typeof node === 'object' && 'props' in node) {
    const element = node as { type?: string | (() => unknown); props?: { children?: ReactNode } }
    const text = answerToText(element.props?.children)
    const type = typeof element.type === 'string' ? element.type : ''
    return ['p', 'li', 'h4'].includes(type) ? `${text}\n` : text
  }
  return ''
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answerToText(faq.content).trim(),
    },
  })),
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16"
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

      <Reveal className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">

        <div className="divide-y divide-border">
          {homeFaqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div key={faq.title} className="transition-colors duration-300 hover:bg-muted/30">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-answer-${index}`}
                  >
                    <span className="text-base font-semibold text-foreground sm:text-lg">{faq.title}</span>
                    <ChevronDown className={cn('h-5 w-5 shrink-0 text-primary transition-transform duration-300', isOpen && 'rotate-180')} />
                  </button>
                </h3>

                <div
                  id={`home-faq-answer-${index}`}
                  role="region"
                  className={cn('grid transition-all duration-300 ease-out', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 leading-7 text-muted-foreground [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:font-semibold [&_h4]:text-foreground [&_li]:mb-2 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:ml-5 [&_ul]:list-disc">
                      {faq.content}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>

      <div className="mt-8 flex justify-center">
        <Link
          href="/help#faq"
          className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          View all FAQs
        </Link>
      </div>
    </section>
  )
}
