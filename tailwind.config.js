module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '32px',
      }
    },
    extend: {
      colors: {
        primary: '#F8F9FA',
        secondary:'#198754',
        gray:'#6C757D',
        heavy_gray:'#212529',
        light_gray:'#CED4DA',
    },
  },
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}