import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const TrendingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingProducts = [
    {
      id: 1,
      name: "Handwoven Ceramic Bowl Set",
      maker: "Elena Rodriguez Pottery",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      story: "Each bowl is hand-thrown on Elena\'s pottery wheel in her Santa Fe studio, using locally sourced clay.",
      tags: ["Handcrafted", "Local Artisan", "Sustainable"],
      rating: 4.9,
      reviews: 127,
      isNew: true
    },
    {
      id: 2,
      name: "Organic Cotton Throw Blanket",
      maker: "Sustainable Threads Co.",
      price: 145,
      image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=400&h=400&fit=crop",
      story: "Woven from 100% organic cotton by a women\'s cooperative in Peru, supporting fair trade practices.",
      tags: ["Organic", "Fair Trade", "Women-Made"],
      rating: 4.8,
      reviews: 89,
      isTrending: true
    },
    {
      id: 3,
      name: "Reclaimed Wood Coffee Table",
      maker: "Urban Grain Furniture",
      price: 320,
      originalPrice: 450,
      image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=400&fit=crop",
      story: "Crafted from reclaimed barn wood, each piece tells the story of American farmland heritage.",
      tags: ["Reclaimed", "Handmade", "Heritage"],
      rating: 4.9,
      reviews: 203,
      isLimited: true
    },
    {
      id: 4,
      name: "Artisan Leather Journal",
      maker: "Heritage Bindery",
      price: 65,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      story: "Hand-bound using traditional techniques passed down through three generations of bookbinders.",
      tags: ["Heritage Craft", "Leather", "Traditional"],
      rating: 4.7,
      reviews: 156,
      isNew: false
    },
    {
      id: 5,
      name: "Bamboo Kitchen Utensil Set",
      maker: "EcoKitchen Collective",
      price: 42,
      originalPrice: 55,
      image: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?w=400&h=400&fit=crop",
      story: "Sustainably harvested bamboo shaped into beautiful, functional kitchen tools by skilled artisans.",
      tags: ["Sustainable", "Eco-Friendly", "Kitchen"],
      rating: 4.6,
      reviews: 94,
      isTrending: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, trendingProducts.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, trendingProducts.length - 2)) % Math.max(1, trendingProducts.length - 2));
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white hover:bg-surface shadow-lg rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300"
          disabled={currentSlide === 0}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white hover:bg-surface shadow-lg rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300"
          disabled={currentSlide >= trendingProducts.length - 3}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
        >
          {trendingProducts.map((product) => (
            <div key={product.id} className="w-1/3 flex-shrink-0 px-3">
              <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    {product.isTrending && (
                      <span className="bg-brand-gold text-white text-xs font-medium px-2 py-1 rounded-full">
                        Trending
                      </span>
                    )}
                    {product.isLimited && (
                      <span className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded-full">
                        Limited
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                      <Icon name="Heart" size={16} />
                    </button>
                    <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-300">
                      <Icon name="Eye" size={16} />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded-full">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs text-primary bg-primary-50 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-text-primary mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Maker */}
                  <p className="text-sm text-text-secondary mb-2">{product.maker}</p>

                  {/* Story Preview */}
                  <p className="text-xs text-text-muted mb-3 line-clamp-2">{product.story}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className={i < Math.floor(product.rating) ? "text-brand-gold fill-current" : "text-border"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-text-secondary">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-text-muted line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Link
                      to="/product-detail-decision-support"
                      className="bg-primary hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.max(1, trendingProducts.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingCarousel;