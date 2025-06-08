import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';

import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import AddToCartSection from './components/AddToCartSection';
import RelatedProducts from './components/RelatedProducts';
import TrustIndicators from './components/TrustIndicators';

const ProductDetailDecisionSupport = () => {
  const [selectedVariant, setSelectedVariant] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock product data
  const productData = {
    id: "handcrafted-ceramic-bowl-set",
    name: "Handcrafted Ceramic Bowl Set",
    subtitle: "Artisan Collection",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 247,
    inStock: true,
    stockCount: 12,
    maker: {
      name: "Elena Pottery Studio",
      location: "Tuscany, Italy",
      established: "2015",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      verified: true,
      story: `Elena's journey began in the rolling hills of Tuscany, where she discovered her passion for ceramics during a summer art retreat. What started as a hobby quickly evolved into a life's calling. Each piece is hand-thrown on her grandmother's pottery wheel, using clay sourced from local quarries that have supplied artisans for centuries.

Her work reflects the timeless beauty of Italian craftsmanship, combined with modern functionality. Every bowl tells a story of patience, skill, and deep respect for the ancient art of ceramics.`
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop"
    ],
    variants: [
      { id: 'small', name: 'Small Set', description: '4 bowls, 5" diameter', price: 69.99 },
      { id: 'medium', name: 'Medium Set', description: '6 bowls, 6" diameter', price: 89.99 },
      { id: 'large', name: 'Large Set', description: '8 bowls, 7" diameter', price: 129.99 }
    ],
    features: [
      "Hand-thrown on traditional pottery wheel","Food-safe glazes with lead-free certification","Microwave and dishwasher safe","Each piece is unique with natural variations","Sustainable local clay sourcing"
    ],
    specifications: {
      material: "High-fired stoneware clay",glaze: "Lead-free ceramic glaze",care: "Dishwasher safe, avoid thermal shock",origin: "Handmade in Tuscany, Italy",weight: "2.3 lbs per bowl (medium)",dimensions: "6\" diameter x 3\" height (medium)"
    },
    sustainability: {
      carbonNeutral: true,
      localSourcing: true,
      fairTrade: true,
      packaging: "100% recyclable materials"
    },
    shipping: {
      freeShipping: true,
      estimatedDays: "5-7 business days",
      expedited: "2-3 business days (+$15)",
      international: "Available to 40+ countries"
    }
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      title: "Absolutely beautiful craftsmanship",
      content: `These bowls exceeded my expectations in every way. The quality is outstanding, and you can really feel the care that went into making each piece. The glazing is gorgeous with subtle variations that make each bowl unique. Perfect for both everyday use and special occasions.`,
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop"
      ],
      helpful: 23
    },
    {
      id: 2,
      author: "Michael R.",
      rating: 5,
      date: "2024-01-10",
      verified: true,
      title: "Perfect gift for my wife",
      content: `Bought these as an anniversary gift and my wife absolutely loves them. The packaging was beautiful and the bowls arrived in perfect condition. Elena even included a handwritten note about the inspiration behind the design.`,
      helpful: 18
    },
    {
      id: 3,
      author: "Jennifer L.",
      rating: 4,
      date: "2024-01-05",
      verified: true,
      title: "Beautiful but delicate",
      content: `Gorgeous bowls with amazing attention to detail. They're perfect for serving and the size is just right. Only giving 4 stars because they seem a bit delicate - I'm extra careful when washing them.`,
      helpful: 12
    }
  ];

  const qnaData = [
    {
      id: 1,
      question: "Are these bowls suitable for hot soup?",
      answer: "Yes! These bowls are made from high-fired stoneware and can safely hold hot liquids. The clay retains heat well, keeping your soup warm longer.",
      author: "Elena Pottery Studio",
      date: "2024-01-12",
      helpful: 15
    },
    {
      id: 2,
      question: "What\'s the capacity of the medium bowls?",
      answer: "The medium bowls hold approximately 16 oz (2 cups) when filled to the rim, making them perfect for cereal, soup, or salads.",
      author: "Verified Customer",
      date: "2024-01-08",
      helpful: 8
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Ceramic Dinner Plates",
      maker: "Elena Pottery Studio",
      price: 79.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Handwoven Table Runner",
      maker: "Tuscan Textiles",
      price: 45.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Artisan Serving Spoons",
      maker: "Woodcraft Collective",
      price: 32.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Ceramic Mug Set",
      maker: "Elena Pottery Studio",
      price: 59.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="bg-surface border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/homepage-discovery-engine" className="text-text-secondary hover:text-text-primary transition-colors duration-300">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} className="text-text-muted" />
            <Link to="/product-catalog-intelligent-browsing" className="text-text-secondary hover:text-text-primary transition-colors duration-300">
              Kitchen & Dining
            </Link>
            <Icon name="ChevronRight" size={16} className="text-text-muted" />
            <span className="text-text-primary font-medium">Ceramic Bowl Set</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Gallery */}
          <ProductGallery images={productData.images} productName={productData.name} />

          {/* Product Information */}
          <div className="space-y-6">
            <ProductInfo 
              product={productData}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />
            
            <AddToCartSection 
              product={productData}
              selectedVariant={selectedVariant}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
            
            <TrustIndicators />
          </div>
        </div>

        {/* Product Details Tabs */}
        <ProductTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          product={productData}
          reviews={reviews}
          qnaData={qnaData}
        />

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetailDecisionSupport;