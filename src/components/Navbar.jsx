import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow, TiCalendar } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "./Button";

const navItems = ["About", "Themes", "Rewards", "Schedule", "Sponsors", "Partners"];
const moreItems = ["Brochure", "Committees", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleNavClick = (e, item) => {
    e.preventDefault();
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
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="https://i.postimg.cc/cCT9dGfv/Hacksagon-white.png"
                alt="logo"
                className="h-10 w-auto"
              />
              <span className="font-general font-black text-2xl uppercase text-blue-50">Hacksagon</span>
            </div>

            <Button
              id="register-button"
              title="Register"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center justify-center gap-1"
              onClick={() => navigate('/schedule')}
            />
          </div>

          <div className="flex h-full items-center">
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
      </header>
    </div>
  );
};

export default NavBar;
