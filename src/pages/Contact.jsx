import RetroBtn from "../UI/Button/RetroBtn";

function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Contacto</h2>
      <p className="mt-2 text-gray-600">
        Puedes contactarme a través de mis redes sociales o email.
      </p>
      <form className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Escribe tu mensaje"
          />
        </div>
        <RetroBtn type="submit">Enviar Mensaje</RetroBtn>
      </form>
    </div>
  );
}

export default Contact;
