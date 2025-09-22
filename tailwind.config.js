/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          dark: "#1e40af",    // blue-800
        },
        accent: {
          DEFAULT: "#4338ca", // indigo-700
          dark: "#312e81",    // indigo-900
        },
      },
    },
  },
  plugins: [],
};
