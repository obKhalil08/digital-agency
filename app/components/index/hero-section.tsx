"use client"

import React, { useRef } from 'react'

import gridPatternOverlay from "@/app/grid-overlay.module.css";
import LinkButton from '../globals/button/link';
import FadeIn from '../animation/fade-in';
import Typewriter from '../animation/typewriter';
import SectionWrapper from '../globals/section-wrapper';
import { useScroll, useTransform , motion} from 'motion/react';

export default function HeroSection() {
  const divRef = useRef(null);
  const {scrollYProgress} = useScroll({target: divRef, offset: [`start 22%` as any, `start 10%` as any]});

  const colorStop = useTransform(scrollYProgress, value => `${value * 100}%`);
  const background = useTransform(
      colorStop,
      stop => `linear-gradient(#9EFF00 ${stop}, white ${stop})`
  );
  
  return (
    <SectionWrapper className={`${gridPatternOverlay.grid_pattern_overlay} pt-20 laptop:pt-28 h-[calc(100vh-87px)] laptop:h-[calc(100vh-85px)] desktop:h-[calc(100vh-101px)] bg-[url("/hero-bg.png")] bg-no-repeat bg-bottom px-4`}>
        <h1 className='font-semibold text-[34px] laptop:text-5xl desktop:text-[68px] text-center'>
          <motion.div ref={divRef} className='bg-clip-text' style={{backgroundImage: background}} >
            <Typewriter interval={.07} className='text-transparent'>
              A Digital Product Studio
            </Typewriter>
            <br />
            <Typewriter interval={.07} transition={{delay: 1.68}} className='text-transparent'>
              That Will Work
            </Typewriter>
          </motion.div>
        </h1>
        <div className='mt-[30px]'>
          <p className='visible laptop:hidden bg-[#242424]/20 border border-grey-15 rounded-lg px-5 py-[18px] text-center'>For startups, enterprise leaders, media & publishers, and social good.</p>
          <div className='hidden laptop:visible bg-[#242424]/20 laptop:w-fit laptop:m-auto laptop:flex laptop:items-center laptop:gap-1.5 border border-grey-15 text-grey-60 rounded-lg desktop:rounded-xl laptop:px-[30px] laptop:py-[18px] desktop:px-10 desktop:py-6 laptop:text-lg desktop:text-[22px]'>
            <span>For</span>
            <HighlightedSpan>
              <FadeIn direction='left' transition={{delay: 0}}>
                Startups
              </FadeIn>
            </HighlightedSpan>,
            <HighlightedSpan>
              <FadeIn direction='right' transition={{delay: .3}}>
                Enterprise leaders
              </FadeIn>
            </HighlightedSpan>,
            <HighlightedSpan>
              <FadeIn direction='bottom' transition={{delay: .6}}>
                Media & Publishers
              </FadeIn>
            </HighlightedSpan>,
            <span>and</span>
            <HighlightedSpan>
              <FadeIn direction='top' transition={{delay: .9}}>
                Social Good
              </FadeIn>
            </HighlightedSpan>
          </div>
        </div>
        <div className='mt-10 mx-auto w-fit flex gap-[13px]'>
          <LinkButton type='secondary' href='/work'>Our Works</LinkButton>
          <LinkButton type='primary' href='/contact'>Contact Us</LinkButton>
        </div>
      </SectionWrapper>
  )
}

function HighlightedSpan({ children }: { children: React.ReactNode }) {
  return (
      <span className='inline-block bg-grey-15 laptop:px-2.5 laptop:py-2 laptop:rounded-md desktop:px-2.5 desktop:py-3 desktop:rounded-lg text-white overflow-hidden'>
        {children}
      </span>
    )
}
