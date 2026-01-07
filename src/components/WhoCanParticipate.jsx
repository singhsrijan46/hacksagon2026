import React from "react";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const participants = [
    "Currently enrolled students in any university or college",
    "Recent graduates (within the last 12 months)",
    "High school students aged 16 and above",
];

const WhoCanParticipate = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col items-center`}
            >
                <motion.div variants={textVariant()} className="text-center">
                    <h2 className={`${styles.sectionHeadText} font-zentry`}>
                        Who Can Participate?
                    </h2>
                </motion.div>

                <div className="mt-10 flex flex-col gap-5 w-full max-w-4xl">
                    {participants.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
                            className="bg-[#170c26] p-6 rounded-2xl flex items-center gap-5 w-full border border-white/10"
                        >
                            <FaCheckCircle className="text-violet-300 text-3xl flex-shrink-0" />
                            <p className="text-white font-circular-web text-[18px] md:text-[20px]">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeIn("up", "spring", 0.8, 0.75)}
                    className="mt-10 bg-[#170c26]/50 p-8 rounded-2xl w-full max-w-4xl border border-white/5"
                >
                    <h3 className="text-violet-300 font-bold text-[24px] font-circular-web mb-4">
                        Note :
                    </h3>
                    <p className="text-secondary text-[16px] md:text-[18px] leading-relaxed font-circular-web">
                        All skill levels are welcome! Whether you're a beginner or an expert,
                        Hacksagon is the perfect place to learn, collaborate, and build
                        something amazing.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(WhoCanParticipate, "participants");
