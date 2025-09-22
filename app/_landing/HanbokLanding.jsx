"use client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";

// ✅ 실제 파일명이 소문자이므로 그대로 맞춰줌
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    title: `${dict.lookbook?.title || "Lookbook"} ${i + 1}`,
  }));

  return (
    <div>
      <Helmet>
        <title>{dict.hero?.headline || "한가게"}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold">{dict.hero?.headline}</h1>
        <p className="mt-2 text-gray-600">{dict.hero?.subtext}</p>
        <div className="mt-4 flex justify-center gap-2">
          <Link href="/lookbook">
            <Button>{dict.hero?.ctaLookbook}</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">{dict.hero?.ctaContact}</Button>
          </Link>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {LOOKBOOK_ITEMS.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-center">{item.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
