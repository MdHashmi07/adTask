/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        'custom': '37.76px',
      }
    },
    plugins: [],
  },
  variants: {
    extend: {
      backgroundClip: ["text"],
      textFillColor: ["hover", "focus"],
    },
  },
  corePlugins: {
    textFillColor: false,
  },
};
