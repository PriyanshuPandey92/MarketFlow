import React from 'react';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const ProductTabs = ({ activeTab, onTabChange, product, reviews, qnaData }) => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Info' },
    { id: 'maker-story', name: 'Maker Story', icon: 'User' },
    { id: 'specifications', name: 'Specifications', icon: 'FileText' },
    { id: 'reviews', name: 'Reviews', icon: 'Star', count: product.reviewCount },
    { id: 'qa', name: 'Q&A', icon: 'MessageCircle', count: qnaData.length }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < Math.floor(rating) ? 'text-brand-gold fill-current' : 'text-gray-300'}
      />
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Product Overview</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Experience the perfect blend of traditional craftsmanship and modern functionality with this exquisite ceramic bowl set. Each piece is individually hand-thrown by master artisan Elena, using techniques passed down through generations of Italian ceramicists.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-text-primary mb-3">Key Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                    <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-text-primary mb-3">Perfect For</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Coffee" size={24} className="text-primary mx-auto mb-2" />
                  <h5 className="font-medium text-text-primary mb-1">Daily Dining</h5>
                  <p className="text-xs text-text-secondary">Everyday meals and snacks</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                  <h5 className="font-medium text-text-primary mb-1">Entertaining</h5>
                  <p className="text-xs text-text-secondary">Dinner parties and gatherings</p>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <Icon name="Gift" size={24} className="text-primary mx-auto mb-2" />
                  <h5 className="font-medium text-text-primary mb-1">Gift Giving</h5>
                  <p className="text-xs text-text-secondary">Weddings and housewarmings</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'maker-story':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={product.maker.avatar}
                alt={product.maker.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-text-primary">{product.maker.name}</h3>
                <p className="text-text-secondary">{product.maker.location}</p>
                <p className="text-sm text-text-muted">Established {product.maker.established}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="mb-4">{product.maker.story}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Craftsmanship</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>8+ hours per piece</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Flame" size={14} />
                    <span>High-fired at 1200°C</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Hand" size={14} />
                    <span>Hand-thrown & glazed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Values</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="Leaf" size={14} />
                    <span>Sustainable practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Heart" size={14} />
                    <span>Fair trade certified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>Local clay sourcing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'specifications':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text-primary">Technical Specifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-text-primary">Materials & Construction</h4>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border-muted">
                      <dt className="text-sm text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-sm text-text-primary font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-text-primary">Care Instructions</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                    <Icon name="Droplets" size={16} className="text-primary mt-0.5" />
                    <div>
                      <h5 className="text-sm font-medium text-text-primary">Cleaning</h5>
                      <p className="text-xs text-text-secondary">Dishwasher safe or hand wash with mild soap</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                    <Icon name="Thermometer" size={16} className="text-primary mt-0.5" />
                    <div>
                      <h5 className="text-sm font-medium text-text-primary">Temperature</h5>
                      <p className="text-xs text-text-secondary">Microwave safe, avoid thermal shock</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                    <Icon name="Package" size={16} className="text-primary mt-0.5" />
                    <div>
                      <h5 className="text-sm font-medium text-text-primary">Storage</h5>
                      <p className="text-xs text-text-secondary">Stack carefully with protective padding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text-primary">Customer Reviews</h3>
              <button className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300">
                Write a Review
              </button>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <div className="flex items-center space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary">{product.rating}</div>
                  <div className="flex items-center justify-center mb-1">
                    {renderStars(product.rating)}
                  </div>
                  <div className="text-sm text-text-secondary">{product.reviewCount} reviews</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center space-x-2">
                      <span className="text-sm text-text-secondary w-8">{stars}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-brand-gold h-2 rounded-full" 
                          style={{ width: `${Math.random() * 80 + 10}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-text-secondary w-8">{Math.floor(Math.random() * 50)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-border-muted pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-text-primary">{review.author}</span>
                        {review.verified && (
                          <span className="bg-success-50 text-success-700 text-xs px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-text-secondary">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-text-primary mb-2">{review.title}</h4>
                  <p className="text-text-secondary mb-3">{review.content}</p>
                  
                  {review.images && review.images.length > 0 && (
                    <div className="flex space-x-2 mb-3">
                      {review.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-300">
                      <Icon name="ThumbsUp" size={14} />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="text-text-secondary hover:text-text-primary transition-colors duration-300">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'qa':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text-primary">Questions & Answers</h3>
              <button className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300">
                Ask a Question
              </button>
            </div>

            <div className="space-y-6">
              {qnaData.map((qa) => (
                <div key={qa.id} className="bg-surface p-6 rounded-lg">
                  <div className="mb-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <Icon name="MessageCircle" size={16} className="text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium text-text-primary">{qa.question}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6 space-y-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="MessageSquare" size={16} className="text-success-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-text-secondary mb-2">{qa.answer}</p>
                        <div className="flex items-center space-x-4 text-sm text-text-muted">
                          <span>By {qa.author}</span>
                          <span>{qa.date}</span>
                          <button className="flex items-center space-x-1 hover:text-text-primary transition-colors duration-300">
                            <Icon name="ThumbsUp" size={12} />
                            <span>Helpful ({qa.helpful})</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted">
      {/* Tab Navigation */}
      <div className="border-b border-border-muted">
        <nav className="flex space-x-8 px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-300'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.name}</span>
              {tab.count && (
                <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;