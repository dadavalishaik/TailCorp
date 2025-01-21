

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        Roboto: ['Roboto'],
        serif: ['Georgia', 'serif'],
        // mono: ['Courier New', 'monospace'],
        // cursive: ['cursive'],
        // antialiased: ['antialiased'],
        // slashedzero: ['slashed-zero',],
        // Houschkamedium: ['Houschka-medium'],
        // subpixelantialiased: ['subpixel-antialiased'],
        // custom1: ['Your Custom Font 1', 'sans-serif'],
        // custom2: ['Your Custom Font 2', 'sans-serif'],
        // custom3: ['Your Custom Font 3', 'antialiased'],
        // custom4: ['Your Custom Font 4', 'subpixel-antialiased']
        // Add more custom fonts as needed
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

