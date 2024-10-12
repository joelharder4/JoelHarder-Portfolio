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
      },
      fontFamily: {
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'bash-terminal': "url('/public/img/bash_terminal.png')",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none',  /* IE 10+ */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, Edge, Opera */
          },
        },
      });
    },
  ],
}

