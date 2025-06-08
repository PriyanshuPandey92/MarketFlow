import React from 'react';
import Icon from 'shared/ui/AppIcon';

const GiftOptions = ({ giftOptions, setGiftOptions }) => {
  const packagingOptions = [
    {
      id: 'standard',
      name: 'Standard Packaging',
      price: 0,
      description: 'Eco-friendly packaging with MarketFlow branding'
    },
    {
      id: 'gift-box',
      name: 'Premium Gift Box',
      price: 8.00,
      description: 'Beautiful reusable box with ribbon and gift card'
    },
    {
      id: 'luxury',
      name: 'Luxury Gift Set',
      price: 15.00,
      description: 'Premium box with tissue paper, ribbon, and personalized note card'
    }
  ];

  const handleGiftToggle = () => {
    setGiftOptions(prev => ({
      ...prev,
      isGift: !prev.isGift
    }));
  };

  const handlePackagingChange = (packagingId) => {
    setGiftOptions(prev => ({
      ...prev,
      packaging: packagingId
    }));
  };

  const handleMessageChange = (e) => {
    setGiftOptions(prev => ({
      ...prev,
      message: e.target.value
    }));
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-primary">Gift Options</h2>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isGift"
            checked={giftOptions.isGift}
            onChange={handleGiftToggle}
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
          />
          <label htmlFor="isGift" className="text-sm font-medium text-text-primary">
            This is a gift
          </label>
        </div>
      </div>

      {giftOptions.isGift && (
        <div className="space-y-6">
          {/* Gift Message */}
          <div>
            <label htmlFor="giftMessage" className="block text-sm font-medium text-text-primary mb-2">
              Gift Message (optional)
            </label>
            <textarea
              id="giftMessage"
              value={giftOptions.message}
              onChange={handleMessageChange}
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Write a personal message for the recipient..."
              maxLength={250}
            />
            <div className="text-xs text-text-muted mt-1">
              {giftOptions.message.length}/250 characters
            </div>
          </div>

          {/* Packaging Options */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Gift Packaging</h3>
            <div className="space-y-3">
              {packagingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    giftOptions.packaging === option.id
                      ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
                  }`}
                  onClick={() => handlePackagingChange(option.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        giftOptions.packaging === option.id
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {giftOptions.packaging === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">{option.name}</div>
                        <div className="text-sm text-text-secondary">{option.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-text-primary">
                        {option.price === 0 ? 'Free' : `+$${option.price.toFixed(2)}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gift Features */}
          <div className="p-4 bg-background rounded-lg border border-border-muted">
            <h4 className="text-sm font-semibold text-text-primary mb-3">Gift Features Included</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="EyeOff" size={14} className="text-success-600" />
                <span>Prices hidden from recipient</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="RotateCcw" size={14} className="text-success-600" />
                <span>Extended 60-day return window</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Mail" size={14} className="text-success-600" />
                <span>Gift receipt included</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Bell" size={14} className="text-success-600" />
                <span>Delivery notifications sent to you</span>
              </div>
            </div>
          </div>

          {/* Delivery Options for Gifts */}
          <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <Icon name="Gift" size={16} className="text-accent-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-accent-800 mb-1">Gift Delivery Options</h4>
                <p className="text-sm text-accent-700 mb-2">
                  Choose when and how your gift is delivered to create the perfect surprise.
                </p>
                <div className="space-y-1 text-sm text-accent-700">
                  <div>• Schedule delivery for a specific date</div>
                  <div>• Send directly to recipient's address</div>
                  <div>• Add surprise delivery instructions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!giftOptions.isGift && (
        <div className="text-center py-8">
          <Icon name="Gift" size={48} className="text-text-muted mx-auto mb-4" />
          <p className="text-text-secondary">
            Turn this order into a gift with beautiful packaging and personal touches.
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftOptions;