import React from 'react'
import ClientsCarousel from './clients-carousel';
import { companies } from '@/app/lib/constants/countries';
import Image from 'next/image';

export default function Clients() {
  return (
    <section className='bg-[#242424] relative border border-grey-15 border-t-0'>
      <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-grey-10 border border-grey-15 px-6 py-3.5 desktop:px-[34px] desktop:py-5'>
        <p className='text-green-99 font-medium text-sm desktop:text-lg whitespace-nowrap'>Trusted By 250+ Companies</p>
      </div>
      <div className='grid grid-cols-2 auto-rows-[100px] laptop:hidden'>
        {
        companies.map((company, i) => (
          <div key={i} className='border border-grey-15 grid place-items-center'>
            <Image src={company.logo} alt={company.name} className='h-10' />
          </div>
        ))}
      </div>
      <div className='hidden laptop:block'>
        <ClientsCarousel />
      </div>
    </section>
  );
}
