
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

const pastWinnersImages = [
    "https://i.postimg.cc/VL9C5SWt/516189553-719476854130190-7754464921513049681-n.jpg",
    "https://i.postimg.cc/m2SPBvTp/515925259-1473208240517858-7460810488991657187-n.jpg",
    "https://i.postimg.cc/zvFGDhYN/515056184-736671365414610-3569823210313674080-n.jpg",
    "https://i.postimg.cc/zGBG53tZ/515304891-1797826584496761-373474846722368052-n.jpg",
    "https://i.postimg.cc/DwMyzFH6/514628900-1736470793628029-5159374847356980556-n.jpg",
    "https://i.postimg.cc/6qtBPQ2j/514735888-1150967953462687-5223638961092997015-n.jpg",
    "https://i.postimg.cc/ZKYTFCh3/515454380-1049026650753929-8199138972147135276-n.jpg",
    "https://i.postimg.cc/wj7gZZMV/516461263-659369177124294-5974343535152216177-n.jpg",
    "https://i.postimg.cc/dtSK26Bz/515400588-1839870469923797-5986119387437056953-n.jpg",
    "https://i.postimg.cc/Z5GtgqXr/514869285-614586398336873-6184765976976601133-n.jpg",
    "https://i.postimg.cc/85D8p0pw/516524321-1392893361983038-4723986454472921963-n.jpg",
    "https://i.postimg.cc/908sBXGP/515077784-646817905043360-6628845870023685907-n.jpg"
];

const Rewards = () => {
    return (
        <section id="rewards" className="pt-28 md:pt-32 pb-10 md:pb-20 bg-[#060010] text-white relative overflow-hidden min-h-screen">
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

                <div className="w-full flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center font-zentry text-5xl md:text-7xl mb-4 md:mb-10 uppercase text-white"
                    >
                        Past Year Winners
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                        {pastWinnersImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="relative overflow-hidden rounded-xl aspect-[4/3] border border-white/10"
                            >
                                <img
                                    src={src}
                                    alt={`Past Winner ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
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
                </div> */}


            </div>
        </section>
    );
};

export default Rewards;
