import React from "react";
import FloatingImagesSection, {
  ImageConfig,
} from "./components/FloatingImagesSection";
import CartaSection from "./components/CartaSection";

const imagesForMom: ImageConfig[] = [
  // Ejemplo de configuración de imágenes (¡reemplaza con las tuyas!)
  // Puedes usar porcentajes o unidades fijas para positionClasses.
  // Tailwind usa `rem` por defecto para unidades como top-10 (equivale a top: 2.5rem)
  // Si quieres pixeles exactos, puedes usar clases como `top-[60px]`.
  {
    id: 1,
    src: "src/assets/arbolito.jpeg", // Reemplaza con tu imagen, ej. मॉमFoto1 o '/images/tu-foto-1.jpg'
    alt: "Recuerdo bonito 1",
    positionClasses: "top-[10%] left-[8%] sm:top-[15%] sm:left-[10%]",
    sizeClasses: "md:w-[250px] md:h-64 sm:w-24 sm:h-32",
    rotationClasses: "transform -rotate-3",
    animationClass: "animate-gentle-float",
    zIndex: "z-10",
  },
  {
    id: 2,
    src: "src/assets/cartulina.jpeg",
    alt: "Mamá sonriendo",
    positionClasses: "md:top-[20%] md:right-[10%] sm:top-[25%] sm:right-[12%]",
    sizeClasses: "md:w-[250px] md:h-[100px] sm:w-32 sm:h-24",
    animationClass: "animate-gentle-float",
    animationDelay: "0.5s", // Pequeño desfase en la animación
  },
  {
    id: 3,
    src: "src/assets/camita.jpeg",
    alt: "Viaje familiar",
    positionClasses:
      "md:bottom-[15%] md:left-[8%] sm:bottom-[20%] sm:left-[15%]",
    sizeClasses: "md:w-[300px] md:h-36 sm:w-28 sm:h-40",
    rotationClasses: "transform rotate-2",
    animationClass: "animate-gentle-float",
    animationDelay: "1s",
    zIndex: "z-10",
  },
  {
    id: 4,
    src: "src/assets/manollegandoacasa.jpeg",
    alt: "Momentos especiales",
    positionClasses: "bottom-[10%] right-[15%] sm:bottom-[12%] sm:right-[18%]",
    sizeClasses: "md:w-52 h-64 sm:w-40 sm:h-30",
    rotationClasses: "transform -rotate-1",
    animationClass: "animate-gentle-float",
    animationDelay: "0.2s",
  },
  {
    id: 5,
    src: "src/assets/musical.jpeg",
    alt: "Abrazos",
    // Ejemplo para una imagen más central en pantallas pequeñas, y distinta en medianas
    positionClasses:
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:bottom-[30%] md:left-[45%]",
    sizeClasses: "md:w-36 md:h-44 sm:w-20 sm:h-28",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0", // Detrás de otras si se superponen
  },
  {
    id: 6,
    src: "src/assets/tiburoncin.jpeg",
    alt: "Abrazos",
    // Ejemplo para una imagen más central en pantallas pequeñas, y distinta en medianas
    positionClasses:
      "top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "md:w-80 h-96 sm:w-20 sm:h-28",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0", // Detrás de otras si se superponen
  },
  {
    id: 6,
    src: "src/assets/cumplebini.jpeg",
    alt: "Abrazos",
    // Ejemplo para una imagen más central en pantallas pequeñas, y distinta en medianas
    positionClasses:
      "md:top-1/2 md:left-[8%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "md:w-44 h-96 sm:w-20 sm:h-28",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0", // Detrás de otras si se superponen
  },
  {
    id: 6,
    src: "src/assets/tortugas.jpeg",
    alt: "Abrazos",
    // Ejemplo para una imagen más central en pantallas pequeñas, y distinta en medianas
    positionClasses:
      "md:top-[100px] md:left-[60%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "md:w-24 h-96 sm:w-20 sm:h-28",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0", // Detrás de otras si se superponen
  },
  {
    id: 6,
    src: "src/assets/los3.jpeg",
    alt: "los3",
    // Ejemplo para una imagen más central en pantallas pequeñas, y distinta en medianas
    positionClasses:
      "md:top-[45%] md:left-[80%] transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[30%] md:left-[35%]",
    sizeClasses: "md:w-36 h-96 sm:w-20 sm:h-28",
    rotationClasses: "transform rotate-6",
    animationClass: "animate-gentle-float",
    animationDelay: "0.7s",
    zIndex: "z-0", // Detrás de otras si se superponen
  },
  // ... Agrega más imágenes según necesites, jugando con los valores.
  // Fíjate en la imagen que compartiste:
  // - Hay una imagen arriba a la izquierda (aprox. top-[18%] left-[22%])
  // - Otra imagen un poco abajo a la izquierda (aprox. bottom-[30%] left-[18%])
  // - Una imagen pequeña casi al centro (aprox. top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2)
  // - Varias a la derecha, arriba y abajo.
  // ¡Experimenta con estos valores!
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
    </main>
  );
}
export default App;
