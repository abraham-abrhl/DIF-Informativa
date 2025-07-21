/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",      // escanea todos los HTML en la raíz
    "./js/**/*.js",  // si tienes scripts en subcarpeta js/
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Open_Sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#1C3973',
        accent: '#CC3079',
        textbase: '#333333',
      },
    },
  },
  plugins: [],
}
