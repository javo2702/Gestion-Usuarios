/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout-sm': '5rem 1fr',
        'layout': '12rem 1fr',
        'main': '1fr .5fr',
        'main-sm': '1fr 1fr'
      },
      gridTemplateRows: {
        'layout': '4rem 1fr'
      }
    },
  },
  plugins: [
  ],
}

