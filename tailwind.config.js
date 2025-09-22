/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        exhibition: {
          light: "#F8FAFC",   // 밝은 전시장 벽
          sky: "#E6F0FA",     // 은은한 하늘색 (Alice Dalton Brown 느낌)
          blue: "#1E3A8A",    // 네이비 블루 (버튼 메인)
          accent: "#93C5FD",  // 포인트 블루
          gray: "#6B7280",    // 중간톤 그레이
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
        serif: ["Noto Serif KR", "serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)", // 부드러운 전시장 그림자
      },
    },
  },
  plugins: [],
};
