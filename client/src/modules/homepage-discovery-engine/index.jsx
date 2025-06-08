import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';

import HeroSection from './components/HeroSection';
import TrendingCarousel from './components/TrendingCarousel';
import DiscoverByPurpose from './components/DiscoverByPurpose';
import FeaturedMakers from './components/FeaturedMakers';
import SocialProofSection from './components/SocialProofSection';
import SmartRecommendations from './components/SmartRecommendations';

const HomepageDiscoveryEngine = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for discovery engine
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Personalizing your discovery experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Discovery Engine */}
      <HeroSection />

      {/* Trending Now Carousel */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                Trending Now
              </h2>
              <p className="text-text-secondary">
                Curated products with authentic maker stories
              </p>
            </div>
            <Link
              to="/product-catalog-intelligent-browsing"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-primary-600 font-medium transition-colors duration-300"
            >
              <span>View All</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <TrendingCarousel />
        </div>
      </section>

      {/* Discover by Purpose */}
      <DiscoverByPurpose />

      {/* Featured Makers Spotlight */}
      <FeaturedMakers />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Smart Recommendations */}
      <SmartRecommendations />

      {/* Newsletter & Community */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Join the MarketFlow Community
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Get early access to new makers, exclusive collections, and stories behind the products you love.
            </p>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex rounded-lg overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-0 focus:outline-none focus:ring-0 text-text-primary"
              />
              <button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span className="text-sm">50k+ members</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageDiscoveryEngine;