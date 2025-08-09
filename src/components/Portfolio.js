import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  
  const categories = ['Semua', 'Topi', 'Kaos', 'Jaket', 'Kemeja', 'Rompi', 'Aksesoris'];
  
  const portfolios = [
    {
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
      name: 'Topi Baseball Custom',
      category: 'Topi',
      desc: 'Topi baseball dengan bordir logo perusahaan'
    },
    {
      img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80',
      name: 'Kaos Polo Tim',
      category: 'Kaos',
      desc: 'Kaos polo custom untuk tim olahraga'
    },
    {
      img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80',
      name: 'Jaket Hoodie Custom',
      category: 'Jaket',
      desc: 'Jaket hoodie dengan desain komunitas'
    },
    {
      img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80',
      name: 'Kemeja PDH Instansi',
      category: 'Kemeja',
      desc: 'Kemeja PDH untuk kebutuhan instansi pemerintah'
    },
    {
      img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=400&q=80',
      name: 'Rompi Safety',
      category: 'Rompi',
      desc: 'Rompi safety dengan reflektif strip'
    },
    {
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
      name: 'Tas Ransel Custom',
      category: 'Aksesoris',
      desc: 'Tas ransel dengan logo dan desain khusus'
    },
  ];

  const filteredPortfolios = activeFilter === 'Semua' 
    ? portfolios 
    : portfolios.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            Galeri Produk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Hasil Karya Terbaik Kami
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Lihat berbagai produk apparel custom berkualitas tinggi yang telah kami buat untuk klien
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Lihat Detail</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Pesan Produk Custom
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
