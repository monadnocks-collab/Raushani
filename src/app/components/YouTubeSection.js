"use client";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function YouTubeSection() {
  const { t } = useLanguage();
  const youtubeData = data.youtube;
  
  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="youtube">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{youtubeData.title}</span>
          </h2>
        </div>
        {/* Featured Videos */}
        <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700">
          <div className="aspect-video bg-gradient-to-br from-red-900/20 to-gray-900/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-white mb-2">{youtubeData.featuredVideo.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {youtubeData.featuredVideo.description}
              </p>
              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-400">
                <span>👁️ {youtubeData.featuredVideo.views} views</span>
                <span>⏱️ {youtubeData.featuredVideo.duration}</span>
                <span>📅 {youtubeData.featuredVideo.publishedAt}</span>
              </div>
              <a
                href={youtubeData.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                <span>{youtubeData.cta.icon}</span>
                {youtubeData.cta.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 