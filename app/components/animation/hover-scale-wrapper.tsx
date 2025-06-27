"use client"

import React from 'react';
import { motion } from "motion/react";

export default function HoverScaleWrapper({className="", children}: {className?: string; children: React.ReactNode}) {
  return (
     <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={className}>
        {children}
     </motion.div>
  )
}
