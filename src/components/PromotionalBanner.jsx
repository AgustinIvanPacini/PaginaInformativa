import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerData from "../Data/bannerData";

const PromotionalBanner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
      setFade(true);
    }, 300);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = bannerData[index];

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center text-white flex items-center px-10 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-xl">
          <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
          <p className="text-lg mb-6">{current.subtitle}</p>
          <a
            href={current.cta.link}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow"
          >
            {current.cta.text}
          </a>
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerData.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalBanner;


