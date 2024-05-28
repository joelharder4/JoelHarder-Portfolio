/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#4195CC',
        secondary: '#007BFF',
        tertiary: '#41CC7A',
      },
      textColor: {
        primary: '#343A40',
        secondary: '#6AA9D4',
      }
    },
  },
  plugins: [],
}

