import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../ui/AppIcon';
import ProductSearchBox from './components/ProductSearchBox'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);  

  const navigationItems = [
    { name: 'Discover', path: '/homepage', icon: 'Compass' },
    { name: 'Browse', path: '/productCatalog', icon: 'Grid3X3' },
    { name: 'Products', path: '/productDetail', icon: 'Package' },
    { name: 'Cart', path: '/shoppingCart', icon: 'ShoppingCart' },
    { name: 'Account', path: '/accountDashboard', icon: 'User' },
    { name: 'Support', path: '/customer-support-hub-confidence-center', icon: 'HelpCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group "
            onClick={closeMenu}
          >
            <div className="relative">
              <img
                src="../../public/assets/images/mf-logo.png"
                alt="logo"
                width={80}
                height={80}
                className='relative transition-transform duration-300 group-hover:scale-125'
              />
            </div>
            <div className="hidden sm:block ">
              <h1 className="text-xl lg:text-2xl font-semibold text-text-primary font-accent ">
                MarketFlow
              </h1>
              <p className="text-xs text-text-secondary -mt-1">Conscious Commerce</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
                className="p-2 text-text-secondary hover:text-text-primary transition-colors duration-300 relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Icon name="Search" size={20} />
              </button>
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors duration-300 relative">
              <Icon name="Heart" size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors duration-300 relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-background border-t border-border-muted`}>
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-out ${
                isActivePath(item.path)
                  ? 'bg-primary text-white' :'text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
          
          {/* Mobile Actions */}
          <div className="flex items-center justify-around pt-4 mt-4 border-t border-border-muted">
            <button className="flex flex-col items-center space-y-1 p-2 text-text-secondary hover:text-text-primary transition-colors duration-300">
              <Icon name="Search" size={20} />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-text-secondary hover:text-text-primary transition-colors duration-300 relative">
              <Icon name="Heart" size={20} />
              <span className="text-xs">Wishlist</span>
              <span className="absolute -top-1 right-1 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-text-secondary hover:text-text-primary transition-colors duration-300 relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="text-xs">Cart</span>
              <span className="absolute -top-1 right-1 bg-brand-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <ProductSearchBox open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;