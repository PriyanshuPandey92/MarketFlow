import React, { useState, useRef, useEffect } from 'react';
import Icon from 'shared/ui/AppIcon';

const SearchBar = ({ searchQuery, onSearchChange, totalResults }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  // Mock search suggestions
  const mockSuggestions = [
    { type: 'category', text: 'Home & Kitchen', icon: 'Home' },
    { type: 'category', text: 'Baby & Kids', icon: 'Baby' },
    { type: 'category', text: 'Fashion & Accessories', icon: 'Shirt' },
    { type: 'product', text: 'Ceramic Coffee Mug', icon: 'Coffee' },
    { type: 'product', text: 'Organic Cotton Blanket', icon: 'Package' },
    { type: 'brand', text: 'Artisan Clay Co.', icon: 'Store' },
    { type: 'brand', text: 'Pure Comfort', icon: 'Store' },
    { type: 'query', text: 'gifts for new parents under $50', icon: 'Gift' },
    { type: 'query', text: 'sustainable kitchen utensils', icon: 'Leaf' },
    { type: 'query', text: 'handmade ceramic mugs', icon: 'Coffee' }
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion.text);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  const getSuggestionTypeColor = (type) => {
    switch (type) {
      case 'category':
        return 'text-primary';
      case 'product':
        return 'text-secondary';
      case 'brand':
        return 'text-accent';
      case 'query':
        return 'text-text-secondary';
      default:
        return 'text-text-secondary';
    }
  };

  const getSuggestionTypeLabel = (type) => {
    switch (type) {
      case 'category':
        return 'Category';
      case 'product':
        return 'Product';
      case 'brand':
        return 'Brand';
      case 'query':
        return 'Suggestion';
      default:
        return '';
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Search Input */}
      <div className={`relative flex items-center bg-white rounded-xl border-2 transition-all duration-300 ${
        isFocused ? 'border-primary shadow-lg' : 'border-border hover:border-primary-300'
      }`}>
        <div className="pl-4">
          <Icon name="Search" size={20} className="text-text-secondary" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
              setShowSuggestions(false);
            }, 200);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search for products, brands, or try 'gifts for new parents under $50'"
          className="flex-1 px-4 py-4 text-text-primary placeholder-text-muted bg-transparent focus:outline-none"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="p-2 mr-2 text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <Icon name="X" size={16} />
          </button>
        )}

        {/* Visual Search Button */}
        <button className="p-3 mr-2 text-text-secondary hover:text-primary border-l border-border transition-colors duration-300">
          <Icon name="Camera" size={20} />
        </button>

        {/* Search Button */}
        <button className="px-6 py-4 bg-primary hover:bg-primary-600 text-white rounded-r-xl transition-colors duration-300">
          <Icon name="Search" size={20} />
        </button>
      </div>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-border shadow-lg z-50 overflow-hidden">
          <div className="py-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-surface transition-colors duration-300"
              >
                <Icon 
                  name={suggestion.icon} 
                  size={16} 
                  className={getSuggestionTypeColor(suggestion.type)}
                />
                <div className="flex-1">
                  <span className="text-text-primary">{suggestion.text}</span>
                  <span className="text-xs text-text-muted ml-2">
                    {getSuggestionTypeLabel(suggestion.type)}
                  </span>
                </div>
                <Icon name="ArrowUpRight" size={14} className="text-text-muted" />
              </button>
            ))}
          </div>
          
          {/* Popular Searches */}
          <div className="border-t border-border bg-surface px-4 py-3">
            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">
              Popular Searches
            </h4>
            <div className="flex flex-wrap gap-2">
              {['sustainable', 'handmade', 'local makers', 'organic'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleSuggestionClick({ text: term })}
                  className="px-3 py-1 bg-primary-100 hover:bg-primary-200 text-primary-700 text-sm rounded-full transition-colors duration-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results Summary */}
      {searchQuery && (
        <div className="mt-4 text-center">
          <p className="text-text-secondary">
            {totalResults > 0 ? (
              <>
                Found <span className="font-semibold text-text-primary">{totalResults}</span> products
                {searchQuery && (
                  <>
                    {' '}for "<span className="font-medium text-primary">{searchQuery}</span>"
                  </>
                )}
              </>
            ) : (
              <>
                No products found
                {searchQuery && (
                  <>
                    {' '}for "<span className="font-medium">{searchQuery}</span>"
                  </>
                )}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;