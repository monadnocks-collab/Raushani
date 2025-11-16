"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function AboutSection() {
  const { t } = useLanguage();
  const aboutData = data.about;
  return (
    <section className="w-full max-w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header*/}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{aboutData.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {aboutData.subtitle}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-700 overflow-hidden">
          {/* Image Section */}
          <div className="relative h-64 sm:h-80 bg-gradient-to-br from-pink-900/20 to-blue-900/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-xl opacity-30 animate-pulse"></div>
                <Image
                  src={aboutData.image.src}
                  alt={aboutData.image.alt}
                  width={200}
                  height={200}
                  className="relative z-10 rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 border-4 border-white shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Main Story */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {aboutData.mainStory.intro.split(" ")[0]} <span className="text-pink-400">{aboutData.mainStory.intro.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {aboutData.mainStory.paragraph1}
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {aboutData.mainStory.paragraph2}
                </p>
              </div>

              {/* Right Column - Career Highlights */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-pink-400 flex items-center gap-2">
                  <span>🚀</span>
                  Career Highlights
                </h4>
                <div className="space-y-4">
                  {aboutData.careerHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-neutral-800 rounded-lg border border-neutral-700">
                      <span className="text-pink-400 text-lg">{highlight.icon}</span>
                      <div>
                        <h5 className="font-semibold text-white">{highlight.title}</h5>
                        <p className="text-gray-300 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
