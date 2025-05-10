import React, { useEffect, useState } from "react";

const phrases = [
  "Respira, mamá. Todo está bien.",
  "Hoy es un buen día para sonreír.",
  "Tu amor es la raíz de nuestra calma.",
  "Eres fuerte, eres luz, eres hogar.",
  "Gracias por estar, por ser, por amar.",
];

const BreathingCorner: React.FC = () => {
  const [breathState, setBreathState] = useState("");
  const [count, setCount] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => {
    if (!isBreathing) return;

    const sequence = [
      { label: "Inhala", duration: 4 },
      { label: "Retén", duration: 7 },
      { label: "Exhala", duration: 8 },
    ];
    let index = 0;
    let timer: ReturnType<typeof setInterval>;

    function next() {
      const current = sequence[index];
      setBreathState(current.label);
      setCount(current.duration);
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            index = (index + 1) % sequence.length;
            next();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    next();
    return () => clearInterval(timer);
  }, [isBreathing]);

  const startBreathing = () => {
    setIsBreathing(true);
  };
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-serif-display text-center text-white">
          Rincón de Soltar
        </h2>
        <p className="text-white text-center">
          Siempre vas muy acelerada, mami. De vez en cuando, no está mal tomar
          una pausa y poner en práctica lo que hemos aprendido en yoga.
        </p>

        {/* Temporizador de respiración */}
        <div className="flex flex-col items-center gap-4 mt-8">
          {!isBreathing ? (
            <button
              onClick={startBreathing}
              className="bg-white hover:bg-pink-100 hover:text-black text-black px-6 py-2 rounded-full shadow-md transition"
            >
              Respirar
            </button>
          ) : (
            <>
              <div className="text-2xl font-semibold text-pink-700">
                {breathState}
              </div>
              <div className="text-5xl font-bold text-pink-900">{count}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BreathingCorner;
