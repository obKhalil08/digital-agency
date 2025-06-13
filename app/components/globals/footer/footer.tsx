import React from 'react'
import TopSection from './top-section'
import BottomSection from './bottom-section'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center px-4 laptop:px-20 desktop:px-[162px] border-b border-grey-15 text-base desktop:text-lg'>
        <TopSection />
        <BottomSection />
    </footer>
  )
}
