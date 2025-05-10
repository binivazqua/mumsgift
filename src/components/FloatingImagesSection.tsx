// src/components/FloatingImagesSection.tsx
import React from "react";

export interface ImageConfig {
  id: number | string;
  src: string; // Ruta a tu imagen (ej. /images/foto_mama_1.jpg o importada)
  alt: string;
  positionClasses: string; // Clases de Tailwind para posición: ej. "top-[10%] left-[5%] md:top-[15%] md:left-[10%]"
  sizeClasses: string; // Clases de Tailwind para tamaño: ej. "w-24 h-32 md:w-32 md:h-40"
  rotationClasses?: string; // Clases de Tailwind para rotación: ej. "transform -rotate-6"
  zIndex?: string; // Clases de Tailwind para z-index: ej. "z-10"
  animationClass?: string; // Clase para animación: ej. "animate-gentle-float"
  animationDelay?: string; // Para variar el inicio de la animación (requiere estilo en línea o plugin)
}

interface FloatingImagesSectionProps {
  mainPhrase: string;
  subPhrase?: string;
  images: ImageConfig[];
  backgroundColor?: string; // ej. "bg-custom-cream"
}

const FloatingImagesSection: React.FC<FloatingImagesSectionProps> = ({
  mainPhrase,
  subPhrase,
  images,
  backgroundColor = "bg-black", // Color de fondo por defecto
}) => {
  return (
    <div
      className={`relative w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden ${backgroundColor}`}
    >
      {/* Contenedor para el Texto Central */}
      <div className="relative z-20 text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display text-custom-brown-text mb-3 md:mb-4">
          {mainPhrase}
        </h1>
        {subPhrase && (
          <p className="text-md sm:text-lg md:text-xl font-sans-body text-custom-gray-text">
            {subPhrase}
          </p>
        )}
      </div>

      {/* Imágenes Flotantes */}
      {images.map((image) => (
        <div
          key={image.id}
          className={`absolute ${image.positionClasses} ${image.sizeClasses} ${
            image.rotationClasses || ""
          } ${image.zIndex || "z-0"} ${image.animationClass || ""}`}
          style={
            image.animationDelay ? { animationDelay: image.animationDelay } : {}
          }
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`object-cover rounded-lg shadow-xl `}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingImagesSection;
