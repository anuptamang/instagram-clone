// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 960px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '640px',
        lg: '960px',
        xl: '960px',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: true,
  },
  plugins: [require('@tailwindcss/forms')],
}
