/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F5F5DC', // Bege
        'brand-light': '#E3EADF',      // Verde Claro
        'brand-primary': '#6B8E23',     // Verde Oliva
        'brand-dark': '#333333',       // Cinza Escuro
        'brand-muted': '#555555',      // Cinza Médio
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
      }
    },
  },
  plugins: [],
}