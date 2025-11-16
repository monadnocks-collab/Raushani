"use client";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function AchievementsSection() {
  const { t } = useLanguage();
  const achievementsData = data.achievements;
  
  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="achievements">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{achievementsData.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {achievementsData.subtitle}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.items.map((achievement) => (
            <div key={achievement.id} className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{achievement.icon}</span>
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {achievement.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-pink-400 font-medium">{achievement.category}</div>
                <div className="text-xs text-gray-400">{achievement.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 rounded-full border border-neutral-700">
            <span className="text-2xl">{achievementsData.summary.icon}</span>
            <span className="text-white font-semibold">{achievementsData.summary.text}</span>
          </div>
        </div>
      </div>
    </section>
  );
} 