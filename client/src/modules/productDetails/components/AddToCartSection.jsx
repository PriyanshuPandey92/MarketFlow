import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';

const AddToCartSection = ({ product, selectedVariant, quantity, onQuantityChange }) => {
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const selectedVariantData = product.variants.find(v => v.id === selectedVariant);
  const subtotal = selectedVariantData.price * quantity;
  const giftWrapCost = isGiftWrap ? 5.99 : 0;
  const expeditedCost = selectedDelivery === 'expedited' ? 15 : 0;
  const total = subtotal + giftWrapCost + expeditedCost;

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const incrementQuantity = () => {
    if (quantity < product.stockCount) {
      onQuantityChange(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="bg-surface p-6 rounded-lg border border-border-muted space-y-6">
      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-primary">Quantity</label>
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 text-text-primary font-medium min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              disabled={quantity >= product.stockCount}
              className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-text-secondary">
            {product.stockCount} available
          </span>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-text-primary">Delivery Options</label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="delivery"
              value="standard"
              checked={selectedDelivery === 'standard'}
              onChange={(e) => setSelectedDelivery(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary">Standard Delivery</span>
                <span className="text-sm text-success-600 font-medium">FREE</span>
              </div>
              <p className="text-xs text-text-secondary">{product.shipping.estimatedDays}</p>
            </div>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="delivery"
              value="expedited"
              checked={selectedDelivery === 'expedited'}
              onChange={(e) => setSelectedDelivery(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary">Expedited Delivery</span>
                <span className="text-sm text-text-primary font-medium">+$15.00</span>
              </div>
              <p className="text-xs text-text-secondary">2-3 business days</p>
            </div>
          </label>
        </div>
      </div>

      {/* Gift Wrap Option */}
      <div className="space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isGiftWrap}
            onChange={(e) => setIsGiftWrap(e.target.checked)}
            className="text-primary focus:ring-primary rounded"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text-primary">Gift Wrapping</span>
              <span className="text-sm text-text-primary font-medium">+$5.99</span>
            </div>
            <p className="text-xs text-text-secondary">Beautiful eco-friendly packaging with handwritten note</p>
          </div>
        </label>
      </div>

      {/* Price Summary */}
      <div className="space-y-2 pt-4 border-t border-border-muted">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Subtotal ({quantity} items)</span>
          <span className="text-text-primary">${subtotal.toFixed(2)}</span>
        </div>
        {giftWrapCost > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Gift Wrapping</span>
            <span className="text-text-primary">${giftWrapCost.toFixed(2)}</span>
          </div>
        )}
        {expeditedCost > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Expedited Delivery</span>
            <span className="text-text-primary">${expeditedCost.toFixed(2)}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-lg font-semibold pt-2 border-t border-border-muted">
          <span className="text-text-primary">Total</span>
          <span className="text-text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
            isAddedToCart
              ? 'bg-success-600 text-white'
              : product.inStock
              ? 'bg-brand-gold hover:bg-accent text-white shadow-sm hover:shadow-md'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAddedToCart ? (
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Check" size={20} />
              <span>Added to Cart!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Icon name="ShoppingCart" size={20} />
              <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            </div>
          )}
        </button>

        <div className="flex space-x-3">
          <button
            onClick={handleWishlist}
            className={`flex-1 py-3 px-6 rounded-lg font-medium border transition-all duration-300 ${
              isWishlisted
                ? 'border-accent bg-accent-50 text-accent-700' :'border-border text-text-primary hover:border-primary hover:text-primary'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name={isWishlisted ? "Heart" : "Heart"} size={20} className={isWishlisted ? "fill-current" : ""} />
              <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
            </div>
          </button>

          <Link
            to="/shoppingCart"
            className="flex-1 py-3 px-6 rounded-lg font-medium border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="CreditCard" size={20} />
              <span>Buy Now</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border-muted">
        <div className="flex items-center space-x-1 text-xs text-text-secondary">
          <Icon name="Shield" size={14} />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center space-x-1 text-xs text-text-secondary">
          <Icon name="Truck" size={14} />
          <span>Free Returns</span>
        </div>
        <div className="flex items-center space-x-1 text-xs text-text-secondary">
          <Icon name="Award" size={14} />
          <span>Authenticity Guaranteed</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSection;