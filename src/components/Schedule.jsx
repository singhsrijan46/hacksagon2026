import gsap from "gsap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


import ScrollReveal from "./reactbits/ScrollReveal";
import TiltedCard from "./reactbits/TiltedCard";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to(".story-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".story-subtitle",
        start: "top 90%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });


  return (
    <div id="story" className="min-h-dvh w-screen bg-[#060010] text-blue-50">
      <div className="flex size-full flex-col items-center pt-0 pb-0 md:pt-16 md:pb-0">
        <p className="story-subtitle font-general text-sm uppercase md:text-[10px] opacity-0 translate-y-10 leading-[0.85]">
          HACKSAGON EVENT SCHEDULE
        </p>

        <div className="relative size-full">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="mt-5 text-center pointer-events-none mix-blend-difference relative z-10 px-4 sm:px-8 md:px-32"
            textClassName="font-zentry text-white font-black !text-6xl !leading-[0.9] sm:!text-6xl md:!text-[6rem] uppercase md:!leading-[0.87]"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            {"THE J<b>O</b>URNEY OF <br /> INNOVATION UNFOLDS"}
          </ScrollReveal>

          <div className="mt-10 flex justify-center w-full pointer-events-auto">
            <TiltedCard
              imageSrc="/img/schedule.png"
              altText="Hacksagon Schedule"
              captionText="Event Schedule"
              containerHeight={isMobile ? "200px" : "500px"}
              containerWidth={isMobile ? "300px" : "800px"}
              imageHeight={isMobile ? "200px" : "500px"}
              imageWidth={isMobile ? "300px" : "800px"}
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              imageClass="!p-0 !pb-0 !rounded-[20px] border border-white/10 shadow-2xl !object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex w-full justify-center md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Explore the full schedule and stay on track throughout the hackathon journey.
            </p>

            <button
              id="realm-btn"
              className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white px-7 py-3 mt-5 font-general text-xs uppercase"
              onClick={() => navigate('/schedule')}
            >
              view schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
