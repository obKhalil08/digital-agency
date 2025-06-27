import React from 'react'

import SectionWrapper from '../../globals/section-wrapper';
import faqs from '@/app/lib/constants/faqs';
import FaqCard from '../faq-card';

export default function FaqSection() {
    const firstHalf = faqs.slice(0, Math.ceil(faqs.length / 2));
    const secondHalf = faqs.slice(Math.ceil(faqs.length / 2));
    return (
        <SectionWrapper removeBorders={true}>
        {/* <AnimatedBg topOffset='10' bottomOffset='90' gradientType='linear' direction={225}> */}
            <header className='px-4 laptop:px-[250px] desktop:px-[300px] py-[50px] laptop:py-[100px] desktop:py-[120px] bg-[url("/section-header-bg.png")] bg-no-repeat bg-cover flex flex-col gap-2.5 items-center justify-center'>
            <h1 className='font-semibold text-[28px] laptop:text-[38px] desktop:text-[48px]'>Frequently Asked Questions</h1>
            <p className='text-grey-90 text-sm laptop:text-base desktop:text-lg'>Still you have any questions? Contact our Team via hello@squareup.com</p>
            </header>
            <div className='flex flex-col laptop:flex-row'>
                <div>
                    {
                        firstHalf.map((faq, i) => (
                            <FaqCard key={i} faq={faq} />
                        ))
                    }
                </div>
                <div>
                    {
                        secondHalf.map((faq, i) => (
                            <FaqCard key={i} faq={faq} />
                        ))
                    }
                </div>
            </div>
        {/* </AnimatedBg> */}
        </SectionWrapper>
    );
}
