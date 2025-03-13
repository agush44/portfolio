import { useState } from "react";
import RetroBtn from "../UI/Button/RetroBtn";

const TerminalForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("https://formspree.io/f/xnnpqkag", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      setError("Algo salió mal, por favor intenta de nuevo.");
    }
  };
  return (
    <div>
      <div className="relative bg-gray-700/50 text-white/100 pl-2 pr-2 pt-2 rounded-lg max-w-2xl mx-auto border border-gray-700 shadow-lg backdrop-blur-md mb-18 mt-18 z-10 form-container">
        <div className="flex flex-wrap items-center space-x-2 mb-4 sm:justify-start md:justify-start lg:justify-start">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <div className="text-green-400 text-sm font-mono ml-4 sm:ml-0 md:ml-4 lg:ml-40 truncate max-w-[90%] md:max-w-[70%] lg:max-w-none">
            magustinabenitez@gmail.com
          </div>
        </div>

        <p className="text-lg">¡Hola! Gracias por visitar mi portfolio 🚀</p>
        <hr className="border-gray-700 my-3" />
        <p className="mt-5 mb-7">
          ¿Querés ponerte en contacto conmigo? Dejame tu{" "}
          <span className="text-blue-400">correo</span> y un{" "}
          <span className="text-blue-400">mensaje</span>.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block text-green-400 font-mono">
              ➜ ~ Correo:
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-white w-full font-mono"
                required
              />
            </div>

            <label className="block text-green-400 font-mono mt-4">
              ➜ ~ Mensaje:
            </label>
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-white w-full font-mono resize-none overflow-hidden"
                required
                rows={1}
                style={{ height: "auto" }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              ></textarea>
            </div>

            <div className="flex justify-end mt-20 mb-4 mr-2">
              <RetroBtn type="submit">Enviar</RetroBtn>
            </div>
          </form>
        ) : (
          <p className="text-green-400 mt-10 mb-10">
            ¡Gracias! Me pondré en contacto contigo pronto.
          </p>
        )}
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default TerminalForm;
