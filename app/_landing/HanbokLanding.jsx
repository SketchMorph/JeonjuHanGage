"use client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function HanbokLanding({ lang = "ko" }) {
  const [dict, setDict] = useState(null);

  // ✅ 다국어 JSON fetch
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
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/main-hero.jpg"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute left-12 bottom-20 text-white max-w-xl">
          <h1 className="text-5xl font-serif font-light leading-snug whitespace-pre-line drop-shadow-lg">
            {dict.hero?.headline}
          </h1>
          <p className="mt-4 text-lg opacity-90">{dict.hero?.subtext}</p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="#lookbook">
              <Button variant="primary">{dict.hero?.ctaLookbook}</Button>
            </a>
            <a
              href="https://smartstore.naver.com/hangagye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">{dict.hero?.ctaSmartstore}</Button>
            </a>
            <a
              href="https://alban915.cafe24.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">{dict.hero?.ctaCafe24}</Button>
            </a>
            <a href="#contact">
              <Button variant="accent">{dict.hero?.ctaContact}</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
          {dict.lookbook?.title}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-md bg-gray-100"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full aspect-[3/4] object-cover transition duration-700 hover:scale-105 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-sky-50 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <h2 className="text-4xl font-serif text-center text-gray-800">
            {dict.story?.title}
          </h2>

          {dict.story?.story?.map((paragraph, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                {paragraph}
              </p>
              <img
                src={`/brand/brand${(idx % 3) + 1}.jpg`}
                alt={`brand story ${idx + 1}`}
                className="rounded-xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Store Links */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-3xl font-serif text-gray-800 mb-8">Shop</h2>
        <div className="flex gap-6 justify-center flex-wrap">
          <a href="https://alban915.cafe24.com" target="_blank">
            <Button variant="primary">{dict.hero?.ctaCafe24}</Button>
          </a>
          <a href="https://smartstore.naver.com/hangagye" target="_blank">
            <Button variant="secondary">{dict.hero?.ctaSmartstore}</Button>
          </a>
        </div>
      </section>

      {/* Store Info */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-serif text-gray-800 mb-6">
            {dict.store?.title}
          </h2>
          <p className="text-lg text-gray-600 whitespace-pre-line">
            {dict.store?.address}
          </p>
          <p className="mt-2 text-gray-600">📱 {dict.store?.phone}</p>
          <p className="mt-1 text-gray-600">📧 {dict.store?.email}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
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
          <h2 className="text-3xl font-serif mb-4">
            {dict.newsletter?.title}
          </h2>
          <p className="mb-6 text-blue-100">{dict.newsletter?.subtitle}</p>
          <div className="flex gap-3 justify-center">
            <Input
              type="email"
              placeholder={dict.newsletter?.placeholder}
              className="rounded-full px-4 py-3 text-black w-64"
            />
            <Button variant="accent">{dict.newsletter?.button}</Button>
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
