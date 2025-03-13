import Hero from "../components/Hero/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { AuroraHero } from "../components/Hero/AuroraHero";

function Home() {
  return (
    <>
      <section id="hero">
        <AuroraHero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
