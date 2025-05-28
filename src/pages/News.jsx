import React from 'react';

const News = () => {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Últimas Novedades</h2>
      <div className="space-y-4">
        <article className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold">Noticia 1</h3>
          <p className="text-gray-700">Resumen breve de la noticia más reciente o actualización importante.</p>
        </article>
        <article className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-bold">Noticia 2</h3>
          <p className="text-gray-700">Otra actualización interesante sobre los servicios o actividades de la empresa.</p>
        </article>
      </div>
    </section>
  );
};

export default News;