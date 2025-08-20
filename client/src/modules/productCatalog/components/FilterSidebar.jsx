import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  savedFilters, 
  onSaveFilters, 
  onLoadFilter, 
  products 
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    values: true,
    colors: false,
    materials: false,
    brands: false
  });

  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];
  const colors = [...new Set(products.flatMap(p => p.colors))];
  const materials = [...new Set(products.flatMap(p => p.materials))];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterUpdate = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const handleArrayFilterToggle = (key, value) => {
    const currentArray = filters[key] || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    handleFilterUpdate(key, newArray);
  };

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-border-muted last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-hover transition-colors duration-300"
      >
        <h3 className="font-medium text-text-primary">{title}</h3>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-secondary" 
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  const ColorSwatch = ({ color, isSelected, onClick }) => {
    const colorMap = {
      'Sage Green': 'bg-primary',
      'Terracotta': 'bg-secondary',
      'Cream': 'bg-yellow-100',
      'Natural': 'bg-yellow-50',
      'Soft Pink': 'bg-pink-200',
      'Sky Blue': 'bg-blue-200',
      'Natural Wood': 'bg-yellow-600',
      'Dark Walnut': 'bg-yellow-900',
      'Cognac Brown': 'bg-yellow-800',
      'Black': 'bg-gray-900',
      'Burgundy': 'bg-red-800',
      'Natural Bamboo': 'bg-yellow-200',
      'Charcoal': 'bg-gray-700',
      'Forest Green': 'bg-green-800'
    };

    return (
      <button
        onClick={onClick}
        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
          isSelected ? 'border-primary scale-110' : 'border-border hover:border-primary-300'
        } ${colorMap[color] || 'bg-gray-300'}`}
        title={color}
      />
    );
  };

  return (
    <div className="bg-surface rounded-lg border border-border-muted overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border-muted bg-surface-hover">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-text-primary">Filters</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={onSaveFilters}
              className="p-1.5 text-text-secondary hover:text-text-primary transition-colors duration-300"
              title="Save current filters"
            >
              <Icon name="Bookmark" size={16} />
            </button>
            <button
              onClick={() => onFilterChange({
                category: '',
                priceRange: [0, 1000],
                rating: 0,
                sustainability: false,
                localMakers: false,
                inStock: false,
                colors: [],
                materials: [],
                brands: []
              })}
              className="p-1.5 text-text-secondary hover:text-accent transition-colors duration-300"
              title="Clear all filters"
            >
              <Icon name="RotateCcw" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Saved Filters */}
      {savedFilters.length > 0 && (
        <div className="p-4 border-b border-border-muted">
          <h3 className="text-sm font-medium text-text-primary mb-3">Saved Filters</h3>
          <div className="space-y-2">
            {savedFilters.map((savedFilter, index) => (
              <button
                key={index}
                onClick={() => onLoadFilter(savedFilter)}
                className="w-full text-left px-3 py-2 text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors duration-300"
              >
                {savedFilter.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={filters.category === ''}
              onChange={() => handleFilterUpdate('category', '')}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm text-text-secondary">All Categories</span>
          </label>
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => handleFilterUpdate('category', category)}
                className="text-primary focus:ring-primary"
              />
              <span className="text-sm text-text-secondary">{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection('price')}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block text-xs text-text-secondary mb-1">Min</label>
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterUpdate('priceRange', [parseInt(e.target.value) || 0, filters.priceRange[1]])}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-text-secondary mb-1">Max</label>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterUpdate('priceRange', [filters.priceRange[0], parseInt(e.target.value) || 1000])}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="1000"
              />
            </div>
          </div>
          <div className="text-xs text-text-secondary">
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </div>
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection
        title="Customer Rating"
        isExpanded={expandedSections.rating}
        onToggle={() => toggleSection('rating')}
      >
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => handleFilterUpdate('rating', rating)}
                className="text-primary focus:ring-primary"
              />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name="Star"
                    size={14}
                    className={index < rating ? 'text-yellow-400 fill-current' : 'text-border-muted'}
                  />
                ))}
                <span className="text-sm text-text-secondary ml-2">& up</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Values Filter */}
      <FilterSection
        title="Values & Impact"
        isExpanded={expandedSections.values}
        onToggle={() => toggleSection('values')}
      >
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.sustainability}
              onChange={(e) => handleFilterUpdate('sustainability', e.target.checked)}
              className="text-primary focus:ring-primary rounded"
            />
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" size={16} className="text-success" />
              <span className="text-sm text-text-secondary">Sustainable</span>
            </div>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.localMakers}
              onChange={(e) => handleFilterUpdate('localMakers', e.target.checked)}
              className="text-primary focus:ring-primary rounded"
            />
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-secondary" />
              <span className="text-sm text-text-secondary">Local Makers</span>
            </div>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => handleFilterUpdate('inStock', e.target.checked)}
              className="text-primary focus:ring-primary rounded"
            />
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={16} className="text-primary" />
              <span className="text-sm text-text-secondary">In Stock</span>
            </div>
          </label>
        </div>
      </FilterSection>

      {/* Colors Filter */}
      <FilterSection
        title="Colors"
        isExpanded={expandedSections.colors}
        onToggle={() => toggleSection('colors')}
      >
        <div className="grid grid-cols-6 gap-2">
          {colors.map(color => (
            <ColorSwatch
              key={color}
              color={color}
              isSelected={filters.colors.includes(color)}
              onClick={() => handleArrayFilterToggle('colors', color)}
            />
          ))}
        </div>
        {filters.colors.length > 0 && (
          <div className="mt-3 text-xs text-text-secondary">
            Selected: {filters.colors.join(', ')}
          </div>
        )}
      </FilterSection>

      {/* Materials Filter */}
      <FilterSection
        title="Materials"
        isExpanded={expandedSections.materials}
        onToggle={() => toggleSection('materials')}
      >
        <div className="space-y-2">
          {materials.map(material => (
            <label key={material} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.materials.includes(material)}
                onChange={() => handleArrayFilterToggle('materials', material)}
                className="text-primary focus:ring-primary rounded"
              />
              <span className="text-sm text-text-secondary">{material}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brands Filter */}
      <FilterSection
        title="Brands"
        isExpanded={expandedSections.brands}
        onToggle={() => toggleSection('brands')}
      >
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleArrayFilterToggle('brands', brand)}
                className="text-primary focus:ring-primary rounded"
              />
              <span className="text-sm text-text-secondary">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;