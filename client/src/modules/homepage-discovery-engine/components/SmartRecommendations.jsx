import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const SmartRecommendations = () => {
  const [activeReason, setActiveReason] = useState(0);

  const recommendationReasons = [
    {
      id: 1,
      title: "Because you viewed sustainable home goods",
      description: "Based on your interest in eco-friendly products",
      icon: "Leaf",
      color: "success"
    },
    {
      id: 2,
      title: "Popular with customers like you",
      description: "Loved by people with similar tastes",
      icon: "Users",
      color: "primary"
    },
    {
      id: 3,
      title: "From makers you follow",
      description: "New arrivals from your favorite artisans",
      icon: "Heart",
      color: "accent"
    },
    {
      id: 4,
      title: "Trending in your area",
      description: "Popular choices in Portland, OR",
      icon: "TrendingUp",
      color: "brand-gold"
    }
  ];

  const recommendationSets = [
    {
      reason: 0,
      products: [
        {
          id: 1,
          name: "Recycled Glass Vase Collection",
          maker: "EcoGlass Studio",
          price: 45,
          originalPrice: 60,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
          rating: 4.8,
          reviews: 156,
          tags: ["Recycled", "Handblown"],
          confidence: 95
        },
        {
          id: 2,
          name: "Bamboo Storage Baskets",
          maker: "Sustainable Living Co.",
          price: 32,
          image: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?w=300&h=300&fit=crop",
          rating: 4.7,
          reviews: 89,
          tags: ["Bamboo", "Sustainable"],
          confidence: 92
        },
        {
          id: 3,
          name: "Organic Cotton Placemats",
          maker: "Natural Home Textiles",
          price: 28,
          originalPrice: 35,
          image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=300&h=300&fit=crop",
          rating: 4.6,
          reviews: 74,
          tags: ["Organic", "Fair Trade"],
          confidence: 88
        }
      ]
    },
    {
      reason: 1,
      products: [
        {
          id: 4,
          name: "Artisan Coffee Mug Set",
          maker: "Clay & Fire Pottery",
          price: 52,
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
          rating: 4.9,
          reviews: 203,
          tags: ["Handcrafted", "Ceramic"],
          confidence: 97
        },
        {
          id: 5,
          name: "Wooden Cutting Board",
          maker: "Heritage Woodworks",
          price: 75,
          originalPrice: 95,
          image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=300&h=300&fit=crop",
          rating: 4.8,
          reviews: 167,
          tags: ["Hardwood", "Food Safe"],
          confidence: 94
        },
        {
          id: 6,
          name: "Hand-woven Table Runner",
          maker: "Textile Traditions",
          price: 38,
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
          rating: 4.7,
          reviews: 112,
          tags: ["Handwoven", "Natural Fiber"],
          confidence: 91
        }
      ]
    },
    {
      reason: 2,
      products: [
        {
          id: 7,
          name: "New Ceramic Planters",
          maker: "Elena Rodriguez Pottery",
          price: 42,
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
          rating: 4.9,
          reviews: 89,
          tags: ["New Arrival", "Ceramic"],
          confidence: 96,
          isNew: true
        },
        {
          id: 8,
          name: "Reclaimed Wood Shelves",
          maker: "Urban Grain Furniture",
          price: 125,
          originalPrice: 150,
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
          rating: 4.8,
          reviews: 145,
          tags: ["Reclaimed", "Wall Mount"],
          confidence: 93,
          isNew: true
        },
        {
          id: 9,
          name: "Organic Linen Napkins",
          maker: "Sustainable Threads Co.",
          price: 24,
          image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=300&h=300&fit=crop",
          rating: 4.7,
          reviews: 67,
          tags: ["Organic", "Linen"],
          confidence: 89,
          isNew: true
        }
      ]
    },
    {
      reason: 3,
      products: [
        {
          id: 10,
          name: "Local Honey & Beeswax Candles",
          maker: "Portland Bee Co.",
          price: 18,
          image: "https://images.unsplash.com/photo-1602874801006-e26c4c4e5b5b?w=300&h=300&fit=crop",
          rating: 4.9,
          reviews: 234,
          tags: ["Local", "Natural"],
          confidence: 98,
          isTrending: true
        },
        {
          id: 11,
          name: "Pacific Northwest Art Print",
          maker: "Mountain View Studio",
          price: 35,
          originalPrice: 45,
          image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
          rating: 4.8,
          reviews: 156,
          tags: ["Local Artist", "Print"],
          confidence: 95,
          isTrending: true
        },
        {
          id: 12,
          name: "Handmade Soap Collection",
          maker: "Rose City Soaps",
          price: 22,
          image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
          rating: 4.7,
          reviews: 189,
          tags: ["Handmade", "Natural"],
          confidence: 92,
          isTrending: true
        }
      ]
    }
  ];

  const currentProducts = recommendationSets[activeReason]?.products || [];
  const currentReason = recommendationReasons[activeReason];

  const getColorClasses = (color) => {
    const colorMap = {
      success: "bg-success-100 text-success-600",
      primary: "bg-primary-100 text-primary-600",
      accent: "bg-accent-100 text-accent-600",
      "brand-gold": "bg-yellow-100 text-yellow-600"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Recommended Just for You
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our AI-powered discovery engine learns from your preferences to suggest products 
            you'll love. Here's why we think these are perfect for you.
          </p>
        </div>

        {/* Recommendation Reasons Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {recommendationReasons.map((reason, index) => (
            <button
              key={reason.id}
              onClick={() => setActiveReason(index)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeReason === index
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-text-secondary hover:text-text-primary hover:bg-surface border border-border'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                activeReason === index ? 'bg-white/20' : getColorClasses(reason.color)
              }`}>
                <Icon 
                  name={reason.icon} 
                  size={14} 
                  className={activeReason === index ? 'text-white' : ''} 
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{reason.title}</div>
                <div className={`text-xs ${
                  activeReason === index ? 'text-white/80' : 'text-text-muted'
                }`}>
                  {reason.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Reason Display */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm border border-border">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(currentReason.color)}`}>
              <Icon name={currentReason.icon} size={16} />
            </div>
            <div>
              <div className="font-semibold text-text-primary">{currentReason.title}</div>
              <div className="text-sm text-text-secondary">{currentReason.description}</div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
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
                </div>

                {/* Confidence Score */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-success-600">{product.confidence}% match</span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                    <Icon name="Heart" size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-300">
                    <Icon name="ShoppingCart" size={16} />
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
                  {product.tags.map((tag, index) => (
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
          ))}
        </div>

        {/* Personalization Controls */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Help Us Improve Your Recommendations
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            The more you interact with products, the better our suggestions become. 
            Rate products, save favorites, and tell us what you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Customize Preferences
            </button>
            <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-surface text-text-primary font-medium px-6 py-3 rounded-lg border border-border transition-colors duration-300">
              <Icon name="ThumbsUp" size={16} />
              <span>Rate These Suggestions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRecommendations;