import React, { useState } from "react";

const phrases = [
  "Respira, mamá. Todo está bien.",
  "Hoy es un buen día para sonreír.",
  "Tu amor es la raíz de nuestra calma.",
  "Eres fuerte, eres luz, eres hogar.",
  "Gracias por estar, por ser, por amar.",
];

const SosCorner: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-serif-display text-center text-black">
          Rincón de Emergencia
        </h2>
        <p className="text-black text-center">
          Manito emprende una nueva etapa en su vida. Lamenta no estar siempre
          disponible, o al alcance para un abrazo como lo haríamos de estar
          juntos. Cuando extrañes a manito beibi, ve este video:
        </p>

        {/* Botón para ver el video */}
        <a
          href="https://drive.google.com/file/d/1324sPijezJIKX_zlBgPE-XJtHhZEQb6e/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Ver video especial 🎥
        </a>
      </div>
    </section>
  );
};

export default SosCorner;
