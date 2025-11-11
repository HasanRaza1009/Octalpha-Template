import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * SlideUp Animation Component
 * Slides up and fades in element when it enters viewport
 * @param {React.ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} distance - Distance to slide from (in pixels)
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} className - Additional CSS classes
 */
const SlideUp = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  threshold = 0.2,
  className = '',
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
