import React from 'react';
import Icon from 'shared/ui/AppIcon';

const TrustIndicators = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'Authenticity Guaranteed',
      description: 'Every product is verified authentic',
      color: 'text-success-600'
    },
    {
      icon: 'RotateCcw',
      title: '30-Day Returns',
      description: 'Free returns within 30 days',
      color: 'text-primary'
    },
    {
      icon: 'Truck',
      title: 'Free Shipping',
      description: 'On orders over $75',
      color: 'text-secondary'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Expert customer service',
      color: 'text-accent'
    }
  ];

  const securityBadges = [
    {
      name: 'SSL Secure',
      icon: 'Lock',
      description: '256-bit encryption'
    },
    {
      name: 'Verified Seller',
      icon: 'CheckCircle',
      description: 'Authenticated maker'
    },
    {
      name: 'Safe Payment',
      icon: 'CreditCard',
      description: 'Secure checkout'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trust Features */}
      <div className="grid grid-cols-2 gap-3">
        {trustFeatures.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg border border-border-muted">
            <Icon name={feature.icon} size={20} className={feature.color} />
            <div>
              <h4 className="text-sm font-medium text-text-primary">{feature.title}</h4>
              <p className="text-xs text-text-secondary">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Security Badges */}
      <div className="bg-surface p-4 rounded-lg border border-border-muted">
        <h4 className="text-sm font-semibold text-text-primary mb-3">Security & Trust</h4>
        <div className="flex items-center justify-between">
          {securityBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-1">
                <Icon name={badge.icon} size={16} className="text-primary" />
              </div>
              <div className="text-xs font-medium text-text-primary">{badge.name}</div>
              <div className="text-xs text-text-muted">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Promise */}
      <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
        <div className="flex items-start space-x-3">
          <Icon name="Award" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-primary-800 mb-1">MarketFlow Promise</h4>
            <p className="text-xs text-primary-700">
              We stand behind every product. If you're not completely satisfied, we'll make it right with our hassle-free return policy and dedicated customer support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="text-center">
        <p className="text-sm text-text-secondary mb-2">Questions about this product?</p>
        <button className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300 flex items-center space-x-1 mx-auto">
          <Icon name="MessageCircle" size={16} />
          <span>Contact Support</span>
        </button>
      </div>
    </div>
  );
};

export default TrustIndicators;