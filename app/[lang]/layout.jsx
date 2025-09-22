import "../globals.css";

// ✅ 언어 JSON 불러오기 함수
async function getLocaleDict(lang) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || ""}/locales/${lang}.json`,
      { cache: "force-cache" }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("언어 파일 로드 실패:", e);
    return null;
  }
}

// ✅ JSON 기반 다국어 메타데이터 생성
export async function generateMetadata({ params }) {
  const { lang } = params;
  const dict = await getLocaleDict(lang);

  return {
    title: dict?.hero?.headline || "HanGage | Lifestyle Hanbok",
    description:
      dict?.hero?.subtext ||
      "Lifestyle Hanbok blending modern sensibility with traditional beauty.",
  };
}

export default function LangLayout({ children, params }) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
