import React from 'react';
import './Container.css';

/**
 * Container Component
 * Centered container with max-width and padding
 * @param {React.ReactNode} children - Container content
 * @param {string} className - Additional CSS classes
 * @param {string} maxWidth - Max width ('normal', 'wide', 'narrow', 'full')
 */
const Container = ({
  children,
  className = '',
  maxWidth = 'normal',
  ...props
}) => {
  const containerClasses = `container container-${maxWidth} ${className}`.trim();

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
