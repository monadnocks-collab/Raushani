"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-black text-white px-4 py-12 sm:py-20">
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* Left: Headline, subheadline, CTA */}
        <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block">{t('hero.title.line1')}</span>
            <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{t('hero.title.line2')}</span>
            <span className="block">{t('hero.title.line3')}</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md">
            {t('hero.subtitle')}
          </p>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-base shadow-lg hover:scale-105 transition-transform"
          >
            {t('hero.cta')}
            <span className="inline-block text-lg">→</span>
          </a>
        </div>
        {/* Right: Photo with glowing border */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-blue-500 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <Image
              src={data.hero.image.src}
              alt={data.hero.image.alt}
              width={320}
              height={400}
              className="relative z-10 rounded-2xl object-cover w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 border-4 border-black shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 