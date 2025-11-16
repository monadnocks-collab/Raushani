"use client";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/#about", label: "About", icon: "👤" },
    { href: "/#skills", label: "Skills", icon: "💼" },
    { href: "/portfolio", label: "Portfolio", icon: "🎨" },
    { href: "/media-gallery", label: "Media Gallery", icon: "📸" },
    { href: "/#testimonials", label: "Testimonials", icon: "💬" },
    { href: "/#connect", label: "Contact", icon: "📧" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg sm:text-xl text-blue-700 dark:text-pink-400 tracking-tight hover:scale-105 transition-transform">
            <span className="rounded-full bg-blue-100 dark:bg-pink-900 p-1">
              <img src="/binit01.jpeg" alt="Binit Kishor" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full inline-block align-middle" />
            </span>
            <span className="sm:ml-2">Binit Kishor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <span className="text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
              {language === "en" ? "हिंदी" : "English"}
            </button>
            <a
              href="https://monadnocks.in"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold text-sm hover:scale-105 transition-transform"
            >
             ⛰️ Monadnocks
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors text-xs font-semibold text-gray-700 dark:text-gray-200"
            >
              {language === "en" ? "हिंदी" : "English"}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-4 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-gray-700 dark:bg-gray-200 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-gray-700 dark:bg-gray-200 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-neutral-700">
              <a
                href="mailto:mitulrazz@gmail.com"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold text-base hover:scale-105 transition-transform"
              >
                <span>📧</span>
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
