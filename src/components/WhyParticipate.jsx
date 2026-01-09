import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import ScrollReveal from "./reactbits/ScrollReveal";
import SpotlightCard from "./reactbits/SpotlightCard";
import { FaMicrochip, FaUsers, FaLightbulb, FaGlobe, FaMedal, FaHandshake } from "react-icons/fa";
import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        title: "Multi-dimensional Hackfest",
        description: "Combine the configurability of hardware with the reusability of software to create groundbreaking solutions.",
        icon: FaMicrochip,
        iconColor: "text-blue-500",
        label: "Innovation",
        color: "#170c26"
    },
    {
        title: "Broad Participation",
        description: "Open to all aspiring college students across the country.",
        icon: FaUsers,
        iconColor: "text-pink-500",
        label: "Community",
        color: "#170c26"
    },
    {
        title: "Innovative Solutions",
        description: "Craft innovative and cost-effective solutions to real-world problem statements presented during the hackathon.",
        icon: FaLightbulb,
        iconColor: "text-yellow-500",
        label: "Creativity",
        color: "#170c26"
    },
    {
        title: "National Recognition",
        description: "Showcase your expertise and bring prestige to your institution by standing out among India's premier institutes.",
        icon: FaGlobe,
        iconColor: "text-purple-500",
        label: "Prestige",
        color: "#170c26"
    },
    {
        title: "Exciting Prizes",
        description: "Win attractive cash prizes and goodies worth up to ₹2,50,000.",
        icon: FaMedal,
        iconColor: "text-green-500",
        label: "Rewards",
        color: "#170c26"
    },
    {
        title: "Collaborative Symposium",
        description: "Collaborate with passionate innovators and work together to develop cutting-edge solutions.",
        icon: FaHandshake,
        iconColor: "text-orange-500",
        label: "Network",
        color: "#170c26"
    },
];

const WhyParticipate = () => {
    return (
        <div className={`-mt-32 md:-mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center gap-1`}
            >
                <h2 className="text-white font-zentry font-black text-5xl leading-[0.9] sm:text-5xl md:text-[5rem] uppercase md:leading-[0.87] mt-5 text-center px-4 sm:px-8 md:px-32">
                    Why Participate?
                </h2>
            </div>

            <div className={`-mt-8 md:-mt-20 pb-14 ${styles.paddingX} flex flex-col items-center`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    {reasons.map((card, index) => (
                        <SpotlightCard key={index} className="w-full min-h-[300px] md:min-h-[320px] bg-[#170c26] border-[#2e2343] flex flex-col justify-between" spotlightColor="rgba(255, 255, 255, 0.1)">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <card.icon className="text-2xl text-white" />
                                </div>
                                <span className="font-zentry text-white text-xl tracking-widest uppercase">{card.label}</span>
                            </div>

                            <div className="mt-auto">
                                <h3 className="font-robert-medium text-2xl md:text-3xl text-white mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className="mt-10 w-full max-w-7xl bg-white/5 border border-white/10 rounded-[20px] p-8 text-center backdrop-blur-sm">
                    <h3 className="font-general text-white text-3xl mb-6 md:text-4xl font-bold">Who Can Participate?</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300 font-general mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>Currently enrolled students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span>Recent graduates (last 12 months)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                            <span>High school students (16+)</span>
                        </div>
                    </div>
                    <p className="text-white/90 text-lg font-robert-regular border-t border-white/10 pt-6 max-w-3xl mx-auto leading-relaxed">
                        <span className="font-bold text-blue-400">Note:</span> All skill levels are welcome! Whether you're a beginner or an expert, Hacksagon is the perfect place to learn, collaborate, and build something amazing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(WhyParticipate, "");
