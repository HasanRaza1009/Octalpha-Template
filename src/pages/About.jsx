import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TechStack from '../components/sections/TechStack';
import SlideUp from '../components/animations/SlideUp';
import StaggerContainer from '../components/animations/StaggerContainer';
import CTASection from '../components/sections/CTASection';
import { CORE_VALUES, COMPANY_INFO } from '../utils/constants';

const About = () => {
  return (
    <div className="page-about">
      <Hero
        title="About Octalpha Business Solutions"
        subtitle={`${COMPANY_INFO.yearsInBusiness} Years of Technology Excellence in the UAE`}
        height="100vh"
        imageUrl="/assets/images/hero-bg.jpg"
        videoUrl="/assets/videos/Hero.mp4"
      />

      {/* Company Story */}
      <Section background="primary" padding="large">
        <Container maxWidth="narrow">
          <SlideUp className="text-center">
            <h2 className="section-title">Your End-to-End Technology Partner</h2>
            <h3 style={{ color: 'var(--color-primary-blue)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-h3)' }}>
              From Data Centers to Digital Transformation
            </h3>
            <div style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)', textAlign: 'left' }}>
              <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: '600' }}>
                <strong>Octalpha Business Solutions</strong> is a UAE-based technology partner focused on enabling businesses through intelligent and secure IT solutions for the past 10 years.
              </p>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                We have helped various organizations scale faster and smarter with tailored services in IT infrastructure, cybersecurity, data center support, cloud enablement, compliance, and managed services.
              </p>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                Backed by strategic vendor alliances and a strong local presence, we deliver high-impact, cost-effective solutions — from office IT setups and networking to complex enterprise-level integrations.
              </p>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>
                Our lean, expert-driven team ensures agility, accountability, and personalized service for every project.
              </p>
              <p style={{ marginBottom: 'var(--spacing-md)', fontWeight: '600' }}>
                At Octalpha, we don't just supply IT — we deliver business continuity, operational efficiency, and technology-led growth.
              </p>
            </div>
          </SlideUp>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="secondary" padding="large">
        <Container>
          <div className="two-col">
            <SlideUp>
              <Card>
                <h3 style={{ color: 'var(--color-primary-blue)', marginBottom: 'var(--spacing-md)' }}>
                  Our Mission
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)' }}>
                  To enable businesses through intelligent and secure IT solutions that drive growth and operational efficiency
                </p>
              </Card>
            </SlideUp>
            <SlideUp delay={0.2}>
              <Card>
                <h3 style={{ color: 'var(--color-primary-green)', marginBottom: 'var(--spacing-md)' }}>
                  Our Vision
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)' }}>
                  To be the most trusted technology partner for enterprises across the GCC region
                </p>
              </Card>
            </SlideUp>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="primary" padding="large">
        <Container>
          <SlideUp className="text-center">
            <h2 className="section-title">Our Core Values</h2>
          </SlideUp>

          <StaggerContainer className="benefits-grid" staggerDelay={0.1}>
            {CORE_VALUES.map((value) => (
              <Card key={value.id} hover={true}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-sm)' }}>
                    {value.icon}
                  </div>
                  <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xs)', fontSize: 'var(--font-size-h4)' }}>
                    {value.title}
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)' }}>
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <WhyChooseUs />
      <TechStack />

      {/* Location */}
      <Section background="secondary" padding="large">
        <Container maxWidth="narrow">
          <SlideUp className="text-center">
            <h2 className="section-title">Our Location</h2>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
              {COMPANY_INFO.address}
            </p>
            <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-bg-primary)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '48px' }}>🗺️</span>
            </div>
          </SlideUp>
        </Container>
      </Section>

      <CTASection
        title="Ready to Partner With Us?"
        subtitle="Let's build something great together"
      />
    </div>
  );
};

export default About;
