import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const ProductCard = ({ 
  product, 
  viewMode = 'grid', 
  isInComparison, 
  onComparisonToggle, 
  canAddToComparison 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleComparisonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInComparison || canAddToComparison) {
      onComparisonToggle(product);
    }
  };

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
        size={14}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-border-muted'}
      />
    ));
  };

  if (viewMode === 'list') {
    return (
      <Link
        to={`/product-detail-decision-support?id=${product.id}`}
        className="block bg-surface rounded-lg border border-border-muted hover:border-primary-300 hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <div className="flex">
          {/* Image */}
          <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden">
            <Image
              src={imageError ? '/assets/images/no_image.png' : product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-text-secondary text-sm mb-2">{product.brand}</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.badges.slice(0, 3).map((badge, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        badge === 'Sustainable' || badge === 'Organic' || badge === 'Eco-Friendly' ?'bg-success-100 text-success-700'
                          : badge === 'Local Maker'|| badge === 'Local Artisan' ?'bg-secondary-100 text-secondary-700'
                          : badge === 'Handmade'|| badge === 'Hand-Knitted' ?'bg-primary-100 text-primary-700' :'bg-surface-hover text-text-secondary'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                  {product.description}
                </p>

                {/* Quick Specs */}
                <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                  {product.quickSpecs.slice(0, 3).map((spec, index) => (
                    <span key={index} className="flex items-center space-x-1">
                      <Icon name="Check" size={12} className="text-success" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Actions */}
              <div className="ml-6 text-right">
                <div className="mb-4">
                  <div className="flex items-center justify-end space-x-2">
                    <span className="text-xl font-bold text-text-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-text-muted line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm text-accent font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-end space-x-1 mb-4">
                  <div className="flex space-x-0.5">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-text-secondary">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlistToggle}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      isWishlisted
                        ? 'bg-accent text-white border-accent' :'border-border text-text-secondary hover:text-accent hover:border-accent'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Icon name="Heart" size={16} className={isWishlisted ? 'fill-current' : ''} />
                  </button>
                  
                  <button
                    onClick={handleComparisonClick}
                    disabled={!isInComparison && !canAddToComparison}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      isInComparison
                        ? 'bg-primary text-white border-primary'
                        : canAddToComparison
                        ? 'border-border text-text-secondary hover:text-primary hover:border-primary' :'border-border text-text-muted cursor-not-allowed opacity-50'
                    }`}
                    title={isInComparison ? 'Remove from comparison' : 'Add to comparison'}
                  >
                    <Icon name="GitCompare" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link
      to={`/product-detail-decision-support?id=${product.id}`}
      className="group block bg-surface rounded-lg border border-border-muted hover:border-primary-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={imageError ? '/assets/images/no_image.png' : (isHovered && product.hoverImage ? product.hoverImage : product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
        
        {/* Overlay Actions */}
        <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isWishlisted
                ? 'bg-accent text-white' :'bg-white/90 text-text-secondary hover:text-accent'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Icon name="Heart" size={16} className={isWishlisted ? 'fill-current' : ''} />
          </button>
          
          <button
            onClick={handleComparisonClick}
            disabled={!isInComparison && !canAddToComparison}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isInComparison
                ? 'bg-primary text-white'
                : canAddToComparison
                ? 'bg-white/90 text-text-secondary hover:text-primary' :'bg-white/50 text-text-muted cursor-not-allowed'
            }`}
            title={isInComparison ? 'Remove from comparison' : 'Add to comparison'}
          >
            <Icon name="GitCompare" size={16} />
          </button>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.originalPrice && (
            <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
              Sale
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button className="w-full bg-white/95 backdrop-blur-sm text-text-primary font-medium py-2 rounded-lg hover:bg-white transition-colors duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.badges.slice(0, 2).map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                badge === 'Sustainable' || badge === 'Organic' || badge === 'Eco-Friendly' ?'bg-success-100 text-success-700'
                  : badge === 'Local Maker'|| badge === 'Local Artisan' ?'bg-secondary-100 text-secondary-700'
                  : badge === 'Handmade'|| badge === 'Hand-Knitted' ?'bg-primary-100 text-primary-700' :'bg-surface-hover text-text-secondary'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Brand */}
        <p className="text-text-secondary text-sm mb-1">{product.brand}</p>

        {/* Product Name */}
        <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex space-x-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-text-secondary">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-xs text-accent font-medium">
                Save {formatPrice(product.originalPrice - product.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;