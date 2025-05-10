import React from "react";
import FloatingImagesSection, {
  ImageConfig,
} from "./components/FloatingImagesSection";
import CartaSection from "./components/CartaSection";
import PeaceCorner from "./components/PeaceCorner";
import MotivationCorner from "./components/MotivationCorner";
import BreathingCorner from "./components/BreathCorner";
import SosCorner from "./components/SosCorner";
import Wishlist from "./components/Wishlist";

const imagesForMom: ImageConfig[] = [
  {
    id: 1,
    src: "src/assets/arbolito.jpeg",
    alt: "Recuerdo bonito 1",
    positionClasses: "top-[10%] left-[8%] md:top-[15%] md:left-[10%]",
    sizeClasses: "w-36 h-48 md:w-[250px] md:h-64",
    rotationClasses: "transform -rotate-3",
    animationClass: "animate-gentle-float",
    zIndex: "z-10",
  },
  {
    id: 2,
    src: "src/assets/cartulina.jpeg",
    alt: "Mamá sonriendo",
    positionClasses: "top-[20%] right-[12%] md:top-[20%] md:right-[10%]",
    sizeClasses: "w-40 h-28 md:w-[250px] md:h-[100px]",
    animationClass: "animate-gentle-float",
    animationDelay: "0.5s",
  },
  {
    id: 3,
    src: "src/assets/camita.jpeg",
    alt: "Viaje familiar",
    positionClasses: "bottom-[25%] left-[35%] md:bottom-[15%] md:left-[8%]",
    sizeClasses: "w-36 h-48 md:w-[300px] md:h-36",
    rotationClasses: "transform rotate-2",
    animationClass: "animate-gentle-float",
    animationDelay: "1s",
    zIndex: "z-10",
  },
  {
    id: 4,
    src: "src/assets/manollegandoacasa.jpeg",
    alt: "Momentos especiales",
    positionClasses: "bottom-[18%] right-[28%] md:bottom-[10%] md:right-[15%]",
    sizeClasses: "w-40 h-32 md:w-52 md:h-64",
    rotationClasses: "transform -rotate-1",
    animationClass: "animate-gentle-float",
    animationDelay: "0.2s",
  },
  {
    id: 5,
    src: "src/assets/musical.jpeg",
    alt: "Abrazos",
    positionClasses:
      "top-[40%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:bottom-[30%] md:left-[45%]",
    sizeClasses: "w-28 h-40 md:w-36 md:h-44",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0",
  },
  {
    id: 6,
    src: "src/assets/tiburoncin.jpeg",
    alt: "Abrazos",
    positionClasses:
      "top-[28%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "w-32 h-48 md:w-80 md:h-96",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0",
  },
  {
    id: 7,
    src: "src/assets/cumplebini.jpeg",
    alt: "Cumpleaños",
    positionClasses:
      "top-[55%] left-[10%] md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "w-40 h-48 md:w-44 md:h-96",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0",
  },
  {
    id: 8,
    src: "src/assets/tortugas.jpeg",
    alt: "Tortugas",
    positionClasses:
      "top-[100px] left-[60%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "w-28 h-48 md:w-24 md:h-96",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0",
  },
  {
    id: 9,
    src: "src/assets/los3.jpeg",
    alt: "los3",
    positionClasses:
      "top-[45%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "w-28 h-48 md:w-36 md:h-96",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0",
  },
];

function App() {
  return (
    <main>
      <FloatingImagesSection
        mainPhrase="para nuestra mamita beibi" // ¡La frase que quieras dedicarle!
        subPhrase="con todo el cariño del mundo" // Opcional
        images={imagesForMom}
        backgroundColor="bg-blue" // O cualquier otro color de Tailwind
      />
      {/* cartitia */}
      <CartaSection imageSrc="src/assets/oslo.jpg" altText="Foto de mamá">
        <h2 className="text-5xl font-bold mb-4">Querida Mami,</h2>
        <p className="mb-4 text-2xl">
          Hoy queremos recordarte lo mucho que significas para nosotros. Tu
          amor, tu fuerza y tu ternura han sido el abrazo más constante que nos
          ha sostenido toda la vida.
        </p>
        <p className="mb-4 text-2xl">
          Esta carta es un pequeño intento de devolverte una parte de todo lo
          que nos has dado. Gracias por cuidarnos, por enseñarnos, por nunca
          rendirte.
        </p>
        <p className="text-2xl">
          Con todo nuestro amor,
          <br />
          tus hijitos que te aman.
        </p>
      </CartaSection>
      <PeaceCorner></PeaceCorner>
      <MotivationCorner></MotivationCorner>
      <BreathingCorner></BreathingCorner>
      <SosCorner></SosCorner>
      <Wishlist></Wishlist>
    </main>
  );
}
export default App;
