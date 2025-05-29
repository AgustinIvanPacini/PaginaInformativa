import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HexagonPattern from '../components/HexagonPattern';
import PromotionalBanner from '../components/PromotionalBanner';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <PromotionalBanner />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white overflow-hidden">
        <HexagonPattern />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <img src={logo} alt="Logo" className="h-32 md:h-40 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tu grupo de Salud
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            MEDICAMENTO DE ALTA ESPECIALIDAD
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            Comprometidos en dar medicamentos de calidad, especializados en oncología, 
            hematología y urología. Tu salud es nuestra prioridad.
          </p>
          <Link 
            to="/medicamentos"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors group"
          >
            Ver Medicamentos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">NUESTRO PROPÓSITO</h2>
          <p className="text-xl leading-relaxed">
            "DARLE A NUESTROS CLIENTES LA MEJOR CALIDAD RESPALDÁNDONOS CON ÉTICA, 
            CONFIANZA Y COMPROMISO."
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">VALORES</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[{
              icon: <Shield className="w-8 h-8 text-emerald-500" />,
              label: 'TRANSPARENCIA'
            }, {
              icon: <Heart className="w-8 h-8 text-emerald-500" />,
              label: 'SERVICIO'
            }, {
              icon: <Shield className="w-8 h-8 text-emerald-500" />,
              label: 'RESPETO'
            }, {
              icon: <Award className="w-8 h-8 text-emerald-500" />,
              label: 'EXCELENCIA'
            }].map((value, index) => (
              <div className="text-center" key={index}>
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 border-2 border-emerald-500 transform rotate-45"></div>
                  <div className="absolute inset-2 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{value.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ¿Necesitas información sobre nuestros medicamentos?
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-colors"
          >
            Contáctanos Ahora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;




