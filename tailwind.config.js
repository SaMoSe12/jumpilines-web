/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors
}

module.exports = {
  darkmode: false,
  content: [
    "./src/**/*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        "jumpilines": {
          100: '#FFEEFF',
          200: '#EEFFEE'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

