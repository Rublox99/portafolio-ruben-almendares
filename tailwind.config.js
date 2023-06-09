/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bubbles': "url('https://assets6.lottiefiles.com/packages/lf20_kxjafW0nKy.json')"
      }
    },
    screens: {
      'tablet': {'max': '1024px'}, //@media (max-width: 768px)
      'phone': {'max': '835px'},
      'phoneHeight': {'raw': '(min-height:815px) and (max-height:910px)'},
      'midWidth':{'raw': '(min-width:560px) and (max-width: 830px)'},
      'highWidth':{'raw': '(min-width:820px) and (max-width: 970px)'},
      'longHeight': {'raw': '(min-height: 720px)'}, //raw permite tener control total del media query
      'rotatedPhone': {'raw': '(min-width: 840px) and (max-height: 570px)'}
    }
  },
  plugins: [],

}

