"use client"

import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef } from 'react'
import Typewriter from '../animation/typewriter';

export default function HeroHeading() {
    const divRef = useRef(null);
    const {scrollYProgress} = useScroll({target: divRef, offset: [`start 28%` as any, `start 12%` as any]});

    const colorStop = useTransform(scrollYProgress, value => `${value * 100}%`);
    const background = useTransform(
        colorStop,
        stop => `linear-gradient(#9EFF00 ${stop}, white ${stop})`
    );

    return (
        <motion.div ref={divRef} style={{backgroundImage: background}} className='bg-clip-text'>
            <Typewriter interval={.07} className='text-transparent'>
                A Digital Product Studio
            </Typewriter>
            <br />
            <Typewriter interval={.07} transition={{delay: 1.68}} className='text-transparent'>
                That Will Work
            </Typewriter>
        </motion.div>
    );
}
