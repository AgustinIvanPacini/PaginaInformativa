import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0p81wvs', 'template_f7gq38g', form.current, '4UKwevVOogCu4mte3')
      .then((result) => {
          console.log('Mensaje enviado:', result.text);
          alert('Mensaje enviado correctamente');
          form.current.reset();
      }, (error) => {
          console.log('Error:', error.text);
          alert('Ocurrió un error al enviar el mensaje');
      });
  };

  const whatsappNumber = '5491123456789'; // Cambia por el número real con código país sin signos

  return (
    <section className="py-16 bg-emerald-500 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            DEJA TU MENSAJE
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-white font-medium mb-2">
                NOMBRE
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-white font-medium mb-2">
                CORREO ELECTRÓNICO
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="tucorreo@mail.com"
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                ENVIAR
              </button>
            </div>
          </form>

          {/* Botón o enlace WhatsApp */}
          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

