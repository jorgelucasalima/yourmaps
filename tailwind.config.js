/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Poppins', 'serif'],
        'mono': ['Poppins', 'monospace'],
        'sans-bold': ['Poppins', 'sans-serif', 'bold'],
        'sans-light': ['Poppins', 'sans-serif', 'light'],
      },
      colors: {
        'blue': {
          'primary': '#0159D3',
          'secondary': '#003681',
        },
        'gray': {
          'primary': '#d9d9d9',
          'secondary': '#DADADA',
        },
        'white': {
          'primary': '#f0f0f0',
          'secondary': '#F5F5F5',
        }

      }
    },
  },
  plugins: [],
}

