function Footer() {
  return (
    <footer className="bg-gray-950 text-white text-center p-4 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Mi Portfolio - Todos los derechos
          reservados
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/magustinabenitez/"
            target="_blank"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/agush44"
            target="_blank"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
