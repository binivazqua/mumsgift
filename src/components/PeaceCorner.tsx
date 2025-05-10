import React, { useState } from "react";

const phrases = [
  "Respira, mamá. Todo está bien.",
  "Hoy es un buen día para sonreír.",
  "Tu amor es la raíz de nuestra calma.",
  "Eres fuerte, eres luz, eres hogar.",
  "Gracias por estar, por ser, por amar.",
];

const PeaceCorner: React.FC = () => {
  const [phrase, setPhrase] = useState(phrases[0]);

  const handleNewPhrase = () => {
    const next = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(next);
  };

  return (
    <section className="w-full bg-black py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-serif-display text-center text-white">
          Rincón de Paz
        </h2>
        <p className="text-white">
          Un espacio de superación... tu hobby favorito. He aquí algunas
          recomendaciones para cada instante de tu día.
        </p>

        {/* Reproductor de música */}
        <div className="grid gird-cols-1 md:grid-cols-3 gap-10">
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl justify-center text-center">
            <h1 className="text-white m-auto mb-4">Para meditar</h1>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/4z56hihgGwR7MLlo4LkY33?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl justify-center text-center">
            <h1 className="text-white m-auto mb-4">Para conectar</h1>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/4PLfF0JPfYpAXK2vzjHK4F?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl justify-center text-center">
            <h1 className="text-white m-auto mb-4">Para aprender</h1>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/show/1Hd74IjzZElAMvjXOm913Z?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceCorner;
