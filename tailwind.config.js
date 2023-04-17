/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'cursive']
      },

      "backgroundSize": {
        "600": "600%"
      },
      animation: {
        "bg-scroll": "bgscroll 15s ease infinite"
      },
      keyframes: {
        "bgscroll": {
          "0%, 100%": {
            "background-position": "0 50%"
          },
          "50%": {
            "background-position": "100% 50%"
          }
        }
      }
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: "mocha"
    }),
    require('tailwindcss-animate')
  ],
}
