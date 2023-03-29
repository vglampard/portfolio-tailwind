/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // extend: {backgroundImage: {
    //   'hero-pattern': "url('/marble.png')",
    //   // 'footer-texture': "url('/img/footer-texture.png')",
    // }},
  },
  plugins: [require('@tailwindcss/typography')],
}
