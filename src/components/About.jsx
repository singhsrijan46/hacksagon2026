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
      <div className="relative mb-2 md:mb-8 mt-16 md:mt-32 flex flex-col items-center gap-1">
        <p className="welcome-text font-general text-sm uppercase md:text-[10px] text-white opacity-0 translate-y-10 leading-[0.85]">
          Welcome to Hacksagon
        </p>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mt-5 text-center px-4 sm:px-8 md:px-32"
          textClassName="text-white font-zentry font-black !text-6xl !leading-[0.9] sm:!text-6xl md:!text-[6rem] uppercase md:!leading-[0.87]"
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
            src="https://i.postimg.cc/q7GbnjKT/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>

      <div className="w-screen py-10 md:py-16">
        <div className="container mx-auto px-10 md:px-20 lg:px-32 font-circular-web text-sm md:text-lg text-blue-50 text-justify leading-relaxed about-description opacity-0 translate-y-10">
          <p>
            HACKSAGON was first launched in 2020 as a collaborative initiative to bring together innovative minds from across the nation in partnership with 6 other IIITs.
          </p>
          <br />
          <p>
            Building upon this legacy, HACKSAGON 2025 marked a significant milestone in the journey of the hackathon. Spanning from January to June 2025 and conducted across three rigorous stages, the event witnessed 2600+ registrations, with over 550 individuals, forming 180+ teams, qualifying for the offline grand finals. Participants ideated, prototyped, and delivered impactful solutions to real-world challenges, competing for a cash prize pool of ₹2,50,000, along with additional rewards and opportunities.
          </p>
          <br />
          <p>
            Continuing this momentum, HACKSAGON 2026 aims to further elevate innovation, collaboration, and technical excellence. This year also features a cash prize pool of ₹2,50,000, reaffirming the hackathon’s commitment to rewarding impactful ideas and cutting-edge solutions.
          </p>
          <br />
          <p>
            The event comprises 10 distinct tracks, distributed across the Software and Hardware + Software categories, fostering interdisciplinary learning and encouraging participants to build scalable, real-world solutions across diverse domains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
