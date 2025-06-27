"use client"

import React from 'react';
import { motion, Transition } from "motion/react";

const directions = {
    left: {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.5 }
    },
    right: {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.5 }
    },
    top: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 }
    },
    bottom: {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 }
    }
}

export type FadeDirection = keyof typeof directions;

export default function FadeIn({direction, transition, children}: {direction: FadeDirection, transition?: Partial<Transition<any>>, children: React.ReactNode}) {
  return (
     <motion.div
        initial={directions[direction].initial}
        animate={directions[direction].animate}
        transition={{...directions[direction].transition, ...transition}}
        style={{display: 'inline-block'}}
     >
        {children}
     </motion.div>
  )
}
