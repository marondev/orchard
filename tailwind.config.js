const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      body: '#0e1414',
      primary: '#818383',
      secondary: '#ffffff',
      highlight: '#cf1430'
    },
    fontFamily: {
      sans: ['Open Sans Light', ...defaultTheme.fontFamily.sans],
      regular: ['Open Sans', 'sans-serif'],
      bold: ['Open Sans Bold', 'sans-serif'],
      condensed: ['Open Sans Condensed', 'sans-serif']
    },
    extend: {},
  }
};
