/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#38b2ac',
        secondary: '#4fd1c5',
        tertiary: '#2c8a8a'
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}

