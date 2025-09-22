export const metadata = {
  title: "우리 옷상점 | 한스타일 밝은 상점",
  description: "현대적 감각과 전통의 아름다움이 공존하는 생활한복",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;600&family=Noto+Serif+KR:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
