import Link from 'next/link'
import React from 'react'


export default function ContactUsButton() {
  return (
    <Link 
        href='/contact'
        className='hidden laptop:inline-block bg-green-50 py-3 desktop:py-4 px-[18px] desktop:px-6 rounded-md desktop:rounded-lg text-grey-15 font-medium whitespace-nowrap'
    >
        Contact Us
    </Link>
  )
}