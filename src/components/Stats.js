import React from 'react';
import { Globe, Users, Zap, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      number: '50+', 
      label: 'Website Dibuat', 
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    { 
      number: '30+', 
      label: 'Klien Puas', 
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    { 
      number: '3-7', 
      label: 'Hari Pengerjaan', 
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    { 
      number: '4.9', 
      label: 'Rating', 
      icon: <Star className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="card bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200" 
              data-aos="fade-up" 
              data-aos-delay={i*100}
            >
              <div className="card-body p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className={`p-3 sm:p-4 rounded-2xl text-white shadow-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 