import ProfilePhoto from "../assets/agushcv.png";

function About() {
  return (
    <div className="bg-gray-100 p-10 m-3">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 mt-12 md:mt-0">
          <img
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            src={ProfilePhoto}
            alt="Foto de perfil"
          />
        </div>
        <div className="text-left max-w-lg">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-bold">Sobre mí</h2>
            <img src="/arg.png" alt="Bandera Argentina" className="w-6 h-6" />
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Soy estudiante de la Tecnicatura en Informática aplicada al Diseño
            Multimedia y Sitios Web en la{" "}
            <strong>Universidad Nacional del Litoral</strong>, con un diploma en
            Desarrollo Full Stack de la{" "}
            <strong>Universidad Tecnológica Nacional</strong>. Me especializo en
            tecnologías como <strong>JavaScript</strong>, <strong>React</strong>
            , <strong>Node.js</strong>, <strong>Express</strong> y{" "}
            <strong>MongoDB</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cuento con certificaciones de{" "}
            <strong>Cisco en Ciberseguridad</strong>, con foco en protección de
            endpoints, redes y configuración de dispositivos. Además, poseo
            experiencia en el manejo de <strong>Linux</strong>,{" "}
            <strong>Bash scripting</strong> y herramientas de diseño como{" "}
            <strong>Photoshop</strong> e <strong>Illustrator</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed flex items-center mb-2 gap-4">
            Tengo un nivel avanzado de:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li className="flex items-center gap-2 mb-2">
              <img
                src="/uk.png"
                alt="Bandera Reino Unido"
                className="w-6 h-6"
              />
              <strong>Inglés</strong>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img
                src="/france.png"
                alt="Bandera Francia"
                className="w-6 h-6"
              />
              <strong>Francés (Examen DELF B2)</strong>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <img src="/italy.png" alt="Bandera Italia" className="w-6 h-6" />
              <strong>Italiano</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
