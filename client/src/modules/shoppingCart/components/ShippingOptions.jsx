import React from 'react';
import Icon from 'shared/ui/AppIcon';

const ShippingOptions = ({ selectedShipping, setSelectedShipping }) => {
  const shippingOptions = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 8.00,
      time: '5-7 business days',
      description: 'Reliable delivery with tracking',
      icon: 'Package',
      carbonNeutral: true
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: 15.00,
      time: '2-3 business days',
      description: 'Faster delivery for urgent orders',
      icon: 'Zap',
      carbonNeutral: true
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      price: 25.00,
      time: '1 business day',
      description: 'Next day delivery by 6 PM',
      icon: 'Clock',
      carbonNeutral: false
    }
  ];

  return (
    <div className="bg-surface rounded-lg border border-border-muted p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-4">Shipping Options</h2>
      
      <div className="space-y-3">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
              selectedShipping === option.id
                ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
            }`}
            onClick={() => setSelectedShipping(option.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedShipping === option.id
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedShipping === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <Icon name={option.icon} size={20} className="text-text-secondary" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-text-primary">{option.name}</span>
                    {option.carbonNeutral && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-600">
                        <Icon name="Leaf" size={10} className="mr-1" />
                        Carbon Neutral
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-text-secondary">{option.description}</div>
                  <div className="text-sm font-medium text-primary">{option.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-text-primary">
                  {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Information */}
      <div className="mt-6 p-4 bg-background rounded-lg border border-border-muted">
        <h3 className="text-sm font-semibold text-text-primary mb-2">Delivery Information</h3>
        <div className="space-y-2 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={14} />
            <span>Delivery to your specified address</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Bell" size={14} />
            <span>SMS and email notifications for tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={14} />
            <span>Package protection included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={14} />
            <span>Estimated delivery dates may vary during peak seasons</span>
          </div>
        </div>
      </div>

      {/* Carbon Neutral Info */}
      <div className="mt-4 p-3 bg-success-50 border border-success-200 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Leaf" size={16} className="text-success-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-success-800 mb-1">Carbon Neutral Shipping</h4>
            <p className="text-sm text-success-700">
              We offset 100% of shipping emissions through verified carbon reduction projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingOptions;