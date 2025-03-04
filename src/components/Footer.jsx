function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Mi Portfolio - Todos los derechos
          reservados
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
