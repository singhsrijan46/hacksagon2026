import TitleHeader from "./TitleHeader";

const partners = [
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
        alt: "ABV-IIITM IEEE SB",
    },
];

const TechnicalPartners = () => {
    return (
        <section className="py-10 md:py-20">
            <div className="container mx-auto px-4">
                <TitleHeader title="Technical Partners" sub="" />
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div className="w-[140px] h-[100px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-white rounded-[15px] flex items-center justify-center p-4">
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalPartners;
