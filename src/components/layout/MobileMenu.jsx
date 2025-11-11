import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { NAV_ITEMS, COMPANY_INFO } from '../../utils/constants';
import { lockBodyScroll, unlockBodyScroll } from '../../utils/helpers';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      unlockBodyScroll();
    };
  }, [isOpen]);

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close Button */}
            <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
              ✕
            </button>

            {/* Logo */}
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-menu-logo" onClick={handleLinkClick}>
                <span className="logo-octa">OCT</span>
                <span className="logo-alpha">ALPHA</span>
              </Link>
            </div>

            {/* Navigation Items */}
            <nav className="mobile-menu-nav">
              <ul className="mobile-nav-list">
                {NAV_ITEMS.map((item, index) => (
                  <li key={index} className="mobile-nav-item">
                    {item.dropdown ? (
                      <>
                        <button
                          className="mobile-nav-link mobile-nav-accordion"
                          onClick={() => toggleExpanded(index)}
                        >
                          {item.label}
                          <span className={`accordion-icon ${expandedItem === index ? 'open' : ''}`}>
                            ▼
                          </span>
                        </button>
                        <AnimatePresence>
                          {expandedItem === index && (
                            <motion.ul
                              className="mobile-nav-submenu"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <li key={dropdownIndex}>
                                  <Link
                                    to={dropdownItem.path}
                                    className="mobile-nav-sublink"
                                    onClick={handleLinkClick}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="mobile-nav-link"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="mobile-menu-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mobile-menu-cta">
              <Button to="/contact" variant="primary" size="large" onClick={handleLinkClick}>
                Get Quote
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
