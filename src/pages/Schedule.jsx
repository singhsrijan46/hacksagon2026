import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaClipboardList, FaLightbulb, FaUsers, FaRocket, FaFlag, FaCode, FaAward } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/reactbits/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const scheduleData = [
    {
        id: 1,
        title: "Phase 1.1: Registration & Idea Submission",
        date: "15th Jan 2025 to 10th March 2025",
        description: "Begin your journey by registering and forming your team with peers. Submit your project idea in PDF/PPT format given by organising team.",
        icon: <FaClipboardList className="text-4xl text-blue-400" />,
        subEvents: [
            { label: "Registration Opens", date: "Jan 18th", detail: "Registration opens for individuals and cross-university teams" },
            { label: "Registration Deadline", date: "Feb 9th", detail: "Last day to submit your project idea in PDF/PPT format given by organising team" }
        ]
    },
    {
        id: 2,
        title: "Phase 1.2: Idea Review and Results",
        date: "15th March 2025",
        description: "Evaluation of submitted ideas and announcement of shortlisted teams.",
        icon: <FaLightbulb className="text-4xl text-yellow-400" />,
        subEvents: [
            { label: "Format Checking & Relevancy", date: "Feb 10th - Feb 15th", detail: "Evaluation of sent PPT/PDF files" },
            { label: "Announcement of Result", date: "Feb 16th", detail: "Leaders will receive mails of their team getting selected" }
        ]
    },
    {
        id: 5,
        title: "Phase 2.1: Registration of Round 2",
        date: "3rd week of March",
        description: "Final registration for the prototype round.",
        icon: <FaFlag className="text-4xl text-orange-400" />,
        subEvents: [
            { label: "Form Release for Registration", date: "Feb 16th", detail: "Teams who have secured place in final round have to fill the form." },
            { label: "Form Closing Date", date: "March 15th", detail: "Last date to submit." }
        ]
    },
    {
        id: 6,
        title: "Phase 2.2: Prototype Round at ABV-IIITM Gwalior",
        date: "27-29th March 2025",
        description: "The main hackathon event where teams build their prototypes.",
        icon: <FaCode className="text-4xl text-green-400" />,
        subEvents: [
            { label: "36hr Hackathon Sprint", date: "April 3rd - 5th", detail: "Teams will come and work on their projects getting it ready for final presentation" }
        ]
    },
    {
        id: 7,
        title: "Phase 2.3: Final Result",
        date: "29th March 2025",
        description: "Declaration of winners and prize distribution.",
        icon: <FaAward className="text-4xl text-gold-400" />,
        subEvents: [
            { label: "Release of final Results", date: "5th April 2026", detail: "Release of final Results and Distribution of Prizes" }
        ]
    }
];

const Schedule = () => {
    const containerRef = useRef(null);
    const location = useLocation();

    // Refresh ScrollTrigger on mount and after navigation
    useEffect(() => {
        // Small delay to ensure DOM is fully rendered
        const timeoutId = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [location.pathname]);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".timeline-card");

        cards.forEach((card) => {
            // Set initial state explicitly
            gsap.set(card, { xPercent: -50, opacity: 0 });
            
            const cardAnimation = gsap.to(card, {
                xPercent: 0,
                opacity: 1,
                transformOrigin: "left center",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true,
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

        const texts = gsap.utils.toArray(".expText");
        texts.forEach((text) => {
            // Set initial state explicitly
            gsap.set(text, { opacity: 0, x: 50 });
            
            gsap.to(text, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true,
                },
            });
        });

        // Refresh ScrollTrigger after DOM is fully laid out
        // This is critical for client-side navigation
        const refreshTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
            
            // After refresh, manually check if any elements are already in viewport
            // and trigger their animations if needed
            requestAnimationFrame(() => {
                const allTriggers = ScrollTrigger.getAll();
                allTriggers.forEach(trigger => {
                    try {
                        const element = trigger.trigger || (trigger.vars && trigger.vars.trigger);
                        if (element instanceof Element) {
                            const rect = element.getBoundingClientRect();
                            const windowHeight = window.innerHeight || window.outerHeight;
                            const threshold = windowHeight * 0.85;
                            
                            // If element is already past the trigger point (in viewport)
                            if (rect.top < threshold && rect.bottom > 0) {
                                const animation = trigger.animation;
                                if (animation && typeof animation.play === 'function' && animation.progress() < 0.01) {
                                    animation.play(0);
                                }
                            }
                        }
                    } catch (e) {
                        // Silently ignore errors for triggers we can't access
                    }
                });
            });
        }, 200);

        return () => {
            clearTimeout(refreshTimeout);
        };

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="schedule" className="pt-28 md:pt-32 pb-20 bg-[#060010] text-white relative">
            <div className="container mx-auto px-4 md:px-20">
                <TitleHeader
                    title="Event Schedule"
                    description="From registration to incubation, embark on an exciting journey of innovation and growth (Dates are tentative)"
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
