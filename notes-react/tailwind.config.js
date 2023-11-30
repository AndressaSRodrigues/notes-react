/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'note-pen': "url('src/assets/login-bg.jpg')"
      },
      colors: {
        'green': '#15A39B',
      }
    },
  },
  plugins: [],
}

