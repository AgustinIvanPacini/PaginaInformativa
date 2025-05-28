import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink to="/">
          <img src={logo} alt="Logo de Mi Sitio" className="h-10 cursor-pointer" />
        </NavLink>
        <div className="space-x-4 text-gray-700 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            ¿Quienes Somos?
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Nuestra Mision y Vision
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Objetivos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

