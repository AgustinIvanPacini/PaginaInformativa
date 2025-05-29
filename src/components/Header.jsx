import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
            <div className="ml-2 text-emerald-600 text-xl font-bold hidden md:block">OncoVive ✓</div>
          </Link>

          {/* Subtitle */}
          <div className="hidden md:block text-emerald-500 text-sm font-medium">
            Tu grupo de Salud
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            <Link to="/" className={isActive('/') ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"}>
              INICIO
            </Link>
            <Link to="/About" className={isActive('/nosotros') ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"}>
              ¿QUIÉNES SOMOS?
            </Link>
            <Link to="/services" className={isActive('/mision') ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"}>
              MEDICAMENTOS
            </Link>
            <Link to="/news" className={isActive('/objetivos') ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"}>
              PREGUNTAS FRECUENTES
            </Link>
            <Link to="/contact" className={isActive('/contacto') ? "text-emerald-600 font-semibold" : "text-gray-600 hover:text-emerald-600"}>
              CONTACTO
            </Link>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-emerald-600 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Abrir menú"
          >
            {/* Icono hamburguesa simple */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link to="/" onClick={() => setSidebarOpen(false)} className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
            <div className="ml-2 text-emerald-600 text-xl font-bold">OncoVive ✓</div>
          </Link>
          <button
            onClick={toggleSidebar}
            aria-label="Cerrar menú"
            className="text-emerald-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className={isActive('/') ? "text-emerald-600 font-semibold" : "text-gray-700 hover:text-emerald-600"}
          >
            INICIO
          </Link>
          <Link
            to="/About"
            onClick={() => setSidebarOpen(false)}
            className={isActive('/nosotros') ? "text-emerald-600 font-semibold" : "text-gray-700 hover:text-emerald-600"}
          >
            ¿QUIÉNES SOMOS?
          </Link>
          <Link
            to="/services"
            onClick={() => setSidebarOpen(false)}
            className={isActive('/mision') ? "text-emerald-600 font-semibold" : "text-gray-700 hover:text-emerald-600"}
          >
            MEDICAMENTOS
          </Link>
          <Link
            to="/news"
            onClick={() => setSidebarOpen(false)}
            className={isActive('/objetivos') ? "text-emerald-600 font-semibold" : "text-gray-700 hover:text-emerald-600"}
          >
            PREGUNTAS FRECUENTES
          </Link>
          <Link
            to="/contact"
            onClick={() => setSidebarOpen(false)}
            className={isActive('/contacto') ? "text-emerald-600 font-semibold" : "text-gray-700 hover:text-emerald-600"}
          >
            CONTACTO
          </Link>
        </nav>
      </div>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;

