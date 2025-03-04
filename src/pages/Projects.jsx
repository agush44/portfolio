function Projects() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold">Mis Proyectos</h2>
      <p className="mt-2 text-gray-600">
        Aquí puedes listar tus proyectos con enlaces a GitHub o demos.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl">Proyecto 1</h3>
          <p className="mt-2 text-gray-700">Descripción del proyecto</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl">Proyecto 2</h3>
          <p className="mt-2 text-gray-700">Descripción del proyecto</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl">Proyecto 3</h3>
          <p className="mt-2 text-gray-700">Descripción del proyecto</p>
        </div>
        {/* Agrega más proyectos según sea necesario */}
      </div>
    </div>
  );
}

export default Projects;
