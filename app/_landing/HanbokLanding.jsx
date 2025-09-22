"use client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function HanbokLanding({ lang = "ko" }) {
  const [dict, setDict] = useState(null);

  // ✅ public/locales/[lang].json 불러오기
  useEffect(() => {
    async function loadDict() {
      try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setDict(data);
      } catch (e) {
        console.error("언어 파일 로드 실패:", e);
      }
    }
    loadDict();
  }, [lang]);

  if (!dict) return <div>Loading...</div>;

  // ✅ 룩북 15개 카드
  const LOOKBOOK_ITEMS = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    img: `/lookbooks/look${i + 1}.jpg`,
    title: `Look ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Helmet>
        <title>{dict.hero?.headline || "한가게"}</title>
        <meta
          name="description"
          content={dict.hero?.subtext || "생활한복 전문점"}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="/main-hero.png"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* 👉 수직 가운데 + 왼쪽 정렬 */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-24 text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              {dict.hero?.headline}
            </h1>
            <p className="mt-4 text-lg opacity-90">{dict.hero?.subtext}</p>

            {/* 👉 버튼 3개 (pill 스타일) */}
            <div className="mt-8 flex justify-start gap-4 flex-wrap">
              <a
                href="https://smartstore.naver.com/hangagye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="rounded-full px-6 py-3">
                  {dict.hero?.ctaSmartstore}
                </Button>
              </a>

              <a
                href="https://alban915.cafe24.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="rounded-full px-6 py-3">
                  {dict.hero?.ctaCafe24}
                </Button>
              </a>

              <a href="#contact">
                <Button variant="accent" className="rounded-full px-6 py-3">
                  {dict.hero?.ctaContact}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-semibold mb-12">{dict.lookbook?.title}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition flex items-center justify-center bg-gray-50"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-auto h-[400px] object-contain transition duration-700 hover:scale-105 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        <h2 className="font-serif text-4xl md:text-5xl text-center font-semibold text-gray-900 mb-12">
          {dict.story?.title}
        </h2>

        {dict.story?.story?.map((paragraph, idx) => {
          const images = [
            "/brand1.jpg",
            "/brand2.jpg",
            "/brand3.jpg",
            "/brand4.jpg",
          ];
          const image = images[idx % images.length];

          if (idx === 0) {
            return (
              <blockquote
                key={idx}
                className="font-serif italic text-2xl md:text-3xl text-sky-600 text-center py-12"
              >
                “{paragraph}”
              </blockquote>
            );
          }

          return (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <p className="font-sans text-lg md:text-xl font-light leading-relaxed">
                  {paragraph}
                </p>
              </div>
              {image && (
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                  <img
                    src={image}
                    alt={`Brand Story ${idx + 1}`}
                    className="w-auto h-[500px] object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Store Info */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-6">{dict.store?.title}</h2>
          <p className="text-lg text-gray-600 whitespace-pre-line">
            {dict.store?.address}
          </p>
          <p className="mt-2 text-gray-600">📧 {dict.store?.email}</p>
          <p className="mt-1 text-gray-600">📱 {dict.store?.phone}</p>
          <p className="mt-1 text-gray-600">☎ {dict.store?.storePhone}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://naver.me/GA8LhINb"
            title="hanbok-store-map"
            className="w-full h-64"
            allowFullScreen
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {dict.newsletter?.title}
          </h2>
          <p className="mb-6 text-blue-100">{dict.newsletter?.subtitle}</p>
          <div className="flex gap-3 justify-center">
            <Input
              type="email"
              placeholder={dict.newsletter?.placeholder}
              className="rounded-full px-4 py-3 text-black w-64"
            />
            <Button variant="accent" className="rounded-full px-6 py-3">
              {dict.newsletter?.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20 text-center">
        <div className="text-sm text-gray-500">{dict.footer?.text}</div>
      </footer>
    </div>
  );
}
