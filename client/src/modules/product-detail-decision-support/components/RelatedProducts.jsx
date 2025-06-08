import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const RelatedProducts = ({ products }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={i < Math.floor(rating) ? 'text-brand-gold fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">You Might Also Like</h2>
        <Link
          to="/product-catalog-intelligent-browsing"
          className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300 flex items-center space-x-1"
        >
          <span>View All</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-surface rounded-lg border border-border-muted overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300">
                  <Icon name="Heart" size={16} />
                </button>
                <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-300">
                  <Icon name="Eye" size={16} />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">{product.maker}</p>
                <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs text-text-secondary ml-1">({product.rating})</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-text-primary">${product.price}</span>
                <button className="bg-primary hover:bg-primary-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-1">
                  <Icon name="Plus" size={14} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Complementary Collections */}
      <div className="bg-surface p-6 rounded-lg border border-border-muted">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Complete Your Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border-muted">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Icon name="Coffee" size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary">Matching Mugs</h4>
              <p className="text-sm text-text-secondary">Complete the set</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border-muted">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <Icon name="Utensils" size={20} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary">Serving Pieces</h4>
              <p className="text-sm text-text-secondary">Platters & bowls</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border-muted">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
              <Icon name="Gift" size={20} className="text-accent" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary">Gift Sets</h4>
              <p className="text-sm text-text-secondary">Ready to give</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;