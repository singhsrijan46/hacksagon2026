import React from "react";
import CurrentSponsors from "../components/CurrentSponsors";
import TiltedCard from "../components/reactbits/TiltedCard";
import TitleHeader from "../components/TitleHeader";
import { FaStar, FaGem, FaCrown, FaTrophy, FaMedal } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { styles } from "../styles";

const pricingPackages = [
    {
        title: "Event Sponsor",
        icon: <FaStar className="text-4xl text-purple-300" />,
        features: ["At our social media", "Holdings at the entrance of the event", "Featured on our website", "Event Brochures and Invitation Letters"],
        color: "bg-[#2d1b4e]/40",
    },
    {
        title: "Platinum Sponsor",
        icon: <FaGem className="text-4xl text-blue-300" />,
        features: ["Prominent branding on stage", "Recognition during opening ceremony", "Social media posts"],
        color: "bg-[#2d1b4e]/40",
    },
    {
        title: "Diamond Sponsor",
        icon: <FaCrown className="text-4xl text-cyan-300" />,
        features: ["Logo on event materials", "Shout-out in our newsletter", "Dedicated booth space"],
        color: "bg-[#2d1b4e]/40",
    },
    {
        title: "Gold Sponsor",
        icon: <FaTrophy className="text-4xl text-yellow-400" />,
        features: ["Branding on digital banners", "Website mention"],
        color: "bg-[#2d1b4e]/40",
    },
    {
        title: "Silver Sponsor",
        icon: <FaMedal className="text-4xl text-gray-300" />,
        features: ["Acknowledgment in the event program", "Logo included at prominent locations"],
        color: "bg-[#2d1b4e]/40",
    },
];

const pastSponsors = [
    {
        src: "https://i.postimg.cc/y8BTjTs0/kitek.jpg",
        alt: "Kitek",
    },
    {
        src: "https://i.postimg.cc/VLZyQ2TY/advance-tech.jpg",
        alt: "Advance Tech",
    },
    {
        src: "https://i.postimg.cc/MpPjB0T6/techno-scientific.jpg",
        alt: "Techno Scientific",
    },
    {
        src: "https://i.postimg.cc/XY8XKjDV/enthutech.jpg",
        alt: "Enthutech",
    },
    {
        src: "https://i.postimg.cc/8CH943hQ/chess.jpg",
        alt: "Chess",
    },
    {
        src: "https://i.postimg.cc/nc1ngdK2/hellointern.jpg",
        alt: "Hello Intern",
    },
    {
        src: "https://i.postimg.cc/Dz21rYvX/bugsee.jpg",
        alt: "Bugsee",
    },
    {
        src: "https://i.postimg.cc/QMf9D8p6/jupiter.jpg",
        alt: "Jupiter",
    },
    {
        src: "https://i.postimg.cc/kg0qLDYN/voltfraction.jpg",
        alt: "Voltfraction",
    },
    {
        src: "https://i.postimg.cc/Kzczpdwn/codingblok.jpg",
        alt: "Coding Blok",
    },
    {
        src: "https://i.postimg.cc/Kzczpdwn/codingblok.jpg",
        alt: "Coding Blok",
    }
];

const currentSponsors = [
    {
        src: "https://i.postimg.cc/gjkT5CRN/Devfolio_Ddq0c_Kk_Q.png",
        alt: "Devfolio",
    },
    {
        src: "https://i.postimg.cc/VNqZNfWS/ETHIndia_C8o_Lc_e_A.png",
        alt: "ETHIndia",
    },
    {
        src: "https://i.postimg.cc/Qtj4926s/polygon_DFQ0UIh_A.png",
        alt: "Polygon",
    },
    {
        src: "https://i.postimg.cc/fTVH9jvy/xyz_8Kxg4t_YD.png",
        alt: "XYZ",
    }
];

const Sponsors = () => {
    return (
        <div className="bg-[#060010] min-h-screen pt-28 md:pt-32">
            {/* Pricing Section */}
            <div className="container mx-auto px-8 md:px-24 mb-20 md:mb-40">
                <TitleHeader title="Sponsors Pricing" sub="" />

                <div className="flex flex-wrap justify-center gap-12 mt-12 md:mt-20">
                    {pricingPackages.map((pkg, index) => (
                        <TiltedCard
                            key={index}
                            imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg=="
                            altText={pkg.title}
                            captionText={pkg.title}
                            containerHeight={index < 3 ? '320px' : '250px'}
                            containerWidth={null}
                            imageHeight="100%"
                            imageWidth="100%"
                            rotateAmplitude={5}
                            scaleOnHover={1.02}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            imageClass="opacity-0"
                            containerClass="w-full max-w-[350px]"
                            overlayContent={
                                <div className={`h-full w-full p-6 rounded-2xl ${pkg.color} backdrop-blur-md border border-white/10 flex flex-col items-start text-left relative group`}>
                                    <div className="p-3 rounded-xl bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                                        {pkg.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold font-robert-medium text-white mb-6">{pkg.title}</h4>
                                    <ul className="flex-1 space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="text-blue-50/70 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Current Sponsors Section */}
            <div className="mb-20 md:mb-40">
                <div className="container mx-auto px-4">
                    <TitleHeader title="Current Sponsors" sub="" />
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        {currentSponsors.map((sponsor, index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div className="w-[140px] h-[100px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-white rounded-[15px] flex items-center justify-center p-4">
                                    <img
                                        src={sponsor.src}
                                        alt={sponsor.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Past Sponsors Section */}
            <div className="container mx-auto px-8 md:px-24 pb-20">
                <TitleHeader title="Past Sponsors" sub="" />
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    {pastSponsors.map((sponsor, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div className="w-[140px] h-[100px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-white rounded-[15px] flex items-center justify-center p-4">
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 mb-8">
                    <a
                        href="/img/Sponshorship 2026 Hacksagon.svg"
                        download="Hacksagon_Brochure_2026.svg"
                        className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 px-6 py-3 text-black transition-all hover:bg-[#5542ff] hover:text-white"
                    >
                        <span className="flex items-center gap-2 font-general font-bold uppercase text-xs md:text-sm">
                            Download Sponsorship Brochure <TiLocationArrow className="text-lg group-hover:rotate-45 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
