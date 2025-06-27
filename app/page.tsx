import React from 'react'
import HeroSection from './components/index/hero-section'
import ClientsSection from './components/index/clients-section'
import ServicesSection from './components/index/services-section'
import WhyChooseUsSection from './components/index/why-choose-us-section'
import TestimonialsSection from './components/index/testimonials-section'
import FaqSection from './components/index/faq-section'
import ThankYouSection from './components/index/thank-you-section'

export default function page() {
  return (
    <main className=''>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <ThankYouSection />
    </main>
  )
}
