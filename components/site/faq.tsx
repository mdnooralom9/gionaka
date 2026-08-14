"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export const faqSections = [
  {
    question: "What is Gionaka?",

    schemaAnswer:
      "Gionaka is a location-based platform that connects people looking for work with people searching for local workers. Whether you're looking for a job, hiring someone for a service, or exploring other local categories, Gionaka helps you connect with nearby people based on your location and selected category. By showing relevant nearby results, Gionaka makes it simple to find the right person for work or hire the right local worker without unnecessary middlemen. Users can easily find local workers based on their location and selected category, making the hiring process faster and more convenient.",

    answer: (
      <>
        <p>
          <strong>
            Gionaka is a location-based platform that connects people looking
            for work with people searching for local workers.
          </strong>{" "}
          Whether you're looking for a job, hiring someone for a service, or
          exploring other local categories, Gionaka helps you connect with
          nearby people based on your location and selected category.
        </p>

        <p className="mt-4">
          By showing relevant nearby results, Gionaka makes it simple to find
          the right person for work or hire the right local worker,
          <strong> all without unnecessary middlemen.</strong>
        </p>

        <p className="mt-4">
          Users can easily find local workers based on their location and
          selected category, making the hiring process faster and more
          convenient.
        </p>
      </>
    ),
  },

  {
    question: "Who can join Gionaka?",

    schemaAnswer:
      "Anyone looking for work or searching for local workers can join Gionaka. Whether you're an individual looking for work or someone looking to hire local workers, Gionaka helps you connect with nearby people based on your location and selected category. To use Gionaka, you must meet the minimum legal working age in your country and comply with all applicable local laws and regulations. Gionaka supports a wide range of work and service categories, helping users connect with nearby people based on their location and selected category.",

    answer: (
      <>
        <p>
          <strong>
            Anyone looking for work or searching for local workers can join
            Gionaka.
          </strong>
        </p>

        <p className="mt-4">
          Whether you're an individual looking for work or someone looking to
          hire local workers, Gionaka helps you connect with nearby people
          based on your location and selected category.
        </p>

        <p className="mt-4">
          To use Gionaka, you must meet the{" "}
          <strong>minimum legal working age in your country</strong> and comply
          with all applicable local laws and regulations.
        </p>

        <p className="mt-4">
          Gionaka supports a wide range of work and service categories,
          helping users connect with nearby people based on their location and
          selected category.
        </p>
      </>
    ),
  },

  {
    question: "Is Gionaka free to use?",

    schemaAnswer:
      "Yes. Creating an account and using Gionaka is completely free. You can create your profile, browse categories, search for nearby people, and connect through the platform without paying any registration fee. Gionaka is designed to make it simple for people looking for work and people searching for local workers to connect based on their location and selected category. Some premium features may be introduced in the future while the core experience remains free.",

    answer: (
      <>
        <p>
          <strong>Yes.</strong> Creating an account and using Gionaka is
          completely free.
        </p>

        <p className="mt-4">
          You can create your profile, browse categories, search for nearby
          people, and connect through the platform without paying any
          registration fee.
        </p>

        <p className="mt-4">
          Gionaka is designed to make it simple for people looking for work
          and people searching for local workers to connect based on their
          location and selected category.
        </p>

        <p className="mt-4">
          Some <strong>premium features may be introduced in the future</strong>{" "}
          while the core experience remains free.
        </p>
      </>
    ),
  },
    {
    question: "How does Gionaka work?",

    schemaAnswer:
      "Sign up and choose your role on the Home screen. Select Find Work if you're looking for work or Hire Locally if you're searching for local workers. Next, choose a category and subcategory. Gionaka will display nearby people based on your location and selected category. If you don't find what you're looking for, tap Post to publish your requirement so nearby users can discover and connect with you directly.",

    answer: (
      <>
        <p>
          Sign up and choose your role on the Home screen.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Find Work</strong> – Select this if you're looking for
            work.
          </li>

          <li>
            <strong>Hire Locally</strong> – Select this if you're searching
            for local workers.
          </li>
        </ul>

        <p className="mt-4">
          Next, choose a category and subcategory. Gionaka will display
          nearby people based on your location and selected category.
        </p>

        <p className="mt-4">
          If you don't find what you're looking for, tap{" "}
          <strong>Post</strong> to publish your requirement so nearby users
          can discover and connect with you directly.
        </p>
      </>
    ),
  },

  {
    question: "How do Likes work?",

    schemaAnswer:
      "The Like feature is available only after two users have connected through a call. When one user taps the Call button, both users receive a notification in their Call History. After connecting, each user can tap the Like button to appreciate the other user's experience. Likes are available only in Call History and are not available on search results or post listings.",

    answer: (
      <>
        <p>
          The <strong>Like</strong> feature is available only after two users
          have connected through a call.
        </p>

        <p className="mt-4">
          When one user taps the <strong>Call</strong> button, both users
          receive a notification in their <strong>Call History</strong>.
          After connecting, each user can tap the ❤️{" "}
          <strong>Like</strong> button to appreciate the other user's
          experience.
        </p>

        <p className="mt-4">
          The Like feature is available{" "}
          <strong>only in Call History</strong> and is not available on
          search results or post listings.
        </p>
      </>
    ),
  },

  {
    question: "How do the Find Work and Hire Locally features work?",

    schemaAnswer:
      "Find Work helps people looking for work discover nearby work requests. Hire Locally helps people searching for local workers find nearby people based on the selected category and location. Simply choose your role, select a category, and Gionaka will display relevant nearby results.",

    answer: (
      <>
        <p>
          <strong>Find Work</strong> helps people looking for work discover
          nearby work requests.
        </p>

        <p className="mt-4">
          <strong>Hire Locally</strong> helps people searching for local
          workers find nearby people based on the selected category and
          location.
        </p>

        <p className="mt-4">
          Simply choose your role, select a category, and Gionaka will
          display relevant nearby results.
        </p>
      </>
    ),
  },
    {
    question: "How do I delete my account?",

    schemaAnswer:
      "Go to Settings, then Legal & Privacy, and open the Account Deletion Policy. Follow the instructions to permanently delete your account.",

    answer: (
      <>
        <p>Go to:</p>

        <p className="mt-4 font-semibold">
          Settings → Legal & Privacy → Account Deletion Policy
        </p>

        <p className="mt-4">
          Follow the instructions to permanently delete your account.
        </p>
      </>
    ),
  },

  {
    question: "Why can't I make calls or create posts?",

    schemaAnswer:
      "You may not be able to make calls or create posts because you've reached the daily call limit, reached the maximum limit of three active posts, have an unstable internet connection, required permissions such as Phone or Location are disabled, or your account has been temporarily restricted. Please review these items before contacting Gionaka Support.",

    answer: (
      <>
        <p>
          You may not be able to make calls or create posts for one of the
          following reasons:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>You've reached the daily call limit.</li>
          <li>
            You've reached the maximum limit of{" "}
            <strong>3 active posts</strong>.
          </li>
          <li>Your internet connection is unstable.</li>
          <li>
            Required permissions such as <strong>Phone</strong> or{" "}
            <strong>Location</strong> are disabled.
          </li>
          <li>Your account has been temporarily restricted.</li>
        </ul>

        <p className="mt-4">
          Please review these items before contacting Gionaka Support.
        </p>
      </>
    ),
  },

  {
    question: "How do I report a fake user?",

    schemaAnswer:
      "The Report option is available only in Call History. When one user taps the Call button, both users receive a notification in Call History. If either user believes the other is fake, abusive, or suspicious, they can open the notification and tap Report. Our moderation team will review the report and take appropriate action if necessary.",

    answer: (
      <>
        <p>
          The <strong>Report</strong> option is available only in{" "}
          <strong>Call History</strong>.
        </p>

        <p className="mt-4">
          When one user taps the <strong>Call</strong> button, both users
          receive a notification in their <strong>Call History</strong>. If
          either user believes the other is fake, abusive, or suspicious,
          they can open the notification and tap <strong>Report</strong>.
        </p>

        <p className="mt-4">
          Our moderation team will review the report and take appropriate
          action if necessary.
        </p>
      </>
    ),
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.schemaAnswer,
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
        description="Learn how Gionaka helps people find work, hire locally, and connect with nearby people through a simple location-based platform."
      />

      <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="divide-y divide-border">
          {faqSections.map((faq, index) => {
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
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 space-y-4 leading-7 text-muted-foreground">
                      {faq.answer}
                    </div>
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