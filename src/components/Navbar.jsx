import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();

  return (
    <nav className="bg-blue-primary shadow-md p-2">
      <div className="container mx-auto px-1 py-4 flex justify-between items-center">
        <div className="text-white-primary text-2xl font-bold">Your Maps</div>
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/" ? "font-bold text-white-primary" : ""
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/maps" 
            className={`text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/maps" ? "font-bold text-white-primary" : ""
            }`}
          >
            Mapa
          </Link>
          <Link 
            to="/user" 
            className={`text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/user" ? "font-bold text-white-primary" : ""
            }`}
            >
            Criar Usuário
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu.classList.toggle('hidden');
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className={`block text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/" ? "font-bold text-white-primary" : ""
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/maps" 
            className={`block text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/maps" ? "font-bold text-white-primary" : ""
            }`}
          >
            Mapa
          </Link>
          <Link 
            to="/user" 
            className={`block text-gray-300 hover:text-white-primary transition duration-300 ${
              location.pathname === "/user" ? "font-bold text-white-primary" : ""
            }`}
          >
            Criar Usuário
          </Link>
        </div>
      </div>
    </nav>
  );
}