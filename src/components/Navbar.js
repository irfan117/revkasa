import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'services', label: 'Layanan' },
    { id: 'portfolio', label: 'Galeri' },
    { id: 'about', label: 'Tentang' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-blue-600">AKSATOPI.ID</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id)}
                className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition text-sm font-medium"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full text-left text-gray-700 hover:text-blue-600 transition py-3 px-3 rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
