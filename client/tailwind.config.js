/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#7A8471', // Sage green for trust and sustainability - green-600
        'primary-50': '#F4F6F3', // Very light sage - green-50
        'primary-100': '#E8ECE5', // Light sage - green-100
        'primary-200': '#D1D9CB', // Lighter sage - green-200
        'primary-300': '#A8B89E', // Medium light sage - green-300
        'primary-400': '#8FA085', // Medium sage - green-400
        'primary-500': '#7A8471', // Base sage green - green-500
        'primary-600': '#6B7562', // Darker sage - green-600
        'primary-700': '#5A6353', // Dark sage - green-700
        'primary-800': '#4A5244', // Very dark sage - green-800
        'primary-900': '#3A4135', // Deepest sage - green-900

        // Secondary Colors
        'secondary': '#C17B5A', // Terracotta for warmth and craftsmanship - orange-600
        'secondary-50': '#FBF7F4', // Very light terracotta - orange-50
        'secondary-100': '#F6EFEA', // Light terracotta - orange-100
        'secondary-200': '#EDDFD5', // Lighter terracotta - orange-200
        'secondary-300': '#DBBFAB', // Medium light terracotta - orange-300
        'secondary-400': '#CA9D82', // Medium terracotta - orange-400
        'secondary-500': '#C17B5A', // Base terracotta - orange-500
        'secondary-600': '#B06B4A', // Darker terracotta - orange-600
        'secondary-700': '#9E5A3A', // Dark terracotta - orange-700
        'secondary-800': '#8C4A2A', // Very dark terracotta - orange-800
        'secondary-900': '#7A3A1A', // Deepest terracotta - orange-900

        // Accent Colors
        'accent': '#E07A5F', // Coral for conversion and highlights - red-400
        'accent-50': '#FDF6F4', // Very light coral - red-50
        'accent-100': '#FBECEA', // Light coral - red-100
        'accent-200': '#F6D9D5', // Lighter coral - red-200
        'accent-300': '#EDB3A6', // Medium light coral - red-300
        'accent-400': '#E48D77', // Medium coral - red-400
        'accent-500': '#E07A5F', // Base coral - red-500
        'accent-600': '#D66A4F', // Darker coral - red-600
        'accent-700': '#CC5A3F', // Dark coral - red-700
        'accent-800': '#C24A2F', // Very dark coral - red-800
        'accent-900': '#B83A1F', // Deepest coral - red-900

        // Background Colors
        'background': '#FEFCF8', // Warm white for premium canvas - neutral-50
        'surface': '#F5F3EF', // Subtle beige for card depth - neutral-100
        'surface-hover': '#F0EDE7', // Hover state for surfaces - neutral-200

        // Text Colors
        'text-primary': '#2D3436', // Charcoal for clear readability - gray-800
        'text-secondary': '#636E72', // Medium gray for hierarchy - gray-600
        'text-muted': '#8B9196', // Light gray for subtle text - gray-500
        'text-inverse': '#FFFFFF', // White text for dark backgrounds - white

        // Status Colors
        'success': '#00B894', // Fresh green for positive actions - emerald-500
        'success-50': '#ECFDF5', // Very light success - emerald-50
        'success-100': '#D1FAE5', // Light success - emerald-100
        'success-600': '#059669', // Darker success - emerald-600

        'warning': '#FDCB6E', // Warm amber for gentle alerts - amber-400
        'warning-50': '#FFFBEB', // Very light warning - amber-50
        'warning-100': '#FEF3C7', // Light warning - amber-100
        'warning-600': '#D97706', // Darker warning - amber-600

        'error': '#E17055', // Muted coral for helpful corrections - red-500
        'error-50': '#FEF2F2', // Very light error - red-50
        'error-100': '#FEE2E2', // Light error - red-100
        'error-600': '#DC2626', // Darker error - red-600

        // Brand Specific Colors
        'brand-gold': '#D4A574', // Warm gold for premium CTAs - yellow-600
        'brand-teal': '#2D5A5A', // Deep teal for trust signals - teal-700

        // Border Colors
        'border': '#E5E7EB', // Light border - gray-200
        'border-muted': '#F3F4F6', // Very light border - gray-100
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'heading': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'accent': ['Crimson Text', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}