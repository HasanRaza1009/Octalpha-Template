import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Scrolls to top of page on route change
 * Component doesn't render anything, just handles scroll behavior
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (for anchor links)
    if (window.location.hash) {
      // Wait a bit for page to render, then scroll to hash element
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Header height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
