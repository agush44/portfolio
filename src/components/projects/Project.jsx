// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Project = ({ title, description, link, technologies, img }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex relative mb-9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg transition-transform hover:scale-[1.02]"
    >
      {/*<div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg transition-transform hover:scale-[1.02] mr-4">
        <img
          src={img}
          alt={`Preview of ${title}`}
          className="w-full h-64 object-cover"
        />
      </div> */}
      <div>
        <h2 className="mb-2 text-2xl font-semibold text-zinc-50">{title}</h2>
        <p className="mb-4 text-sm text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-zinc-600 text-zinc-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {link.includes("vercel") && (
            <button
              onClick={handleClick}
              className="text-xs px-3 py-1.5 flex items-center gap-1 cursor-pointer"
            >
              <span>Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                <path d="M2 12h20"></path>
                <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"></path>
              </svg>
            </button>
          )}
          {link.includes("github") && (
            <button
              onClick={handleClick}
              className="text-xs px-3 py-1.5 flex items-center gap-1 cursor-pointer bg-zinc-800 hover:bg-zinc-700"
            >
              <span>Source</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
