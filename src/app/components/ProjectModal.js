"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectModal({ isOpen, onClose, projects, currentProjectIndex, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(currentProjectIndex);

  useEffect(() => {
    setCurrentIndex(currentProjectIndex);
  }, [currentProjectIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
  };

  if (!isOpen || !projects[currentIndex]) return null;

  const project = projects[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-neutral-700">
          <div>
            <span className="text-xs text-blue-600 dark:text-pink-400 font-semibold uppercase tracking-wide">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Image/Video Section */}
          <div className="lg:w-1/2 p-6">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-pink-900 dark:to-blue-900 rounded-lg relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl text-gray-400 dark:text-gray-600">📸</div>
                </div>
              )}
              {project.video && (
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
                  🎥 Video Available
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-6 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {project.stats}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Performance
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {project.year}
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Year
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Project Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.details?.overview || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {project.details?.features ? (
                  project.details.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Strategic planning and execution
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Data-driven decision making
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Performance tracking and optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Community engagement and growth
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Technologies/Tools */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details?.technologies ? (
                  project.details.technologies.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))
                ) : (
                  ["Social Media", "Analytics", "Content Creation", "Community Management"].map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Visit Link */}
            {project.url && (
              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
                >
                  <span>📺</span>
                  Visit {project.platform || "Project"}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <span>←</span>
            Previous
          </button>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {projects.length}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Next
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}