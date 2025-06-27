"use client";

import { useState } from "react";
import GradientBox from "../globals/gradient-box";
import Image from "next/image";

import PlusSvg from "@/public/icons/plus.svg";
import type Faq from "@/app/lib/types/Faq";

import { motion } from "motion/react";

export default function FaqCard({faq}: {faq: Faq}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-grey-10 border border-grey-15 p-6 laptop:px-10 desktop:px-[50px] desktop:py-[30px]'>
            <div className='flex items-center gap-5 laptop:gap-[30px]'>
                <GradientBox>
                    <motion.span animate={{color: isOpen ? "#9EFF00" : "#FFF"}} className='font-semibold text-xl laptop:text-2xl desktop:text-[28px] p-3.5 laptop:p-4 desktop:p-5 leading-[150%]'>
                        {"0"+faq.id}
                    </motion.span>
                </GradientBox>
                <motion.h4 animate={{color: isOpen ? "#C5FF66" : "#FFF"}} className='grow text-white leading-[150%] font-medium laptop:text-lg desktop:text-[22px]'>
                    {faq.question}
                </motion.h4>
                <button type='button' onClick={() => setIsOpen(!isOpen)} className='cursor-pointer shrink-0'>
                    <motion.span animate={{rotate: isOpen ? 45 : 0}} className="inline-flex">
                        <motion.svg className="w-4 desktop:w-5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path d="M12.2748 2.0748C12.2748 1.37064 11.704 0.799805 10.9998 0.799805C10.2956 0.799805 9.7248 1.37064 9.7248 2.0748V9.7248H2.0748C1.37064 9.7248 0.799805 10.2956 0.799805 10.9998C0.799805 11.704 1.37064 12.2748 2.0748 12.2748L9.7248 12.2748V19.9248C9.7248 20.629 10.2956 21.1998 10.9998 21.1998C11.704 21.1998 12.2748 20.629 12.2748 19.9248V12.2748L19.9248 12.2748C20.629 12.2748 21.1998 11.704 21.1998 10.9998C21.1998 10.2956 20.629 9.7248 19.9248 9.7248H12.2748V2.0748Z" animate={{fill: isOpen ? "#C5FF66" : "#FFF"}}/>
                        </motion.svg>
                    </motion.span>
                </button>
            </div>
            <motion.div className='overflow-hidden text-grey-90 leading-[150%] text-sm laptop:text-base desktop:text-lg' animate={{maxHeight: isOpen ? '300px' : '0'}}>
                <div className='pt-6 laptop:pt-4 desktop:pt-5 laptop:pl-[86px] desktop:pl-[110px]'>
                    {faq.answer}
                </div>
            </motion.div>
        </div>
    );
}