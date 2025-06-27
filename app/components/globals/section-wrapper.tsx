import React from 'react'

export default function SectionWrapper({className="", removeBorders=false, children}: {className?: string; removeBorders?: boolean, children: React.ReactNode}) {
    return (
        <section className={`${removeBorders ? "" : "border border-grey-15 border-t-0" } ${className}`}>
            {children}
        </section>
    )
}
