import React from 'react';

const Services = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Nuestros Servicios</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-2">Servicio 1</h3>
          <p className="text-gray-600">Descripción detallada del servicio 1 que ofrecemos.</p>
        </li>
        <li className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-2">Servicio 2</h3>
          <p className="text-gray-600">Descripción detallada del servicio 2 que ofrecemos.</p>
        </li>
        <li className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-2">Servicio 3</h3>
          <p className="text-gray-600">Descripción detallada del servicio 3 que ofrecemos.</p>
        </li>
      </ul>
    </section>
  );
};

export default Services;