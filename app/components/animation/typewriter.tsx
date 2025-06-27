"use client"

import React, { useEffect, useState } from 'react';
import { motion, type Transition } from "motion/react";

export default function Typewriter({interval = 1, transition, className="", children}: {interval?: number, transition?: Partial<Transition<any>>, className?: string, children: React.ReactNode}) {
    const [displayText, setDisplayText] = useState("");
    const fullText = children as string;

    useEffect(() => {
        let index = 0;
        let timer: NodeJS.Timeout, delayTimeout: NodeJS.Timeout;

        delayTimeout = setTimeout(() => {
            timer = setInterval(() => {
                setDisplayText(fullText.slice(0, index))
                index++
                if (index > fullText.length) {
                  clearInterval(timer)
                }
              }, interval * 1000)
        }, (transition?.delay || 0) * 1000)
        return () => {clearTimeout(delayTimeout); clearInterval(timer)}
      }, [])

  return (
     <motion.span style={{display: 'inline-block'}} transition={transition as Transition} className={className}>
        {displayText}
     </motion.span>
  )
}
