import React from 'react'

import borderGradient from "./gradient-border.module.css";

export default function GradientBox({ className = "", children }: {className?: string; children: React.ReactNode }) {
    return (
        <div className={`${borderGradient.gradient_border} inline-flex items-center justify-center rounded-md desktop:rounded-lg ${className}`}>
            <div className='flex items-center justify-center w-full h-full rounded-md desktop:rounded-lg bg-gradient-to-b from-[#242424FF] to-[#24242400]'>
                {children}
            </div>
        </div>
    )
}
