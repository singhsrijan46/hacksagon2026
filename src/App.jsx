import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Committees from "./pages/Committees";
import Partners from "./pages/Partners";
import ThemesPage from "./pages/ThemesPage";
import Rewards from "./pages/Rewards";
import Brochure from "./pages/Brochure";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
