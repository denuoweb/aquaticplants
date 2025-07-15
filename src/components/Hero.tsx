import React from 'react';
import { Play, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-green-800 to-teal-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">16M+ TikTok Views</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Aquarium
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Premium aquatic plants with expert care guides. From a guy in a fishroom to your living room masterpiece.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a 
              href="#shop"
              className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Shop Premium Plants</span>
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors duration-300">
                <Play className="h-4 w-4 fill-current" />
              </div>
            </a>
            
            <a 
              href="#guides"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>View Plant Guides</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15M+</div>
              <div className="text-blue-200 mt-2">TikTok Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">285K+</div>
              <div className="text-blue-200 mt-2">TikTok Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-blue-200 mt-2">Plant Survival Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;