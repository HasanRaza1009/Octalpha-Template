import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Uses Intersection Observer API to detect when element enters viewport
 * @param {object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visible to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {object} - { ref, inView } - ref to attach to element, inView boolean state
 */
const useScrollAnimation = ({
  threshold = 0.2,
  rootMargin = '0px',
  triggerOnce = true
} = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // If user prefers reduced motion, set inView to true immediately
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        // If triggerOnce is true and animation has already triggered, don't update
        if (triggerOnce && hasTriggered.current) {
          return;
        }

        // Update state
        setInView(isIntersecting);

        // Mark as triggered if element is in view
        if (isIntersecting) {
          hasTriggered.current = true;
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    // Observe element
    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
};

export default useScrollAnimation;
