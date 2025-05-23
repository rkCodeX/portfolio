/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "header" : "url('/src/images/header.s')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [
  ],
}

