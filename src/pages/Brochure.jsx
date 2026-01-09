import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const Brochure = () => {
    return (
        <section id="brochure" className="min-h-screen bg-[#060010] text-blue-50 relative overflow-hidden flex flex-col items-center justify-center pt-28 md:pt-32 pb-20">
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
                        href="/img/Sponshorship 2026 Hacksagon.svg"
                        download="Hacksagon_Brochure_2026.svg"
                        className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 px-6 py-3 text-black transition-all hover:bg-[#5542ff] hover:text-white"
                    >
                        <span className="flex items-center gap-2 font-general font-bold uppercase text-xs md:text-sm">
                            Download Brochure <TiLocationArrow className="text-lg group-hover:rotate-45 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="/img/Sponshorship 2026 Hacksagon.svg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative cursor-pointer overflow-hidden rounded-full border border-blue-50/30 px-6 py-3 text-blue-50 transition-all hover:bg-white/10"
                    >
                        <span className="flex items-center gap-2 font-general font-bold uppercase text-xs md:text-sm">
                            View Online
                        </span>
                    </a>
                </div>

                <div
                    className="mt-20 w-full max-w-4xl p-4 bg-[#1a0b2e]/50 border border-neutral-800/50 rounded-xl backdrop-blur-sm"
                >
                    {/* Preview Placeholder - Using the SVG as an image if browser supports, or just a generic placeholder */}
                    <div className="aspect-[16/9] w-full bg-black/50 rounded-lg overflow-hidden flex items-center justify-center relative group">
                        <img
                            src="/img/Sponshorship 2026 Hacksagon.svg"
                            alt="Brochure Preview"
                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="bg-black/70 text-white px-4 py-2 rounded-full font-general text-sm">Preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brochure;
