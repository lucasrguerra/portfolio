/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

