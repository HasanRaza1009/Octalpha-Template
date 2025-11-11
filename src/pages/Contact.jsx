import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import ContactForm from '../components/sections/ContactForm';
import { COMPANY_INFO } from '../utils/constants';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-contact">
      <Hero
        title="Let's Transform Your IT Infrastructure"
        subtitle="Get in touch with our experts"
        height="100vh"
        videoUrl="/assets/videos/Hero.mp4"
        imageUrl="/assets/images/hero-bg.jpg"
      />

      <Section background="primary" padding="large">
        <Container>
          <div className="contact-layout">
            {/* Left Column: Contact Info */}
            <div className="contact-info-column">
              <h3 className="contact-info-title">Get In Touch</h3>

              <div className="contact-info-section">
                <h4 className="info-section-title">Office Details</h4>
                <div className="info-item">
                  <strong>Company:</strong> {COMPANY_INFO.name}
                </div>
                <div className="info-item">
                  <strong>Address:</strong> {COMPANY_INFO.address}
                </div>
              </div>

              <div className="contact-info-section">
                <h4 className="info-section-title">Contact Information</h4>
                <div className="info-item">
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                </div>
                <div className="info-item">
                  <strong>Fax:</strong> {COMPANY_INFO.fax}
                </div>
                <div className="info-item">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </div>
                <div className="info-item">
                  <strong>Website:</strong>{' '}
                  <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer">
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>

              <div className="contact-info-section">
                <h4 className="info-section-title">Working Hours</h4>
                <div className="info-item">{COMPANY_INFO.workingHours}</div>
              </div>

              <div className="contact-info-section">
              <h4 className="info-section-title">Location Map</h4>
              {/* The <iframe> is now inside the placeholder div */}
              <div className="map-placeholder">
                {/* {<iframe
                  src=""
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Octalpha Office Location"
                ></iframe>} */}
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  verticalAlign: 'middle',
                  marginRight: 8
                }}
                aria-label="Map Icon"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{display: 'block'}} xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6.44 12.52 6.71 12.8.19.2.48.2.67 0C12.56 21.52 19 14.25 19 9c0-3.87-3.13-7-7-7Zm0 17.3C10.05 16.17 7 12.28 7 9a5 5 0 0 1 10 0c0 3.28-3.05 7.17-5 10.3ZM12 11.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Zm0-4A1.5 1.5 0 1 1 12 11a1.5 1.5 0 0 1 0-3Z" fill="#3498db"/>
                </svg>
              </span>
              </div>
            </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-column">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Ways to Reach */}
      {/* <Section background="secondary" padding="medium">
        <Container maxWidth="narrow">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
              Other Ways to Reach Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)' }}>
              <p>
                Prefer to talk? Call us at{' '}
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                Email us directly at{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>Visit our office in Dubai Internet City</p>
            </div>
          </div>
        </Container>
      </Section> */}
    </div>
  );
};

export default Contact;
