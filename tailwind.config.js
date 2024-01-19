/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '270': '270deg',
      }
    },
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
    colors: {
      'dark': '#0E0C15',
      'gray': '#121825',
      'gray-2': '#222B44',
      'gray-light': '#616D8D',
      'gray-light-2': '#9CA3AF',
      'blue': '#1C64F2',
      
    }
  },
  plugins: [],
}
