import Link from "next/link"
import {
  ArrowLeft,
  Search,
  Mail,
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  UserX,
  Phone,
  FileText,
} from "lucide-react"

const helpSections = [
  {
    number: "1",
    title: "I'm unable to log in",
    icon: UserX,
    content: (
      <>
        <p>If you're having trouble logging in, please check the following:</p>

        <ul>
          <li>Make sure you're using the correct phone number.</li>
          <li>Ensure you have a stable internet connection.</li>
          <li>
            Update Gionaka to the latest version from the Google Play Store or
            Apple App Store.
          </li>
          <li>Restart the app and try again.</li>
        </ul>

        <p>
          If the issue continues, clear the app cache and try again.
        </p>

        <h4>Android</h4>

        <ol>
          <li>Open <strong>Settings</strong>.</li>
          <li>Go to <strong>Apps</strong> or <strong>Application Manager</strong>.</li>
          <li>Select <strong>Gionaka</strong>.</li>
          <li>Tap <strong>Storage</strong>.</li>
          <li>Tap <strong>Clear Cache</strong>.</li>
        </ol>

        <h4>iPhone (iOS)</h4>

        <p>
          If you're using an iPhone, update Gionaka to the latest version. If
          the issue persists, uninstall and reinstall the app from the App
          Store.
        </p>

        <p>
          If you're still unable to log in, please contact Gionaka Support.
        </p>
      </>
    ),
  },

  {
    number: "2",
    title: "My account has been suspended or disabled",
    icon: AlertTriangle,
    content: (
      <>
        <p>
          Your account may be temporarily suspended or permanently disabled if
          it violates our <strong>Community Guidelines</strong> or{" "}
          <strong>Terms & Conditions</strong>.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Creating fake accounts</li>
          <li>Posting misleading information</li>
          <li>Spamming</li>
          <li>Abusive behaviour</li>
          <li>Other prohibited activities</li>
        </ul>

        <p>
          If you believe your account was suspended by mistake, please contact
          Gionaka Support for review.
        </p>
      </>
    ),
  },

  {
    number: "3",
    title: "How do I change my phone number or gender?",
    icon: Phone,
    content: (
      <>
        <p>
          Currently, changing your registered phone number or gender is not
          supported within the app.
        </p>

        <p>
          If you need to update either of these details, please contact Gionaka
          Support.
        </p>
      </>
    ),
  },

  {
    number: "4",
    title: "How do I delete my account?",
    icon: FileText,
    content: (
      <>
        <p>Go to:</p>

        <p className="font-semibold">
          Settings → Legal & Privacy → Account Deletion Policy
        </p>

        <p>
          Follow the instructions to permanently delete your account.
        </p>

        <p>
          Please note that account deletion is permanent and cannot be undone.
        </p>
      </>
    ),
  },

  {
    number: "5",
    title: "How do I log out from all devices?",
    icon: UserX,
    content: (
      <>
        <p>
          Go to <strong>Settings</strong> and tap <strong>Log Out</strong>.
        </p>

        <p>
          If you believe someone else has access to your account or you need
          to log out from all devices, please contact Gionaka Support.
        </p>
      </>
    ),
  },

  {
    number: "6",
    title: "I need additional help or support",
    icon: HelpCircle,
    content: (
      <>
        <p>
          If you couldn't find the answer you're looking for, we're here to
          help.
        </p>

        <p>
          Please contact Gionaka Support by email, and our team will respond as
          soon as possible.
        </p>
      </>
    ),
  },
]

