"use client";
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HanbokLanding() {
  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>우리 옷상점 | 한스타일 밝은 상점</title>
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
            우리 옷상점{"\n"}한스타일 밝은 상점
          </h1>
        </div>
      </section>

      {/* Lookbook */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">룩북</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={`/lookbooks/look${i + 1}.jpg`}
                alt={`Look ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        <h2 className="text-4xl font-serif text-center mb-12">브랜드 스토리</h2>

        <blockquote className="italic text-2xl text-sky-700 text-center">
          “옷에는 사람이 담깁니다.”
        </blockquote>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg leading-relaxed">
            우리가 만드는 옷은 단순히 입는 것을 넘어, 입는 이와 보는 이 모두에게,
            자기 정체성을 드러내는 시작이 됩니다.
          </p>
          <img
            src="/brand/brand1.jpg"
            alt="Brand 1"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/brand/brand2.jpg"
            alt="Brand 2"
            className="rounded-2xl shadow-lg"
          />
          <p className="text-lg leading-relaxed">
            그 시작은 곧, 나를 표현하는 가장 아름다운 방식이고 그리고 그 빛깔들이 모여,
            결국에는 개인과 공동체가 함께 누리는 문화로 이어집니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg leading-relaxed">
            한가게는 빠르게 소비되는 패스트 패션이 아닌, 자본에 물든 비슷한 옷들이 아닌,
            각 나라와 개인이 지닌 고유한 빛깔과 이야기를 담은 옷을 만듭니다.
          </p>
          <img
            src="/brand/brand3.jpg"
            alt="Brand 3"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Store Links */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8">쇼핑몰 바로가기</h2>
        <div className="flex gap-6 justify-center flex-wrap">
          <a href="https://alban915.cafe24.com" target="_blank">
            <Button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-full">
              자사몰
            </Button>
          </a>
          <a href="https://smartstore.naver.com/hangagye" target="_blank">
            <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full">
              스마트스토어
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
          <h2 className="text-3xl font-semibold mb-6">매장 정보</h2>
          <p className="text-lg text-gray-600">
            전북 전주시 완산구 태평3길 70 중앙상가 2층 206, 207호
          </p>
          <p className="mt-2 text-gray-600">📱 010-7309-2547</p>
          <p className="mt-1 text-gray-600">📧 efun36@naver.com</p>
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
          <h2 className="text-3xl font-semibold mb-4">구독하기</h2>
          <p className="mb-6 text-blue-100">
            새로운 소식과 이벤트를 가장 먼저 받아보세요.
          </p>
          <div className="flex gap-3 justify-center">
            <Input
              type="email"
              placeholder="이메일 입력"
              className="rounded-full px-4 py-3 text-black w-64"
            />
            <Button className="rounded-full bg-white text-blue-900 px-6 py-3 hover:bg-blue-100">
              구독
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20 text-center">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} 우리 옷상점. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
