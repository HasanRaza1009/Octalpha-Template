import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, FOOTER_QUICK_LINKS, FOOTER_SERVICES, SOCIAL_LINKS } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Company Info */}
        <div className="footer-column">
        <div className="footer-logo">
          <Link to="/">
            <img 
              src="/assets/images/What-we-Do/logo.png" 
              alt="Octalpha Logo" 
              className="footer-logo-image" 
            />
          </Link>
        </div>
          <p className="footer-tagline">{COMPANY_INFO.tagline}</p>
          <p className="footer-address">{COMPANY_INFO.address}</p>
          {/* Social Links */}
          <div className="footer-social">
            <a href={SOCIAL_LINKS.twitter} className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={SOCIAL_LINKS.facebook} className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={SOCIAL_LINKS.instagram} className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-links">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4 className="footer-column-title">Services</h4>
          <ul className="footer-links">
            {FOOTER_SERVICES.map((service, index) => (
              <li key={index}>
                <Link to={service.path} className="footer-link">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4 className="footer-column-title">Contact</h4>
          <ul className="footer-contact">
            <li>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
            </li>
            <li>
              <strong>Fax:</strong> {COMPANY_INFO.fax}
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </li>
            <li>
              <strong>Web:</strong>{' '}
              <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer">
                {COMPANY_INFO.website}
              </a>
            </li>
            <li>
              <strong>Hours:</strong> {COMPANY_INFO.workingHours}
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="separator">|</span>
            <Link to="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
          <p className="footer-built">Built with excellence in the UAE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
