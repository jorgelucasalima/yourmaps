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
    },
  },
  plugins: [],
}

