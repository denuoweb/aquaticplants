import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [selectedPackage, setSelectedPackage] = useState('starter');
  const { addItem, openCart } = useCart();

  const products = [
    {
      id: 'jungle-val',
      name: 'Jungle Vallisneria',
      price: 12.99,
      bulkPrice: 9.99,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      features: ['Fast Growing', 'Low Maintenance', 'CO2 Optional']
    },
    {
      id: 'ludwigia',
      name: 'Ludwigia Repens',
      price: 15.99,
      bulkPrice: 12.99,
      image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 142,
      features: ['Vibrant Red Color', 'Medium Difficulty', 'CO2 Beneficial']
    }
  ];

  const packages = {
    starter: {
      name: 'Starter Package',
      plants: 5,
      price: 49.99,
      savings: 15,
      includes: ['5 Premium Plants', 'Care Guide', 'Plant Food Sample', '30-Day Guarantee']
    },
    pro: {
      name: 'Pro Aquascaper',
      plants: 12,
      price: 99.99,
      savings: 25,
      includes: ['12 Premium Plants', 'Expert Care Guide', 'Plant Food Kit', 'Live Support', '60-Day Guarantee'],
      popular: true
    },
    master: {
      name: 'Master Collection',
      plants: 25,
      price: 179.99,
      savings: 35,
      includes: ['25 Premium Plants', 'Complete Aquascaping Guide', 'Full Nutrient Kit', 'Priority Support', '90-Day Guarantee']
    }
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'individual'
    });
    openCart();
  };

  const handleAddPackageToCart = (packageKey: string) => {
    const pkg = packages[packageKey];
    addItem({
      id: packageKey,
      name: pkg.name,
      price: pkg.price,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'package',
      packageDetails: {
        plants: pkg.plants,
        includes: pkg.includes
      }
    });
    openCart();
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Plants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hand-selected aquatic plants with a 99% survival guarantee, shipped directly from our nursery
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">99% Survival Rate</h3>
            <p className="text-gray-600 text-sm">Industry-leading guarantee</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $50</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Care Package</h3>
            <p className="text-gray-600 text-sm">Included with every order</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Plant care assistance</p>
          </div>
        </div>

        {/* Package Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Choose Your Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(packages).map(([key, pkg]) => (
              <div
                key={key}
                className={`relative border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedPackage === key
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                } ${pkg.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                onClick={() => setSelectedPackage(key)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-gray-900 mb-1">${pkg.price}</div>
                  <div className="text-sm text-green-600 font-medium">Save {pkg.savings}%</div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.includes.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPackage === key
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {selectedPackage === key ? (
                    <span onClick={() => handleAddPackageToCart(key)}>Add to Cart</span>
                  ) : (
                    'Select Package'
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Plants */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Individual Plants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                      <div className="text-sm text-gray-600">Bulk: ${product.bulkPrice} each (5+)</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TikTok Shop Integration */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-pink-200">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Shop on TikTok
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Prefer shopping where you discovered us? Find our complete collection on TikTok Shop with exclusive discounts for our followers.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Visit TikTok Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;