import { navlinks } from '@/app/lib/constants'
import Link from 'next/link'
import React from 'react'

export default function Navlinks() {
  return (
    <ul className='flex gap-5 desktop:gap-[30px]'>
        {
            navlinks.map((link, index) => (
                <li key={index}>
                    <Link 
                        href={link.href} 
                        className='text-grey-90 font-medium'
                    >
                        {link.text}
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}
