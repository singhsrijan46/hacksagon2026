import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow, TiCalendar } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";



const navItems = ["About", "Themes", "Rewards", "Schedule", "Sponsors", "Partners"];
const moreItems = ["Brochure", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click

    if (item === "Schedule") {
      navigate('/schedule');
      return;
    }
    if (item === "Sponsors") {
      navigate('/sponsors');
      return;
    }
    if (item === "Committees") {
      navigate('/committees');
      return;
    }
    if (item === "Partners") {
      navigate('/partners');
      return;
    }
    if (item === "Themes") {
      navigate('/themes');
      return;
    }
    if (item === "Rewards") {
      navigate('/rewards');
      return;
    }
    if (item === "Brochure") {
      navigate('/brochure');
      return;
    }
    if (item === "Contact") {
      navigate('/contact');
      return;
    }


    if (location.pathname !== '/') {
      navigate(`/#${item.toLowerCase()}`);
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-4 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 md:p-4">
          <div className="flex items-center gap-4 md:gap-7">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="https://i.postimg.cc/cCT9dGfv/Hacksagon-white.png"
                alt="logo"
                className="h-8 w-auto md:h-10"
              />
              <span className="font-general font-black text-lg md:text-2xl uppercase text-blue-50">Hacksagon</span>
            </div>

            <div className="hidden md:flex">
              <button
                id="register-button"
                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white flex items-center justify-center gap-1 px-7 py-3"
              >
                <span className="flex items-center gap-2 font-general uppercase text-xs">
                  Register <TiLocationArrow className="group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </div>

          </div>

          <div className="flex h-full items-center gap-4">
            {/* Mobile Register Button */}
            <div className="md:hidden">
              <button
                id="register-button-mobile-nav"
                className="group relative cursor-pointer overflow-hidden rounded-full bg-blue-50 text-black transition-all hover:bg-[#5542ff] hover:text-white flex items-center justify-center gap-1 !py-2 !px-3 text-xs"
              >
                <span className="flex items-center gap-2 font-general uppercase">
                  Register <TiLocationArrow className="group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-50 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>

            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </a>
              ))}

              {/* More Dropdown */}
              <div className="relative group inline-block">
                <button className="nav-hover-btn flex items-center gap-1">
                  More
                  <span className="text-[10px] transform group-hover:rotate-180 transition-transform">▼</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a0b2e] border border-neutral-700/50 rounded-xl overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                  {moreItems.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-none"
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && createPortal(
          <div className="fixed inset-0 z-[60] h-screen bg-[#1a0b2e] md:hidden overflow-y-auto flex flex-col items-center justify-center gap-6">
            <button
              className="absolute top-8 right-8 text-blue-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {[...navItems, ...moreItems].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-general text-blue-50 hover:text-yellow-300 transition-colors uppercase"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </a>
            ))}
          </div>,
          document.body
        )}
      </header>
    </div>
  );
};

export default NavBar;
