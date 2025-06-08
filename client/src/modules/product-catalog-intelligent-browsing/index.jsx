import React, { useState, useEffect } from 'react';

import Icon from 'shared/ui/AppIcon';

import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import ComparisonTool from './components/ComparisonTool';
import BreadcrumbNav from './components/BreadcrumbNav';
import SortingOptions from './components/SortingOptions';
import ViewToggle from './components/ViewToggle';

const ProductCatalogIntelligentBrowsing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    rating: 0,
    sustainability: false,
    localMakers: false,
    inStock: false,
    colors: [],
    materials: [],
    brands: []
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [comparisonItems, setComparisonItems] = useState([]);
  const [savedFilters, setSavedFilters] = useState([]);

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Handcrafted Ceramic Coffee Mug",
      brand: "Artisan Clay Co.",
      price: 28.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      category: "Home & Kitchen",
      subcategory: "Drinkware",
      sustainability: true,
      localMaker: true,
      inStock: true,
      colors: ["Sage Green", "Terracotta", "Cream"],
      materials: ["Ceramic", "Glazed"],
      description: "Beautifully handcrafted ceramic mug made by local artisans using sustainable clay sourcing practices.",
      badges: ["Sustainable", "Local Maker", "Handmade"],
      quickSpecs: ["12oz capacity", "Dishwasher safe", "Microwave safe"]
    },
    {
      id: 2,
      name: "Organic Cotton Baby Blanket",
      brand: "Pure Comfort",
      price: 45.00,
      rating: 4.9,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
      category: "Baby & Kids",
      subcategory: "Bedding",
      sustainability: true,
      localMaker: false,
      inStock: true,
      colors: ["Natural", "Soft Pink", "Sky Blue"],
      materials: ["Organic Cotton"],
      description: "Ultra-soft organic cotton blanket perfect for newborns and toddlers, GOTS certified.",
      badges: ["Organic", "GOTS Certified", "Hypoallergenic"],
      quickSpecs: ["30x40 inches", "Machine washable", "GOTS certified"]
    },
    {
      id: 3,
      name: "Reclaimed Wood Desk Organizer",
      brand: "EcoOffice",
      price: 67.50,
      originalPrice: 85.00,
      rating: 4.6,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=400&fit=crop",
      category: "Office & Workspace",
      subcategory: "Organization",
      sustainability: true,
      localMaker: true,
      inStock: false,
      colors: ["Natural Wood", "Dark Walnut"],
      materials: ["Reclaimed Wood", "Natural Finish"],
      description: "Stylish desk organizer crafted from reclaimed barn wood, featuring multiple compartments.",
      badges: ["Reclaimed Materials", "Local Maker", "Eco-Friendly"],
      quickSpecs: ["12x8x4 inches", "6 compartments", "Natural finish"]
    },
    {
      id: 4,
      name: "Artisan Leather Journal",
      brand: "Heritage Crafts",
      price: 89.99,
      rating: 4.7,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Stationery & Books",
      subcategory: "Journals",
      sustainability: false,
      localMaker: true,
      inStock: true,
      colors: ["Cognac Brown", "Black", "Burgundy"],
      materials: ["Full Grain Leather", "Handmade Paper"],
      description: "Premium leather journal with handmade paper, perfect for writers and artists.",
      badges: ["Handmade", "Premium Quality", "Local Artisan"],
      quickSpecs: ["200 pages", "Lined paper", "Leather bound"]
    },
    {
      id: 5,
      name: "Bamboo Kitchen Utensil Set",
      brand: "Green Kitchen",
      price: 24.99,
      rating: 4.5,
      reviewCount: 342,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      category: "Home & Kitchen",
      subcategory: "Utensils",
      sustainability: true,
      localMaker: false,
      inStock: true,
      colors: ["Natural Bamboo"],
      materials: ["Bamboo", "Food Grade"],
      description: "Complete set of bamboo kitchen utensils, naturally antimicrobial and eco-friendly.",
      badges: ["Sustainable", "Antimicrobial", "BPA Free"],
      quickSpecs: ["6-piece set", "Heat resistant", "Easy to clean"]
    },
    {
      id: 6,
      name: "Hand-Knitted Wool Scarf",
      brand: "Mountain Textiles",
      price: 78.00,
      rating: 4.8,
      reviewCount: 94,
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "Fashion & Accessories",
      subcategory: "Scarves",
      sustainability: true,
      localMaker: true,
      inStock: true,
      colors: ["Charcoal", "Cream", "Forest Green"],
      materials: ["Merino Wool", "Hand-Knitted"],
      description: "Luxuriously soft merino wool scarf, hand-knitted by skilled artisans in the mountains.",
      badges: ["Hand-Knitted", "Merino Wool", "Local Artisan"],
      quickSpecs: ["70 inches long", "Merino wool", "Hand wash only"]
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery, sortBy, products]);

  const applyFilters = () => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating);
    }

    // Sustainability filter
    if (filters.sustainability) {
      filtered = filtered.filter(product => product.sustainability);
    }

    // Local makers filter
    if (filters.localMakers) {
      filtered = filtered.filter(product => product.localMaker);
    }

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Colors filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Materials filter
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product =>
        product.materials.some(material => filters.materials.includes(material))
      );
    }

    // Brands filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // relevance - keep original order
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleComparisonToggle = (product) => {
    setComparisonItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else if (prev.length < 4) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  const saveCurrentFilters = () => {
    const filterName = `Filter ${savedFilters.length + 1}`;
    setSavedFilters(prev => [...prev, { name: filterName, filters: { ...filters } }]);
  };

  const loadSavedFilter = (savedFilter) => {
    setFilters(savedFilter.filters);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const breadcrumbItems = [
    { name: 'Home', path: '/homepage-discovery-engine' },
    { name: 'Browse Products', path: '/product-catalog-intelligent-browsing' }
  ];

  if (filters.category) {
    breadcrumbItems.push({ name: filters.category, path: '#' });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Search Bar */}
      <div className="bg-surface border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            totalResults={filteredProducts.length}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              savedFilters={savedFilters}
              onSaveFilters={saveCurrentFilters}
              onLoadFilter={loadSavedFilter}
              products={products}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold text-text-primary">
                  Browse Products
                </h1>
                <span className="text-text-secondary">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <SortingOptions sortBy={sortBy} onSortChange={handleSortChange} />
                <ViewToggle viewMode={viewMode} onViewModeChange={handleViewModeChange} />
              </div>
            </div>

            {/* Active Filters */}
            {(filters.category || filters.sustainability || filters.localMakers || filters.inStock || 
              filters.colors.length > 0 || filters.materials.length > 0 || filters.brands.length > 0 ||
              filters.rating > 0 || searchQuery) && (
              <div className="mb-6 p-4 bg-surface rounded-lg border border-border-muted">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-text-primary">Active Filters</h3>
                  <button
                    onClick={() => {
                      setFilters({
                        category: '',
                        priceRange: [0, 1000],
                        rating: 0,
                        sustainability: false,
                        localMakers: false,
                        inStock: false,
                        colors: [],
                        materials: [],
                        brands: []
                      });
                      setSearchQuery('');
                    }}
                    className="text-sm text-accent hover:text-accent-600 transition-colors duration-300"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery('')}
                        className="hover:text-primary-800"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.category && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                      {filters.category}
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, category: '' }))}
                        className="hover:text-primary-800"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.sustainability && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-success-100 text-success-700 text-sm rounded-full">
                      Sustainable
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, sustainability: false }))}
                        className="hover:text-success-800"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.localMakers && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full">
                      Local Makers
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, localMakers: false }))}
                        className="hover:text-secondary-800"
                      >
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Product Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-surface rounded-lg overflow-hidden">
                      <div className="w-full h-64 bg-border-muted"></div>
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-border-muted rounded w-3/4"></div>
                        <div className="h-3 bg-border-muted rounded w-1/2"></div>
                        <div className="h-4 bg-border-muted rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center">
                  <Icon name="Search" size={48} className="text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No products found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      category: '',
                      priceRange: [0, 1000],
                      rating: 0,
                      sustainability: false,
                      localMakers: false,
                      inStock: false,
                      colors: [],
                      materials: [],
                      brands: []
                    });
                    setSearchQuery('');
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :'grid-cols-1'
                }`}>
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                      isInComparison={comparisonItems.some(item => item.id === product.id)}
                      onComparisonToggle={handleComparisonToggle}
                      canAddToComparison={comparisonItems.length < 4}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center mt-12 space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    
                    {[...Array(Math.min(5, totalPages))].map((_, index) => {
                      const pageNumber = Math.max(1, currentPage - 2) + index;
                      if (pageNumber > totalPages) return null;
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`px-4 py-2 rounded-lg border transition-colors duration-300 ${
                            currentPage === pageNumber
                              ? 'bg-primary text-white border-primary' :'border-border text-text-secondary hover:text-text-primary hover:bg-surface'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Tool */}
      {comparisonItems.length > 0 && (
        <ComparisonTool
          items={comparisonItems}
          onRemoveItem={handleComparisonToggle}
          onClear={clearComparison}
        />
      )}
    </div>
  );
};

export default ProductCatalogIntelligentBrowsing;