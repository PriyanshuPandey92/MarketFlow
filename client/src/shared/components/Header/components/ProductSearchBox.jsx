import React, { useRef, useEffect } from 'react';

const ProductSearchBox = ({ open, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center bg-black/30 transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`mt-32 bg-white rounded-lg shadow-lg p-6 w-full max-w-md transition-transform duration-300 ${
          open ? 'scale-100' : 'scale-95'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products..."
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={onClose}
            className="ml-2 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close search"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchBox;