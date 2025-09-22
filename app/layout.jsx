"use client";
import "./globals.css";

export const metadata = {
  title: "한가게 | 생활한복",
  description: "현대적 감각과 전통의 아름다움이 공존하는 생활한복 전문점",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
