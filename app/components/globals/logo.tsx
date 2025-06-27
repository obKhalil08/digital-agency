import Image from 'next/image'
import React from 'react'

import logo from "@/public/logo-desktop.svg";

export default function Logo() {
  return (
    <Image 
        src={logo} 
        alt="logo"
        className='w-[120px] desktop:w-[180px]'
    />
  )
}
