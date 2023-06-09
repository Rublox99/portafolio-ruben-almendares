/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'svg1': "url('src/graphics/webGraphics/slanted-gradient.svg')"
      }
    },
  },
  plugins: [],

}

