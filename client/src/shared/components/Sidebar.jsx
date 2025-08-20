import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/AppIcon';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Discovery Engine', 
      path: '/homepage', 
      icon: 'Compass',
      description: 'Curated collections & maker stories'
    },
    { 
      name: 'Smart Browse', 
      path: '/productCatalog', 
      icon: 'Grid3X3',
      description: 'Intelligent product filtering'
    },
    { 
      name: 'Product Details', 
      path: '/productDetail', 
      icon: 'Package',
      description: 'Complete decision support'
    },
    { 
      name: 'Cart & Checkout', 
      path: '/shoppingCart', 
      icon: 'ShoppingCart',
      description: 'Frictionless conversion'
    },
    { 
      name: 'My Account', 
      path: '/accountDashboard', 
      icon: 'User',
      description: 'Personal experience hub'
    },
    { 
      name: 'Support Center', 
      path: '/customer-support-hub-confidence-center', 
      icon: 'HelpCircle',
      description: 'Confidence & assistance'
    }
  ];

  const quickActions = [
    { name: 'Wishlist', icon: 'Heart', count: 12 },
    { name: 'Orders', icon: 'Package', count: 3 },
    { name: 'Messages', icon: 'MessageCircle', count: 2 },
    { name: 'Reviews', icon: 'Star', count: 8 }
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className={`lg:fixed left-0 top-16 lg:top-20 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-surface border-r border-border-muted transition-all duration-300 ease-out z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    } hidden lg:block`}>
      <div className="flex flex-col h-full">
        {/* Collapse Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-border-muted">
          {!isCollapsed && (
            <h2 className="text-sm font-semibold text-text-primary">Navigation</h2>
          )}
          <button
            onClick={toggleCollapse}
            className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-all duration-300"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={16} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-out ${
                isActivePath(item.path)
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
              title={isCollapsed ? item.name : ''}
            >
              <Icon 
                name={item.icon} 
                size={20} 
                className={`flex-shrink-0 ${
                  isActivePath(item.path) ? 'text-white' : 'text-text-secondary group-hover:text-text-primary'
                }`}
              />
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{item.name}</div>
                  <div className={`text-xs truncate ${
                    isActivePath(item.path) ? 'text-white/80' : 'text-text-muted'
                  }`}>
                    {item.description}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="p-4 border-t border-border-muted">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  className="flex flex-col items-center p-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-all duration-300 group"
                >
                  <div className="relative">
                    <Icon name={action.icon} size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    {action.count > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {action.count}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1 font-medium">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Collapsed Quick Actions */}
        {isCollapsed && (
          <div className="p-2 border-t border-border-muted space-y-2">
            {quickActions.slice(0, 2).map((action) => (
              <button
                key={action.name}
                className="w-full flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-all duration-300 relative"
                title={action.name}
              >
                <Icon name={action.icon} size={16} />
                {action.count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {action.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* User Profile Section */}
        <div className="p-4 border-t border-border-muted">
          {!isCollapsed ? (
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50 border border-primary-200">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-text-primary truncate">Sarah Chen</div>
                <div className="text-xs text-text-secondary truncate">Premium Member</div>
              </div>
              <button className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-300">
                <Icon name="Settings" size={14} />
              </button>
            </div>
          ) : (
            <button className="w-full p-2 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center" title="Sarah Chen">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={12} className="text-white" />
              </div>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;