import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import ScrollReveal from "./reactbits/ScrollReveal";

import { FaTshirt, FaGift, FaRupeeSign, FaHeadphones } from "react-icons/fa";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

import MagicBento from "./reactbits/MagicBento";

const rewards = [
    {
        title: "Exclusive T-Shirts",
        description: "Get exclusive event T-shirts for the all Round 3 qualifiers.",
        icon: FaTshirt,
        iconColor: "text-blue-400",
        label: "Merchandise",
        color: "#170c26"
    },
    {
        title: "Goodies",
        description: "Get exciting goodies to fuel your tech passion.",
        icon: FaGift,
        iconColor: "text-pink-400",
        label: "Swag",
        color: "#170c26"
    },
    {
        title: "Cash Prizes",
        description: "Attractive cash prizes worth up to ₹2,50,000.",
        icon: FaRupeeSign,
        iconColor: "text-green-400",
        label: "Winnings",
        color: "#170c26"
    },
    {
        title: "Winner Medals",
        description: "Your Chance to Score Cool Gadgets!",
        icon: FaHeadphones,
        iconColor: "text-purple-400",
        label: "Gadgets",
        color: "#170c26"
    },
];

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Rewards = () => {
    useGSAP(() => {
        gsap.to(".rewards-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".rewards-subtitle",
                start: "top 90%",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
        });
    });

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center gap-1`}
            >
                <p className="rewards-subtitle font-general text-sm uppercase md:text-[10px] opacity-0 translate-y-10 leading-[0.85] text-white">
                    Big Rewards Await
                </p>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    containerClassName="mt-5 text-center px-4 sm:px-8 md:px-32"
                    textClassName="text-white font-zentry font-black !text-6xl !leading-[0.9] sm:!text-6xl md:!text-[6rem] uppercase md:!leading-[0.87]"
                    rotationEnd="center center"
                    wordAnimationEnd="center center"
                >
                    {"Play for a prize pool <br /> of ₹2,50,000"}
                </ScrollReveal>
                <p className={`${styles.sectionSubText} mt-5 text-center max-w-3xl mx-auto`}>The prize pool includes exciting cash prizes, gadgets, goodies, and more! Don't miss your chance to win big and get recognized.</p>
            </div>
            <div className={`-mt-40 md:-mt-24 pb-14 ${styles.paddingX} flex justify-center`}>
                <MagicBento items={rewards} />
            </div>
        </div>
    );
};

export default SectionWrapper(Rewards, "");
