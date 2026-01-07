import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Theme = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');

    const trackData = [
        { name: 'Web Development Track', category: 'software', description: "Develop web apps providing great user experiences with features like real-time data processing, responsive design." },
        { name: 'Mobile App Development Track', category: 'software', description: "Create sophisticated mobile applications with features like AI, IoT, and real-time communication." },
        { name: 'Data Science & Machine Learning', category: 'software', description: "Create predictive models and implement sophisticated machine learning algorithms to solve real-world problems." },
        { name: 'Blockchain & Cryptography Track', category: 'software', description: "Explore blockchain, contracts, and cryptographic techniques for security, scalability, and decentralization." },
        { name: 'Open Innovation Track', category: 'software', description: "Encourage participants to create scalable, sustainable, and impactful solutions for real-world challenges." },
        { name: 'Smart Cities and IoT Solutions', category: 'hardware+software', description: "Enhance urban living with IoT, AI, and analytics for smarter, efficient, and sustainable cities." },
        { name: 'IoT-Enabled Healthcare', category: 'hardware+software', description: "Revolutionize healthcare with tools for diagnosis, delivery, and assistive technologies." },
        { name: 'Smart Wearables for Safety', category: 'hardware+software', description: "Develop wearables for monitoring, tracking, and emergency alerts, ensuring safety in real-time." },
        { name: 'Disaster Management', category: 'hardware+software', description: "Develop tools and systems to enhance preparedness, response, and recovery." },
        { name: 'Agritech and Rural Innovation', category: 'hardware+software', description: "Empower farmers with tech solutions for productivity, resource management, and enhanced market access." }
    ];

    useEffect(() => {
        trackData.forEach((track, index) => {
            gsap.to(`.track-${index}`, {
                scrollTrigger: {
                    trigger: `.track-${index}`,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {
                        setCurrentCategory(track.category);
                        setCurrentDescription(track.description);
                        gsap.to(`.track-name-${index}`, { color: '#5226fe' });
                    },
                    onLeave: () => {
                        gsap.to(`.track-name-${index}`, { color: 'white' });
                    },
                    onEnterBack: () => {
                        setCurrentCategory(track.category);
                        setCurrentDescription(track.description);
                        gsap.to(`.track-name-${index}`, { color: '#5226fe' });
                    },
                    onLeaveBack: () => {
                        gsap.to(`.track-name-${index}`, { color: 'white' });
                    }
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="min-h-screen w-full bg-[#060010] text-white p-4 md:p-10 md:pb-40 mt-16 md:mt-32">
            <h1 className="font-zentry text-3xl md:text-7xl mb-10 md:mb-20 uppercase text-center w-full">THEMES</h1>

            <div className="flex flex-col md:flex-row md:space-x-10 w-full justify-center">
                {/* Left Column - Desktop only */}
                <div className="hidden md:flex md:w-1/2 flex-col space-y-5 justify-center items-end text-right pr-20">
                    <h1 className="font-zentry text-5xl md:text-7xl text-violet-50 uppercase leading-none">
                        {currentCategory === 'hardware+software' ? 'HARDWARE + SOFTWARE' : (currentCategory || 'Select a Track')}
                    </h1>
                    <p className="text-neutral-500 text-lg md:text-xl max-w-lg labels-section-title">
                        {currentDescription || 'Themes cover a wide range of cutting-edge technologies.'}
                    </p>
                </div>

                {/* Right Column - Tracks */}
                <div className="w-full md:w-1/2 px-2 md:px-0">
                    {trackData.map((track, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-2 md:space-x-5 track-${index} mb-3 md:mb-4`}
                            data-category={track.category}
                        >
                            <h1 className={`font-general text-base sm:text-xl md:text-3xl font-bold uppercase track-name-${index} leading-tight`}>
                                - {track.name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Theme;
