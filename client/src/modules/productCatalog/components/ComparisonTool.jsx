import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const ComparisonTool = ({ items, onRemoveItem, onClear }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Icon
        key={index}
        name="Star"
        size={12}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-border-muted'}
      />
    ));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 lg:left-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Icon name="GitCompare" size={20} className="text-primary" />
              <h3 className="font-semibold text-text-primary">
                Compare Products ({items.length}/4)
              </h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link
                to="/product-comparison"
                className="px-4 py-2 bg-primary hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-300"
              >
                Compare All
              </Link>
              <button
                onClick={onClear}
                className="p-2 text-text-secondary hover:text-accent transition-colors duration-300"
                title="Clear comparison"
              >
                <Icon name="Trash2" size={16} />
              </button>
            </div>
          </div>

          {/* Comparison Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative bg-surface rounded-lg border border-border-muted p-3"
              >
                {/* Remove Button */}
                <button
                  onClick={() => onRemoveItem(item)}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm text-text-secondary hover:text-accent transition-colors duration-300 z-10"
                  title="Remove from comparison"
                >
                  <Icon name="X" size={14} />
                </button>

                {/* Product Image */}
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h4 className="font-medium text-text-primary text-sm line-clamp-2">
                    {item.name}
                  </h4>
                  
                  <p className="text-text-secondary text-xs">{item.brand}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-0.5">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-text-secondary">
                      {item.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-text-primary text-sm">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-text-muted line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1">
                    {item.quickSpecs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <Icon name="Check" size={10} className="text-success flex-shrink-0" />
                        <span className="text-xs text-text-secondary truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {item.badges.slice(0, 2).map((badge, index) => (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${
                          badge === 'Sustainable' || badge === 'Organic' || badge === 'Eco-Friendly' ?'bg-success-100 text-success-700'
                            : badge === 'Local Maker'|| badge === 'Local Artisan' ?'bg-secondary-100 text-secondary-700' :'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Empty Slots */}
            {[...Array(4 - items.length)].map((_, index) => (
              <div
                key={`empty-${index}`}
                className="bg-surface-hover border-2 border-dashed border-border rounded-lg p-3 flex flex-col items-center justify-center text-center min-h-[200px]"
              >
                <Icon name="Plus" size={24} className="text-text-muted mb-2" />
                <p className="text-text-muted text-sm">
                  Add product to compare
                </p>
              </div>
            ))}
          </div>

          {/* Comparison Tips */}
          {items.length > 0 && (
            <div className="mt-4 p-3 bg-primary-50 rounded-lg border border-primary-200">
              <div className="flex items-start space-x-2">
                <Icon name="Lightbulb" size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-700 font-medium mb-1">
                    Comparison Tips
                  </p>
                  <p className="text-xs text-primary-600">
                    Compare up to 4 products side-by-side. Look for sustainability badges, 
                    local maker indicators, and customer ratings to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;