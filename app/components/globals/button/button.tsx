import React from 'react'

import HoverScaleWrapper from '../../animation/hover-scale-wrapper'


export default function Button({type = 'primary', children, ...props}: {type?: 'primary' | 'secondary', href?: string, children?: React.ReactNode, [key: string]: any}) {
  return (
    <HoverScaleWrapper>
      <button
          {...props} 
          onClick={props.onClick}
          className='hidden laptop:inline-block bg-green-50 py-3 desktop:py-4 px-[18px] desktop:px-6 rounded-md desktop:rounded-lg text-grey-15 font-medium whitespace-nowrap'
      >
          {children}
      </button>
    </HoverScaleWrapper>
  )
}