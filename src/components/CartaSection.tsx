import React from "react";

interface CartaSectionProps {
  imageSrc: string;
  altText: string;
  children: React.ReactNode; // La carta va como contenido
}

const CartaSection: React.FC<CartaSectionProps> = ({
  imageSrc,
  altText,
  children,
}) => {
  return (
    <section className="w-full bg-white min-h-[120vh]">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Imagen como fondo fijo y recortado */}
        <div
          className="w-full md:w-1/2 h-[400px] md:h-auto md:min-h-[120vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={altText}
        ></div>

        {/* Carta */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-20 md:py-32">
          <div className="max-w-xl text-custom-brown-text font-serif-display leading-relaxed text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartaSection;
