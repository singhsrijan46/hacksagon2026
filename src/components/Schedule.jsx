import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import Button from "./Button";
import ScrollReveal from "./reactbits/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const frameRef = useRef(null);

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

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-[#060010] text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="story-subtitle font-general text-sm uppercase md:text-[10px] opacity-0 translate-y-10 leading-[0.85]">
          HACKSAGON EVENT SCHEDULE
        </p>

        <div className="relative size-full">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="mt-5 text-center pointer-events-none mix-blend-difference relative z-10"
            textClassName="font-zentry text-white font-black text-7xl md:text-[6rem] uppercase leading-[0.87]"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            {"THE J<b>O</b>URNEY OF <br /> INNOVATION UNFOLDS"}
          </ScrollReveal>

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/schedule.png"
                  alt="schedule.png"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Explore the full schedule and stay on track throughout the hackathon journey.
            </p>

            <Button
              id="realm-btn"
              title="view schedule"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
