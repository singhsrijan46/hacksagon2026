import TiltedCard from "./reactbits/TiltedCard";

const sponsors = [
    {
        src: "https://i.postimg.cc/5t4z7T1P/ieee-india-council.png",
        alt: "IEEE India Council",
    },
    {
        src: "https://i.postimg.cc/d3CDWpY9/ieee-mp-section-cover-removebg-preview.png",
        alt: "IEEE MP Section",
    },
    {
        src: "https://lh3.googleusercontent.com/d/1YUMnL6PVQH5gI-bC72-AprkaUP01ejev",
        alt: "ABV-IIITM IEEE Student Branch",
    },
    {
        src: "https://i.postimg.cc/5t4z7T1P/ieee-india-council.png",
        alt: "IEEE India Council",
    },
];

const CurrentSponsors = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h3 className="text-center font-zentry text-4xl md:text-7xl mb-10 uppercase text-white">
                    Current Sponsors
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <TiltedCard
                                imageSrc={sponsor.src}
                                altText={sponsor.alt}
                                captionText={sponsor.alt}
                                containerHeight={null}
                                containerWidth={null}
                                containerClass="w-[140px] h-[100px] sm:w-[160px] sm:h-[120px] md:w-[300px] md:h-[200px]"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.1}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="flex items-end justify-center w-full h-full pb-6 px-2">
                                        <p className="text-black text-[10px] md:text-xs font-bold text-center leading-tight">
                                            {sponsor.alt}
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentSponsors;
