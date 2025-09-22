import "../globals.css";

export const metadata = {
  title: {
    default: "HanGage | Lifestyle Hanbok",
    template: "%s | HanGage",
  },
  description:
    "Lifestyle Hanbok blending modern sensibility with traditional beauty.",
};

export default function LangLayout({ children, params }) {
  const { lang } = params; // URL의 [lang] 값 (ko, en, fr, ja, zh 등)

  return (
    <html lang={lang}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
