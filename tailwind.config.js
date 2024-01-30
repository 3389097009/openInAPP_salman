/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#605BFF',
      lightGrey: '#9a9aa9',
      lightTrunks: '#999CA0',
      bulmaLight: '#F5F5F5',
      blue: '#0000FF',
      white: '#FFFFFF',
      'btn-green': '#5AAC44',
    },
    fontFamily: {
      figtree: ['figtree'],
    },
  },
  plugins: [],
};
