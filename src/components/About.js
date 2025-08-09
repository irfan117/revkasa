import React from 'react';
import { Palette, Award, Clock, Sparkles } from 'lucide-react';

const About = () => {
  const keunggulan = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Desain Fleksibel',
      desc: 'Desain sesuai keinginan dan brand identity Anda'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Bahan Berkualitas',
      desc: 'Menggunakan bahan premium dan tahan lama'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Proses Cepat',
      desc: 'Pengerjaan efisien dengan hasil maksimal'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Judul dan Deskripsi */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow mb-4">
            Tentang Kami
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-blue-600">AKSATOPI.ID</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gambar Workshop/Tim */}
          <div className="relative" data-aos="fade-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
              alt="Workshop AKSATOPI.ID" 
              className="relative z-10 rounded-2xl shadow-2xl border-4 border-white w-full"
            />
          </div>

          {/* Konten */}
          <div data-aos="fade-left">
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Kami adalah penyedia layanan pembuatan apparel custom terpercaya. 
                Mengutamakan kualitas, desain, dan kepuasan pelanggan.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Keunggulan Kami
            </h3>
            <div className="space-y-6">
              {keunggulan.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shadow">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
