
import React from 'react';
import CountUp from '../components/reactbits/CountUp';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import { motion } from 'motion/react';

const rewardsData = [
    {
        title: "Hackathon Winners",
        description: "Overall winner amongst all tracks. The winning team will receive a cash prize of ₹ 40K.",
        highlight: "₹ 40,000"
    },
    {
        title: "Track Winners",
        description: "Winners of each track (10 tracks). The winning team will receive a cash prize of ₹ 20K.",
        highlight: "₹ 20,000"
    },
    {
        title: "Top 10 teams",
        description: "All the team members in top 10 teams will get exclusive IEEE Goodies, T-Shirt and Certificates.",
        highlight: "Goodies & Swag"
    }
];

const Rewards = () => {
    return (
        <section id="rewards" className="pt-16 md:pt-32 pb-10 md:pb-20 bg-[#060010] text-white relative overflow-hidden min-h-screen">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 md:px-20 relative z-10 flex flex-col items-center">

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center font-zentry text-5xl md:text-7xl mb-4 uppercase text-yellow-400"
                >
                    Prize Pool
                </motion.h1>

                <div className="text-6xl md:text-9xl font-black font-robert-medium text-white mb-8 md:mb-20 flex items-center gap-2">
                    <span>₹</span>
                    <CountUp
                        to={250000}
                        separator=","
                        direction="up"
                        duration={2}
                        className="count-up-text"
                    />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {rewardsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <SpotlightCard
                                className="custom-spotlight-card h-full flex flex-col items-center text-center gap-6 bg-[#1a0b2e]/60 border-neutral-800/50 p-8 rounded-2xl"
                                spotlightColor="rgba(255, 215, 0, 0.2)"
                            >
                                <h3 className="text-3xl font-bold font-robert-medium text-green-400 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-lg font-general leading-relaxed">
                                    {item.description}
                                </p>
                                {item.highlight && (
                                    <div className="mt-auto pt-4">
                                        <span className="text-2xl font-bold text-yellow-300 border border-yellow-300/30 px-4 py-2 rounded-lg bg-yellow-300/10">
                                            {item.highlight}
                                        </span>
                                    </div>
                                )}
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rewards;
