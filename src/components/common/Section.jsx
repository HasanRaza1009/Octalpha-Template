import React from 'react';
import './Section.css';

/**
 * Section Component
 * Full-width section with vertical padding and optional background
 * @param {React.ReactNode} children - Section content
 * @param {string} className - Additional CSS classes
 * @param {string} background - Background color ('primary', 'secondary', 'gradient', 'none')
 * @param {string} id - Section ID for anchor links
 * @param {string} padding - Padding size ('none', 'small', 'medium', 'large')
 */
const Section = ({
  children,
  className = '',
  background = 'none',
  id,
  padding = 'large',
  ...props
}) => {
  const sectionClasses = `section section-bg-${background} section-padding-${padding} ${className}`.trim();

  return (
    <section className={sectionClasses} id={id} {...props}>
      {children}
    </section>
  );
};

export default Section;
