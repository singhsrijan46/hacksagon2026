import React from "react";
import TiltedCard from "../components/reactbits/TiltedCard";
import TitleHeader from "../components/TitleHeader";

const partnersData = [
    {
        name: "IEEE India Council",
        description: "IEEE India Council is the umbrella organisation which coordinates IEEE activities in India. Its primary aim is to assist and coordinate the activities of local \"Sections\", in order to benefit mutually, and avoid duplication of effort and resources. IEEE India Council was established on 20th May 1976 and is one of the five councils in the Asia Pacific Region (Region #10 of IEEE).",
        logo: "https://i.postimg.cc/5t4z7T1P/ieee-india-council.png",
        color: "from-blue-600/20 to-indigo-600/20",
        borderColor: "border-blue-500/30",
        logoBg: "bg-white",
        logoClass: "h-16", // Reduced size
        logoPlaceholder: "IEEE India Council"
    },
    {
        name: "IEEE MP Section",
        description: "IEEE MP Section continues this mission by empowering professionals, students, and researchers in Madhya Pradesh to collaborate, innovate, and excel in their respective fields. Together, we strive to build a better technological future for the region and beyond.",
        logo: "https://i.postimg.cc/d3CDWpY9/ieee-mp-section-cover-removebg-preview.png",
        color: "from-indigo-600/20 to-purple-600/20",
        borderColor: "border-indigo-500/30",
        logoBg: "bg-white",
        logoPlaceholder: "IEEE MP Section"
    },
    {
        name: "IEEE Student Branch of ABV-IIITM",
        description: "The ABV-IIITM IEEE Student Branch, established in 2019, is a dynamic platform that connects academia and industry. Through workshops, seminars, and competitions, it provides students with hands-on experience, enhancing their technical skills and preparing them for challenges.",
        logo: "https://lh3.googleusercontent.com/d/1YUMnL6PVQH5gI-bC72-AprkaUP01ejev",
        color: "from-purple-600/20 to-pink-600/20",
        borderColor: "border-purple-500/30",
        logoBg: "bg-white", // Changed to bg-white
        logoPlaceholder: "ABV-IIITM IEEE SB"
    }
];

const Partners = () => {
    return (
        <section className="min-h-screen bg-[#060010] text-white pt-28 md:pt-32 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-8 md:px-24">
                <TitleHeader title="Technical Partners" sub="" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 mt-12 md:mt-20 place-items-center">
                    {partnersData.map((partner, index) => (
                        <TiltedCard
                            key={index}
                            imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg=="
                            altText={`${partner.name} logo`}
                            captionText={partner.name}
                            containerHeight="var(--card-height)"
                            containerWidth="100%"
                            imageHeight="var(--card-height)"
                            imageWidth="100%"
                            rotateAmplitude={5}
                            scaleOnHover={1.02}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            imageClass=""
                            containerClass="[--card-height:600px] md:[--card-height:400px]"
                            overlayContent={
                                <div className={`h-full w-full p-8 flex flex-col items-center text-center gap-6 rounded-[15px] border-neutral-800/50 border bg-[#2d1b4e]/40 backdrop-blur-md overflow-hidden relative group`}>

                                    {/* Logo Area */}
                                    <div className={`h-24 w-auto p-4 rounded-xl flex items-center justify-center ${partner.logoBg} mb-2`}>
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className={`max-w-full object-contain ${partner.logoClass || 'max-h-full'}`}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <span className="hidden text-blue-500 font-bold text-sm bg-white p-2 rounded">{partner.logoPlaceholder}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold font-robert-medium text-white transition-colors">
                                        {partner.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm font-general leading-relaxed">
                                        {partner.description}
                                    </p>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
