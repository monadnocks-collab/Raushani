"use client";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function GallerySection() {
  const { t } = useLanguage();
  const galleryData = data.gallery;
  const portfolioData = data.portfolio;
  
  // Show only first 3 projects from portfolio data
  const featuredProjects = portfolioData.projects.slice(0, 3);
  
  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{galleryData.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {galleryData.subtitle}
          </p>
        </div>

        {/* Portfolio Grid - Show only 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700 hover:border-pink-500 transition-colors">
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-pink-900/20 to-blue-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '192px' }}
                />
                <div className="absolute inset-0 bg-black/10 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-pink-900/30 text-pink-400 text-xs rounded">{project.category}</span>
                  </div>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={galleryData.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
          >
            {galleryData.cta.text}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 