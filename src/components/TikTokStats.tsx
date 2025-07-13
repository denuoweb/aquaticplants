import React, { useEffect } from 'react';
import { TrendingUp, Eye, Heart, Share } from 'lucide-react';

const TikTokStats = () => {
  const pinnedVideoIds = [
    '7526380675844507167',
    '7526380672710247455',
    '7435925695869501496'
  ];

  useEffect(() => {
    const scriptId = 'tiktok-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      const win = window as unknown as { tiktokEmbedInit?: () => void };
      win.tiktokEmbedInit?.();
    }
  }, []);
  const stats = [
    { icon: Eye, label: 'Total Views', value: '15.2M', color: 'text-pink-500' },
    { icon: Heart, label: 'Likes', value: '2.8M', color: 'text-red-500' },
    { icon: Share, label: 'Shares', value: '456K', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Followers', value: '89K', color: 'text-green-500' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TikTok <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our viral plant care content has helped millions of aquarium enthusiasts create stunning underwater gardens
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-pink-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                From Viral Videos to Your Tank
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Watch our most popular plant transformation videos and learn the exact techniques that made us TikTok famous. Every plant we sell comes with the same care methods that created these viral moments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Step-by-step planting guides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Time-lapse growth techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Professional aquascaping tips</span>
                </div>
              </div>
            </div>
            
            <div>
              {pinnedVideoIds.map((id) => (
                <blockquote
                  key={id}
                  className="tiktok-embed"
                  data-video-id={id}
                  cite={`https://www.tiktok.com/@aquahound/video/${id}`}
                  style={{ maxWidth: '605px', minWidth: '325px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokStats;