import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const News = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // sin tipo explícito

   const faqs = [
    {
      question: "¿Qué tipo de medicamentos manejan?",
      answer: "Nos especializamos en medicamentos de alta especialidad en tres áreas principales: oncológicos (para tratamiento del cáncer), hematológicos (para trastornos de la sangre) y urológicos (para problemas del sistema urinario). Todos nuestros medicamentos cumplen con los más altos estándares de calidad."
    },
    {
      question: "¿Cómo puedo solicitar un medicamento que no está en su catálogo?",
      answer: "Si necesitas un medicamento que no se encuentra en nuestro catálogo actual, puedes contactarnos directamente por teléfono al (664) 204 2324 o por correo electrónico. Nuestro compromiso es ayudar a nuestros clientes, por lo que haremos todo lo posible para conseguir el medicamento que necesitas."
    },
    {
      question: "¿Realizan entregas a domicilio?",
      answer: "Sí, ofrecemos servicio de entrega con nuestra logística especializada. Coordinamos el traslado seguro de los medicamentos, manteniendo la cadena de frío cuando sea necesario. Tenemos entregas programadas y también ofrecemos servicio de emergencia 24/7 para casos urgentes."
    },
    {
      question: "¿Qué garantías ofrecen sobre la calidad de sus medicamentos?",
      answer: "Todos nuestros medicamentos provienen de laboratorios certificados y cumplen con las regulaciones sanitarias vigentes. Proporcionamos certificados de calidad con cada entrega y mantenemos la cadena de custodia completa desde el proveedor hasta el cliente final."
    },
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Nuestro horario de atención telefónica es de lunes a viernes de 8:00 AM a 6:00 PM, y sábados de 9:00 AM a 2:00 PM. Para emergencias médicas, ofrecemos servicio 24/7 sujeto a disponibilidad."
    },
    {
      question: "¿Manejan medicamentos que requieren refrigeración?",
      answer: "Sí, contamos con la infraestructura necesaria para manejar medicamentos que requieren cadena de frío. Nuestro sistema de logística está equipado con contenedores refrigerados y monitoreamos la temperatura durante todo el proceso de transporte."
    },
    {
      question: "¿Qué información necesito proporcionar para solicitar un medicamento?",
      answer: "Necesitarás proporcionar la receta médica, información del paciente, datos de contacto y dirección de entrega. En algunos casos, podríamos requerir documentación adicional dependiendo del tipo de medicamento y las regulaciones aplicables."
    },
    {
      question: "¿Ofrecen asesoría sobre el uso de medicamentos?",
      answer: "Mientras que no sustituimos la consulta médica, nuestro equipo puede proporcionar información general sobre almacenamiento, manejo y conservación de los medicamentos. Siempre recomendamos seguir las indicaciones del médico tratante."
    },
    {
      question: "¿Cuál es su política de devoluciones?",
      answer: "Debido a la naturaleza especializada de nuestros medicamentos y por regulaciones sanitarias, las devoluciones están sujetas a políticas específicas. Te recomendamos contactarnos directamente para discutir cualquier situación particular."
    },
    {
      question: "¿Trabajan con instituciones de salud?",
      answer: "Sí, trabajamos tanto con pacientes individuales como con instituciones de salud, hospitales y clínicas. Ofrecemos programas especializados para instituciones con volúmenes más grandes y necesidades específicas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-xl">Encuentra respuestas a las dudas más comunes sobre nuestros servicios</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encontraste la respuesta que buscabas?
          </h2>
          <p className="text-xl mb-8">
            Nuestro equipo está aquí para ayudarte con cualquier duda específica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(664)2042324"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Llamar al (664) 204 2324
            </a>
            <a 
              href="mailto:juanmanuel.gamino@gmail.com"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );

};

export default News;