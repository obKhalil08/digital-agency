import React from 'react'
import Navlinks from './navlinks'
import Logo from '../logo'
import StayConnected from './stay-connected'

export default function TopSection() {
  return (
     <div className='w-full flex flex-col laptop:flex-row gap-[30px] justify-between items-center laptop:py-20 desktop:py-[50px] laptop:border-b laptop:border-grey-15'>
          <Logo />
          <hr className='laptop:hidden w-full border-grey-15' />
          <Navlinks />
          <StayConnected />
    </div>
  )
}
