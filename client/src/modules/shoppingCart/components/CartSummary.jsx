import React from 'react';
import Icon from 'shared/ui/AppIcon';

const CartSummary = ({ subtotal, savings, shipping, tax, total, selectedShipping }) => {
  const shippingOptions = {
    standard: { name: 'Standard Shipping', time: '5-7 business days' },
    express: { name: 'Express Shipping', time: '2-3 business days' },
    overnight: { name: 'Overnight Shipping', time: '1 business day' }
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-text-primary mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Subtotal</span>
          <span className="text-text-primary font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        {savings > 0 && (
          <div className="flex items-center justify-between text-success-600">
            <span className="flex items-center space-x-1">
              <Icon name="Tag" size={14} />
              <span>Savings</span>
            </span>
            <span className="font-medium">-${savings.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-text-secondary">Shipping</span>
            <span className="text-xs text-text-muted">
              {shippingOptions[selectedShipping]?.name} ({shippingOptions[selectedShipping]?.time})
            </span>
          </div>
          <span className="text-text-primary font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Tax</span>
          <span className="text-text-primary font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-border-muted pt-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-text-primary">Total</span>
            <span className="text-lg font-semibold text-text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Promo code"
            className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="px-4 py-2 bg-surface-hover hover:bg-border text-text-primary text-sm font-medium rounded-lg border border-border transition-colors duration-300">
            Apply
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-success-600">
          <Icon name="Shield" size={14} />
          <span>Purchase Protection Included</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-success-600">
          <Icon name="RotateCcw" size={14} />
          <span>30-Day Easy Returns</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-success-600">
          <Icon name="Leaf" size={14} />
          <span>Carbon Neutral Shipping Available</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;