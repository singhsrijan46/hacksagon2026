import React from 'react';
import PixelBlast from './reactbits/PixelBlast';
import MagicBento from './reactbits/MagicBento';

const Hero = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#060010' }}>
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
                right: '1%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                pointerEvents: 'auto'
            }}>
                <MagicBento
                    spotlightRadius={420}
                    enableTilt
                    clickEffect={false}
                    enableMagnetism
                />
            </div>
        </div>
    );
};

export default Hero;
