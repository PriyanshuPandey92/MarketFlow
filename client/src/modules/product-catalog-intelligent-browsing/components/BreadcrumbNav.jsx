import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';

const BreadcrumbNav = ({ items }) => {
  const contextualSuggestions = [
    { name: 'New Arrivals', path: '#', icon: 'Sparkles' },
    { name: 'Best Sellers', path: '#', icon: 'TrendingUp' },
    { name: 'Local Makers', path: '#', icon: 'MapPin' },
    { name: 'Sustainable', path: '#', icon: 'Leaf' }
  ];

  return (
    <div className="bg-surface border-b border-border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Breadcrumb Trail */}
          <nav className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <Icon name="ChevronRight" size={14} className="text-text-muted" />
                )}
                {index === items.length - 1 ? (
                  <span className="text-text-primary font-medium">{item.name}</span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Contextual Suggestions */}
          <div className="flex items-center space-x-4">
            <span className="text-xs text-text-secondary font-medium uppercase tracking-wider hidden sm:block">
              Quick Browse:
            </span>
            <div className="flex items-center space-x-2">
              {contextualSuggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  to={suggestion.path}
                  className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface-hover rounded-lg transition-all duration-300"
                >
                  <Icon name={suggestion.icon} size={12} />
                  <span className="hidden sm:inline">{suggestion.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNav;