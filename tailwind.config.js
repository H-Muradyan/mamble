module.exports = {
  content: [
    './{common,components,pages,src,styles}/**/*.{jsx,css,scss}',
    '!/**/*.test.js*',
  ],
  theme: {
    fontSize: {
      '2xl': '3.25rem',
    },
    extend: {
      minHeight: {
        '1/2': '650px',
      },
      spacing: {
        88: '88px',
        580: '580px',
        474: '474px',
      },

      colors: {
        headerbg: '#EEEEEE',
        blue: '#008594',
        darkBlue: '#006177',
        borderColor: '#F7F7F8',
        textColor: '#131313',
        grey: '#BABABA',
        darkGrey: '#737374',
        checkBox: '#C4C4C4',
        dropDownGrey: '#EBEBED',
        errorColor: '#D32F2F',
      },
      boxShadow: {
        shadow: '0 4px 4px rgba(19, 19, 19, 0.2)',
        borderShadow: '0px 0px 4px #008594',
        flagsBorderShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
