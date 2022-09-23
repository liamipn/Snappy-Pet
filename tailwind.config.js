module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './src/**/*.html', './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'sp-green-1': '#56700f',
        'sp-green-2': '#43570e',
        'sp-orange-1': '#d5732f',
        'sp-orange-2': '#c9621b',
        'sp-beige-1': '#f1ece7',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
