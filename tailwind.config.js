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
    screens: {
      'tablet': {'max': '1024px'}, //@media (max-width: 768px)
      'phone': {'max': '480px'}
    }
  },
  plugins: [],

}

