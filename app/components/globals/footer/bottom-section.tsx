import Image from 'next/image'
import React from 'react'

import envelopeSvg from "@/public/icons/envelope.svg";
import telephoneSvg from "@/public/icons/telephone.svg";
import locationPinSvg from "@/public/icons/location-pin.svg";

export default function BottomSection() {
  return (
    <div className='w-full flex flex-col gap-5 laptop:flex-row justify-between items-center laptop:py-20 desktop:py-[50px]'>
        <div className='flex flex-col laptop:flex-row gap-[22px] items-center text-[18px] laptop:text-base desktop:text-[18px]'>
            <div className='flex gap-1.5 border-b border-grey-15 py-5 laptop:pb-4'>
                <Image src={envelopeSvg} alt='envelope icon' className='w-[22px] laptop:w-[18px] desktop:w-[22px]' />
                <span>hello@squareup.com</span>
            </div>
            <div className='flex gap-1.5 border-b border-grey-15 py-5 laptop:pb-4'>
                <Image src={telephoneSvg} alt='envelope icon' className='w-[22px] laptop:w-[18px] desktop:w-[22px]' />
                <span>+91 91813 23 2309</span>
            </div>
            <div className='flex gap-1.5 border-b border-grey-15 py-5 laptop:pb-4'>
                <Image src={locationPinSvg} alt='envelope icon' className='w-[22px] laptop:w-[18px] desktop:w-[22px]' />
                <span>Somewhere in the World</span>
            </div>
        </div>
        <p className='font-normal text-base laptop:text-sm desktop:text-lg text-grey-60'>© 2025 SquareUp. All rights reserved.</p>
    </div>
  )
}
