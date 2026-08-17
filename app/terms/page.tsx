import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Gionaka',
  description:
    "Read Gionaka's Terms & Conditions to understand the rules, responsibilities, and conditions that apply when using the Gionaka app and services.",
  alternates: { canonical: 'https://gionaka.com/terms' },
}

const sections = [
  [
  "1. Introduction and Acceptance",
  [
    "These Terms & Conditions (\"Terms\") govern your access to and use of the Gionaka mobile application (\"App\") and related services provided by Gionaka (\"Gionaka\", \"we\", \"us\", or \"our\").",
    "Gionaka is a location-based platform designed to help people looking for work connect with people looking to hire local workers.",
    "By creating an account, accessing, or using Gionaka, you agree to these Terms and the Gionaka Privacy Policy.",
    "If you do not agree to these Terms, you should not create an account or use Gionaka.",
    "Our Privacy Policy explains how Gionaka collects, uses, retains, shares, and protects personal data.",
  ],
  [],
],

 [
  "2. Eligibility",
  [
    "Gionaka is intended for individuals who are 18 years of age or older.",
    "By creating an account or using Gionaka, you confirm that you meet this age requirement.",
    "If you are under 18, you must not create or use a Gionaka account.",
  ],
  [],
],

 [
  "3. The Gionaka Service",
  [
    "Gionaka provides a digital platform that helps users discover and connect with nearby people for work and local hiring purposes.",
    "Gionaka's available features include:",
  ],
  [
    "Choose Find Work or Hire Locally.",
    "Select categories and subcategories.",
    "Use your current or manually selected location.",
    "View relevant posts and local results.",
    "Publish posts.",
    "Contact other users through the Call feature.",
    "View Call History.",
    "Favorite another user after a call-related connection.",
    "Report potentially inappropriate or suspicious activity.",
  ],
],
  [
  "4. User Accounts and OTP",
  [
    "Gionaka accounts are accessed using your mobile number and a one-time password (OTP). Gionaka does not use a traditional password-based login system.",
    "You are responsible for keeping your device and OTP secure and for taking reasonable steps to prevent unauthorized access to your account.",
    "You are responsible for activity carried out through your account unless the activity resulted from unauthorized access that was not caused by your failure to take reasonable security precautions.",
  ],
  [
    "Do not share your OTP with another person.",
    "Do not attempt to access another user's account.",
    "Do not create or use an account using another person's identity or phone number.",
    "Do not impersonate another person while using Gionaka.",
  ],
],

  [
  "5. User Information and Posts",
  [
    "Users may provide information through Gionaka features, including information associated with posts, categories, subcategories, location, role selection, and other available fields.",
    "You are responsible for ensuring that information you provide or publish is accurate to the best of your knowledge and does not intentionally mislead other users.",
    "When you publish a post, the information intended to be displayed through that feature may become visible to other Gionaka users.",
    "You should only publish information that you have the right to provide and share.",
  ],
  [],
],

[
  "6. Phone Calls and Phone Number Disclosure",
  [
    "Gionaka provides a Call feature that may open your device's normal phone-calling functionality.",
    "When you publish a post, another user may select the Call button associated with that post.",
    "By publishing a post, you acknowledge that using the Call feature may result in your phone number being disclosed to the calling user through the normal phone-calling process.",
    "Gionaka does not record or store the content of phone conversations.",
    "Gionaka does not control what users discuss during phone calls and is not a participant in those conversations.",
  ],
  [],
],
 [
  "7. Favorites",
  [
    "Gionaka provides a Favorite feature that allows users to express a Favorite for another user after a call-related connection.",
    "Each Favorite action may increase the Favorite count associated with a user. A higher Favorite count indicates that the user has received more Favorites from other users on Gionaka and may be used as an indicator of popularity on the platform.",
    "A Favorite count is not a rating, review, certification, endorsement, or guarantee of a user's skills, behavior, reliability, or services.",
  ],
  [],
],
  [
    "8. Reports and Safety",
    [
      "Gionaka provides a reporting feature that allows users to report potentially inappropriate, suspicious, abusive, or spam-related activity.",
      "Reports may include a selected reason and additional information provided by the reporting user.",
      "Gionaka may review reports and take appropriate action based on the circumstances.",
      "Gionaka may remove content, restrict functionality, suspend accounts, or terminate access where appropriate or where required by applicable law.",
      "Gionaka does not guarantee that every report will result in a particular action.",
    ],
    [],
  ],

  [
    "9. Prohibited Use and Content",
    [
      "You must not use Gionaka to create, publish, upload, share, transmit, or otherwise provide information that:",
    ],
    [
      "Belongs to another person when you do not have the right to use or share it.",
      "Is unlawful or violates applicable law.",
      "Is obscene, pornographic, sexually explicit, or harmful to children.",
      "Exploits or sexually abuses children.",
      "Invasively discloses another person's privacy or private information.",
      "Harasses, threatens, intimidates, or abuses another person.",
      "Promotes hatred or unlawful discrimination.",
      "Infringes copyright, trademarks, patents, or other intellectual-property rights.",
      "Impersonates another person.",
      "Deceives or intentionally misleads users.",
      "Contains false information intended to cause harm, harassment, or unlawful gain.",
      "Promotes fraud, scams, money laundering, or other unlawful activity.",
      "Contains malware, viruses, malicious code, or other material intended to interfere with computer resources.",
      "Promotes or facilitates activities that are unlawful or prohibited by applicable law.",
      "Attempts to bypass, damage, interfere with, or gain unauthorized access to Gionaka or another user's account or systems.",
      "Uses Gionaka for any unlawful purpose or in a manner that could harm other users, Gionaka, or the operation of the platform.",
    ],
  ],

  [
    "10. User Responsibilities",
    [
      "You are responsible for your own decisions, communications, and interactions with other users.",
      "You should:",
    ],
    [
      "Provide information honestly and responsibly.",
      "Respect other users.",
      "Use Gionaka only for lawful purposes.",
      "Keep your account and OTP secure.",
      "Use the platform in accordance with these Terms.",
      "Report suspicious or abusive activity through available reporting tools.",
      "Take appropriate care before sharing personal information with another user.",
      "Exercise your own judgment when deciding whether to contact, meet, hire, or work with another user.",
    ],
  ],

  [
    "11. Gionaka's Role",
    [
      "Gionaka is a platform that helps users discover and connect with each other.",
      "Gionaka is not:",
    ],
    [
      "An employer of users.",
      "An employment agency.",
      "A contractor for work arranged between users.",
      "A party to agreements made between users.",
      "A guarantor of a user's identity, skills, qualifications, conduct, payment, or performance.",
      "Gionaka does not certify, employ, or supervise local workers who use the platform.",
      "Any employment, service arrangement, payment, work agreement, or other relationship formed between users is between those users.",
      "Gionaka does not guarantee that a user will receive work or that a person looking to hire will find a suitable worker.",
    ],
  ],

  [
    "12. Transactions and Payments",
    [
      "Gionaka does not currently process payments between users through the App.",
      "Any payment, compensation, pricing, work agreement, or other financial arrangement made between users is separate from Gionaka unless Gionaka expressly introduces a payment feature in the future.",
      "Users are responsible for understanding and complying with applicable laws relating to their own transactions and arrangements.",
    ],
    [],
  ],

  [
    "13. Intellectual Property",
    [
      "The Gionaka name, logo, visual design, software, interface, text, graphics, and other content provided by Gionaka are owned by or licensed to Gionaka and are protected by applicable intellectual-property laws.",
      "You may use Gionaka only for its intended purpose and in accordance with these Terms.",
      "You must not copy, reproduce, modify, distribute, sell, reverse engineer, publicly display, or commercially exploit Gionaka's proprietary materials without appropriate authorization, except where permitted by applicable law.",
      "You retain responsibility for content and information that you submit to Gionaka.",
      "By submitting content through Gionaka, you grant Gionaka the limited rights necessary to host, store, display, transmit, and otherwise process that content for operating and providing the service.",
    ],
    [],
  ],

  [
    "14. Third-Party Services",
    [
      "Gionaka may rely on third-party services to support parts of the App, including authentication, infrastructure, analytics, advertising, and phone-related functionality.",
      "Third-party services may have their own terms and privacy policies.",
      "Your use of a third-party service may also be subject to the applicable terms of that service.",
      "Gionaka is not responsible for the independent operation or policies of third-party services outside Gionaka's control.",
    ],
    [],
  ],

  [
    "15. Availability and Changes to the Service",
    [
      "Gionaka aims to keep its services available and functional, but uninterrupted availability cannot be guaranteed.",
      "The App or particular features may occasionally be unavailable because of maintenance, updates, technical problems, network issues, security incidents, third-party service interruptions, or circumstances beyond Gionaka's reasonable control.",
      "Gionaka may modify, suspend, restrict, or discontinue any feature or part of the service when reasonably necessary.",
    ],
    [],
  ],

  [
    "16. Disclaimer of Warranties and Guarantees",
    [
      "Gionaka is provided on an \"as available\" basis to the extent permitted by applicable law.",
      "Gionaka does not guarantee:",
    ],
    [
      "That the service will always be available.",
      "That every result will be accurate or suitable.",
      "That every user is genuine or trustworthy.",
      "That a worker has particular qualifications or experience.",
      "That work will be found.",
      "That a worker will be hired.",
      "That a connection between users will be successful.",
      "That a user's conduct will meet your expectations.",
      "That communications or arrangements between users will produce a particular outcome.",
      "Gionaka does not independently verify every statement, profile detail, qualification, or claim made by users.",
    ],
  ],

  [
    "17. Limitation of Liability",
    [
      "To the maximum extent permitted by applicable law, Gionaka will not be responsible for losses or damages arising from:",
    ],
    [
      "User-to-user communications.",
      "Phone calls between users.",
      "Meetings or interactions between users.",
      "Work or service arrangements between users.",
      "User-provided information.",
      "Fraudulent, misleading, abusive, or unlawful conduct by users.",
      "Inaccurate or incomplete information provided by users.",
      "Third-party services.",
      "Temporary service interruptions.",
      "Events outside Gionaka's reasonable control.",
    ],
  ],

  [
    "18. Account Suspension and Termination",
    [
      "Gionaka may restrict, suspend, or terminate your access to the service, or remove or disable information you provide, when reasonably necessary because:",
    ],
    [
      "You violate these Terms.",
      "You violate applicable law.",
      "You provide misleading or fraudulent information.",
      "Your account is used for abuse, spam, fraud, or other harmful activity.",
      "Your activity creates a security or safety risk.",
      "Gionaka is required to act by law or lawful authority.",
      "Continued access could harm Gionaka, other users, or the operation of the platform.",
      "Where appropriate and permitted by law, Gionaka may preserve relevant information or records for legitimate security, investigation, legal, or compliance purposes.",
    ],
  ],

  [
    "19. Account Deletion",
    [
      "You may delete your Gionaka account using the account-deletion functionality available in the App.",
      "Deleting your account does not automatically remove information that Gionaka is required or permitted to retain under applicable law or for legitimate purposes such as security, fraud prevention, dispute resolution, or legal claims.",
      "Account deletion also does not cancel responsibilities or obligations that arose before deletion where those obligations continue to apply.",
    ],
    [],
  ],

  [
    "20. Privacy",
    [
      "Your use of Gionaka is also governed by the Gionaka Privacy Policy, which explains how personal data is collected, used, retained, shared, and protected.",
      "You can review the Privacy Policy at https://gionaka.com/privacy",
      "The Privacy Policy forms part of these Terms to the extent applicable to your use of Gionaka.",
    ],
    [],
  ],

  [
    "21. Complaints and Grievance Handling",
    [
      "If you have a complaint relating to Gionaka, its user agreement, user information, or other matters concerning the platform, you may contact:",
      "Gionaka Grievance Contact — PrivacyPolicy@gionaka.com",
      "Please provide sufficient information to allow the issue to be reviewed.",
      "Gionaka will handle complaints according to applicable law and its applicable grievance process.",
    ],
    [],
  ],

  [
    "22. Changes to These Terms",
    [
      "Gionaka may update these Terms from time to time when features or services change, legal requirements change, platform rules or policies change, or security or operational requirements change.",
      "The latest version will be made available through Gionaka.",
      "When a material change requires additional notice under applicable law, Gionaka will provide the appropriate notice.",
      "Gionaka may periodically remind users of its rules, Privacy Policy, and User Agreement and of the consequences of non-compliance, where required by applicable law.",
    ],
    [],
  ],

  [
    "23. Governing Law and Dispute Resolution",
    [
      "These Terms are governed by the laws of India, subject to applicable law.",
      "Any dispute arising from or relating to these Terms or the use of Gionaka will be subject to the jurisdiction of the courts having appropriate jurisdiction under applicable law.",
      "Nothing in this section prevents a user from exercising any mandatory legal right or remedy available under applicable law.",
    ],
    [],
  ],

  [
    "24. Contact Gionaka",
    [
      "For questions about these Terms, contact Gionaka Support at support@gionaka.com.",
      "For privacy or grievance-related matters, contact PrivacyPolicy@gionaka.com.",
      "Website: gionaka.com",
    ],
    [],
  ],
] as const

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-5 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gionaka
          </Link>
        </div>
      </header>

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <FileText className="size-7" />
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Rules, responsibilities, and conditions for using Gionaka.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground">Effective Date:</strong>{' '}
                [Insert Launch Date]
              </span>

              <span>
                <strong className="text-foreground">Last Updated:</strong>{' '}
                [Insert Date]
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-3xl space-y-12 text-[15px] leading-8 text-muted-foreground">
          {sections.map(([title, paragraphs, bullets]) => (
            <section key={title}>
              <h2 className="mb-5 text-2xl font-bold leading-tight text-foreground md:text-3xl">
                {title}
              </h2>

              <div className="space-y-4">
                {paragraphs.map((text) => (
                  <p key={text}>
                    {text}
                  </p>
                ))}

                {bullets.length > 0 && (
                  <ul className="ml-5 list-disc space-y-2">
                    {bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  )
}