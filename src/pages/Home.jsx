import TechnicalPartners from "../components/TechnicalPartners";
import About from "../components/About";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import WhyParticipate from "../components/WhyParticipate";
import Rewards from "../components/Rewards";
import CurrentSponsors from "../components/CurrentSponsors";
import Theme from "../components/Theme";

const Home = () => {
    return (
        <>
            <Hero />
            <TechnicalPartners />
            <About />
            <Theme />
            <Rewards />
            <Schedule />
            <WhyParticipate />
            <CurrentSponsors />

        </>
    );
};

export default Home;
