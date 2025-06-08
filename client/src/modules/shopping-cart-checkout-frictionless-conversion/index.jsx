import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';
import CartSummary from './components/CartSummary';
import CheckoutForm from './components/CheckoutForm';
import PaymentMethods from './components/PaymentMethods';
import ShippingOptions from './components/ShippingOptions';
import GiftOptions from './components/GiftOptions';
import TrustElements from './components/TrustElements';

const ShoppingCartCheckoutFrictionlessConversion = () => {
  const [currentStep, setCurrentStep] = useState('cart');
  const [isGuestCheckout, setIsGuestCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [giftOptions, setGiftOptions] = useState({
    isGift: false,
    message: '',
    packaging: 'standard'
  });

  // Mock cart data
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        name: "Handcrafted Ceramic Coffee Mug",
        maker: "Elena\'s Pottery Studio",
        price: 28.00,
        originalPrice: 32.00,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
        sustainabilityBadge: "Carbon Neutral",
        estimatedDelivery: "3-5 business days",
        inStock: true,
        attributes: {
          color: "Sage Green",
          size: "12oz"
        }
      },
      {
        id: 2,
        name: "Organic Cotton Throw Blanket",
        maker: "Sustainable Textiles Co.",
        price: 89.00,
        originalPrice: 89.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
        sustainabilityBadge: "Organic Certified",
        estimatedDelivery: "2-4 business days",
        inStock: true,
        attributes: {
          color: "Natural Beige",
          size: "50x60 inches"
        }
      },
      {
        id: 3,
        name: "Artisan Wooden Cutting Board",
        maker: "Mountain Woodworks",
        price: 65.00,
        originalPrice: 75.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
        sustainabilityBadge: "Sustainably Sourced",
        estimatedDelivery: "4-6 business days",
        inStock: true,
        attributes: {
          wood: "Walnut",
          size: "16x12 inches"
        }
      }
    ];
    setCartItems(mockCartItems);
  }, []);

  const steps = [
    { id: 'cart', name: 'Cart', icon: 'ShoppingCart' },
    { id: 'shipping', name: 'Shipping', icon: 'Truck' },
    { id: 'payment', name: 'Payment', icon: 'CreditCard' },
    { id: 'review', name: 'Review', icon: 'CheckCircle' }
  ];

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = selectedShipping === 'express' ? 15.00 : selectedShipping === 'overnight' ? 25.00 : 8.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const proceedToNextStep = () => {
    const stepOrder = ['cart', 'shipping', 'payment', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const goToPreviousStep = () => {
    const stepOrder = ['cart', 'shipping', 'payment', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  if (cartItems.length === 0 && currentStep === 'cart') {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center">
              <Icon name="ShoppingCart" size={48} className="text-text-muted" />
            </div>
            <h1 className="text-2xl font-semibold text-text-primary mb-4">Your cart is empty</h1>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Discover amazing products from passionate makers and start building your collection.
            </p>
            <Link
              to="/homepage-discovery-engine"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <Icon name="Compass" size={20} />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">
            {currentStep === 'cart' ? 'Shopping Cart' : 'Checkout'}
          </h1>
          <p className="text-text-secondary">
            {currentStep === 'cart' ?'Review your selected items and proceed to checkout' :'Complete your purchase securely and safely'
            }
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep === step.id
                    ? 'bg-primary border-primary text-white'
                    : steps.findIndex(s => s.id === currentStep) > index
                    ? 'bg-success border-success text-white' :'bg-surface border-border text-text-muted'
                }`}>
                  {steps.findIndex(s => s.id === currentStep) > index ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    <Icon name={step.icon} size={16} />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep === step.id ? 'text-primary' : 'text-text-secondary'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    steps.findIndex(s => s.id === currentStep) > index
                      ? 'bg-success' :'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 'cart' && (
              <div className="space-y-6">
                {/* Cart Items */}
                <div className="bg-surface rounded-lg border border-border-muted">
                  <div className="p-6 border-b border-border-muted">
                    <h2 className="text-lg font-semibold text-text-primary">
                      Cart Items ({cartItems.length})
                    </h2>
                  </div>
                  <div className="divide-y divide-border-muted">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-20 h-20 bg-surface-hover rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-base font-medium text-text-primary mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-text-secondary mb-2">
                                  by {item.maker}
                                </p>
                                <div className="flex items-center space-x-4 mb-2">
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-600">
                                    <Icon name="Leaf" size={12} className="mr-1" />
                                    {item.sustainabilityBadge}
                                  </span>
                                  <span className="text-sm text-text-secondary">
                                    {item.estimatedDelivery}
                                  </span>
                                </div>
                                {Object.entries(item.attributes).map(([key, value]) => (
                                  <span key={key} className="text-sm text-text-muted mr-4">
                                    {key}: {value}
                                  </span>
                                ))}
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 text-text-muted hover:text-error transition-colors duration-300"
                              >
                                <Icon name="X" size={16} />
                              </button>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary transition-all duration-300"
                                >
                                  <Icon name="Minus" size={14} />
                                </button>
                                <span className="text-base font-medium text-text-primary w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary transition-all duration-300"
                                >
                                  <Icon name="Plus" size={14} />
                                </button>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-text-primary">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                {item.originalPrice > item.price && (
                                  <div className="text-sm text-text-muted line-through">
                                    ${(item.originalPrice * item.quantity).toFixed(2)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="flex items-center justify-between">
                  <Link
                    to="/product-catalog-intelligent-browsing"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-600 font-medium transition-colors duration-300"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    <span>Continue Shopping</span>
                  </Link>
                  <button
                    onClick={proceedToNextStep}
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <span>Proceed to Checkout</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'shipping' && (
              <div className="space-y-6">
                <CheckoutForm isGuestCheckout={isGuestCheckout} setIsGuestCheckout={setIsGuestCheckout} />
                <ShippingOptions 
                  selectedShipping={selectedShipping} 
                  setSelectedShipping={setSelectedShipping} 
                />
                <GiftOptions giftOptions={giftOptions} setGiftOptions={setGiftOptions} />
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={goToPreviousStep}
                    className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-300"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    <span>Back to Cart</span>
                  </button>
                  <button
                    onClick={proceedToNextStep}
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <span>Continue to Payment</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="space-y-6">
                <PaymentMethods 
                  selectedPayment={selectedPayment} 
                  setSelectedPayment={setSelectedPayment} 
                />
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={goToPreviousStep}
                    className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-300"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    <span>Back to Shipping</span>
                  </button>
                  <button
                    onClick={proceedToNextStep}
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <span>Review Order</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 'review' && (
              <div className="space-y-6">
                {/* Order Review */}
                <div className="bg-surface rounded-lg border border-border-muted p-6">
                  <h2 className="text-lg font-semibold text-text-primary mb-4">Order Review</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 py-3 border-b border-border-muted last:border-b-0">
                        <div className="w-12 h-12 bg-surface-hover rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-text-primary">{item.name}</h4>
                          <p className="text-xs text-text-secondary">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-medium text-text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={goToPreviousStep}
                    className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-300"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    <span>Back to Payment</span>
                  </button>
                  <button className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-accent text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
                    <Icon name="Lock" size={16} />
                    <span>Place Order - ${total.toFixed(2)}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CartSummary 
              subtotal={subtotal}
              savings={savings}
              shipping={shipping}
              tax={tax}
              total={total}
              selectedShipping={selectedShipping}
            />
            <TrustElements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCheckoutFrictionlessConversion;