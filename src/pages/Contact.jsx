import React from 'react';

const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Tu nombre" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="tucorreo@mail.com" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="message" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Enviar</button>
      </form>

      {/* Botón de WhatsApp */}
      <div className="flex justify-center mt-6">
        <a 
          href="https://wa.me/5492612075463" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 32 32">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2 7.9L.4 32l8.3-2.2c2.3 1.2 5 1.9 7.8 1.9 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm0 28.4c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.1-1.9-1.7-4.1-1.7-6.4 0-7.1 5.8-12.8 12.8-12.8 7.1 0 12.8 5.8 12.8 12.8 0 7-5.8 12.8-12.8 12.8zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.9.2s-1.1 1.2-1.3 1.4-.5.3-.9.1-1.7-.6-3.3-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.1-.8.1-.1.2-.3.4-.4.1-.1.2-.2.3-.4.1-.1.1-.3.2-.5.1-.2 0-.4 0-.6s-.9-2.2-1.2-3c-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.4 0-.6.2s-.8.8-.8 2c0 1.2.8 2.4.9 2.6.1.2 1.6 2.5 3.9 3.6 2.3 1.1 2.3.8 2.8.8.4 0 1.4-.5 1.7-1 .2-.5 1-1.3 1.3-1.6.3-.3.6-.3 1-.2.4.1 2.4 1.1 2.8 1.3.4.2.6.3.7.5.1.2.1 1.3-.3 2.2-.4.8-1.3 1.3-1.5 1.3z"/>
          </svg>
          <span>Contactar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
