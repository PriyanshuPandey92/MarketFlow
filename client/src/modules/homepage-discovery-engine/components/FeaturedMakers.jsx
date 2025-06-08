import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const FeaturedMakers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const featuredMakers = [
    {
      id: 1,
      name: "Elena Rodriguez",
      business: "Elena Rodriguez Pottery",
      location: "Santa Fe, New Mexico",
      specialty: "Handcrafted Ceramics",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8e3?w=400&h=400&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      story: `Elena has been working with clay for over 15 years, developing her unique style that blends traditional Southwestern techniques with contemporary design. Each piece is hand-thrown on her pottery wheel using locally sourced clay from the high desert of New Mexico.

Her studio, nestled in the foothills outside Santa Fe, serves as both workspace and inspiration. The natural light filtering through large windows illuminates her work as she shapes each bowl, mug, and vase with intention and care.`,
      achievements: ["Featured in Pottery Monthly", "Santa Fe Arts Award 2023", "Sustainable Craft Certification"],
      products: 24,
      followers: 1200,
      rating: 4.9,
      tags: ["Sustainable", "Traditional Craft", "Local Artisan"],
      socialProof: "Over 500 happy customers worldwide"
    },
    {
      id: 2,
      name: "Marcus Chen",
      business: "Urban Grain Furniture",
      location: "Portland, Oregon",
      specialty: "Reclaimed Wood Furniture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      coverImage: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=800&h=400&fit=crop",
      story: `Marcus started Urban Grain Furniture with a mission to give new life to reclaimed wood from old barns, factories, and homes across the Pacific Northwest. His background in sustainable architecture informs every piece he creates.

Working from a converted warehouse in Portland's industrial district, Marcus combines traditional woodworking techniques with modern design sensibilities. Each piece of furniture tells the story of the wood's previous life while serving a beautiful new purpose.`,
      achievements: ["Portland Design Week Winner", "Sustainable Business Certification", "Featured in Architectural Digest"],
      products: 18,
      followers: 890,
      rating: 4.8,
      tags: ["Reclaimed Materials", "Sustainable Design", "Heritage Craft"],
      socialProof: "Trusted by 300+ eco-conscious homes"
    },
    {
      id: 3,
      name: "Amara Okafor",
      business: "Sustainable Threads Co.",
      location: "Austin, Texas",
      specialty: "Organic Textiles",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      coverImage: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=800&h=400&fit=crop",
      story: `Amara's journey into sustainable textiles began during her travels through Peru, where she witnessed firsthand the impact of fair trade practices on local communities. She founded Sustainable Threads Co. to create beautiful textiles while supporting women's cooperatives.

Her Austin-based company works directly with artisan groups in Peru and Guatemala, ensuring fair wages and sustainable practices. Every blanket, scarf, and home textile is made from organic materials using traditional weaving techniques passed down through generations.`,
      achievements: ["Fair Trade Certified", "B-Corp Certification", "Women's Business Award 2023"],
      products: 32,
      followers: 2100,
      rating: 4.9,
      tags: ["Fair Trade", "Women-Made", "Organic Materials"],
      socialProof: "Supporting 150+ artisan families globally"
    }
  ];

  const currentMaker = featuredMakers[activeTab];

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Featured Makers Spotlight
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Meet the passionate creators behind our products. Each maker brings unique skills, 
            stories, and values to everything they create.
          </p>
        </div>

        {/* Maker Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {featuredMakers.map((maker, index) => (
            <button
              key={maker.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={maker.image}
                  alt={maker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium">{maker.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Maker Content */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Maker Info */}
            <div className="p-8 lg:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={currentMaker.image}
                    alt={currentMaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                    {currentMaker.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{currentMaker.business}</p>
                  <div className="flex items-center text-text-secondary text-sm">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    <span>{currentMaker.location}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentMaker.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-50 text-primary-600 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Story */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Their Story</h4>
                <div className="prose prose-sm max-w-none text-text-secondary">
                  <p className="mb-4">{currentMaker.story}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {currentMaker.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-text-secondary text-sm">
                      <Icon name="Award" size={14} className="text-brand-gold mr-2" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">{currentMaker.products}</div>
                  <div className="text-sm text-text-secondary">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">{currentMaker.followers}</div>
                  <div className="text-sm text-text-secondary">Followers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <span className="text-2xl font-bold text-text-primary mr-1">{currentMaker.rating}</span>
                    <Icon name="Star" size={16} className="text-brand-gold fill-current" />
                  </div>
                  <div className="text-sm text-text-secondary">Rating</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-success-600 mr-2" />
                  <span className="text-success-700 text-sm font-medium">{currentMaker.socialProof}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/product-catalog-intelligent-browsing"
                  className="btn-primary flex-1 text-center"
                >
                  View Products
                </Link>
                <button className="flex-1 bg-surface hover:bg-surface-hover text-text-primary font-medium px-6 py-3 rounded-lg border border-border transition-colors duration-300">
                  Follow Maker
                </button>
              </div>
            </div>

            {/* Right: Cover Image */}
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={currentMaker.coverImage}
                alt={`${currentMaker.name}'s workshop`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Play Button for Behind-the-Scenes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group">
                  <Icon name="Play" size={24} className="text-primary ml-1 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <span className="text-sm font-medium text-text-primary">Behind the Scenes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Become a Featured Maker
            </h3>
            <p className="text-text-secondary mb-4">
              Join our community of passionate creators and share your story with conscious consumers.
            </p>
            <button className="btn-secondary">
              Apply to Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMakers;