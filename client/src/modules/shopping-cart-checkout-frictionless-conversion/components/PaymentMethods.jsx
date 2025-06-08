import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';

const PaymentMethods = ({ selectedPayment, setSelectedPayment }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: 'Wallet',
      description: 'Pay with your PayPal account'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      icon: 'Smartphone',
      description: 'Touch ID or Face ID'
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: 'Smartphone',
      description: 'Pay with Google'
    },
    {
      id: 'klarna',
      name: 'Klarna',
      icon: 'Calendar',
      description: 'Buy now, pay later in 4 installments'
    }
  ];

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted p-6">
      <h2 className="text-lg font-semibold text-text-primary mb-6">Payment Method</h2>
      
      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
              selectedPayment === method.id
                ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
            }`}
            onClick={() => setSelectedPayment(method.id)}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPayment === method.id
                  ? 'border-primary bg-primary' :'border-border'
              }`}>
                {selectedPayment === method.id && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <Icon name={method.icon} size={20} className="text-text-secondary" />
              <div className="flex-1">
                <div className="font-medium text-text-primary">{method.name}</div>
                <div className="text-sm text-text-secondary">{method.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card Form */}
      {selectedPayment === 'card' && (
        <div className="space-y-4 p-4 bg-background rounded-lg border border-border-muted">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-text-primary mb-1">
              Card Number *
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formatCardNumber(cardData.cardNumber)}
              onChange={(e) => handleCardInputChange({
                target: { name: 'cardNumber', value: e.target.value }
              })}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-text-primary mb-1">
                Expiry Date *
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formatExpiryDate(cardData.expiryDate)}
                onChange={(e) => handleCardInputChange({
                  target: { name: 'expiryDate', value: e.target.value }
                })}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-text-primary mb-1">
                CVV *
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="123"
                maxLength="4"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="cardholderName" className="block text-sm font-medium text-text-primary mb-1">
              Cardholder Name *
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardData.cardholderName}
              onChange={handleCardInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="saveCard"
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <label htmlFor="saveCard" className="text-sm text-text-secondary">
              Save this card for future purchases
            </label>
          </div>
        </div>
      )}

      {/* Klarna Info */}
      {selectedPayment === 'klarna' && (
        <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-warning-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-warning-800 mb-1">Pay in 4 installments</h4>
              <p className="text-sm text-warning-700">
                Split your purchase into 4 interest-free payments. First payment due at checkout.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="mt-6 p-4 bg-success-50 border border-success-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={16} className="text-success-600" />
          <span className="text-sm font-medium text-success-800">Secure Payment</span>
        </div>
        <p className="text-sm text-success-700 mt-1">
          Your payment information is encrypted and secure. We never store your card details.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;