/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#A57D42', 
      },
    },
  },
  plugins: [],
}

