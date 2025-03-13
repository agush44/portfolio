import { Project } from "./Project";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectsData from "../Data/ProjectsData";

export const Projects = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Proyectos
      </motion.h1>
      {projectsData.map(({ title, description, link }, index) => (
        <Project
          key={index}
          title={title}
          description={description}
          link={link}
        />
      ))}
    </section>
  );
};
