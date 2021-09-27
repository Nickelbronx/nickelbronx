const primary = '#d83e00'
const darkGrey = '#242424'
const lightGrey = '#efefef'

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1100px',
      },
      colors: {
        primary,
        darkGrey,
        lightGrey,
        grey: '#949494',
        accent: primary,
        background: 'white',
        bgInverse: 'black',
        text: 'black',
        textInverse: 'white',
        mutted: lightGrey,
        border: lightGrey,
        headerBg: 'white',
        headerColor: 'black',
        headerColorHover: primary,
        footerBg: 'black',
        footerColor: 'white',
        cardBg: 'white',
        slideSidebarBg: 'black',
      },
      fontFamily: {
        body: 'proxima_novaregular, sans-serif',
        heading: 'Apex, sans-serif',
        script: 'Have Heart One',
        bold: 'proxima_novabold, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
