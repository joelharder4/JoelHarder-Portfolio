/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    //   primary: '#FFFFFF',
    //   secondary: '#F5F5F5',
    //   tertiary: '#1E2A69',
    // }),
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#4195CC',
        tertiary: '#41CC7A',
      },
      textColor: {
        primary: '#343A40',
        secondary: '#6C757D',
      }
    },
  },
  plugins: [],
}

