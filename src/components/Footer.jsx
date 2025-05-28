import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;