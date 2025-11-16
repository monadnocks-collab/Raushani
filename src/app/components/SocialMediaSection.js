"use client";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function SocialMediaSection() {
  const { t } = useLanguage();
  const socialMediaData = data.socialMedia;
  
  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="social">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{socialMediaData.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {socialMediaData.subtitle}
          </p>
        </div>

        {/* Social Media Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialMediaData.platforms.map((platform) => (
            <div key={platform.id} className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{platform.icon}</span>
                <h3 className="text-xl font-bold text-white">{platform.name}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {platform.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-pink-400 font-semibold">{platform.handle}</span>
                <span className="text-xs text-gray-400">{platform.followers} followers</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-800 rounded-lg p-6 text-center border border-neutral-700">
            <div className="text-3xl font-bold text-pink-400 mb-2">25K+</div>
            <div className="text-gray-300 text-sm">Total Followers</div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-6 text-center border border-neutral-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Posts Created</div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-6 text-center border border-neutral-700">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Engagement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
} 