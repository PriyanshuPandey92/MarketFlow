import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickSearchSuggestions = [
    "Handcrafted ceramics",
    "Sustainable fashion",
    "Artisan jewelry",
    "Eco-friendly home"
  ];

  const featuredCollections = [
    {
      id: 1,
      title: "Artisan Ceramics",
      subtitle: "Handcrafted by local potters",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      count: "24 items"
    },
    {
      id: 2,
      title: "Sustainable Living",
      subtitle: "Eco-conscious choices",
      image: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?w=400&h=300&fit=crop",
      count: "156 items"
    },
    {
      id: 3,
      title: "Modern Minimalism",
      subtitle: "Clean, purposeful design",
      image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=300&fit=crop",
      count: "89 items"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary-50 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="rainbow-shine inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Personalized for you</span>
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Discover Products with
              <span className="text-primary block font-accent"> Purpose</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              Where every purchase tells a story. Connect with authentic makers, discover sustainable choices, and shop with intention.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="flex items-center rounded-xl shadow-lg overflow-hidden max-w-lg mx-auto lg:mx-0">
                <div className="flex-1 relative">
                  <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What are you looking for?"
                    className="w-full pl-12 pr-4 py-4 text-text-primary placeholder-text-muted focus:outline-none border-none bg-gray-70 focus:outline-none focus:ring-0 focus:border-none"
                  />
                </div>
                <button className="bg-primary hover:bg-primary-600 text-white px-6 py-5 font-medium transition-colors duration-300">
                  Search
                </button>
              </div>
              
              {/* Quick Suggestions */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                {quickSearchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="text-sm text-text-secondary hover:text-primary border border-border hover:border-primary px-3 py-1 rounded-full transition-colors duration-300"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/product-catalog-intelligent-browsing"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Start Exploring</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Collections */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {featuredCollections.map((collection, index) => (
                <div
                  key={collection.id}
                  className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index === 0 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''
                  }`}
                >
                  <div className="aspect-w-16 aspect-h-10 relative">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{collection.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{collection.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{collection.count}</span>
                      <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-success-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">2.5k+</div>
                  <div className="text-xs text-text-secondary">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">500+</div>
                  <div className="text-xs text-text-secondary">Verified Makers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;