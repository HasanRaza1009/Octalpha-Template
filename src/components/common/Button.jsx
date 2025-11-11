import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button Component
 * Reusable button with different variants
 * @param {string} variant - 'primary', 'secondary', 'tertiary', 'outline'
 * @param {string} size - 'small', 'medium', 'large'
 * @param {string} to - If provided, renders as Link (React Router)
 * @param {string} href - If provided, renders as <a> tag
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  to,
  href,
  onClick,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  // Render as Link (React Router) if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Render as <a> tag if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
