import React, { useRef } from 'react';
import PixelBlast from './reactbits/PixelBlast';
import MagicCard from './reactbits/MagicCard';
import GradientText from './reactbits/GradientText';
import RotatingText from './reactbits/RotatingText';

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#060010] flex flex-col md:block">
            <div className="absolute inset-0 z-0">
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
            </div>

            <div className="relative z-10 pointer-events-auto mt-32 px-6 flex flex-col items-center text-center md:absolute md:top-[55%] md:left-[10%] md:mt-0 md:block md:items-start md:text-left md:-translate-y-1/2 md:max-w-[600px]">
                <div className="text-white text-6xl md:text-8xl cursor-pointer mb-4 md:mb-[15px]">
                    <GradientText
                        colors={["#5226fe", "#ff9ffc", "#b19fee"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="!mx-auto md:!mx-0 !justify-center md:!justify-start"
                    >
                        <span style={{ display: 'block', lineHeight: '0.85' }}>Hardware</span>
                    </GradientText>
                    <div style={{ display: 'block', lineHeight: '0.85' }}>meets</div>
                    <GradientText
                        colors={["#5226fe", "#ff9ffc", "#b19fee"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="!mx-auto md:!mx-0 !justify-center md:!justify-start"
                    >
                        <span style={{ display: 'block', lineHeight: '0.85' }}>software</span>
                    </GradientText>
                    <div style={{ display: 'block', lineHeight: '0.85' }}>innovation</div>
                </div>
                <div className="text-white text-xl md:text-4xl font-medium tracking-wide flex flex-row items-center justify-center md:justify-start gap-2">
                    <span>36 hours of</span>
                    <RotatingText
                        texts={['creation', 'innovation', 'development']}
                        mainClassName="bg-[#9932cc] text-white overflow-hidden py-0 sm:py-1 px-2 sm:px-3 justify-center rounded-lg"
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

            <div className="relative z-10 pointer-events-auto mt-12 px-6 w-full flex justify-center md:absolute md:top-[55%] md:right-[10%] md:left-auto md:mt-0 md:block md:w-auto md:max-w-[90%] md:-translate-y-1/2">
                <div className="flex flex-col gap-3 w-full items-center md:items-start">
                    <div className="relative w-full h-auto">
                        <MagicCard className="flex flex-col justify-start items-center p-5 md:p-8 w-auto h-auto text-center">
                            <div className="flex flex-col items-center md:items-end justify-center h-full">
                                <p className="font-circular-web text-sm md:text-2xl text-blue-50/80 tracking-wide uppercase mb-1 md:mb-2 md:text-right">
                                    Prize Pool of
                                </p>
                                <h2 className="special-font font-zentry text-5xl md:text-8xl font-black text-white uppercase">
                                    &#8377;2,50,000
                                </h2>
                            </div>
                        </MagicCard>
                    </div>

                    <div className="flex flex-row gap-3 w-full">
                        <div className="relative w-1/2 h-auto">
                            <MagicCard className="flex flex-col justify-start items-center md:items-start p-4 md:p-6 w-auto h-auto text-center md:text-left">
                                <div className="flex flex-col items-center md:items-start justify-center h-full">
                                    <p className="font-circular-web text-[9px] md:text-xs text-blue-50/80 tracking-wide uppercase mb-1 whitespace-nowrap md:self-end md:text-right">
                                        Software + Hardware
                                    </p>
                                    <h2 className="special-font font-zentry text-2xl md:text-5xl font-black text-white uppercase leading-none whitespace-nowrap">
                                        10 Tracks
                                    </h2>
                                </div>
                            </MagicCard>
                        </div>

                        <div className="relative w-1/2 h-auto">
                            <MagicCard className="flex flex-col justify-start items-center md:items-start p-4 md:p-6 w-auto h-auto text-center md:text-left">
                                <div className="flex flex-col items-center md:items-start justify-center h-full">
                                    <p className="font-circular-web text-[9px] md:text-xs text-blue-50/80 tracking-wide uppercase mb-1 whitespace-nowrap md:self-end md:text-right">
                                        In Competition
                                    </p>
                                    <h2 className="special-font font-zentry text-2xl md:text-5xl font-black text-white uppercase leading-none whitespace-nowrap">
                                        300 Teams
                                    </h2>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
