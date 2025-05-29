import React from 'react';
import { DollarSign, Star, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">Sobre Nosotros</h2>
      <p className="text-gray-700 mb-6">
        Somos una empresa comprometida con la excelencia y la atención personalizada. Nuestro equipo está formado por profesionales con experiencia en el rubro, siempre dispuestos a brindar soluciones eficaces a nuestros clientes.
      </p>

      <div className="bg-emerald-600 text-white rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-2">
          Nuestros 3 pilares que nos diferencian:
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Pilar 1 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800">Mejores Precios</h4>
        </div>

        {/* Pilar 2 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <div className="flex flex-wrap justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-white fill-current" />
              ))}
            </div>
          </div>
          <h4 className="text-lg font-bold text-gray-800">Servicio de Alta Calidad</h4>
        </div>

        {/* Pilar 3 */}
        <div className="text-center">
          <div className="relative w-16 h-16 bg-emerald-500 rounded-full mx-auto flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-white" />
            <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-sm font-bold rounded-full px-2">#1</span>
          </div>
          <h4 className="text-lg font-bold text-gray-800">Servicio Especializado</h4>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
        <p className="text-gray-700 mb-3">
          En OncoVive, nos dedicamos a proporcionar medicamentos de alta especialidad con los más altos estándares de calidad. Nuestro compromiso es brindar soluciones terapéuticas efectivas para pacientes que requieren tratamientos especializados.
        </p>
        <p className="text-gray-700">
          Trabajamos con profesionales de la salud para garantizar que cada paciente reciba el medicamento adecuado en el momento oportuno, respaldados por nuestros valores de ética, confianza y compromiso.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
        <p className="text-gray-700">
          Ser reconocidos como el grupo líder en distribución de medicamentos de alta especialidad, contribuyendo a mejorar la calidad de vida de los pacientes y siendo el socio estratégico preferido por instituciones de salud.
        </p>
      </div>
    </section>
  );
};

export default About;
