// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import RetroBtn from "../../UI/Button/RetroBtn";

export const Project = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative mb-9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-transform hover:scale-[1.02]"
    >
      <h2 className="mb-2 text-2xl font-semibold text-zinc-50">{title}</h2>
      <p className="mb-4 text-sm text-zinc-400">{description}</p>
      <RetroBtn onClick={handleClick}>Ver Proyecto →</RetroBtn>
    </motion.div>
  );
};
