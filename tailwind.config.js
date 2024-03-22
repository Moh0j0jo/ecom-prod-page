const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'logo-color': '#1D2026',
        'transparent':'#303030e6'
      },
      fontFamily: {
        Kumbhsans:['Kumbh Sans']
      },
      fontSize:{
        xxs:'11px'
      }
    },
  },
  plugins: [ ],
});

