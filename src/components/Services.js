import React from 'react';
import { Crown, Shirt, UserCheck, Shield, Footprints, ShoppingBag, Sparkles, Building2, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Topi Custom',
      desc: 'Topi berkualitas tinggi dengan desain sesuai brand Anda. Berbagai model dan bahan tersedia.',
      color: 'bg-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Jaket Custom',
      desc: 'Jaket custom dengan kualitas terbaik untuk kebutuhan tim, komunitas, atau perusahaan.',
      color: 'bg-purple-500'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Kemeja PDH Custom',
      desc: 'Kemeja PDH profesional dengan standar kualitas tinggi untuk kebutuhan instansi.',
      color: 'bg-green-500'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Rompi Custom',
      desc: 'Rompi custom untuk berbagai kebutuhan dengan desain dan fungsi yang optimal.',
      color: 'bg-orange-500'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Kaos Custom',
      desc: 'Kaos custom dengan kualitas combed dan desain sesuai keinginan Anda.',
      color: 'bg-red-500'
    },
    {
      icon: <Footprints className="w-8 h-8" />,
      title: 'Kaos Kaki Custom',
      desc: 'Kaos kaki custom dengan berbagai motif dan warna sesuai kebutuhan brand.',
      color: 'bg-indigo-500'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Sepatu Custom',
      desc: 'Sepatu custom dengan desain unik dan kualitas yang terjamin untuk berbagai aktivitas.',
      color: 'bg-teal-500'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Aksesoris Custom',
      desc: 'Berbagai aksesoris custom seperti tas, dompet, dan merchandise lainnya.',
      color: 'bg-pink-500'
    },
  ];

  const customers = [
    {
      name: 'PT Telkom Indonesia',
      type: 'BUMN',
      logo: '🏢',
      testimonial: 'Kualitas kemeja PDH sangat memuaskan dan sesuai standar perusahaan'
    },
    {
      name: 'Polda Metro Jaya',
      type: 'Instansi Pemerintah',
      logo: '🚔',
      testimonial: 'Rompi dan aksesoris custom berkualitas tinggi untuk kebutuhan operasional'
    },
    {
      name: 'Universitas Indonesia',
      type: 'Perguruan Tinggi',
      logo: '🎓',
      testimonial: 'Jaket almamater dengan desain eksklusif dan bahan premium'
    },
    {
      name: 'Bank Mandiri',
      type: 'Perbankan',
      logo: '🏦',
      testimonial: 'Seragam kerja dan merchandise berkualitas untuk seluruh cabang'
    },
    {
      name: 'Garuda Indonesia',
      type: 'BUMN',
      logo: '✈️',
      testimonial: 'Seragam karyawan dan aksesoris dengan standar internasional'
    },
    {
      name: 'Kementerian BUMN',
      type: 'Instansi Pemerintah',
      logo: '🏛️',
      testimonial: 'Apparel resmi untuk acara dan kegiatan kementerian'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full shadow-sm mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Layanan Apparel Custom Terlengkap
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Dari topi hingga sepatu, kami menyediakan layanan pembuatan apparel custom berkualitas tinggi 
            dengan desain sesuai kebutuhan brand Anda.
          </p>
        </div>

        {/* Service Cards - shadcn/ui style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-3 rounded-lg text-white ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Satisfied Customers Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-4 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full shadow-sm mb-4">
              Pelanggan Puas
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Dipercaya Instansi & Perusahaan Terkemuka
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lebih dari 100+ instansi pemerintah dan perusahaan besar telah mempercayakan kebutuhan apparel custom mereka kepada kami.
            </p>
          </div>

          {/* Customer Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{customer.logo}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{customer.name}</h4>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
                      {customer.type}
                    </span>
                    <div className="flex items-start space-x-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">"{customer.testimonial}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Konsultasi Kebutuhan Instansi Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
