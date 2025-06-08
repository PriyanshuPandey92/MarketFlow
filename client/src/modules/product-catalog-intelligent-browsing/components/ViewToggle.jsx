import React from 'react';
import Icon from 'shared/ui/AppIcon';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  const viewOptions = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { value: 'list', icon: 'List', label: 'List View' }
  ];

  return (
    <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden">
      {viewOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onViewModeChange(option.value)}
          className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
            viewMode === option.value
              ? 'bg-primary text-white' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
          }`}
          title={option.label}
        >
          <Icon name={option.icon} size={16} />
          <span className="hidden sm:inline">{option.label.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;