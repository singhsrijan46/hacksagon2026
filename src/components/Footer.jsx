import { FaInstagram, FaLinkedin, FaFacebookF, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-8 text-white border-t border-white/10">
      <div className="container mx-auto px-10 md:px-20 lg:px-28">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left Column: Brand, Tagline, Socials */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-2">
              {/* Assuming there might be a logo image, using text for now if not available or icon */}
              {/* <img src="/img/logo.png" alt="Hacksagon" className="w-8 h-8" /> */}
              <h1 className="font-zentry text-4xl font-black uppercase tracking-wide">Hacksagon</h1>
            </div>
            <p className="font-circular-web text-sm text-blue-50/70 leading-relaxed max-w-sm">
              The premier hardware + software hackathon bringing together innovators, creators, and problem solvers.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/abv_iiitm_ieee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.linkedin.com/in/abv-iiitm-ieee-student-branch/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="https://ieee.iiitm.ac.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaGlobe size={22} />
              </a>
              <a href="https://www.facebook.com/abviiitmieee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="flex flex-row md:flex-row gap-8 md:gap-24 md:mr-32">

            {/* Middle Column: About */}
            <div className="flex flex-col gap-4">
              <h3 className="font-zentry text-lg uppercase tracking-wider text-white">About</h3>
              <ul className="flex flex-col gap-3 font-circular-web text-sm text-blue-50/60">
                <li><a href="/#about" className="hover:text-yellow-300 transition-colors duration-300">About Us</a></li>
                <li><a href="http://ieee.iiitm.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">Past Events</a></li>
                <li><a href="http://ieee.iiitm.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300">Team</a></li>
              </ul>
            </div>

            {/* Right Column: Support */}
            <div className="flex flex-col gap-4 ml-8 md:ml-0">
              <h3 className="font-zentry text-lg uppercase tracking-wider text-white">Support</h3>
              <ul className="flex flex-col gap-3 font-circular-web text-sm text-blue-50/60">
                <li><a href="/brochure" className="hover:text-yellow-300 transition-colors duration-300">Brochure</a></li>
                <li><a href="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</a></li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-circular-web text-xs text-blue-50/40">
            © 2026 Hacksagon. All rights reserved.
          </p>
          {/* Optional visual balance or privacy link if needed */}
          <div className="flex gap-6 font-circular-web text-xs text-blue-50/40">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
