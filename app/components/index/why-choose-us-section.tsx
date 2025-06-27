import React from 'react'

import SectionWrapper from '../globals/section-wrapper';
import GradientBox from '../globals/gradient-box';
import Image from 'next/image';

import MedalSvg from "@/public/images/medal.svg";
import UsersSvg from "@/public/images/users.svg";
import ShieldSvg from "@/public/images/shield.svg";
import CrownSvg from "@/public/images/crown.svg";
import AnimatedBg from '../animation/animated-bg';

export default function WhyChooseUsSection() {
  return (
    <SectionWrapper removeBorders={true}>
      <AnimatedBg topOffset='50' bottomOffset='60' gradientType='radial'>
        <header className='px-4 py-[50px] laptop:py-[100px] desktop:py-[120px] bg-[url("/section-header-bg.png")] bg-no-repeat bg-cover flex flex-col gap-2.5 items-center justify-center'>
          <h1 className='font-semibold text-[28px] laptop:text-[38px] desktop:text-[48px]'>Why Choose SquareUp?</h1>
          <p className='text-grey-90 text-sm laptop:text-base desktop:text-lg'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
        </header>
          <div className='flex flex-col laptop:grid laptop:grid-cols-2 gap-[1px]'>
            <div className='bg-grey-10 px-[30px] py-10 laptop:p-[60px] desktop:p-20 flex flex-col gap-6 laptop:gap-[30px] desktop:gap-10'>
              <div className='flex gap-3.5 items-center desktop:gap-5'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={MedalSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Expertise</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div className='bg-grey-10 px-[30px] py-10 laptop:p-[60px] desktop:p-20 flex flex-col gap-6 laptop:gap-[30px] desktop:gap-10'>
              <div className='flex gap-3.5 items-center desktop:gap-5'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={UsersSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Client-Centric Approach</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
              </p>
            </div>
            <div className='bg-grey-10 px-[30px] py-10 laptop:p-[60px] desktop:p-20 flex flex-col gap-6 laptop:gap-[30px] desktop:gap-10'>
              <div className='flex gap-3.5 items-center desktop:gap-5'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={ShieldSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Results-Driven Solutions</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.
              </p>
            </div>
            <div className='bg-grey-10 px-[30px] py-10 laptop:p-[60px] desktop:p-20 flex flex-col gap-6 desktop:h-[577px] laptop:gap-[30px] desktop:gap-10'>
              <div className='flex gap-3.5 items-center desktop:gap-5'>
                <GradientBox className='w-[58px] h-[58px] laptop:w-[70px] laptop:h-[70px] desktop:w-[88px] desktop:h-[88px]'>
                  <Image src={CrownSvg} alt='paint brush' className='w-[26px] laptop:w-[30px] desktop:w-[40px]' />
                </GradientBox>
                <h3 className='font-semibold text-[20px] laptop:text-2xl desktop:text-[30px]'>Collaborative Partnership</h3>
              </div>
              <p className='text-sm laptop:text-base desktpo:text-lg text-grey-90'>
                We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.
              </p>
            </div>
          </div>
      </AnimatedBg>
      </SectionWrapper>
  )
}
