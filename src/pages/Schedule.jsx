import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaClipboardList, FaLightbulb, FaUsers, FaRocket, FaFlag, FaCode, FaAward } from "react-icons/fa";
import { useRef } from "react";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/reactbits/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const scheduleData = [
    {
        id: 1,
        title: "Phase 1.1: Registration & Idea Submission",
        date: "15th Jan 2025 to 28th March 2025",
        description: "Begin your journey by registering and forming your team with peers. Submit your project idea in PDF/PPT format given by organising team.",
        icon: <FaClipboardList className="text-4xl text-blue-400" />,
        subEvents: [
            { label: "Registration Opens", date: "Jan 15th", detail: "Registration opens for individuals and cross-university teams" },
            { label: "Registration Deadline", date: "Mar 28th", detail: "Last day to submit your project idea in PDF/PPT format given by organising team" }
        ]
    },
    {
        id: 2,
        title: "Phase 1.2: Idea Review and Results",
        date: "3rd April 2025",
        description: "Evaluation of submitted ideas and announcement of shortlisted teams.",
        icon: <FaLightbulb className="text-4xl text-yellow-400" />,
        subEvents: [
            { label: "Format Checking & Relevancy", date: "Mar 28th - Apr 2nd", detail: "Evaluation of sent PPT/PDF files" },
            { label: "Announcement of Result", date: "Apr 3rd", detail: "Leaders will receive mails of their team getting selected" }
        ]
    },
    {
        id: 3,
        title: "Phase 2.1: Video Submission Round",
        date: "4th Apr 2025 - 11th Apr 2025",
        description: "Shortlisted teams submit a video presentation of their idea.",
        icon: <FaUsers className="text-4xl text-purple-400" />,
        subEvents: [
            { label: "Form Release", date: "Apr 4th", detail: "Filling of mentioned details in it regarding your project and more" },
            { label: "Form Closing", date: "Apr 10th", detail: "No forms will be accepted after this date" }
        ]
    },
    {
        id: 4,
        title: "Phase 2.2: Results of Round 2",
        date: "20th Apr 2025 (Tentative)",
        description: "Announcement of teams qualifying for the next round.",
        icon: <FaRocket className="text-4xl text-pink-400" />,
        subEvents: [
            { label: "Announcement of Result", date: "Apr 20th", detail: "Leaders will receive mails of their team getting selected" }
        ]
    },
    {
        id: 5,
        title: "Phase 3.1: Registration of Round 3",
        date: "3rd week of Apr - 2nd week of May",
        description: "Final registration for the prototype round.",
        icon: <FaFlag className="text-4xl text-orange-400" />,
        subEvents: [
            { label: "Form Release for Registration", date: "Apr 21st (Tentative)", detail: "Teams who have secured place in final round have to fill the form." },
            { label: "Form Closing Date", date: "May 5th (Tentative)", detail: "Last date to submit." }
        ]
    },
    {
        id: 6,
        title: "Phase 3.2: Prototype Round at IIITM",
        date: "9-11th May 2025",
        description: "The main hackathon event where teams build their prototypes.",
        icon: <FaCode className="text-4xl text-green-400" />,
        subEvents: [
            { label: "36hr Hackathon Sprint", date: "May 9-11", detail: "Teams will come and work on their projects getting it ready for final presentation" }
        ]
    },
    {
        id: 7,
        title: "Phase 3.3: Final Result",
        date: "12th May 2025",
        description: "Declaration of winners and prize distribution.",
        icon: <FaAward className="text-4xl text-gold-400" />,
        subEvents: [
            { label: "Release of final Results", date: "12th May 2025", detail: "Release of final Results and Distribution of Prizes" }
        ]
    }
];

const Schedule = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -50,
                opacity: 0,
                transformOrigin: "left center",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
            });
        });

        gsap.to(".timeline", {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline-wrapper",
                start: "top center",
                end: "bottom center",
                scrub: 0.5,
            },
        });
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                },
            });
        });
    }, []);

    return (
        <section id="schedule" className="pt-28 md:pt-32 pb-20 bg-[#060010] text-white relative">
            <div className="container mx-auto px-4 md:px-20">
                <TitleHeader
                    title="Event Schedule"
                    description="From registration to incubation, embark on a 5-month journey of innovation and growth"
                />

                <div className="mt-12 md:mt-20 relative">
                    {/* Timeline Line */}
                    <div className="timeline-wrapper absolute left-[45px] top-0 bottom-0 w-[2px] bg-neutral-800 hidden md:block">
                        <div className="timeline absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 h-full origin-top scale-y-0" />
                    </div>

                    <div className="flex flex-col gap-16 relative z-10">
                        {scheduleData.map((phase) => (
                            <div key={phase.id} className="flex flex-col md:flex-row gap-2 md:gap-10 group">
                                {/* Visual/Icon Side */}
                                <div className="md:w-1/4 flex flex-col items-center relative timeline-card">
                                    <div className="md:sticky md:top-32">
                                        <GlowCard>
                                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                                {phase.icon}
                                                <div className="md:hidden">
                                                    <h3 className="font-bold text-lg">{phase.title}</h3>
                                                </div>
                                            </div>
                                        </GlowCard>
                                    </div>
                                    {/* Timeline dot for mobile? */}
                                </div>

                                {/* Content Side */}
                                <div className="md:w-3/4 expText">
                                    <div className="flex flex-col gap-4">
                                        <div className="hidden md:block">
                                            <h3 className="text-2xl md:text-3xl font-bold font-robert-medium text-white">{phase.title}</h3>
                                            <p className="text-blue-200 mt-1 font-general">{phase.date}</p>
                                        </div>

                                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
                                            <p className="mb-6 text-gray-400 leading-relaxed max-w-2xl">{phase.description}</p>

                                            <div className="flex flex-col gap-4">
                                                {phase.subEvents.map((event, idx) => (
                                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors gap-2">
                                                        <div>
                                                            <h4 className="font-bold text-white text-sm md:text-base">{event.label}</h4>
                                                            <p className="text-xs text-gray-500">{event.detail}</p>
                                                        </div>
                                                        <div className="text-right min-w-fit">
                                                            <span className="text-sm font-mono text-purple-400 bg-purple-400/10 px-2 py-1 rounded">{event.date}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
