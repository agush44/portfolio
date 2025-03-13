import About from "./About";
import ProjectsPage from "./ProjectsPage";
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
        <ProjectsPage />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
