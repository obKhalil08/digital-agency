import React from 'react'

import SectionWrapper from '../../globals/section-wrapper';
import GradientBox from '../../globals/gradient-box';
import Image from 'next/image';

import PaintBrushSvg from "@/public/images/paint-brush.svg";
import PuzzlePieceSvg from "@/public/images/puzzle-piece.svg";
import BatterySvg from "@/public/images/battery.svg";
import HoverScaleWrapper from '../../animation/hover-scale-wrapper';
import AnimatedBg from '../../animation/animated-bg';

export default function ServicesSection() {
  return (
    <SectionWrapper removeBorders={true}>
      <AnimatedBg topOffset='20' bottomOffset='60'>
        <header className='px-4 py-[50px] laptop:py-[100px] desktop:py-[120px] bg-[url("/section-header-bg.png")] bg-no-repeat bg-cover flex flex-col gap-2.5 items-center justify-center'>
          <h1 className='font-semibold text-[28px] laptop:text-[38px] desktop:text-[48px]'>Our Services</h1>
          <p className='text-grey-90 text-sm laptop:text-base desktop:text-lg'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </header>
          <div className='flex flex-col laptop:flex-row gap-[1px]'>
            <div className='bg-grey-10 p-[30px] flex flex-col gap-6 laptop:gap-3.5 desktop:gap-5'>
              <div className='flex gap-3.5 items-center laptop:flex-col laptop:gap-[30px] laptop:items-start desktop:gap-10'>
                <GradientBox>
                    <span className='inline-flex p-4 laptop:p-5 desktop:p-6'>
                        <Image src={PaintBrushSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                    </span>
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Design</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.
              </p>
              <HoverScaleWrapper className='flex laptop:mt-[60px] desktop:mt-20'>
                <button type='button' className='flex-1 bg-grey-15 px-4 py-3.5 rounded-md text-white text-sm font-medium cursor-pointer desktop:py-[18px] desktop:rounded-lg desktop:text-lg'>
                  Learn More
                </button>
              </HoverScaleWrapper>
            </div>
            <div className='bg-grey-10 p-[30px] flex flex-col gap-6 laptop:gap-3.5 desktop:gap-5'>
              <div className='flex gap-3.5 items-center laptop:flex-col laptop:gap-[30px] laptop:items-start desktop:gap-10'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={PuzzlePieceSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Engineering</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
              </p>
              <HoverScaleWrapper className='flex laptop:mt-[60px] desktop:mt-20'>
                <button type='button' className='flex-1 bg-grey-15 px-4 py-3.5 rounded-md text-white text-sm font-medium cursor-pointer desktop:py-[18px] desktop:rounded-lg desktop:text-lg'>
                  Learn More
                </button>
              </HoverScaleWrapper>
            </div>
            <div className='bg-grey-10 p-[30px] flex flex-col gap-6 desktop:h-[577px] laptop:gap-3.5 desktop:gap-5'>
              <div className='flex gap-3.5 items-center laptop:flex-col laptop:gap-[30px] laptop:items-start desktop:gap-10'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={BatterySvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Project Management</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
              </p>
              <HoverScaleWrapper className='flex laptop:mt-[60px] desktop:mt-20'>
                <button type='button' className='flex-1 bg-grey-15 px-4 py-3.5 rounded-md text-white text-sm font-medium cursor-pointer desktop:py-[18px] desktop:rounded-lg desktop:text-lg'>
                  Learn More
                </button>
              </HoverScaleWrapper>
            </div>
          </div>
      </AnimatedBg>
      </SectionWrapper>
  )
}
