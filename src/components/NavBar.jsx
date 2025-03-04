import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portfolio</h1>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`md:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
