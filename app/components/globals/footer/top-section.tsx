import { navlinks } from '@/app/lib/constants'
import Link from 'next/link'
import React from 'react'
import Navlinks from './navlinks'
import Logo from '../navbar/logo'
import ContactUsButton from '../navbar/contact-us-button'

export default function TopSection() {
  return (
     <div className='w-full flex justify-between items-center laptop:py-20 desktop:py-[50px] border-b border-grey-15'>
          <Logo />
          <Navlinks />
          <ContactUsButton />
    </div>
  )
}
