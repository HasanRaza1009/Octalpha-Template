import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * StaggerContainer Animation Component
 * Staggers animation of child elements
 * @param {React.ReactNode} children - Content to animate
 * @param {number} staggerDelay - Delay between each child animation (seconds)
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {string} className - Additional CSS classes
 */
const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  threshold = 0.2,
  className = '',
  ...props
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerContainer;
