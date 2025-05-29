
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HexagonPattern from '../components/HexagonPattern';
import { Plus } from 'lucide-react';
const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white overflow-hidden">
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Tu grupo de Salud
            </h1>
            <h2 className="text-3xl font-light mb-8">
              MEDICAMENTO ALTA ESPECIALIDAD
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            MEDICAMENTOS
          </h2>

          {/* Oncológicos */}
          <div className="mb-12">
            <div className="bg-emerald-500 text-white p-6 rounded-t-lg">
              <h3 className="text-2xl font-bold">ONCOLÓGICOS</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">BEVACIZUMAB</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">TRASTUZUMAB</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">RITUXIMAB</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">CETUXIMAB</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">PACLITAXEL</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-white border-2 border-emerald-500 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    INFORMACIÓN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hematológico */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-t-lg p-6 border-b-0">
              <h3 className="text-2xl font-bold text-gray-800">HEMATOLÓGICO</h3>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">FACTOR VIII</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">FACTOR IX</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">INMUNOGLOBULINA</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">ERITROPOYETINA</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    INFORMACIÓN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Urológico */}
          <div className="mb-12">
            <div className="bg-gray-300 text-gray-700 p-6 rounded-t-lg">
              <h3 className="text-2xl font-bold">UROLÓGICO</h3>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">TADALAFILO</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">SILDENAFILO</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">FINASTERIDA</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    INFORMACIÓN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Information Footer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
            <p className="text-gray-700 text-sm mb-2">
              *SI REQUIERES DE UN MEDICAMENTO QUE NO SE ENCUENTRE EN NUESTRO CATÁLOGO 
              CONTÁCTANOS PARA AYUDARTE.
            </p>
            <p className="text-gray-700 text-sm font-semibold">
              EL COMPROMISO CON NUESTROS CLIENTES ES AYUDARLOS.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;