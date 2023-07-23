/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'poppins', san-serif",
        roboto: "'roboto', san-serif",
        WorkSans: "'Work Sans', sans-serif",
        inter: "'Inter', sans-serif"
      },

      listStyleImage:{
        vector:'url("/img/Vector 6.png")'
      },
      
      colors: {
        'primary': '#040809',
        'secondary': '#30FFEB',
        'dang': '#5033FF',
        'grayWhite': '#D9D9D9',
        'bg-black': '#171A1A',
        'offWhite': '#F2F2F2'
      }
    },
  },
  plugins: [],
}