

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif', 'system-ui','Segoe UI Emoji'],
        Roboto: ['Roboto'],
        serif: ['Georgia', 'serif', 'Cambria'],
        mono: ['Courier New', 'monospace', 'Monaco','Liberation Mono'],
        robotoSlab: ['RobotoSlab', 'sans-serif'], //added
        lexendaGiga: ['LexendaGiga', 'sans-serif'], //added
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

