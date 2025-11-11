import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * FadeIn Animation Component
 * Fades in element when it enters viewport
 * @param {React.ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} className - Additional CSS classes
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
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
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
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

export default FadeIn;
