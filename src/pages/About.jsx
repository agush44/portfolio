import ProfilePhoto from "../assets/agushcv.png";

function About() {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 mt-12 md:mt-0">
          <img
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            src={ProfilePhoto}
            alt="Foto de perfil"
          />
        </div>
        <div className="text-left max-w-lg">
          <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
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
          <p className="text-gray-600 leading-relaxed">
            Tengo un nivel avanzado de <strong>inglés</strong>,{" "}
            <strong>italiano</strong> y <strong>francés</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
