/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        //1 rem = 4px
      '13': '3.25rem',
      '15': '3.75rem',
      '112':'28rem',
      '128': '32rem',
      '144': '36rem',
    },},
  },
  plugins: [],
}