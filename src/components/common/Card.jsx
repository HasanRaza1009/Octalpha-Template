import React from 'react';
import './Card.css';

/**
 * Card Component
 * Reusable card container with hover effects
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {boolean} hover - Enable hover effect (default: true)
 * @param {function} onClick - Click handler (makes card clickable)
 */
const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  ...props
}) => {
  const cardClasses = `card ${hover ? 'card-hover' : ''} ${
    onClick ? 'card-clickable' : ''
  } ${className}`.trim();

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
