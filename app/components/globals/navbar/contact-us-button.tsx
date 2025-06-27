import Link from 'next/link'
import React from 'react'
import HoverScaleWrapper from '../../animation/hover-scale-wrapper'


export default function ContactUsButton() {
  return (
    <HoverScaleWrapper>
      <Link 
          href='/contact'
          className='hidden laptop:inline-block bg-green-50 py-3 desktop:py-4 px-[18px] desktop:px-6 rounded-md desktop:rounded-lg text-grey-15 font-medium'
      >
          Contact Us
      </Link>
    </HoverScaleWrapper>
  )
}
