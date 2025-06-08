import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const SocialProofSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const customerPhotos = [
    {
      id: 1,
      customer: "Sarah M.",
      location: "Portland, OR",
      product: "Handwoven Ceramic Bowl Set",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8e3?w=100&h=100&fit=crop",
      caption: "Perfect for my morning oatmeal ritual. The craftsmanship is incredible!",
      likes: 24,
      category: "home",
      verified: true
    },
    {
      id: 2,
      customer: "Mike R.",
      location: "Austin, TX",
      product: "Reclaimed Wood Coffee Table",
      image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      caption: "This table is the centerpiece of our living room. Love the story behind the reclaimed wood.",
      likes: 31,
      category: "furniture",
      verified: true
    },
    {
      id: 3,
      customer: "Emma L.",
      location: "Seattle, WA",
      product: "Organic Cotton Throw Blanket",
      image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      caption: "So soft and cozy! Knowing it supports fair trade makes it even better.",
      likes: 18,
      category: "textiles",
      verified: true
    },
    {
      id: 4,
      customer: "David K.",
      location: "Denver, CO",
      product: "Artisan Leather Journal",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      caption: "Beautiful craftsmanship. Using it for my daily writing practice.",
      likes: 15,
      category: "accessories",
      verified: true
    },
    {
      id: 5,
      customer: "Lisa T.",
      location: "San Francisco, CA",
      product: "Bamboo Kitchen Utensil Set",
      image: "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      caption: "Sustainable and functional. Perfect for my eco-friendly kitchen makeover!",
      likes: 22,
      category: "kitchen",
      verified: true
    },
    {
      id: 6,
      customer: "James H.",
      location: "Nashville, TN",
      product: "Hand-forged Garden Tools",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      caption: "These tools make gardening a joy. The weight and balance are perfect.",
      likes: 19,
      category: "garden",
      verified: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: customerPhotos.length },
    { id: 'home', name: 'Home', count: customerPhotos.filter(p => p.category === 'home').length },
    { id: 'furniture', name: 'Furniture', count: customerPhotos.filter(p => p.category === 'furniture').length },
    { id: 'textiles', name: 'Textiles', count: customerPhotos.filter(p => p.category === 'textiles').length },
    { id: 'kitchen', name: 'Kitchen', count: customerPhotos.filter(p => p.category === 'kitchen').length }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? customerPhotos 
    : customerPhotos.filter(photo => photo.category === selectedCategory);

  const testimonials = [
    {
      id: 1,
      name: "Rachel Green",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8e3?w=100&h=100&fit=crop",
      content: "MarketFlow has become my go-to source for unique pieces that tell a story. My clients love knowing the background of each item.",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Tom Wilson",
      role: "Sustainable Living Advocate",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content: "Finally, a marketplace that aligns with my values. Every purchase feels meaningful and supports real artisans.",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "The quality is exceptional and the stories behind each product make them conversation starters in my café.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Real Customers, Real Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            See how our products look in real homes and hear from the people who love them.
          </p>
        </div>

        {/* Customer Photos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-text-primary">Customer Photos</h3>
            
            {/* Category Filter */}
            <div className="hidden md:flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white' :'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Category Filter */}
          <div className="md:hidden mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.product}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Verified Badge */}
                  {photo.verified && (
                    <div className="absolute top-3 right-3 bg-success text-white p-1 rounded-full">
                      <Icon name="Check" size={12} />
                    </div>
                  )}

                  {/* Like Button */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Icon name="Heart" size={12} className="text-accent" />
                    <span className="text-xs font-medium">{photo.likes}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={photo.avatar}
                        alt={photo.customer}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-text-primary text-sm">{photo.customer}</span>
                        {photo.verified && (
                          <Icon name="CheckCircle" size={12} className="text-success" />
                        )}
                      </div>
                      <span className="text-xs text-text-secondary">{photo.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary mb-2 line-clamp-2">{photo.caption}</p>
                  <p className="text-xs text-primary font-medium">{photo.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            What Our Community Says
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-brand-gold fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary mb-4 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-text-primary text-sm">{testimonial.name}</span>
                      {testimonial.verified && (
                        <Icon name="CheckCircle" size={12} className="text-success" />
                      )}
                    </div>
                    <span className="text-xs text-text-secondary">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Share Your MarketFlow Story
            </h3>
            <p className="text-text-secondary mb-4">
              Tag us @MarketFlow and use #MarketFlowStory to be featured!
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 bg-white hover:bg-surface text-text-primary font-medium px-4 py-2 rounded-lg border border-border transition-colors duration-300">
                <Icon name="Instagram" size={16} />
                <span>Instagram</span>
              </button>
              <button className="flex items-center space-x-2 bg-white hover:bg-surface text-text-primary font-medium px-4 py-2 rounded-lg border border-border transition-colors duration-300">
                <Icon name="Twitter" size={16} />
                <span>Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;