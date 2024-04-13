/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        parallex: "url(../src/assets/img/image02.jpg)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
};
