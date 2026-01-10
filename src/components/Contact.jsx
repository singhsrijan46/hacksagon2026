import { FaEnvelope, FaPhone, FaLocationArrow, FaInstagram, FaLinkedin, FaFacebookF, FaGlobe } from "react-icons/fa";


// Placeholder data - User can replace with actual contact details
// Placeholder data - User can replace with actual contact details
const contactPersons = [
    {
        name: "Daksha Mehta",
        position: "Vice Chairperson",
        email: "img_2024015@iiitm.ac.in",
        image: "https://ui-avatars.com/api/?name=Daksha+Mehta&background=random&color=fff"
    },
    {
        name: "Saksham Hans",
        position: "Vice Secretary",
        email: "bcs_2024060@iiitm.ac.in",
        image: "https://ui-avatars.com/api/?name=Saksham+Hans&background=random&color=fff"
    },
    {
        name: "Shivansh Katiyar",
        position: "Web Master",
        email: "img_2024042@iiitm.ac.in",
        image: "https://ui-avatars.com/api/?name=Shivansh+Katiyar&background=random&color=fff"
    }
];

// ... (lines 29-127 are unchanged, but I need to target the render block down below)

// I cannot replace non-contiguous blocks with replace_file_content easily if the gap is too large.
// The array is at the top (lines 5-27)
// The render loop is at lines 128-162.
// I should make two separate calls or one multi_replace.
// I will use replace_file_content for the array first, then the render loop.

const socialLinks = [
    {
        name: "Instagram",
        icon: <FaInstagram size={20} />,
        url: "https://www.instagram.com/abv_iiitm_ieee/",
        color: "hover:text-pink-500"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={20} />,
        url: "https://www.linkedin.com/company/abviiitmieee/",
        color: "hover:text-blue-600"
    },
    {
        name: "IEEE website",
        icon: <FaGlobe size={20} />,
        url: "https://ieee.iiitm.ac.in/",
        color: "hover:text-blue-400"
    },
    {
        name: "Facebook",
        icon: <FaFacebookF size={20} />,
        url: "https://www.facebook.com/abviiitmieee/",
        color: "hover:text-blue-500"
    }
];

const Contact = () => {
    return (
        <div id="contact" className="my-6 md:my-10 min-h-96 w-full px-4 md:px-10">
            <div className="relative rounded-lg bg-[#060010] py-10 text-blue-50 sm:overflow-hidden border border-white/10">

                <div className="flex flex-col lg:flex-row items-stretch justify-between px-6 md:px-10 gap-8">

                    {/* Left Side: Reach Us Info + Map + General Buttons */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        {/* Header & Address */}
                        <div className="flex flex-col gap-3 text-center md:text-left">
                            <h3 className="special-font font-zentry text-3xl md:text-5xl font-black uppercase leading-[.9]">
                                Reach <b>U</b>s
                            </h3>
                            <p className="font-circular-web text-base md:text-lg text-blue-50/70 leading-relaxed">
                                ABV-Indian Institute of Information Technology and Management,<br />
                                Morena Link Road, Gwalior,<br />
                                Madhya Pradesh 474015, India.
                            </p>
                        </div>

                        {/* General Contact Buttons */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <a
                                href="mailto:ieeestudentbranch@iiitm.ac.in"
                                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white !px-5 !py-2 text-sm flex items-center gap-2"
                            >
                                <FaEnvelope /> Mail Us
                            </a>


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
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 lg:border-l lg:border-t-0 border-t border-white/10 pt-10 lg:pt-0">
                        {/* Contact Persons Section */}
                        <div className="w-full flex-grow">
                            <div className="mb-10 text-center md:text-left w-full">
                                <h3 className="special-font font-zentry text-3xl md:text-5xl font-black uppercase leading-[.9]">
                                    Contact <b>P</b>ersons
                                </h3>
                            </div>

                            <div className="flex flex-col gap-6 w-full">
                                {contactPersons.map((person, index) => (
                                    <div key={index} className="group relative flex items-center gap-6 w-full">
                                        <div className="relative size-20 md:size-28 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                                                <h4 className="font-general text-xl md:text-3xl font-bold text-white leading-tight">
                                                    {person.name}
                                                </h4>
                                                <p className="font-circular-web text-sm md:text-lg text-blue-50/60 font-light">
                                                    {person.position}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p className="font-circular-web text-xs md:text-base text-blue-50/80">
                                                    {person.email}
                                                </p>
                                                <a
                                                    href={`mailto:${person.email}`}
                                                    className="p-1.5 bg-white/10 text-white rounded-full hover:bg-[#5542ff] transition-colors flex items-center justify-center"
                                                    title="Mail"
                                                >
                                                    <FaEnvelope size={10} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="relative rounded-lg bg-[#060010] py-10 text-blue-50 sm:overflow-hidden border border-white/10 mt-6">
                <div className="px-6 md:px-10">
                    <div className="mb-8 text-center">
                        <h3 className="special-font font-zentry text-3xl md:text-5xl font-black uppercase leading-[.9] text-blue-50">
                            Our Social <b>A</b>ccounts!
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-8">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 md:gap-3 text-white hover:bg-white/5 p-2 md:p-3 rounded-xl transition-all duration-300 ${social.color} group`}
                            >
                                <span className="p-2 md:p-3 rounded-full border border-white/20 group-hover:border-current transition-colors duration-300 bg-white/5 shrink-0 text-lg md:text-2xl">
                                    {social.icon}
                                </span>
                                <span className="font-general text-xs sm:text-sm md:text-xl uppercase tracking-wide opacity-80 group-hover:opacity-100 font-bold">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
