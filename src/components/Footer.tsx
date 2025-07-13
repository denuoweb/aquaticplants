import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { TIKTOK_HANDLE, TIKTOK_LINK } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AquaScape Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming aquariums worldwide with premium plants and expert guidance. From viral TikTok content to your living room masterpiece.
            </p>
            <div className="flex space-x-4">
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
                aria-label={`TikTok @${TIKTOK_HANDLE}`}
              >
                <svg
                  className="h-5 w-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.754.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#guides" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Plant Guides</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Gallery</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Shop Plants</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Reviews</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Plant Guarantee</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">support@aquascapepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">1-800-AQUASCAPE</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Miami, FL, USA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Plant Care Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <button className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-r-full hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">15M+</div>
              <div className="text-gray-400 text-sm">TikTok Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">50K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">99%</div>
              <div className="text-gray-400 text-sm">Survival Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} AquaScape Pro. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;