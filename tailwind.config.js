/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          "blue":"#2A9FBC",
          black:{
            "blue": "#005E83"
          },
          gray:{
            dark:"#5C585B"
          }
        },
        secondary:{
          gray:{
            "light":"#F8F8F8",
            "medium": "#E4E2E2"
          },
          white:"#fff",
        },
        terciary:{
          orange:"#FAA635",
          yellow:"#F2CF52",
          gray:{
            "blue":"#B9CAD2"
          },
        },
        "error":"#D32B2B",
        "success":"#4ABA55"
      },
      fontFamily:{
        openSans:['var(--font-openSans)']
      }
    },
  },
  plugins: [],
}
