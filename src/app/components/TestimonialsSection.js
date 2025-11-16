"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.json";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  
  // Use testimonials data from data.json
  const testimonials = data.testimonials.items;

  return (
    <section className="w-full py-12 sm:py-20 px-4 mx-auto bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">{t('testimonials.title')}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 hover:border-pink-500 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-sm opacity-30"></div>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="relative z-10 rounded-full object-cover w-12 h-12 border-2 border-neutral-700"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 