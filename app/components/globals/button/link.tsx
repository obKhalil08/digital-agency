"use client"

import Link from 'next/link'
import React from 'react'

import { motion } from "motion/react"


export default function LinkButton({type = 'primary', href = "#", children, ...props}: {type?: 'primary' | 'secondary', href?: string, children?: React.ReactNode}) {
  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
      <Link
          href={href}
          {...props}
          className={`${type === 'primary' ? 'bg-green-50 border-green-50 text-grey-15' : 'bg-[#242424]/20 border-grey-20 text-white'} inline-block border px-5 py-3.5 rounded-lg desktop:px-7 desktop:py-[18px] desktop:rounded-[10px] font-medium text-sm whitespace-nowrap`}
      >
          {children}
      </Link>
    </motion.div>
  )
}