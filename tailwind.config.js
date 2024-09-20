/** @type {import('tailwindcss').Config} */

const {colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  darkmode: false,
  content: [
  	"./src/**/*.{html, js}"
  ],
  theme: {
  	colors:{
  		...defaultColors
  	}
    extend: {
    	
    },
  },
  plugins: [
  	require('@tailwindcss/forms'),
  	require('@tailwindcss/typography'),
  	require('@tailwindcss/apect-ratio'),
  	require('@tailwindcss/container-queries'), 
  ],
}

