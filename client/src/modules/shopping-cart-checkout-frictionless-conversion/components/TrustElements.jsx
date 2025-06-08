import React from 'react';
import Icon from 'shared/ui/AppIcon';

const TrustElements = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'Secure Checkout',
      description: '256-bit SSL encryption protects your data'
    },
    {
      icon: 'RotateCcw',
      title: '30-Day Returns',
      description: 'Easy returns with free return shipping'
    },
    {
      icon: 'Award',
      title: 'Authenticity Guarantee',
      description: 'All products verified by our quality team'
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description: 'Expert help whenever you need it'
    }
  ];

  const securityBadges = [
    { name: 'SSL Secured', icon: 'Lock' },
    { name: 'PCI Compliant', icon: 'CreditCard' },
    { name: 'Verified Secure', icon: 'ShieldCheck' }
  ];

  return (
    <div className="space-y-6">
      {/* Trust Features */}
      <div className="bg-surface rounded-lg border border-border-muted p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Why Shop with MarketFlow?</h3>
        <div className="space-y-4">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature.icon} size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-1">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Badges */}
      <div className="bg-surface rounded-lg border border-border-muted p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-3">Security & Trust</h3>
        <div className="grid grid-cols-1 gap-3">
          {securityBadges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 bg-success-50 rounded-lg border border-success-200">
              <Icon name={badge.icon} size={16} className="text-success-600" />
              <span className="text-sm font-medium text-success-800">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Support */}
      <div className="bg-surface rounded-lg border border-border-muted p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-3">Need Help?</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center space-x-2 p-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-300">
            <Icon name="MessageCircle" size={16} />
            <span className="text-sm font-medium">Live Chat Support</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 p-3 bg-surface-hover hover:bg-border text-text-primary rounded-lg border border-border transition-colors duration-300">
            <Icon name="Phone" size={16} />
            <span className="text-sm font-medium">Call (555) 123-4567</span>
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-text-muted">
            Available Monday-Friday, 9 AM - 8 PM EST
          </p>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="bg-success-50 border border-success-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="CheckCircle" size={16} className="text-success-600" />
          <span className="text-sm font-semibold text-success-800">100% Satisfaction Guarantee</span>
        </div>
        <p className="text-sm text-success-700">
          Not happy with your purchase? We'll make it right with a full refund or exchange.
        </p>
      </div>

      {/* Contact Information */}
      <div className="text-center text-xs text-text-muted space-y-1">
        <p>Questions about your order?</p>
        <p>Email: support@marketflow.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </div>
  );
};

export default TrustElements;