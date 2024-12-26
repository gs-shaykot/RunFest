/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        primary: '#fcf403',
        secondary:'#080e17'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ], 
}

