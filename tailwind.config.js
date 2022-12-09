/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropMotion: {
          "0%": { transform : 'scaleY(0)' },
          "80%": { transform: 'scaleY(1.1)' },
          "100%": { transform: 'scaleY(1)' },
        },
      },

      transformOrigin: {
        dropOrigins: "top center",
      },

      animation: {
        faqDrop: "dropMotion 300ms ease-in-out forwards",
      },

      colors: {
        background: "#00AD7C",
      },
      fontFamily: {
        headings: ["Comfortaa"],
      },
    },
  },
  plugins: [],
};
