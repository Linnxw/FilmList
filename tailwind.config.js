/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily:{
      'inter':['inter'],
      'sans':['Poppins']
    },
    extend: {
      colors:{
        second:"#E50913",
        whites:"#C7C3C0",
        blackSecond:"#4d4d4d"
      },
    },
  },
  plugins: [],
}

