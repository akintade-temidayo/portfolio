import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
return (
<main className="bg-[#F8FAFC] min-h-screen">
    <Navbar />
    <Hero />
    <Stats />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
</main>
);
};

export default Home;