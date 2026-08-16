import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Gionaka',
  description: "Read Gionaka's Privacy Policy to understand how personal data is collected, used, protected, and managed across the Gionaka app and website.",
  alternates: { canonical: 'https://gionaka.com/privacy' },
}

const sections = [
[
  "1. Information We Collect",
  [
    "Gionaka collects only the information reasonably needed to provide, operate, and improve its services.",
    "Depending on how you use Gionaka, we may collect the following information:",
  ],
  [
    "Mobile number and country code — used to create and access your Gionaka account.",
    "Gender — used as part of your Gionaka account and may be displayed in your posts and Call History.",
    "Location information — Gionaka uses your current or manually selected location to determine your nearby area and provide relevant local results. This helps connect you with nearby work opportunities or local workers based on your selected location.",
    "Role selection — you may choose Find Work when you are looking for work or Hire Locally when you are looking for a local worker. Gionaka uses this selection to provide the relevant experience and results for your chosen purpose.",
    "Category and subcategory — you select a category and subcategory to indicate the type of work or service you are looking for. This helps Gionaka provide more relevant nearby results.",
    "Activity information — such as Call History, Favorites, reports submitted by you, and other actions you take while using Gionaka.",
  ],],
 [
  "2. Mobile Number and OTP",
  [
    "Your mobile number is used to create, access, and manage your Gionaka account.",
  ],
  [
    "Gionaka uses the OTP to help verify access to the mobile number associated with your account. Gionaka does not use a traditional password-based login system.",
    "Your complete mobile number is not displayed as a public profile field on Gionaka. However, when you choose to publish a post, another user who selects the Call button on that post may be able to access your phone number through the normal phone-calling process.",
    "For certain features, only the last three digits of your mobile number may be displayed as limited identifying information.",
    "You should never share your OTP with another person. Gionaka will not ask you to provide your OTP to another user.",
  ],
],

  [
  "3. How Gionaka Uses Your Personal Data",
  [
    "Gionaka uses your personal data for the following purposes:",
  ],
  [
    "To create, authenticate, and manage your Gionaka account.",
    "To provide Find Work, Hire Locally, and other location-based features.",
    "To show relevant results based on your selected location, role, category, and subcategory.",
    "To enable calls, Call History, Favorites, reports, and related platform features.",
    "To maintain the security, reliability, and proper functioning of Gionaka.",
    "To understand general app usage and improve the service through analytics.",
    "To provide and measure advertising through applicable advertising services.",
    "To help prevent spam, abuse, fraud, and misuse.",
    "To comply with applicable laws and respond to lawful requests.",
  ],
],
  [
  "4. Location Information",
  [
  ],
  [
    "Location is an important part of Gionaka's local-search functionality. Gionaka may use your current or manually selected location to find relevant nearby results, determine a relevant nearby city or area, and support Find Work and Hire Locally.",
    "Your exact latitude and longitude are not publicly displayed to other users. Other users may receive limited location-related information, such as a relevant city or area, as part of the service.",
    "Gionaka does not continuously track your location in the background for ordinary use of the service.",
  ],
],

  [
  "5. Information Visible to Other Users",
  [
    "Gionaka is designed to help users connect for relevant local work and hiring opportunities. Depending on the feature you use, certain limited information may be visible to other users.",
  ],
  [
    "Gender",
    "Last three digits of your mobile number",
    "Selected role, such as Find Work or Hire Locally",
    "Category and subcategory",
    "City or relevant area",
    "Post date",
    "Favorite count",
    "Incoming or outgoing indication in Call History",
  ],
  [
    "Your complete mobile number and exact latitude or longitude are not publicly displayed to other users.",
    "Information shown through Gionaka is limited to what is relevant to the particular feature being used.",
  ],
],
 [
  "6. Find Work and Hire Locally",
  [
  ],
  [
    "Gionaka provides features that allow users to look for nearby work or search for local workers based on their selected role, category, subcategory, and location.",
    "Gionaka is a platform that helps users connect with each other. We do not guarantee employment, a particular worker, a particular job, or any specific outcome from using the platform.",
  ],
],
  ['7. Calls and Call History', ['Gionaka provides a Call feature that allows users to contact another user through the device\'s phone functionality. Gionaka does not record phone conversations, store call audio, listen to conversations, or store their contents.', 'Gionaka may process limited call-related information so relevant activity can appear in Call History.'], ['Gender', 'Last three digits of the mobile number', 'Category and subcategory', 'Location-related information', 'Incoming or outgoing indication', 'Call functionality']],
  ['8. Favorites', ['Gionaka provides a Favorite feature that allows users to mark relevant users or connections. Favorite activity may be associated with your account and a Favorite count may be displayed. The person you have favorited is not notified that you personally added them. Your individual Favorite activity is not publicly disclosed as your personal action.'], []],
  ['9. Reports and Platform Safety', ['Gionaka provides reporting functionality for potentially inappropriate or suspicious activity. Reports may be reviewed for platform safety, abuse prevention, spam prevention, fraud prevention, and enforcement of Gionaka rules. Depending on the circumstances, Gionaka may restrict, suspend, or disable an account. Gionaka does not guarantee that every report will result in a particular action.'], ['Abuse', 'Spam', 'Other', 'Additional information provided by the reporting user']],
  ['10. Advertising and AdMob', ['Gionaka may display advertisements through third-party services, including Google AdMob. Advertising services may process device information, advertising identifiers, app information, ad interactions, and technical or advertising information for providing and measuring advertisements and preventing invalid activity. Advertising personalization depends on applicable settings, choices, and legal requirements. Gionaka does not sell your personal data as a business practice.'], []],
  ['11. Analytics and Service Improvement', ['Gionaka may use analytics services to understand how users interact with the App and improve reliability, functionality, and user experience. Analytics may help understand feature use, performance, errors, technical problems, and general usage patterns.'], []],
  ['12. Device Permissions', ['Gionaka may request permissions when required for a feature. Location is used for nearby functionality. Calling or phone functionality is used to initiate calls through your device. You can manage permissions through device settings; disabling a required permission may prevent a feature from working correctly.'], []],
  ['13. Website Privacy', ['The Gionaka Website primarily provides information about Gionaka, app download access, Help Centre resources, Privacy Policy, Terms & Conditions, and support information. The Website does not currently provide account registration or login. Main account and platform functionality is provided through the mobile App.'], []],
  ['14. Cookies and Similar Technologies', ['The Website may use technologies necessary for proper operation. Gionaka does not currently intend to use Website cookies beyond necessary operation unless functionality changes. Third-party services may have their own technologies and privacy practices.'], []],
  ['15. How We Share Personal Data', ['Gionaka does not sell your personal data. Personal data may be processed by service providers supporting authentication, data storage, analytics, advertising, technical infrastructure, security, and platform operations.', 'Gionaka may disclose personal data where reasonably necessary to comply with law, respond to lawful requests, prevent fraud or security threats, protect users, protect Gionaka rights or property, enforce terms, or defend legal claims.'], []],
  ['16. Data Retention', ['Gionaka retains personal data only as long as reasonably necessary for the purposes for which it is processed, or as required or permitted by law. Different information may be retained for different periods. After deletion or when information is no longer necessary, Gionaka will take appropriate steps to erase or dispose of it subject to lawful retention requirements. Gionaka will not retain personal data indefinitely merely because an account has been deleted.'], []],
  ['17. Account Deletion', ['You can request deletion through the App. The current path is: Settings → Legal & Privacy → Account Deletion Policy. Deletion may remove personal information subject to information Gionaka is required or permitted to retain for law, security, fraud prevention, dispute resolution, or legal rights.'], []],
  ['18. Data Security and Personal Data Breaches', ['Gionaka takes reasonable technical and organisational measures designed to protect personal data against unauthorized access, misuse, alteration, disclosure, loss, or destruction. No online service can guarantee absolute security. If Gionaka becomes aware of a breach, it will take appropriate steps to contain, investigate, address, and remediate it and provide notices where required by law.'], []],
  ['19. Age Requirement', ['Gionaka is intended for individuals 18 years of age or older and does not currently collect date of birth as part of ordinary registration. If you are under 18, you should not create or use a Gionaka account.'], []],
  ['20. Your Privacy Rights', ['Subject to applicable law, you may request information, correction, completion or updating, erasure, withdrawal of consent, raise a privacy grievance, and exercise other available rights. To exercise a privacy right or raise a concern, contact Privacy Team at PrivacyPolicy@gionaka.com. We may verify your identity before processing a request.'], []],
  ['21. Withdrawal of Consent', ['Where Gionaka processes personal data based on consent, you may withdraw that consent subject to law by contacting PrivacyPolicy@gionaka.com. Withdrawal does not affect lawful processing that occurred before withdrawal. Processing may continue under another lawful basis where permitted.'], []],
  ['22. Grievance Redressal', ['For concerns about how Gionaka handles personal data, contact PrivacyPolicy@gionaka.com with enough information to understand and investigate your concern. Gionaka will respond within the period required by applicable law.'], []],
  ['23. Third-Party Services', ['Gionaka may use third-party services for authentication, cloud infrastructure and storage, analytics, advertising, technical, and security services. Providers may process information under their own terms and privacy policies. Gionaka does not control practices outside its control.'], []],
  ['24. Changes to This Privacy Policy', ['Gionaka may update this Privacy Policy when features, data practices, third-party services, legal requirements, or privacy practices change. The Effective Date indicates when the current version became effective. Where a change materially affects processing, Gionaka will provide notices required by law. We encourage users to review this Privacy Policy periodically.'], []],
  ['25. Contact Gionaka', ['For privacy questions, privacy requests, or data-related concerns:', 'Gionaka Privacy Team — PrivacyPolicy@gionaka.com', 'For general app support: Gionaka Support — support@gionaka.com', 'Website: gionaka.com'], []],
] as const

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background"><div className="mx-auto flex max-w-5xl items-center px-4 py-5 sm:px-6"> <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gionaka
          </Link>
          </div>
          </header>
      
      <section className="border-b border-border bg-muted/30"><div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20"><div className="mx-auto max-w-3xl text-center"><div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"><FileText className="size-7" /></div><h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Privacy Policy</h1><p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">How Gionaka collects, uses, protects, and manages your personal data.</p><div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"><span><strong className="text-foreground">Effective Date:</strong> [Insert Launch Date]</span><span><strong className="text-foreground">Last Updated:</strong> [Insert Date]</span></div></div></div></section>
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16"><div className="mx-auto max-w-3xl space-y-12 text-[15px] leading-8 text-muted-foreground">{sections.map(([title, paragraphs, bullets]) => <section key={title}><h2 className="mb-5 text-2xl font-bold leading-tight text-foreground md:text-3xl">{title}</h2><div className="space-y-4">{paragraphs.map((text) => <p key={text}>{text}</p>)}{bullets.length > 0 && <ul className="ml-5 list-disc space-y-2">{bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</div></section>)}</div></article>
      <Footer />
    </main>
  )
}
