import { useEffect } from 'react';

// Custom hook for managing focus and keyboard navigation
export const useFocusManagement = (isOpen: boolean, closeCallback?: () => void) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeCallback) {
        closeCallback();
      }
    };

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTabTrap);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabTrap);
    };
  }, [isOpen, closeCallback]);
};

// Custom hook for reduced motion preferences
export const useReducedMotion = () => {
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return prefersReducedMotion;
};

// Custom hook for intersection observer with performance optimizations
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    return observer;
  }, [callback, options]);
};

// Accessible Button component
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  ariaLabel,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  className = ''
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800',
    secondary: 'bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Loading component with accessibility
export const AccessibleLoading: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div 
      role="status" 
      aria-live="polite" 
      className="flex items-center justify-center p-8"
    >
      <div className="coffeeMasterSpinner w-8 h-8 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mr-3"></div>
      <span className="sr-only">{text}</span>
    </div>
  );
};

// Skip to content component
export const SkipToContent: React.FC = () => {
  return (
    <a 
      href="#main-content"
      className="skip-to-content"
      tabIndex={0}
    >
      Skip to main content
    </a>
  );
};

// Announcement component for screen readers
export const Announcement: React.FC<{ message: string; priority?: 'polite' | 'assertive' }> = ({
  message,
  priority = 'polite'
}) => {
  return (
    <div
      role="status"
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};

// Lazy loading image component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3C/svg%3E'
}) => {
  useEffect(() => {
    const images = document.querySelectorAll('.coffeeMasterLazyLoad');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);

  return (
    <img
      src={placeholder}
      data-src={src}
      alt={alt}
      className={`coffeeMasterLazyLoad ${className}`}
      loading="lazy"
    />
  );
};

export default {
  useFocusManagement,
  useReducedMotion,
  useIntersectionObserver,
  AccessibleButton,
  AccessibleLoading,
  SkipToContent,
  Announcement,
  LazyImage
};
