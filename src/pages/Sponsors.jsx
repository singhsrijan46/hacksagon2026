import React from "react";
import CurrentSponsors from "../components/CurrentSponsors";
import TiltedCard from "../components/reactbits/TiltedCard";
import { styles } from "../styles";

const pricingPackages = [
    {
        title: "Platinum Sponsor",
        price: "₹50,000",
        features: ["Logo on main banner", "Keynote session slot", "Booth space", "Social media shoutouts"],
        color: "from-yellow-400 to-yellow-600",
    },
    {
        title: "Gold Sponsor",
        price: "₹30,000",
        features: ["Logo on website", "Mentorship slot", "Social media mentions"],
        color: "from-gray-300 to-gray-500",
    },
    {
        title: "Silver Sponsor",
        price: "₹15,000",
        features: ["Logo on website", "Social media mentions"],
        color: "from-orange-400 to-red-500",
    },
];

const pastSponsors = [
    {
        src: "https://i.postimg.cc/5t4z7T1P/ieee-india-council.png",
        alt: "Past Sponsor 1",
    },
    {
        src: "https://i.postimg.cc/d3CDWpY9/ieee-mp-section-cover-removebg-preview.png",
        alt: "Past Sponsor 2",
    },
    {
        src: "https://lh3.googleusercontent.com/d/1YUMnL6PVQH5gI-bC72-AprkaUP01ejev",
        alt: "Past Sponsor 3",
    },
    {
        src: "https://i.postimg.cc/5t4z7T1P/ieee-india-council.png",
        alt: "Past Sponsor 4",
    }
];

const Sponsors = () => {
    return (
        <div className="bg-[#060010] min-h-screen pt-20">
            {/* Pricing Section */}
            <section className={`${styles.padding} max-w-7xl mx-auto`}>
                <h3 className={`${styles.sectionHeadText} text-center mb-16 font-zentry uppercase`}>
                    Sponsorship Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pricingPackages.map((pkg, index) => (
                        <div key={index} className={`p-1 rounded-2xl bg-gradient-to-b ${pkg.color}`}>
                            <div className="bg-[#100d25] rounded-xl p-8 h-full flex flex-col items-center text-center">
                                <h4 className="text-2xl font-bold text-white mb-4">{pkg.title}</h4>
                                <p className="text-4xl font-black text-white mb-8">{pkg.price}</p>
                                <ul className="flex-1 space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="text-secondary text-sm">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="bg-blue-50 text-black font-bold py-2 px-6 rounded-full transition-all hover:bg-[#5542ff] hover:text-white">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Current Sponsors Section */}
            <CurrentSponsors />

            {/* Past Sponsors Section */}
            <section className={`${styles.padding} max-w-7xl mx-auto pb-20`}>
                <h3 className={`${styles.sectionHeadText} text-center mb-16 font-zentry uppercase`}>
                    Past Sponsors
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {pastSponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <TiltedCard
                                imageSrc={sponsor.src}
                                altText={sponsor.alt}
                                captionText={sponsor.alt}
                                containerHeight={null}
                                containerWidth={null}
                                containerClass="w-[120px] h-[80px] sm:w-[140px] sm:h-[100px] md:w-[200px] md:h-[140px]"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={false}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sponsors;
