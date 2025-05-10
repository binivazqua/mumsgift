import React, { useState } from "react";

const phrases = [
  "Respira, mamá. Todo está bien.",
  "Hoy es un buen día para sonreír.",
  "Tu amor es la raíz de nuestra calma.",
  "Eres fuerte, eres luz, eres hogar.",
  "Gracias por estar, por ser, por amar.",
];

const MotivationCorner: React.FC = () => {
  const [phrase, setPhrase] = useState(phrases[0]);

  const handleNewPhrase = () => {
    const next = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(next);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-serif-display text-center text-black">
          Rincón de Motivación
        </h2>
        <p className="text-black text-center">
          Todos necesitamos un empujoncito de vez en cuando... Aprieta el botón
          y encuentra una frase estoica como tú para ayudarte a continuar :)
        </p>

        {/* Frase reconfortante */}
        <div className="text-xl md:text-2xl text-custom-brown-text text-center italic max-w-xl bg-gray-300 p-10">
          “{phrase}”
        </div>
        <button
          onClick={handleNewPhrase}
          className="bg-black hover:bg-pink-100 hover:text-black text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Nueva frase
        </button>
      </div>
    </section>
  );
};

export default MotivationCorner;
