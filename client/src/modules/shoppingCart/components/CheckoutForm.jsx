import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';

const CheckoutForm = ({ isGuestCheckout, setIsGuestCheckout }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-text-primary">Contact & Shipping Information</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsGuestCheckout(false)}
            className={`text-sm font-medium transition-colors duration-300 ${
              !isGuestCheckout ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Sign In
          </button>
          <span className="text-text-muted">|</span>
          <button
            onClick={() => setIsGuestCheckout(true)}
            className={`text-sm font-medium transition-colors duration-300 ${
              isGuestCheckout ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Guest Checkout
          </button>
        </div>
      </div>

      {!isGuestCheckout && (
        <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Create an account for faster checkout</span>
          </div>
          <p className="text-sm text-text-secondary">
            Get order tracking, personalized recommendations, and exclusive member benefits.
          </p>
        </div>
      )}

      <form className="space-y-4">
        {/* Contact Information */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="your@email.com"
            required
          />
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-text-primary mb-1">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="123 Main Street"
            required
          />
        </div>

        <div>
          <label htmlFor="apartment" className="block text-sm font-medium text-text-primary mb-1">
            Apartment, suite, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Apt 4B"
          />
        </div>

        {/* City, State, ZIP */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-1">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-text-primary mb-1">
              State *
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="IL">Illinois</option>
            </select>
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-text-primary mb-1">
              ZIP Code *
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="12345"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(555) 123-4567"
          />
          <p className="text-xs text-text-muted mt-1">
            For delivery updates and order notifications
          </p>
        </div>

        {/* Save Information */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="saveInfo"
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
          />
          <label htmlFor="saveInfo" className="text-sm text-text-secondary">
            Save this information for next time
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;