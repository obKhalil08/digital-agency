import Image from 'next/image';
import React from 'react'

import Zapier from "@/public/images/companies/zapier.svg";

export default function Clients() {
  return (
    <section className='bg-[#242424] py-[30px] relative border border-grey-15 border-t-0'>
        <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-grey-10 border border-grey-15 px-6 py-3.5 desktop:px-[34px] desktop:py-5'>
          <p className='text-green-99 font-medium text-sm desktop:text-lg'>Trusted By 250+ Companies</p>
        </div>
        <div className='flex gap-5 justify-between items-center'>
            {
                Array.from({ length: 6 }).map((_, index) => (
                    <span key={index} className='px-[30px] py-4'>
                        <Image src={Zapier} alt="zapier" />
                    </span>
                ))
            }
            {/* <span className='px-[30px] py-4'>
                <Image src={Zapier} alt="zapier" />
            </span> */}
        </div>
    </section>
  );
}
