export const metadata = {
  title: 'Bnext Monitor',
  description: 'Manten el control en todo momento',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Timeline from '@/components/timeline'
import Roadmap from '@/components/roadmap'

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Features />
      <Zigzag />
      <Roadmap />
      <Testimonials />
    </>
  )
}
