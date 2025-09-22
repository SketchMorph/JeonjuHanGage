"use client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HanbokLanding({ lang = "ko" }) {
  const [dict, setDict] = useState(null);

  // ✅ JSON fetch (public/locales/ko.json 등에서 불러오기)
  useEffect(() => {
    async function loadDict() {
      try {
        const res = await fetch(`/locales/${lang}.json`);
        const data = await res.json();
        setDict(data);
      } catch (err) {
        console.error("❌ locale load error:", err);
      }
    }
    loadDict();
  }, [lang]);

  if (!dict) return <div className="p-10 text-center">Loading...</div>;

  // ✅ Lookbook cards
  const LOOKBOOK_ITEMS = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    img: `/lookbooks/look${i + 1}.jpg`,
    title: `Look ${i + 1}`,
  }));

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Helmet>
        <title>{dict.hero?.headline || "한가게"}</title>
        <meta name="description" content={dict.hero?.subtext || ""} />
      </Helmet>

      {/* Hero */}
      <section className="relative w-full aspect-[21/9]">
        <img
          src="/main-hero.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute left-16 bottom-20 text-white max-w-xl">
          <h1 className="text-5xl font-light leading-snug whitespace-pre-line">
            {dict.hero?.headline}
          </h1>
          <p className="mt-4 text-lg opacity-90">{dict.hero?.subtext}</p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="#lookbook">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full">
                {dict.hero?.ctaLookbook}
              </Button>
            </a>
            <a
              href="https://smartstore.naver.com/hangagye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full">
                {dict.hero?.ctaSmartstore}
              </Button>
            </a>
            <a
              href="https://alban915.cafe24.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full">
                {dict.hero?.ctaCafe24}
              </Button>
            </a>
            <a href="#contact">
              <Button className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-full">
                {dict.hero?.ctaContact}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-semibold mb-12">{dict.lookbook?.title}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        <h2 className="text-4xl font-serif text-center mb-12">
          {dict.story?.title}
        </h2>

        {dict.story?.story?.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto text-center"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Store Links */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8">Shop</h2>
        <div className="flex gap-6 justify-center flex-wrap">
          <a href="https://alban915.cafe24.com" target="_blank">
            <Button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-full">
              {dict.hero?.ctaCafe24}
            </Button>
          </a>
          <a href="https://smartstore.naver.com/hangagye" target="_blank">
            <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full">
              {dict.hero?.ctaSmartstore}
            </Button>
          </a>
        </div>
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
          <p className="mt-2 text-gray-600">📱 {dict.store?.phone}</p>
          <p className="mt-1 text-gray-600">📧 {dict.store?.email}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://naver.me/GA8LhINb"
            className="w-full h-64"
            allowFullScreen
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            <Button className="rounded-full bg-white text-blue-900 px-6 py-3 hover:bg-blue-100">
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
