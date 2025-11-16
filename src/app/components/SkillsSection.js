"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{t('skills.title')}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Digital Marketing */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📈</span>
              <h3 className="text-xl font-bold text-white">Digital Marketing</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Social media strategy, content marketing, email campaigns, PPC advertising, and conversion optimization.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✍️</span>
              <h3 className="text-xl font-bold text-white">Content Creation</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Blog writing, video scripts, social media posts, email newsletters, and brand storytelling.
            </p>
          </div>

          {/* Community Building */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">👥</span>
              <h3 className="text-xl font-bold text-white">Community Building</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Audience engagement, community management, event planning, and relationship building.
            </p>
          </div>

          {/* Analytics & Data */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl font-bold text-white">Analytics & Data</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Performance tracking, data analysis, ROI measurement, and strategic insights.
            </p>
          </div>

          {/* Brand Strategy */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-bold text-white">Brand Strategy</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Brand positioning, messaging frameworks, visual identity, and market research.
            </p>
          </div>

          {/* Campaign Management */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold text-white">Campaign Management</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              End-to-end campaign execution, project coordination, and performance optimization.
            </p>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "youtube",
              "instagram",
              "facebook",
              "linkedin",
              "twitter",
              "pinterest",
            ].map((tool, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-4 text-center border border-neutral-700 hover:border-pink-500 transition-colors">
                <span className="text-sm font-medium text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 