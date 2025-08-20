import React, { useState } from 'react';
import Icon from 'shared/ui/AppIcon';
import Image from 'shared/ui/AppImage';

const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-surface rounded-lg overflow-hidden group">
        <div className="aspect-square relative">
          <Image
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-text-primary p-2 rounded-lg shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <Icon name="ZoomIn" size={20} />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary p-2 rounded-full shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-text-primary p-2 rounded-full shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === index
                ? 'border-primary shadow-sm'
                : 'border-border-muted hover:border-primary-300'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* 360° View Badge */}
      <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
        <Icon name="RotateCcw" size={16} />
        <span>360° view available</span>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Icon name="X" size={24} />
            </button>
            <Image
              src={images[selectedImage]}
              alt={`${productName} - Zoomed view`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;