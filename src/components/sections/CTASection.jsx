import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Container from '../common/Container';
import Section from '../common/Section';
import { COMPANY_INFO } from '../../utils/constants';
import './CTASection.css';

const CTASection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA
}) => {
  const ctaTitle = title || 'Ready to Transform Your IT Infrastructure?';
  const ctaSubtitle = subtitle || "Let's discuss how we can help your business scale faster and smarter";

  return (
    <Section className="cta-section" background="gradient" padding="large">
      <Container maxWidth="narrow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2 className="cta-title">{ctaTitle}</h2>
          <p className="cta-subtitle">{ctaSubtitle}</p>

          <div className="cta-buttons">
            <Button
              to={primaryCTA?.link || '/contact'}
              variant="primary"
              size="large"
            >
              {primaryCTA?.text || 'Schedule a Consultation'}
            </Button>
            <Button
              to={secondaryCTA?.link || '#'}
              variant="secondary"
              size="large"
            >
              {secondaryCTA?.text || 'Download Our Brochure'}
            </Button>
          </div>

          <div className="cta-contact-info">
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTASection;
