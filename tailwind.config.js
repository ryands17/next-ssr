module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