const faqSections = [
  {
    number: "1",
    title: "What is Gionaka?",
    content: (
      <>
        <p>
          Gionaka is a location-based platform that connects people looking for work with people searching for local workers. Whether you're looking for a job, hiring someone for a service, or exploring other local categories, Gionaka helps you connect with nearby people based on your location and selected category.

By showing relevant nearby results, Gionaka makes it simple to find the right person for work or hire the right local worker, all without unnecessary middlemen.
        </p>

        <p>
          Customers can easily find trusted local workers based on their
          location and category, making the hiring process faster and more
          convenient.
        </p>
      </>
    ),
  },

  {
    number: "2",
    title: "Who can join Gionaka?",
    content: (
      <>
        <p>
          Anyone looking for work or searching for local workers can join Gionaka
        </p>

        <p>
          Whether you're an individual looking for work or someone looking to hire local workers, Gionaka helps you connect with nearby people based on your location and selected category.
        </p>

        <p>
          To use Gionaka, you must meet the minimum legal working age in your country and comply with all applicable local laws and regulations.
        </p>

        <p>
          Gionaka supports a wide range of work and service categories, helping users connect with nearby people based on their location and selected category.
        </p>
      </>
    ),
  },

  {
    number: "3",
    title: "Is Gionaka free to use?",
    content: (
      <>
        <p>
          Yes. Creating an account and using Gionaka is completely free.
        </p>

        <p>
          You can create your profile, browse categories, search for nearby people, and connect through the platform without paying any registration fee.
        </p>

        <p>
          Gionaka is designed to make it simple for people looking for work and people searching for local workers to connect based on their location and selected category.
        </p>

        <p>
          Some premium features may be introduced in the future while the
          core experience remains free.
        </p>
      </>
    ),
  },

  {
    number: "4",
    title: "How does Gionaka work?",
    content: (
      <>
        <p>
          Sign up and choose whether you want to <strong>Find Work</strong> or{" "}
          <strong>Hire a Worker</strong>.
        </p>

        <p>
          Select a category and subcategory. Gionaka shows nearby workers
          or work opportunities based on your location.
        </p>

        <p>
          Connect directly through the app. After a successful connection,
          users can interact through features such as <strong>Call History</strong>{" "}
          and <strong>Likes</strong> to help build trust.
        </p>
      </>
    ),
  },

  {
    number: "5",
    title: "How do Likes work?",
    content: (
      <>
        <p>
          The <strong>Like</strong> feature is available only after two users
          have connected through a call.
        </p>

        <p>
          When one user taps the <strong>Call</strong> button, both users
          receive a notification in their <strong>Call History</strong>. After
          connecting, each user can tap the ❤️ <strong>Like</strong> button to
          appreciate the other user's experience.
        </p>

        <p>
          The Like feature is available <strong>only in Call History</strong>{" "}
          and is not available on search results or post listings.
        </p>
      </>
    ),
  },

  {
    number: "6",
    title: "How do I find work or hire a worker?",
    content: (
      <>
        <p>First, choose your role on the Home screen.</p>

        <ul>
          <li>
            <strong>Find Work</strong> – Select this if you're looking for work.
          </li>

          <li>
            <strong>Hire Locally</strong> – Select this if you're looking for a
            worker.
          </li>
        </ul>

        <p>
          Next, choose a category. You'll then be taken to the Subcategory
          page. After selecting a subcategory, Gionaka will show nearby
          matching results.
        </p>

        <p>
          If you can't find what you're looking for, tap <strong>Post</strong>{" "}
          to publish your requirement so nearby users can see it.
        </p>
      </>
    ),
  },

  {
    number: "7",
    title: "How do the Find Work and Hire Worker features work?",
    content: (
      <>
        <p>
          <strong>Find Work</strong> helps people looking for work discover
          nearby work requests.
        </p>

        <p>
          <strong>Hire Worker</strong> helps people looking for workers find
          nearby workers based on the selected category and location.
        </p>

        <p>
          Simply choose your role, select a category, and Gionaka will display
          relevant nearby results.
        </p>
      </>
    ),
  },

  {
    number: "8",
    title: "How do I delete my account?",
    content: (
      <>
        <p>Go to:</p>

        <p className="font-semibold">
          Settings → Legal & Privacy → Account Deletion Policy
        </p>

        <p>
          Follow the instructions to permanently delete your account.
        </p>
      </>
    ),
  },

  {
    number: "9",
    title: "Why can't I make calls or create posts?",
    content: (
      <>
        <p>
          You may not be able to make calls or create posts for one of the
          following reasons:
        </p>

        <ul>
          <li>You've reached the daily call limit.</li>
          <li>You've reached the maximum limit of <strong>3 active posts</strong>.</li>
          <li>Your internet connection is unstable.</li>
          <li>
            Required permissions, such as Phone or Location, are disabled.
          </li>
          <li>Your account has been temporarily restricted.</li>
        </ul>

        <p>
          Please review these items before contacting Gionaka Support.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "How do I report a fake user?",
    content: (
      <>
        <p>
          The <strong>Report</strong> option is available only in{" "}
          <strong>Call History</strong>.
        </p>

        <p>
          When one user taps the <strong>Call</strong> button, both users
          receive a notification in their Call History. If either user believes
          the other is fake, abusive, or suspicious, they can open the
          notification and tap <strong>Report</strong>.
        </p>

        <p>
          Our moderation team will review the report and take appropriate action
          if necessary.
        </p>
      </>
    ),
  },
];

const reportSections = [
  {
    number: "1",
    title: "Report a bug",
    content: (
      <>
        <p>
          Found something that isn't working as expected?
        </p>

        <p>
          Describe the issue in detail. If possible, include screenshots or
          screen recordings to help us investigate and resolve the problem
          more quickly.
        </p>
      </>
    ),
  },

  {
    number: "2",
    title: "Report incorrect information",
    content: (
      <p>
        If you find incorrect, misleading, or outdated information on Gionaka,
        please report it. We'll review the information and take appropriate
        action.
      </p>
    ),
  },

  {
    number: "3",
    title: "Report another issue",
    content: (
      <p>
        If your issue doesn't match the options above, describe it in detail
        and submit your report. Our support team will review your request and
        respond as soon as possible.
      </p>
    ),
  },
]

function HelpCard({
  number,
  title,
  icon: Icon,
  children,
}: {
  number: string
  title: string
  icon?: React.ElementType
  children: React.ReactNode
}) {
  return (
    <details className="group rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {Icon ? <Icon className="h-5 w-5" /> : <span>{number}</span>}
        </div>

        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            Question {number}
          </p>

          <h3 className="mt-0.5 text-base font-semibold text-foreground md:text-lg">
            {title}
          </h3>
        </div>

        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>

      <div className="border-t border-border px-5 pb-6 pt-5 text-sm leading-7 text-muted-foreground md:px-6">
        <div className="[&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-foreground [&_li]:mb-2 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc">
          {children}
        </div>
      </div>
    </details>
  )
}

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <HelpCircle className="h-7 w-7" />
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Gionaka Help Centre
            </h1>

            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Find answers to common questions, troubleshooting steps, and
              ways to contact our support team.
            </p>

            {/* Search UI */}
            <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground" />

              <span className="text-sm text-muted-foreground">
                Search for help...
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">

        {/* Help */}
        <section>
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Support
            </p>

            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Help
            </h2>

            <p className="mt-2 text-muted-foreground">
              Troubleshooting and account-related questions.
            </p>
          </div>

          <div className="space-y-4">
            {helpSections.map((item) => (
              <HelpCard
                key={item.number}
                number={item.number}
                title={item.title}
                icon={item.icon}
              >
                {item.content}
              </HelpCard>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="mt-16">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Need more help?
                </p>

                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  Contact Support
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  If you couldn't find the answer you're looking for, our
                  support team is here to help.
                </p>

                <p className="mt-5 text-sm text-muted-foreground">
                  Send us an email with a clear description of your issue. If
                  possible, include screenshots or screen recordings so our
                  team can assist you more quickly.
                </p>
              </div>

              <a
                href="mailto:support@gionaka.com?subject=Gionaka%20Support%20Request"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Email Support
              </a>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <a
                href="mailto:support@gionaka.com"
                className="text-sm font-medium text-primary hover:underline"
              >
                support@gionaka.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              FAQ
            </h2>

            <p className="mt-2 text-muted-foreground">
              Quick answers to common Gionaka questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqSections.map((item) => (
              <HelpCard
                key={item.number}
                number={item.number}
                title={item.title}
              >
                {item.content}
              </HelpCard>
            ))}
          </div>
        </section>

        {/* Report a Problem */}
        <section className="mt-16">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Feedback & Safety
            </p>

            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Report a Problem
            </h2>

            <p className="mt-2 text-muted-foreground">
              Help us improve Gionaka by reporting problems or incorrect
              information.
            </p>
          </div>

          <div className="space-y-4">
            {reportSections.map((item) => (
              <HelpCard
                key={item.number}
                number={item.number}
                title={item.title}
              >
                {item.content}
              </HelpCard>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <div className="rounded-3xl bg-muted/50 px-6 py-10">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Still need help?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Our support team is available to help you with account,
              technical, and other Gionaka-related issues.
            </p>

            <a
              href="mailto:support@gionaka.com?subject=Gionaka%20Support%20Request"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Contact Gionaka Support
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}