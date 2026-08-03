import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const SITE_URL = 'https://gionaka.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gionaka — India’s Digital Labour Chowk | Find Work & Hire Local',
    template: '%s | Gionaka',
  },
  description:
    'Gionaka is India’s Digital Labour Chowk connecting nearby workers and employers. Find daily work or hire local electricians, plumbers, carpenters, painters, drivers and more. Download the app.',
  keywords: [
    'Gionaka',
    'digital labour chowk',
    'find work India',
    'hire local workers',
    'daily wage jobs',
    'electrician near me',
    'plumber near me',
    'carpenter',
    'painter',
    'labour app India',
  ],
  authors: [{ name: 'Gionaka' }],
  creator: 'Gionaka',
  publisher: 'Gionaka',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Gionaka',
    title: 'Gionaka — India’s Digital Labour Chowk',
    description:
      'Connecting nearby workers and employers with a fast, location-based platform. Find work or hire local workers in minutes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gionaka — Find Work. Hire Local. Build India.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gionaka — India’s Digital Labour Chowk',
    description:
      'Find work or hire local workers nearby. India’s Digital Labour Chowk, now in your pocket.',
    images: ['/og-image.png'],
    creator: '@gionaka',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Gionaka',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#06b6d4',
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gionaka',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'India’s Digital Labour Chowk connecting nearby workers with people looking to hire local workers.',
  sameAs: [
    'https://twitter.com/gionakaxnoor',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@gionaka.com',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
