import React, { useState } from 'react';
import { ChevronRight, Play, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('growth-stages');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = {
    'growth-stages': {
      title: 'Growth Stages',
      items: [
        { type: 'image', src: 'https://iili.io/FWnJBGs.md.png', alt: 'Growth Stages of Jungle Vallisneria' },
        { type: 'image', src: 'https://iili.io/FWxYCfn.md.png', alt: 'Growth Stages of Ludwigia Repens' }
      ]
    },
    'aquascaping': {
      title: 'Aquascaping Designs',
      items: [
        { type: 'image', src: 'https://iili.io/FWzGkfp.png', alt: 'Dutch style aquascape' },
        { type: 'image', src: 'https://iili.io/FWzGNWv.png', alt: 'Nature style tank' },
        { type: 'image', src: 'https://iili.io/FWzGv0N.png', alt: 'Iwagumi style setup' },
        { type: 'image', src: 'https://iili.io/FWzGOsR.png', alt: 'Aquascaping tutorial' }
      ]
    },
    'transformations': {
      title: 'Before & After',
      items: [
        { type: 'image', src: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Transformation 1 - Before' },
        { type: 'image', src: 'https://images.pexels.com/photos/1374285/pexels-photo-1374285.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Transformation 1 - After' },
        { type: 'image', src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Transformation 2 - Before' },
        { type: 'video', src: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Complete tank makeover' }
      ]
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visual <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness stunning transformations and growth stages that have captivated millions on TikTok
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{item.alt}</p>
                </div>
              </div>

              {/* Play button for videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              )}

              {/* Zoom icon for images */}
              {item.type === 'image' && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;