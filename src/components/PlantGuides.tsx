import React, { useState } from 'react';
import { Droplets, Thermometer, Sun, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const PlantGuides = () => {
  const [activeTab, setActiveTab] = useState('jungle-val');

  const plants = {
    'jungle-val': {
      name: 'Jungle Vallisneria',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A fast-growing background plant perfect for creating lush underwater forests',
      requirements: {
        light: 'Low to Medium',
        temp: '22-28°C (72-82°F)',
        ph: '6.0-8.0',
        hardness: 'Soft to Hard'
      },
      care: [
        'Plant in nutrient-rich substrate',
        'Trim runners regularly to control spread',
        'Provide root tabs for optimal growth',
        'Allow 2-3 inches between plants'
      ],
      issues: [
        { problem: 'Yellow leaves', solution: 'Check lighting and add iron supplements' },
        { problem: 'Slow growth', solution: 'Increase lighting duration and add CO2 if possible' },
        { problem: 'Melting leaves', solution: 'Normal adaptation process, remove dead leaves' }
      ]
    },
    'ludwigia': {
      name: 'Ludwigia Repens',
      image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Stunning red-stemmed plant that adds vibrant color to any aquascape',
      requirements: {
        light: 'Medium to High',
        temp: '20-26°C (68-79°F)',
        ph: '6.0-7.5',
        hardness: 'Soft to Medium'
      },
      care: [
        'Plant stems 2-3 inches apart',
        'Trim tops regularly to promote bushiness',
        'High lighting enhances red coloration',
        'Benefits from CO2 supplementation'
      ],
      issues: [
        { problem: 'Loss of red color', solution: 'Increase lighting intensity and duration' },
        { problem: 'Leggy growth', solution: 'Trim frequently and increase light' },
        { problem: 'Bottom leaves dropping', solution: 'Normal growth pattern, trim and replant tops' }
      ]
    }
  };

  const currentPlant = plants[activeTab];

  return (
    <section id="guides" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Plant <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Guides</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of aquatic gardening with our comprehensive care guides, perfected through millions of TikTok views
          </p>
        </div>

        {/* Plant Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            {Object.entries(plants).map(([key, plant]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {plant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plant Guide Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Plant Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={currentPlant.image}
                alt={currentPlant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentPlant.name}</h3>
                <p className="text-blue-100">{currentPlant.description}</p>
              </div>
            </div>

            {/* Plant Details */}
            <div className="p-8 lg:p-12">
              {/* Requirements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                  Tank Requirements
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <div>
                      <div className="text-sm text-gray-500">Lighting</div>
                      <div className="font-semibold text-gray-900">{currentPlant.requirements.light}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <div>
                      <div className="text-sm text-gray-500">Temperature</div>
                      <div className="font-semibold text-gray-900">{currentPlant.requirements.temp}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="text-sm text-gray-500">pH Range</div>
                      <div className="font-semibold text-gray-900">{currentPlant.requirements.ph}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                    <div>
                      <div className="text-sm text-gray-500">Water Hardness</div>
                      <div className="font-semibold text-gray-900">{currentPlant.requirements.hardness}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Instructions */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Care Instructions
                </h4>
                <div className="space-y-3">
                  {currentPlant.care.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Issues */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                  Troubleshooting
                </h4>
                <div className="space-y-4">
                  {currentPlant.issues.map((issue, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-900 mb-1">{issue.problem}</div>
                      <div className="text-gray-600 text-sm">{issue.solution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantGuides;