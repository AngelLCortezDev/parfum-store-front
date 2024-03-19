/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*{html,ts}",
    ".components/**/*{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f433abff',
        'secondary': '#f4f4f4ff',
        'danger': '#ff0000ff',
      }
    },
  },
  plugins: [],
}

