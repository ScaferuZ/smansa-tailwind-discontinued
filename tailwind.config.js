module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#161824',
        secondary: '#F9BF3B'
      },
      backgroundImage: theme => ({
        'gambar-hero': "url('/img/hero.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
