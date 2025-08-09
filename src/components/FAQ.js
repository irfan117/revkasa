import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: 'Apa bisa bikin website kalau belum punya materi?',
      a: 'Bisa! Kami bantu susun konten dan gambar sesuai kebutuhan usaha kamu.'
    },
    {
      q: 'Kalau saya gaptek gimana?',
      a: 'Tenang, semua proses kami pandu step by step tanpa istilah teknis.'
    },
    {
      q: 'Apa bisa dicicil bayarnya?',
      a: 'Bisa, tersedia opsi pembayaran bertahap sesuai kesepakatan.'
    },
    {
      q: 'Apakah bisa bantu domain dan email bisnis?',
      a: 'Tentu, kami bantu urus domain dan email bisnis kamu.'
    },
    {
      q: 'Berapa lama proses pengerjaan?',
      a: 'Biasanya 3–7 hari kerja tergantung kompleksitas website.'
    },
    {
      q: 'Apakah ada maintenance setelah website live?',
      a: 'Ya, kami menyediakan layanan maintenance dan support berkala.'
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <div className="badge badge-accent badge-lg mb-4">FAQ</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tanya Jawab Langsung
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Simulasi percakapan pelanggan dengan tim kami.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2" data-aos="fade-up" data-aos-delay={i * 80}>
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="max-w-xs sm:max-w-md bg-blue-600 text-white px-4 sm:px-5 py-3 rounded-2xl rounded-br-sm shadow-md text-sm">
                  <p>{faq.q}</p>
                </div>
              </div>
              {/* Admin Bubble */}
              <div className="flex justify-start items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="max-w-xs sm:max-w-md bg-gray-100 text-gray-800 px-4 sm:px-5 py-3 rounded-2xl rounded-bl-sm shadow text-sm">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bawah */}
        <div className="text-center mt-12 sm:mt-16" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800">
                  Masih ada yang ingin ditanyakan?
                </h3>
                <p className="text-sm text-gray-600">Kami siap bantu lewat chat langsung.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="btn btn-accent btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
