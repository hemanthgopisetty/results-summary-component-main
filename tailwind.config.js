/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        custom_hanken: ['hg', 'cursive'],
       },
       boxShadow :{
        'custom' : ' 0px 5px 20px 10px hsl(222, 100%, 96.1%)',
       },
       colors :{
        gradient : {
          'vb' : 'hsla(256, 72%, 46%, 1)',
          'pb' : 'hsla(241, 72%, 46%, 0)',
          'lsb': 'hsl(252, 100%, 67%)',
          'lrb': 'hsl(241, 81%, 54%)',
        },
        Neutral :{
          'll' : 'hsl(241, 100%, 89%)',
          'pb' : 'hsl(221, 100%, 96%)',
          'w'  : 'hsl(0, 0%, 100%)',
          'dgb': 'hsl(224, 30%, 27%)',
        },
        'lred'  : 'hsl(0, 100%, 67%)',
        'rb'    : 'hsla(0, 100%, 67%, 7%)',
        'oy'    : 'hsl(39, 100%, 56%)',
        'oyb'   : 'hsla(39, 100%, 56%, 7%)',
        'gt'    : 'hsl(166, 100%, 37%)',
        'gtb'   : 'hsla(166, 100%, 37%, 7%)',
        'cb'    : 'hsl(234, 85%, 45%)',
        'cbb'   : 'hsla(234, 85%, 45%, 7%)',
        'dgb'   : 'hsl(224, 30%, 27%)',
        'sdb-50': 'hsla(224, 30%, 27%, 50%)',
       },
       
    },
  },
  plugins: [],
}