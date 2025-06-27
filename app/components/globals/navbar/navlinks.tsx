import { navlinks } from '@/app/lib/constants/navlinks'
import Link from 'next/link'
import React from 'react'


export default function Navlinks() {
  return (
    <ul className='hidden laptop:flex gap-6 desktop:gap-[30px]'>
        {
            navlinks.map((link, index) => (
                <li key={index}>
                    <Link 
                        href={link.href} 
                        className='hover:bg-grey-15 py-3 desktop:py-3.5 px-[22px] desktop:px-7 rounded-md desktop:rounded-lg text-grey-90 hover:text-white transition-colors duration-300 font-medium'
                    >
                        {link.text}
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}
