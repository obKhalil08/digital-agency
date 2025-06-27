import React from 'react'

import SectionWrapper from '../globals/section-wrapper';
import AnimatedBg from '../animation/animated-bg';
import testimonials from '@/app/lib/constants/testimonials';
import Testimonial from './testimonial';

export default function FaqSection() {
  return (
    <SectionWrapper removeBorders={true}>
      <AnimatedBg topOffset='10' bottomOffset='90' gradientType='linear' direction={225}>
        <header className='px-4 laptop:px-[250px] desktop:px-[300px] py-[50px] laptop:py-[100px] desktop:py-[120px] bg-[url("/section-header-bg.png")] bg-no-repeat bg-cover flex flex-col gap-2.5 items-center justify-center'>
          <h1 className='font-semibold text-[28px] laptop:text-[38px] desktop:text-[48px]'>Frequently Asked Questions</h1>
          <p className='text-grey-90 text-sm laptop:text-base desktop:text-lg'>Still you have any questions? Contact our Team via hello@squareup.com</p>
        </header>
        <div className='flex flex-col laptop:grid laptop:grid-cols-2 gap-[1px]'>
          {
            testimonials.map((testimonial, i) => (
              <Testimonial key={i} testimonial={testimonial} />
            ))
          }
        </div>
      </AnimatedBg>
      </SectionWrapper>
  )
}
