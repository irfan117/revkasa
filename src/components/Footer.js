import React from 'react';
import {
  Instagram,
  Mail,
  Phone,
  Globe,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">AKSATOPI.ID</h3>
          <p className="text-blue-100 mb-6">
            Penyedia layanan apparel custom berkualitas tinggi untuk kebutuhan brand Anda
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://instagram.com/aksatopi.id"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300"
            title="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-800 hover:bg-green-500 transition-colors duration-300"
            title="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="text-blue-100">
          <p>&copy; 2025 AKSATOPI.ID. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
