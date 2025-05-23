/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    screens: {
      '[313px]':'313px',
      '[336px]':'336px',
      '[448px]':'448px',
      '[570px]':'336px',

      '[599px]':'599px',
      '[758px]':'758px',
      '[913px]':'913px',
      '[970px]':'970px',

    },
    extend: {
      backgroundImage:{
        "header" : "url('/src/images/header.jpg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      }, 
    },
  },
  plugins: [
  ],
}

