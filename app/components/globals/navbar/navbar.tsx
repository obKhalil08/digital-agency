import React from 'react'
import Logo from './logo'
import ContactUsButton from './contact-us-button'
import Navlinks from './navlinks'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-5 px-4 laptop:px-20 desktop:px-[162px] border-b border-grey-15 laptop:text-sm desktop:text-lg'>
      <Logo />
      <Navlinks />
      <ContactUsButton />
    </nav>
  )
}
