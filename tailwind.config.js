/** @type {import('tailwindcss').Config} */

const { colors: defaultColors, fontFamily: fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  darkmode: false,
  content: [
    "./src/**/*.{html, js}"
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors
      },
      fontFamily: {
        sans: ['Noto Sans', ...fontFamily.sans],
        serif: [...fontFamily.serif],
        mono: [...fontFamily.mono],
        hand: ['Patrick Hand', ...fontFamily.sans],
        link: ['Indie Flower', ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

