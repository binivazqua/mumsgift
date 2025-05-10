// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate que las rutas a tus archivos sean correctas
  ],
  theme: {
    extend: {
      colors: {
        'custom-cream': '#F8F5F2', // Un color crema claro, ajústalo a tu gusto
        'custom-brown-text': '#4A3B34', // Marrón oscuro para el texto principal
        'custom-gray-text': '#796A61',  // Marrón/gris más claro para el subtexto
      },
      fontFamily: {
        'serif-display': ['Merriweather', 'serif'], // Ejemplo de fuente serif, puedes cambiarla
        'sans-body': ['Lato', 'sans-serif'],      // Ejemplo de fuente sans-serif
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'gentle-float': 'gentle-float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    // Puedes añadir plugins aquí si los necesitas
  ],
};