import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import StaggerContainer from '../components/animations/StaggerContainer';
import SlideUp from '../components/animations/SlideUp';
import CTASection from '../components/sections/CTASection';
import { INDUSTRIES } from '../utils/constants';

const Industries = () => {
  return (
    <div className="page-industries">
      <Hero
        title="Industry-Specific IT Solutions"
        subtitle="Tailored technology strategies for your sector"
        height="100vh"
        imageUrl="/assets/images/hero-bg.jpg"
        videoUrl="/assets/videos/Hero.mp4"
      />

      <Section background="primary" padding="large">
        <Container>
          <SlideUp className="text-center">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Delivering customized IT solutions across diverse sectors
            </p>
          </SlideUp>

          <StaggerContainer className="services-grid" staggerDelay={0.15}>
            {INDUSTRIES.map((industry) => (
              <Card key={industry.id} hover={true}>
                <div className="service-icon">{industry.icon}</div>
                <h3 className="service-title" style={{ color: 'var(--color-primary-blue)' }}>
                  {industry.name}
                </h3>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', fontSize: '14px' }}>
                    Challenges:
                  </strong>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '4px 0' }}>
                    {industry.challenges}
                  </p>
                </div>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong style={{ color: 'var(--color-text-primary)', fontSize: '14px' }}>
                    Our Solutions:
                  </strong>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '4px 0' }}>
                    {industry.solutions}
                  </p>
                </div>
                {industry.reference && (
                  <div style={{ marginTop: 'var(--spacing-sm)', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid var(--color-bg-border)' }}>
                    <span style={{ color: 'var(--color-primary-green)', fontSize: '13px', fontWeight: 600 }}>
                      ✓ {industry.reference}
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <CTASection
        title="Don't See Your Industry?"
        subtitle="We customize solutions for any sector"
      />
    </div>
  );
};

export default Industries;
