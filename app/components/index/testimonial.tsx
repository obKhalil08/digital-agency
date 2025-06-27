"use client"

import Image from 'next/image'
import React from 'react'
import HoverScaleWrapper from '../animation/hover-scale-wrapper'
import type Testimonial from '@/app/lib/types/Testimonial';

export default function Testimonial({testimonial}: {testimonial: Testimonial}) {
    return (
        <div className='group bg-grey-10 px-6 py-10 laptop:px-[60px] laptop:py-20 desktop:px-20 desktop:py-[100px] flex flex-col gap-6 laptop:gap-[30px] desktop:gap-10'>
            <div className='flex flex-col gap-5 desktop:gap-6'>
                <h3 className='font-medium text-green-80 leading-[150%] text-lg laptop:text-xl desktop:text-[28px]'>
                    {testimonial.heading} 
                </h3>
                <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                    {testimonial.message}
                </p>
            </div>
            <div className='p-3.5 desktop:p-5 bg-[#242424]/20 border border-grey-15 rounded-md desktop:rounded-lg flex justify-between'>
                <div className='flex gap-2.5 laptop:gap-3 desktop:gap-[18px] items-center'>
                <div className='w-fit h-fit relative rounded-sm laptop:rounded-md desktop:rounded-lg overflow-clip'>
                    <Image src={require(`@/public/images/testifiers/${testimonial.image}`)} alt='john smith' className='w-10 laptop:w-[50px] destop:w-[60px]'/>
                    <div className='h-full w-full scale-x-0 group-hover:scale-x-100 origin-left bg-[#ACFF24]/30 transition absolute z-1 top-0 left-0' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-white font-medium text-base desktop:text-xl'>{testimonial.author}</p>
                    <p className='text-grey-90 text-sm desktop:text-lg'>{testimonial.designation}</p>
                </div>
                </div>
                <HoverScaleWrapper className='hidden laptop:block'>
                <button type='button' className='bg-grey-15 text-white px-4 py-3.5 rounded-md desktop:px-5 desktop:py-[18px] desktop:rounded-lg text-sm desktoptext-lg font-medium inline-block cursor-pointer'>
                    Open Website
                </button>
                </HoverScaleWrapper>
            </div>
        </div>
    )
}
