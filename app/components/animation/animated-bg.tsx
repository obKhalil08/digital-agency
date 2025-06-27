"use client"

import React, { useRef } from 'react'
import { useTransform, useScroll, motion } from 'motion/react';

export default function AnimatedBg({className="", topOffset="10", bottomOffset="10", gradientType="linear", direction=180, children}: {className?: string; topOffset?: string; bottomOffset?: string; gradientType?: "linear" | "radial"; direction?: number; children: React.ReactNode}) {
    const divRef = useRef(null);
    const {scrollYProgress} = useScroll({target: divRef, offset: [`${topOffset}% end` as any, `${bottomOffset}% start` as any]});

    const colorStop = useTransform(scrollYProgress, value => `${value * 100}%`);
    const background = useTransform(
        colorStop,
        stop => gradientType === "linear" ? `linear-gradient(${direction}deg, #9EFF00 ${stop}, transparent ${stop})` : `radial-gradient(circle, #9EFF00 ${stop}, transparent ${stop})`
    );

    return (
        <motion.div ref={divRef} style={{backgroundImage: background}} className={`p-[1px] ${className}`}>
            {children}
        </motion.div>
    )
}
