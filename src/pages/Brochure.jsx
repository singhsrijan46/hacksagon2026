import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const Brochure = () => {
    return (
        <section id="brochure" className="min-h-screen bg-[#060010] text-blue-50 relative overflow-hidden pt-28 md:pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,36,255,0.15),transparent_70%)]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 md:px-10 relative z-10 flex flex-col items-center text-center">
                <h1
                    className="font-zentry text-5xl md:text-7xl mb-8 uppercase text-white"
                >
                    Hacksagon Brochure
                </h1>

                <p
                    className="font-general text-lg md:text-xl text-blue-50/70 max-w-2xl mb-12"
                >
                    Discover everything about Hacksagon 2026. Download our detailed brochure to learn more about the tracks, themes, sponsors, and what awaits you.
                </p>

                <div
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <a
                        href="https://drive.google.com/uc?export=download&id=1KcnswVUjCV9mlPGB_YNLEVPu5VGOsPhn"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3 text-black transition-all hover:bg-[#5542ff] hover:text-white"
                    >
                        <span className="flex items-center gap-2 font-general font-bold uppercase text-xs md:text-sm">
                            Download Brochure <TiLocationArrow className="text-lg group-hover:rotate-45 transition-transform" />
                        </span>
                    </a>
                </div>




                <div className="mt-12 w-full max-w-5xl h-[500px] md:h-[800px] border-2 border-white/10 rounded-xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm">
                    <iframe
                        src="https://drive.google.com/file/d/1KcnswVUjCV9mlPGB_YNLEVPu5VGOsPhn/preview"
                        width="100%"
                        height="100%"
                        className="w-full h-full"
                        title="Brochure Preview"
                    ></iframe>
                </div>
            </div>
        </section >
    );
};

export default Brochure;