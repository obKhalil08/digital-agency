"use client";

import { companies } from '@/app/lib/constants/countries';
import { motion, useAnimate, useMotionValueEvent, useScroll, ValueAnimationTransition } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'


export default function ClientsCarousel() {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
    const [startX, setStartX] = useState("0%");
    const [endX, setEndX] = useState("-100%")

    const duration = 20;

    const [scopeCenter, animateCenter] = useAnimate();
    const [scopeLeft, animateLeft] = useAnimate();
    const [scopeRight, animateRight] = useAnimate();

    const controlsCenter = useRef<ReturnType<typeof animateCenter> | null>(null);
    const controlsLeft = useRef<ReturnType<typeof animateLeft> | null>(null);
    const controlsRight = useRef<ReturnType<typeof animateRight> | null>(null);

    const carouselDirection = useRef<"left" | "right">("left");

    const transitions: ValueAnimationTransition = {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
    };

    useEffect(() => {
        controlsCenter.current = animateCenter(
            scopeCenter.current,
            {x: ["0%", "-100%"]},
            transitions
        );

        controlsLeft.current = animateLeft(
            scopeLeft.current,
            {x: ["0%", "-100%"]},
            transitions
        );

        controlsRight.current = animateRight(
            scopeRight.current,
            {x: ["0%", "-100%"]},
            transitions
        );

        return () => {
            controlsCenter.current?.stop();
            controlsLeft.current?.stop();
            controlsRight.current?.stop();
        }
    }, []);

    const { scrollY } = useScroll();
    const lastScroll = useRef(scrollY.get());

    useEffect(() => {
        const match = scopeCenter.current.style.transform.match(/translateX\(([^)%]+)%\)/);
        const x = match ? Number(match[1]) : 0;
        let startX = "0%", endX = "-100%";
        
        if (scrollDirection === "down") {
            if (carouselDirection.current === "right") {
                const tempX = x < 0 ? x + 100 : x;
                startX = tempX + "%";
                endX = (tempX - 100) + "%";

                carouselDirection.current = "left";
            }
        } else {
            if (carouselDirection.current === "left") {
                const tempX = x > 0 ? x - 100 : x;
                startX = tempX + "%";
                endX = (tempX + 100) + "%";

                carouselDirection.current = "right";
            }
        }

        setStartX(startX);
        setEndX(endX);
    }, [scrollDirection])

    useEffect(() => {
        // console.log("Animating from", startX, "to", endX);
        controlsCenter.current?.pause();
        controlsLeft.current?.pause();
        controlsRight.current?.pause();
        animateCenter(
            scopeCenter.current,
            {x: [startX, endX]},
            transitions 
        )
        animateLeft(
            scopeLeft.current,
            {x: [startX, endX]},
            transitions 
        )
        animateRight(
            scopeRight.current,
            {x: [startX, endX]},
            transitions
        )
        controlsCenter.current?.play();
        controlsLeft.current?.play();
        controlsRight.current?.play();
    }, [startX, endX]);

    useMotionValueEvent(scrollY, "change", () => {
        const prev = lastScroll.current;
        const curr = scrollY.get();
        if (curr > prev) {
            setScrollDirection("down");
        } else if (curr < prev) {
            setScrollDirection("up");
        }
        lastScroll.current = curr;
    });

    return (
        <div className='overflow-hidden py-[30px] w-full'>
            <div className='flex w-fit -translate-x-1/3'>
                <motion.div
                    ref={scopeLeft}
                    className='flex gap-5 items-center bg-rd-400'
                    style={{ width: 'max-content',}}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration,
                        ease: "linear"
                    }}
                >
                    {companies.map((company, index) => (
                        <span
                        key={"1"+index}
                        className='w-[196px] laptop:h-[72px] desktop:w-[250px] desktop:h-[90px] flex items-center justify-center shrink-0'
                        >
                        <Image src={company.logo} alt={company.name} className='' />
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    ref={scopeCenter}
                    className='flex gap-5 items-center bg-gren-400'
                    style={{ width: 'max-content', }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration,
                        ease: "linear"
                    }}
                >
                    {companies.map((company, index) => (
                        <span
                        key={"2"+index}
                        className='w-[196px] laptop:h-[72px] desktop:w-[250px] desktop:h-[90px] flex items-center justify-center shrink-0'
                        >
                        <Image src={company.logo} alt={company.name} className='' />
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    ref={scopeRight}
                    className='flex gap-5 items-center bg-bue-400'
                    style={{ width: 'max-content',}}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration,
                        ease: "linear"
                    }}
                >
                    {companies.map((company, index) => (
                        <span
                        key={"3"+index}
                        className='w-[196px] laptop:h-[72px] desktop:w-[250px] desktop:h-[90px] flex items-center justify-center shrink-0'
                        >
                        <Image src={company.logo} alt={company.name} className='' />
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
