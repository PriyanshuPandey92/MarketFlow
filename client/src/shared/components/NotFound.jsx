import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
            <Icon name="Search" size={48} className="text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
          <h2 className="text-xl font-semibold text-text-primary mb-2">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage"
            className="inline-flex items-center justify-center space-x-2 w-full bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <Icon name="Home" size={20} />
            <span>Back to Homepage</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 w-full bg-surface hover:bg-surface-hover text-text-primary font-medium px-6 py-3 rounded-lg border border-border transition-colors duration-300"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;