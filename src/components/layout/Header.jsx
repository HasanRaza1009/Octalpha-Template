import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS, COMPANY_INFO } from '../../utils/constants';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img 
              src="/assets/images/What-we-Do/logo.png" 
              alt="Octalpha Logo" 
              className="logo-image" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav hide-mobile">
            <ul className="nav-list">
              {NAV_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <>
                      <span
                        className={`nav-link nav-link-dropdown ${
                          location.pathname.startsWith('/services') ? 'active' : ''
                        }`}
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.label} <span className="dropdown-arrow">▼</span>
                      </span>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            className="nav-dropdown"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <div
                                key={dropdownIndex}
                                style={{ position: 'relative' }}
                                className="dropdown-item-wrapper" /* <-- ADD THIS CLASS */
                              >
                                {dropdownItem.subMenu ? (
                                  <>
                                    <Link
                                      to={dropdownItem.path}
                                      className="dropdown-item dropdown-item-with-submenu"
                                    >
                                      <span>{dropdownItem.label}</span>
                                      <i className="fa fa-angle-down" style={{ fontSize: '12px' }}></i>
                                    </Link>
                                    
                                    {/* This div is now correctly targeted by the CSS fix */}
                                    <div className="dropdown-submenu">
                                      {dropdownItem.subMenu.map((subItem, subIndex) => (
                                        <Link
                                          key={subIndex}
                                          to={subItem.path}
                                          className="submenu-item"
                                        >
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    to={dropdownItem.path}
                                    className="dropdown-item"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Phone + CTA */}
          <div className="header-right hide-mobile">
            {/* <a href={`tel:${COMPANY_INFO.phone}`} className="header-phone">
              📞 {COMPANY_INFO.phone}
            </a> */}
            <Button to="/contact" variant="primary" size="medium">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
