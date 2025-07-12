import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

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
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
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