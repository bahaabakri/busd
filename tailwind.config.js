module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  prefix: "tw-",
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
 };