import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';

const SortingOptions = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Best Match', icon: 'Target' },
    { value: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' }
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy);

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-surface hover:bg-surface-hover border border-border rounded-lg text-sm font-medium text-text-primary transition-colors duration-300"
      >
        <Icon name={currentSort?.icon || 'Target'} size={16} />
        <span>Sort: {currentSort?.label || 'Best Match'}</span>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-text-secondary" 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg border border-border shadow-lg z-20 overflow-hidden">
            <div className="py-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm transition-colors duration-300 ${
                    sortBy === option.value
                      ? 'bg-primary-50 text-primary-700' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon 
                    name={option.icon} 
                    size={16} 
                    className={sortBy === option.value ? 'text-primary' : 'text-text-muted'} 
                  />
                  <span className="flex-1">{option.label}</span>
                  {sortBy === option.value && (
                    <Icon name="Check" size={16} className="text-primary" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Sort Info */}
            <div className="border-t border-border bg-surface px-4 py-3">
              <p className="text-xs text-text-muted">
                Sorting helps you find products that match your preferences and needs.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortingOptions;