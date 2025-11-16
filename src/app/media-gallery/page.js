"use client";
import { useState } from "react";
import Link from "next/link";
import data from "../data.json";

export default function MediaGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = data.mediaGallery;
  
  const filteredImages = selectedCategory === "All" 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{galleryData.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {galleryData.subtitle}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 dark:bg-pink-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-pink-900 hover:text-blue-700 dark:hover:text-pink-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700 cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {image.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 dark:text-pink-400 font-semibold">
                    {image.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {image.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-2">No images found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No images available for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full max-h-full overflow-auto">
            <div className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Modal Content */}
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-blue-100 dark:bg-pink-900 text-blue-800 dark:text-pink-200 px-2 py-1 rounded">
                    {selectedImage.category}
                  </span>
                  <span>{selectedImage.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 