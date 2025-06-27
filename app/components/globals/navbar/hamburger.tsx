import Image from 'next/image'
import React from 'react'

import hamburgerSvg from "@/public/icons/hamburger.svg";

export default function Hamburger() {
  return (
    <button type='button' className='inline-block laptop:hidden'>
        <Image src={hamburgerSvg} alt="hamburger" />
    </button>
  )
}
