"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "../components/ProjectModal";
import data from "../data.json";

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const portfolioData = data.portfolio;
  const projects = portfolioData.projects;
  const categories = portfolioData.categories;

  const handleViewDetails = (projectIndex) => {
    setCurrentProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (newIndex) => {
    setCurrentProjectIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-pink-600 dark:to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-white/80 hover:text-white transition">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{portfolioData.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {portfolioData.subtitle}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-pink-900 hover:text-blue-700 dark:hover:text-pink-400 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700">
              {/* Project Image/Video */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-pink-900 dark:to-blue-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl text-gray-400 dark:text-gray-600">📸</div>
                  </div>
                )}
                {project.video && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs z-10">
                    🎥 Video
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-600 dark:text-pink-400 font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {project.stats}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium flex items-center gap-1"
                        >
                          <span>📺</span>
                          Visit
                        </a>
                      )}
                      <button 
                        onClick={() => handleViewDetails(projects.indexOf(project))}
                        className="text-blue-600 dark:text-pink-400 hover:underline text-sm font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 dark:bg-neutral-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">{portfolioData.cta.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {portfolioData.cta.subtitle}
          </p>
          <Link 
            href={portfolioData.cta.buttonLink}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 dark:bg-pink-600 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-pink-700 transition-colors"
          >
            {portfolioData.cta.buttonText}
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projects={projects}
        currentProjectIndex={currentProjectIndex}
        onNavigate={handleNavigate}
      />
    </div>
  );
} 