import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
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

        {/* Navigation */}
        <nav className="space-x-4 text-sm font-medium">
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
      </div>
    </header>
  );
};

export default Header;

