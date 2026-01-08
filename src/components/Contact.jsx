import { FaEnvelope, FaPhone, FaLocationArrow, FaInstagram, FaLinkedin, FaFacebookF, FaGlobe } from "react-icons/fa";


// Placeholder data - User can replace with actual contact details
const contactPersons = [
    {
        name: "Person Name 1",
        position: "Position / Role",
        email: "contact1@example.com",
        phone: "+919876543210",
        image: "https://ui-avatars.com/api/?name=Person+1&background=random&color=fff"
    },
    {
        name: "Person Name 2",
        position: "Position / Role",
        email: "contact2@example.com",
        phone: "+919876543210",
        image: "https://ui-avatars.com/api/?name=Person+2&background=random&color=fff"
    },
    {
        name: "Person Name 3",
        position: "Position / Role",
        email: "contact3@example.com",
        phone: "+919876543210",
        image: "https://ui-avatars.com/api/?name=Person+3&background=random&color=fff"
    }
];

const socialLinks = [
    {
        name: "Instagram",
        icon: <FaInstagram size={20} />,
        url: "#",
        color: "hover:text-pink-500"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={20} />,
        url: "#",
        color: "hover:text-blue-600"
    },
    {
        name: "IEEE website",
        icon: <FaGlobe size={20} />,
        url: "#",
        color: "hover:text-blue-400"
    },
    {
        name: "Facebook",
        icon: <FaFacebookF size={20} />,
        url: "#",
        color: "hover:text-blue-500"
    }
];

const Contact = () => {
    return (
        <div id="contact" className="my-6 md:my-10 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-10 text-blue-50 sm:overflow-hidden border border-white/10">

                <div className="flex flex-col lg:flex-row items-stretch justify-between px-6 md:px-10 gap-8">

                    {/* Left Side: Reach Us Info + Map + General Buttons */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        {/* Header & Address */}
                        <div className="flex flex-col gap-3 text-center md:text-left">
                            <h3 className="special-font font-zentry text-3xl md:text-5xl font-black uppercase leading-[.9]">
                                Reach <b>U</b>s
                            </h3>
                            <p className="font-circular-web text-sm md:text-base text-blue-50/70 leading-relaxed">
                                ABV-Indian Institute of Information Technology and Management,<br />
                                Morena Link Road, Gwalior,<br />
                                Madhya Pradesh 474015, India.
                            </p>
                        </div>

                        {/* General Contact Buttons */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <button
                                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white !px-5 !py-2 text-sm flex items-center gap-2"
                                onClick={() => window.location.href = 'mailto:contact@hacksagon.com'}
                            >
                                <FaEnvelope /> Mail Us
                            </button>

                            <button
                                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white !px-5 !py-2 text-sm flex items-center gap-2"
                                onClick={() => window.location.href = 'tel:+911234567890'}
                            >
                                <FaPhone /> Call Us
                            </button>

                            <button
                                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white !px-5 !py-2 text-sm flex items-center gap-2"
                                onClick={() => window.open('https://www.google.com/maps?q=ABV-Indian+Institute+of+Information+Technology+and+Management,+Morena+Link+Road,+Gwalior,+Madhya+Pradesh+474015,+India', '_blank')}
                            >
                                <FaLocationArrow className="group-hover:rotate-45 transition-transform" /> Get Directions
                            </button>
                        </div>

                        {/* Map */}
                        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/20 relative z-10 mt-2 shadow-lg shadow-blue-900/10">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.376170291284!2d78.17195047585094!3d26.24945587704921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c66b8b9c66e5%3A0x2658422e6b26fb9!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1709485000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            >
                            </iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Persons AND Socials */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 lg:border-l border-white/10">
                        {/* Contact Persons Section */}
                        <div className="w-full flex-grow">
                            <div className="mb-4 text-center md:text-left w-full">
                                <h3 className="special-font font-zentry text-2xl md:text-4xl font-black uppercase leading-[.9]">
                                    Contact <b>P</b>ersons
                                </h3>
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 w-full">
                                {contactPersons.map((person, index) => (
                                    <div key={index} className="group relative flex flex-col items-center text-center w-32 md:w-40">
                                        <div className="relative size-24 md:size-32 rounded-full overflow-hidden border-2 border-white/20 mb-3 group-hover:border-yellow-300 transition-colors duration-300">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <button
                                                    onClick={() => window.location.href = `mailto:${person.email}`}
                                                    className="p-2 bg-yellow-300 text-black rounded-full hover:bg-white transition-colors"
                                                    title="Mail"
                                                >
                                                    <FaEnvelope size={14} />
                                                </button>
                                                <button
                                                    onClick={() => window.location.href = `tel:${person.phone}`}
                                                    className="p-2 bg-yellow-300 text-black rounded-full hover:bg-white transition-colors"
                                                    title="Call"
                                                >
                                                    <FaPhone size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-general text-base font-bold text-white leading-tight group-hover:text-yellow-300 transition-colors">
                                            {person.name}
                                        </h4>
                                        <p className="font-circular-web text-xs text-blue-50/60 font-light mt-1">
                                            {person.position}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Accounts Section - Placed at bottom of Right Side */}
                        <div className="w-full mt-10 pt-8 border-t border-white/10">
                            <div className="mb-4 text-center md:text-left">
                                <h3 className="special-font font-zentry text-xl md:text-3xl font-black uppercase leading-[.9] text-blue-50">
                                    Our Social <b>A</b>ccounts!
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-4 md:gap-8">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-white hover:bg-white/5 p-2 rounded-lg transition-all duration-300 ${social.color} group`}
                                    >
                                        <span className="p-2 rounded-full border border-white/20 group-hover:border-current transition-colors duration-300 bg-white/5 shrink-0">
                                            {social.icon}
                                        </span>
                                        <span className="font-general text-sm uppercase tracking-wide opacity-80 group-hover:opacity-100">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
