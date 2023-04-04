/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // extend: {backgroundImage: {
    //   'hero-pattern': "url('/marble.png')",
    //   // 'footer-texture': "url('/img/footer-texture.png')",
    // }},
    // colors: {
    //   "prim": {

    //   }
    // }
  },
  plugins: [require('@tailwindcss/typography')],
}
