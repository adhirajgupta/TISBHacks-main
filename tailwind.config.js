/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#531DFF',
        tertiary: '#ABABAB',
        gray: '#1A1A1A',
        gray2: '#262626',
        gradientTop: '#3C11C3',
        gradientBottom: '#7000FF',
      },
    },
  },
  plugins: [],
}
