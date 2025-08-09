import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Starter',
      label: 'Paling Hemat',
      price: '500rb',
      period: 'Sekali Bayar',
      features: [
        '1 halaman landing',
        'Desain responsive',
        'Mobile friendly',
        'Gratis konsultasi',
        'Bisa upgrade kapan saja',
        'Support 1 bulan',
      ],
      popular: false,
      color: 'border-blue-100 bg-white',
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    {
      name: 'Business',
      label: 'Favorit UMKM',
      price: '1.2jt',
      period: 'Sekali Bayar',
      features: [
        'Multi halaman (3-5)',
        'Desain custom',
        'SEO basic',
        'Form kontak',
        'Live chat/WA',
        'Support 3 bulan',
      ],
      popular: true,
      color: 'border-blue-500 bg-blue-50',
      buttonColor: 'bg-blue-700 text-white hover:bg-blue-800',
    },
    {
      name: 'Professional',
      label: 'Paling Lengkap',
      price: '2jt',
      period: 'Sekali Bayar',
      features: [
        'Fitur lengkap',
        'Integrasi domain/email',
        'Maintenance 6 bulan',
        'Optimasi performa',
        'Support prioritas',
        'Training penggunaan',
      ],
      popular: false,
      color: 'border-purple-200 bg-purple-50',
      buttonColor: 'bg-purple-600 text-white hover:bg-purple-700',
    },
    {
      name: 'Custom',
      label: 'Sesuai Kebutuhan',
      price: 'Custom',
      period: 'Fleksibel',
      features: [
        'Terima semua jenis budget',
        'Fitur disesuaikan sepenuhnya',
        'Waktu pengerjaan fleksibel',
        'Pendekatan personal & kolaboratif',
        'Konsultasi intensif',
        'Proses transparan dan terarah',
      ],
      popular: false,
      color: 'border-green-200 bg-green-50',
      buttonColor: 'bg-green-600 text-white hover:bg-green-700',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            Paket Harga
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Pilih Paket yang Tepat</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Sesuaikan pilihan paket dengan kebutuhan dan budget bisnis Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="relative" data-aos="fade-up" data-aos-delay={i * 100}>
              <div
                className={`rounded-2xl border-2 ${pkg.color} shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col h-full`}
              >
                <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-1">
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 m-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
                      <Star className="w-4 h-4 fill-white" />
                      <span>Paling Populer</span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1 tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">{pkg.label}</p>
                    <div className="text-gray-600 text-xs mt-2">{pkg.period}</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 mt-1">
                      {pkg.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-600 text-sm">
                        <div className="p-1.5 bg-green-100 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-auto">
                    <a
                      href="#contact"
                      className={`w-full inline-block px-5 py-3 rounded-lg font-semibold text-sm transition ${pkg.buttonColor} shadow hover:shadow-lg`}
                    >
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-600 mb-4">Butuh konsultasi terlebih dahulu? Kami siap bantu.</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-white border border-blue-600 text-blue-700 font-semibold rounded-xl shadow hover:bg-blue-50 transition duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
