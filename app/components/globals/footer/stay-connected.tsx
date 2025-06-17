import React from 'react'

import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Image from 'next/image';

import borderGradient from "./gradient-border.module.css";

export default function StayConnected() {
  return (
    <div className='w-full laptop:w-fit flex items-center flex-col laptop:flex-row p-4 laptop:p-2.5 desktop:p-3.5 gap-3.5 laptop:gap-5 rounded-lg desktop:rounded-xl border border-grey-15'>
        <span className='font-medium'>Stay Connected</span>
        <div className='flex gap-2.5 desktop:gap-3.5'>
            <SocialMediaLink icon={Facebook} href='https://www.facebook.com/' />
            <SocialMediaLink icon={Twitter} href='https://twitter.com/' />
            <SocialMediaLink icon={Linkedin} href='https://www.linkedin.com/' />
        </div>
    </div>
  )
}

function SocialMediaLink({ icon, href }: { icon: string, href: string }) {
  return (
    <a href={href} className={`${borderGradient.gradient_border} inline-flex w-[52px] h-[52px] items-center justify-center rounded-md desktop:rounded-lg `}>
        <span className='flex items-center justify-center w-full h-full rounded-md desktop:rounded-lg bg-gradient-to-b from-[#242424FF] to-[#24242400]'>
            <Image src={icon} alt='social media icon' className='w-5 desktop:w-6' />
        </span>
    </a>
  )
}
