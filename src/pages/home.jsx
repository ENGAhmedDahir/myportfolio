import About from "../components/about";
import CTA from "../components/cta";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import Testimonials from "../components/testimonials";

const Home = () => {
    return <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <CTA />

        
    </main>;
};

export default Home;
