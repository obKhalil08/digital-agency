import React from 'react'
import HeroSection from './components/index/sections/hero-section'
import ClientsSection from './components/index/sections/clients-section'
import ServicesSection from './components/index/sections/services-section'
import WhyChooseUsSection from './components/index/sections/why-choose-us-section'
import TestimonialsSection from './components/index/sections/testimonials-section'
import FaqSection from './components/index/sections/faq-section'
import ThankYouSection from './components/index/sections/thank-you-section'

export default function page() {
  return (
    <main className=''>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      {/* <ThankYouSection />? */}
    </main>
  )
}
