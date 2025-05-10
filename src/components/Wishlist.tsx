import React, { useEffect, useState } from "react";

const BreathingCorner: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-serif-display text-center text-white">
          Mi Wishlist
        </h2>
        <p className="text-white text-center">
          Eres la soñadora, la aventurera, la incansable de la familia. Muchas
          veces, nuestras ideas de nuevos planes se quedan perdidos en el chat
          de familia... ¡ponlos todos aquí, mami!
        </p>

        {/* Botón para ver el video */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSen3JewO-fpYDsRGwkTT01NZbS0AOVPNm8kMN6a1M6c3b8WZg/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Añadir deseo
        </a>
      </div>
    </section>
  );
};

export default BreathingCorner;
