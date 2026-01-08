import React, { useRef } from 'react';
import PixelBlast from './reactbits/PixelBlast';
import MagicCard from './reactbits/MagicCard';
import VariableProximity from './reactbits/VariableProximity';
import RotatingText from './reactbits/RotatingText';

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#060010' }}>
            <PixelBlast
                variant="circle"
                pixelSize={8}
                color="#B19EEF"
                patternScale={4}
                patternDensity={1.5}
                pixelSizeJitter={0.5}
                enableRipples
                ripplesOnHover
                rippleSpeed={0.2}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid={false}
                liquidStrength={0.12}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={0.3}
                edgeFade={0.35}
                transparent
            />
            <div style={{
                position: 'absolute',
                top: '55%',
                left: '10%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                pointerEvents: 'auto',
                maxWidth: '600px'
            }}>
                <div className="text-white text-6xl md:text-8xl cursor-pointer" style={{ marginBottom: '0' }}>
                    <VariableProximity
                        label="Hardware"
                        className=""
                        style={{ display: 'block', lineHeight: '0.75' }}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                    <VariableProximity
                        label="meets"
                        className=""
                        style={{ display: 'block', lineHeight: '0.75' }}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                    <VariableProximity
                        label="software"
                        className=""
                        style={{ display: 'block', lineHeight: '0.75' }}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                    <VariableProximity
                        label="innovation"
                        className=""
                        style={{ display: 'block', lineHeight: '0.75' }}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
                <div className="text-gray-300 text-xl md:text-4xl font-light tracking-wide flex flex-row items-center gap-2">
                    <span>36 hours of</span>
                    <RotatingText
                        texts={['creation', 'innovation', 'breakthrough solutions']}
                        mainClassName="bg-transparent text-gray-300 overflow-hidden py-0 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '55%',
                right: '10%',
                left: 'auto',
                width: '600px',
                maxWidth: '90%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                pointerEvents: 'auto'
            }}>
                <div className="relative w-full max-w-[800px] flex flex-col gap-4 lg:block lg:h-[400px]">
                    <MagicCard className="flex flex-col justify-between p-6 w-full h-[220px] lg:absolute lg:top-0 lg:left-0 lg:!w-[49%] lg:!h-full">
                        <div className="flex justify-between gap-3 relative text-white">
                            <span className="text-base">Connectivity</span>
                        </div>
                        <div className="flex flex-col relative text-white">
                            <h3 className="font-normal text-3xl m-0 mb-2">Integration</h3>
                            <p className="text-base leading-6 opacity-90">Connect favorite tools</p>
                        </div>
                    </MagicCard>

                    <MagicCard className="flex flex-col justify-between p-6 w-full h-[220px] lg:absolute lg:top-0 lg:right-0 lg:!w-[49%] lg:!h-[48.5%]">
                        <div className="flex justify-between gap-3 relative text-white">
                            <span className="text-base">Teamwork</span>
                        </div>
                        <div className="flex flex-col relative text-white">
                            <h3 className="font-normal text-xl m-0 mb-1">Collaboration</h3>
                            <p className="text-sm leading-5 opacity-90">Work together seamlessly</p>
                        </div>
                    </MagicCard>

                    <MagicCard className="flex flex-col justify-between p-6 w-full h-[220px] lg:absolute lg:bottom-0 lg:right-0 lg:!w-[49%] lg:!h-[48.5%]">
                        <div className="flex justify-between gap-3 relative text-white">
                            <span className="text-base">Overview</span>
                        </div>
                        <div className="flex flex-col relative text-white">
                            <h3 className="font-normal text-xl m-0 mb-1">Dashboard</h3>
                            <p className="text-sm leading-5 opacity-90">Centralized data view</p>
                        </div>
                    </MagicCard>
                </div>
            </div>
        </div>
    );
};

export default Hero;
