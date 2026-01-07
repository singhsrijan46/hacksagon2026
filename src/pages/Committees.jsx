import React from "react";
import TiltedCard from "../components/reactbits/TiltedCard";
import TitleHeader from "../components/TitleHeader";

const committeesResult = [
    {
        category: "Patrons",
        members: [
            {
                name: "Dr. M.V. Kartikeyan",
                role: "Director, IIITDM Kanchipuram, India",
                image: "https://www.iiitdm.ac.in/img/faculty/Director.jpg"
            }
        ]
    },
    {
        category: "Organising Commitee",
        members: [
            {
                name: "Dr. Somesh Kumar",
                role: "Assistant professor, IEEE Student Branch Counselor, ABV-IIITM Gwalior, India",
                image: "https://www.iiitm.ac.in/images/somesh%20kumar.jpg"
            },
            {
                name: "Dr. Pinku Ranjan",
                role: "Assistant professor, ABV-IIITM Gwalior, India",
                image: "https://www.iiitm.ac.in/images/Pinku_Ranjan.jpg"
            }
        ]
    }
];

const Committees = () => {
    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-8 md:px-24">
                <TitleHeader title="Committees" sub="" />

                <div className="flex flex-col gap-24 mt-16">
                    {committeesResult.map((group, index) => (
                        <div key={index} className="w-full">
                            <h3 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-12 font-robert-medium text-left">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-12 justify-center lg:justify-start">
                                {group.members.map((member, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center">
                                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 mb-6 bg-gray-800">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="text-2xl font-bold font-general text-white mb-2">{member.name}</h4>
                                        <p className="text-gray-400 text-sm max-w-xs">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committees;
