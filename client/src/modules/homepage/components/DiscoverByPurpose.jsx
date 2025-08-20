import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const DiscoverByPurpose = () => {
  const purposeCategories = [
    {
      id: 1,
      title: "Sustainably Made",
      description: "Products crafted with environmental consciousness and renewable materials",
      image: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?w=600&h=400&fit=crop",
      icon: "Leaf",
      color: "success",
      stats: "2,400+ products",
      features: ["Carbon Neutral", "Eco Materials", "Minimal Packaging"]
    },
    {
      id: 2,
      title: "Small Batch Crafted",
      description: "Limited edition pieces made by independent artisans with attention to detail",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      icon: "Hammer",
      color: "secondary",
      stats: "1,800+ products",
      features: ["Handmade", "Limited Edition", "Artisan Made"]
    },
    {
      id: 3,
      title: "Innovation Leaders",
      description: "Cutting-edge products that push boundaries and solve real problems",
      image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=600&h=400&fit=crop",
      icon: "Lightbulb",
      color: "accent",
      stats: "950+ products",
      features: ["Tech Forward", "Problem Solving", "Future Ready"]
    },
    {
      id: 4,
      title: "Heritage Crafts",
      description: "Traditional techniques preserved and passed down through generations",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      icon: "Crown",
      color: "brand-gold",
      stats: "1,200+ products",
      features: ["Traditional", "Time-Honored", "Cultural Heritage"]
    },
    {
      id: 5,
      title: "Local Makers",
      description: "Support your community by discovering talented creators in your area",
      image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=600&h=400&fit=crop",
      icon: "MapPin",
      color: "primary",
      stats: "3,100+ products",
      features: ["Community Made", "Local Impact", "Nearby Creators"]
    },
    {
      id: 6,
      title: "Social Impact",
      description: "Products that give back and create positive change in communities",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      icon: "Heart",
      color: "accent",
      stats: "850+ products",
      features: ["Gives Back", "Community Support", "Social Good"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: "bg-success-100 text-success-600 border-success-200",
      secondary: "bg-secondary-100 text-secondary-600 border-secondary-200",
      accent: "bg-accent-100 text-accent-600 border-accent-200",
      "brand-gold": "bg-yellow-100 text-yellow-600 border-yellow-200",
      primary: "bg-primary-100 text-primary-600 border-primary-200"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Discover by Purpose
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Shop with intention. Every category represents values that matter—from sustainability 
            to craftsmanship, innovation to heritage.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {purposeCategories.map((category) => (
            <Link
              key={category.id}
              to="/productCatalog"
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <Icon name={category.icon} size={20} />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-text-primary">{category.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary group-hover:text-primary-600 transition-colors duration-300">
                      Explore Collection
                    </span>
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="text-primary group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our discovery engine learns from your preferences. The more you explore, 
              the better we get at showing you products that align with your values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/productCatalog"
                className="btn-primary"
              >
                Browse All Products
              </Link>
              <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-surface text-text-primary font-medium px-6 py-3 rounded-lg border border-border transition-colors duration-300">
                <Icon name="Settings" size={16} />
                <span>Customize Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverByPurpose;