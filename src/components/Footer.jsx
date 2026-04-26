import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const socialLinks = [{
    Icon: Facebook,
    name: 'Facebook',
    href: 'https://www.facebook.com/juno.yvo'
  }, {
    Icon: Instagram,
    name: 'Instagram',
    href: 'https://www.instagram.com/costo_coxide/'
  }];
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({
            Icon,
            name,
            href
          }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label={name}>
              <Icon className="w-5 h-5" />
            </a>)}
          </div>

          {/* Back to Top */}
          <button onClick={handleBackToTop} className="flex items-center space-x-2 text-sm tracking-wider hover:text-gray-400 transition-colors">
            <span>Back to Top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Copyright */}
          <p className="text-sm text-gray-400">© 2025 by costo coxide.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;