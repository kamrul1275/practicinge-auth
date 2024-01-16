/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./node_modules/flowbite/**/*.js",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],


  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}