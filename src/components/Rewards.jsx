import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { FaTshirt, FaGift, FaRupeeSign, FaHeadphones } from "react-icons/fa";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const rewards = [
    {
        title: "Exclusive T-Shirts",
        description: "Get exclusive event T-shirts for the all Round 3 qualifiers.",
        icon: FaTshirt,
        iconColor: "text-blue-400",
    },
    {
        title: "Goodies",
        description: "Get exciting goodies to fuel your tech passion.",
        icon: FaGift,
        iconColor: "text-pink-400",
    },
    {
        title: "Cash Prizes",
        description: "Attractive cash prizes worth up to ₹2,50,000.",
        icon: FaRupeeSign,
        iconColor: "text-green-400",
    },
    {
        title: "Winner Medals",
        description: "Your Chance to Score Cool Gadgets!",
        icon: FaHeadphones,
        iconColor: "text-purple-400",
    },
];

gsap.registerPlugin(ScrollTrigger);

const RewardCard = ({
    index,
    title,
    description,
    icon: Icon,
    iconColor,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-[#170c26] p-10 rounded-3xl flex-1 min-w-[200px] flex flex-col items-center text-center'
    >
        <div className={`p-4 rounded-full bg-white/10 mb-4`}>
            <Icon className={`text-4xl ${iconColor || 'text-white'}`} />
        </div>

        <div className='mt-1'>
            <h3 className='text-white font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[16px]'>{description}</p>
        </div>
    </motion.div>
);

const Rewards = () => {
    const prizeRef = useRef(null);

    useEffect(() => {
        const el = prizeRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { innerText: 0 },
            {
                innerText: 250000,
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                snap: { innerText: 1 },
                onUpdate: function () {
                    el.innerText = "₹" + Math.ceil(this.targets()[0].innerText).toLocaleString('en-IN');
                },
            }
        );
    }, []);

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()} className="text-center">
                    <h2 className={`${styles.sectionHeadText} font-zentry leading-[0.85]`}>
                        <span className="text-7xl md:text-[6rem] font-black">Prize Pool Up to</span> <br />
                        <span ref={prizeRef} className="text-7xl md:text-[6rem] font-black">₹0</span>
                    </h2>
                    <p className={styles.sectionSubText}>The prize pool includes exciting cash prizes, gadgets, goodies, and more! Don't miss your chance to win big and get recognized.</p>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-nowrap gap-7 justify-center overflow-hidden`}>
                {rewards.map((reward, index) => (
                    <RewardCard key={reward.title} index={index} {...reward} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Rewards, "");
