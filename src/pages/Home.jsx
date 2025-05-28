import React from 'react';
import logo from '../assets/Logo.png';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10">
      <img src={logo} alt="Logo de Mi Sitio" className="h-64 cursor-pointer mb-6" />
      <p className="text-lg text-gray-700 max-w-xl text-center px-4">
        Tu lugar para conocer nuestros servicios, novedades y más. Contamos con un equipo profesional listo para ayudarte.
      </p>
    </section>
  );
};

export default Home;


