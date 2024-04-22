const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customOrange: '#b893ed',
        backgroundLightBlue:"#F8F8F8"
      },
    },
  },
  plugins: [daisyui],
};
