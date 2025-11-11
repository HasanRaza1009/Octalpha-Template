import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { COMPANY_INFO } from '../../utils/constants';
import './Hero.css';

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  videoUrl,
  imageUrl,
  height = '100vh'
}) => {
  const [videoError, setVideoError] = useState(false);

  // Default values for homepage
  const heroTitle = title || COMPANY_INFO.tagline;
  const heroSubtitle = subtitle || COMPANY_INFO.subtitle;
  const heroDescription = description || `${COMPANY_INFO.yearsInBusiness} years of enabling UAE businesses through intelligent and secure IT solutions`;

  return (
    <section className="hero" style={{ minHeight: height }}>
      {/* Background Video or Image */}
      <div className="hero-background">
        {videoUrl && !videoError ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            poster={imageUrl || '/assets/images/hero-bg.jpg'}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${imageUrl || '/assets/images/hero-bg.jpg'})`
            }}
          />
        )}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="hero-text"
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            {heroSubtitle}
          </motion.p>
          {heroDescription && (
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-description"
            >
              {heroDescription}
            </motion.p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 120 }}
          className="hero-ctas"
        >
          {primaryCTA && (
            <Button
              to={primaryCTA.link || '/services'}
              variant="primary"
              size="large"
            >
              {primaryCTA.text || 'Explore Our Services'}
            </Button>
          )}
          {!primaryCTA && (
            <Button to="/services" variant="primary" size="large">
              Explore Our Services
            </Button>
          )}
          {secondaryCTA && (
            <Button
              to={secondaryCTA.link || '/contact'}
              variant="outline"
              size="large"
            >
              {secondaryCTA.text || 'Contact Us'}
            </Button>
          )}
          {!secondaryCTA && (
            <Button to="/contact" variant="outline" size="large">
              Contact Us
            </Button>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* <span className="scroll-arrow">↓</span> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
