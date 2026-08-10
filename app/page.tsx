import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Stats } from '@/components/site/stats'
import { Features } from '@/components/site/features'
import { HowItWorks } from '@/components/site/how-it-works'
import { Categories } from '@/components/site/categories'
import { WhyChoose } from '@/components/site/why-choose'
import { Faq } from '@/components/site/faq'
import { DownloadCta } from '@/components/site/download-cta'
import { Footer } from '@/components/site/footer'
import { StickyDownloadApp } from '@/components/site/store-buttons'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Categories />
        <WhyChoose />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
      <StickyDownloadApp />
    </>
  )
}
