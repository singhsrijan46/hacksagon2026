import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import ScrollReveal from "./reactbits/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1200 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    gsap.to(".welcome-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".welcome-text",
        start: "top 90%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".about-description", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-32 flex flex-col items-center gap-1">
        <p className="welcome-text font-general text-sm uppercase md:text-[10px] text-white opacity-0 translate-y-10 leading-[0.85]">
          Welcome to Hacksagon
        </p>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mt-5 text-center"
          textClassName="text-white font-zentry font-black text-7xl md:text-[6rem] uppercase leading-[0.85] sm:px-32"
          rotationEnd="center center"
          wordAnimationEnd="center center"
        >
          {"Discover India's <br /> boldest ideas together"}
        </ScrollReveal>

        <div className="about-subtext">
          <p className="text-gray-500">The ultimate hack begins—ideas level up</p>
          <p className="text-white">
            Hacksagon unites fearless builders across platforms to create the future together
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>

      <div className="w-screen py-16">
        <div className="container mx-auto px-10 md:px-20 lg:px-32 font-circular-web text-lg text-blue-50 text-justify leading-relaxed about-description opacity-0 translate-y-10">
          <p>
            HACKSAGON was first launched in 2020 as a collaborative initiative to
            bring together innovative minds from across the nation. The inaugural
            edition was successfully organized by ABV-IIITM IEEE Student Branch
            in partnership with six IIITs, namely IIIT Una, IIIT Ranchi, IIIT
            Lucknow, IIIT Nagpur, IIITDM Kurnool, and IIIT Bhagalpur which
            witnessed registration from 293 teams with 1200 students and 95
            teams being qualified for the final round.
          </p>
          <br />
          <p>
            Building upon the robust foundation of its inaugural edition,
            HACKSAGON 2025 aims to elevate innovation and collaboration to new
            heights. This year, the hackathon begins in January 2025 and spans
            three stages, concluding in mid-May 2025. Participants will have the
            opportunity to ideate, prototype, and deliver impactful solutions
            addressing real-world challenges for a prize pool of over Rs
            2,50,000 and much more.
          </p>
          <br />
          <p>
            The event features five sub-tracks, each within the Software Track
            and the Hardware + Software Track, to encourage interdisciplinary
            learning and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
