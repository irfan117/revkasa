import React from 'react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-16"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 lg:space-y-8" data-aos="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Best for Your Brand
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
            Layanan pembuatan apparel custom berkualitas tinggi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Lihat Layanan
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </div>

          {/* WhatsApp Info */}
          <div className="mt-8 opacity-90">
            <p className="text-lg">
              📱 WhatsApp: <span className="font-semibold">+62 812-3456-7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
