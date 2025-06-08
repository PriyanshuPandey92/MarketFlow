import React from 'react';

import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const ProductInfo = ({ product, selectedVariant, onVariantChange }) => {
  const selectedVariantData = product.variants.find(v => v.id === selectedVariant);

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-text-secondary bg-primary-50 px-2 py-1 rounded-full">
            {product.subtitle}
          </span>
          {product.maker.verified && (
            <div className="flex items-center space-x-1 text-sm text-success-600">
              <Icon name="CheckCircle" size={16} />
              <span>Verified Maker</span>
            </div>
          )}
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
          {product.name}
        </h1>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-brand-gold fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-text-primary ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-text-secondary">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-text-primary">
            ${selectedVariantData.price}
          </span>
          {product.originalPrice > selectedVariantData.price && (
            <>
              <span className="text-xl text-text-muted line-through">
                ${product.originalPrice}
              </span>
              <span className="bg-accent text-white px-2 py-1 rounded-full text-sm font-medium">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-success-600 font-medium">
          Free shipping on orders over $75
        </p>
      </div>

      {/* Maker Information */}
      <div className="bg-surface p-4 rounded-lg border border-border-muted">
        <div className="flex items-center space-x-3 mb-3">
          <Image
            src={product.maker.avatar}
            alt={product.maker.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-text-primary">{product.maker.name}</h3>
            <p className="text-sm text-text-secondary">
              {product.maker.location} • Est. {product.maker.established}
            </p>
          </div>
          <button className="ml-auto text-primary hover:text-primary-600 transition-colors duration-300">
            <Icon name="ExternalLink" size={16} />
          </button>
        </div>
        <p className="text-sm text-text-secondary line-clamp-3">
          {product.maker.story}
        </p>
      </div>

      {/* Variant Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary">Choose Your Set</h3>
        <div className="grid grid-cols-1 gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => onVariantChange(variant.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                selectedVariant === variant.id
                  ? 'border-primary bg-primary-50' :'border-border-muted hover:border-primary-300 bg-surface'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">{variant.name}</div>
                  <div className="text-sm text-text-secondary">{variant.description}</div>
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  ${variant.price}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary">Key Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sustainability Badges */}
      <div className="space-y-3">
        <h3 className="font-semibold text-text-primary">Sustainability</h3>
        <div className="flex flex-wrap gap-2">
          {product.sustainability.carbonNeutral && (
            <div className="flex items-center space-x-1 bg-success-50 text-success-700 px-3 py-1 rounded-full text-sm">
              <Icon name="Leaf" size={14} />
              <span>Carbon Neutral</span>
            </div>
          )}
          {product.sustainability.localSourcing && (
            <div className="flex items-center space-x-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
              <Icon name="MapPin" size={14} />
              <span>Local Sourcing</span>
            </div>
          )}
          {product.sustainability.fairTrade && (
            <div className="flex items-center space-x-1 bg-secondary-50 text-secondary-700 px-3 py-1 rounded-full text-sm">
              <Icon name="Heart" size={14} />
              <span>Fair Trade</span>
            </div>
          )}
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <Icon 
          name="Package" 
          size={16} 
          className={product.inStock ? 'text-success-600' : 'text-error-600'} 
        />
        <span className={`text-sm font-medium ${
          product.inStock ? 'text-success-600' : 'text-error-600'
        }`}>
          {product.inStock 
            ? `In Stock (${product.stockCount} available)` 
            : 'Out of Stock'
          }
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;