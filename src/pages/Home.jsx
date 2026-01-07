import TechnicalPartners from "../components/TechnicalPartners";
import About from "../components/About";
// import Themes from "./Themes";
// import Hero from "./Hero";
import Hero from "../components/Hero";
// import Features from "./Features";
import Schedule from "../components/Schedule";
import Rewards from "../components/Rewards";
import WhoCanParticipate from "../components/WhoCanParticipate";
import CurrentSponsors from "../components/CurrentSponsors";
// import Contact from "./Contact";
import Contact from "../components/Contact";

import Theme from "../components/Theme";

const Home = () => {
    return (
        <>
            <Hero />
            <TechnicalPartners />
            <About />
            <Theme />
            <Schedule />
            <Rewards />
            <WhoCanParticipate />
            <CurrentSponsors />
            <Contact />

        </>
    );
};

export default Home;
