export const metadata = {
  title: 'Podtree CRM',
  description: 'Find the perfect small business CRM solution to streamline operations, manage contacts, and boost productivity. Discover customizable options tailored to your needs!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
