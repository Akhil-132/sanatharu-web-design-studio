
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Classic Putharekulu',
    'Premium Putharekulu',
    'Mini Putharekulu',
    'Dry Fruits Putharekulu'
  ];

  return (
    <footer className="bg-warm-900 text-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Sanatharuchulu
            </h3>
            <p className="text-warm-200 mb-6 leading-relaxed">
              Crafting authentic Putharekulu with love and tradition since 1985. 
              Every bite tells a story of heritage and excellence.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-golden-600 rounded-lg hover:bg-golden-700 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div className="p-2 bg-golden-600 rounded-lg hover:bg-golden-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-warm-200 hover:text-golden-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-50">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-warm-200">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-50">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-golden-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-200 text-sm">
                    123 Heritage Street<br />
                    Atreyapuram, East Godavari<br />
                    Andhra Pradesh - 533401
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden-400 flex-shrink-0" />
                <div>
                  <p className="text-warm-200 text-sm">+91 98765 43210</p>
                  <p className="text-warm-200 text-sm">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden-400 flex-shrink-0" />
                <div>
                  <p className="text-warm-200 text-sm">orders@sanatharuchulu.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-warm-200 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>by Sanatharuchulu Family</span>
            </div>
            
            <div className="text-warm-200 text-sm">
              <span>© 2024 Sanatharuchulu. All rights reserved.</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-warm-300 text-xs">
              Traditional recipes • Premium quality • Authentic taste since 1985
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
