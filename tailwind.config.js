/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto:["Roboto", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Lilita:["Lilita One", "sans-serif"],
        Audiowide:["Audiowide", "sans-serif"]
      },
      colors: {
        'delft': '#183059',
        'celectic-blue':'#276FBF',
        'sky': '#BFD1E5',
        'perivinkle':'#B8BEDD', //l-blue
        'green': '#073B3A',
        'lavender':'#EFC3E6', //pink
        'steel-blue':'#3F88C5',
        'prussain-blue':'#032B43', //d-blue
        'indian-red':'#C1666B',
        'lilac':'#BD93BD', //
        'smoke':'#F6F4F3',
        'orange-t':'#FFA500',
        'charcoal':'#454955',
        'background':'#f3f7fc'
      }
    },
  },
  plugins: [],
}