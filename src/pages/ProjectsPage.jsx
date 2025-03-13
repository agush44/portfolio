import { SmoothScrollHero } from "../components/SmoothScrollHero";

function Projects() {
  return (
    <>
      <SmoothScrollHero />
      <div className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
        <p className="mt-2 text-gray-600"></p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="project-card bg-gray-200 p-6 rounded-lg shadow-lg transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-103 cursor-pointer">
            <h3 className="font-semibold text-xl">PetShop</h3>
            <p className="mt-2 text-gray-700">Descripción del proyecto</p>
          </div>
          <div className="project-card bg-gray-200 p-6 rounded-lg shadow-lg transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-103 cursor-pointer">
            <h2 className="font-semibold text-xl">URL Shortener</h2>
            <p className="mt-2 text-gray-700">
              Desarrollo de un servicio de acortamiento de URL que permite a los
              usuarios acortar URLs largas fácilmente. El proyecto cuenta con un
              frontend construido con React y Vite para un desarrollo rápido y
              un backend impulsado por Node.js, Express.js y MongoDB.
            </p>
          </div>
          <div className="project-card bg-gray-200 p-6 rounded-lg shadow-lg transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-103 cursor-pointer">
            <h3 className="font-semibold text-xl">Proyecto 3</h3>
            <p className="mt-2 text-gray-700">Descripción del proyecto</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
