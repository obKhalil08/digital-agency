import React from 'react'
import TopSection from './top-section'
import BottomSection from './bottom-section'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center px-4 py-[30px] gap-[30px] laptop:gap-0 laptop:px-20 desktop:px-[162px] border-t border-grey-15 text-base desktop:text-lg'>
        <TopSection />
        <BottomSection />
    </footer>
  )
}
