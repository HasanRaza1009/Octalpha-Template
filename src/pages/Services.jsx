import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import SlideUp from '../components/animations/SlideUp';
import StaggerContainer from '../components/animations/StaggerContainer';
import CTASection from '../components/sections/CTASection';

const Services = () => {
  const serviceCategories = [
    {
      id: 'infrastructure',
      title: 'IT Infrastructure & Cloud Solutions',
      color: '#0072CE',
      description: 'Complete technology foundation for enterprise growth and digital transformation',
      services: [
        'IT Infrastructure Design & Implementation',
        'Data Center Building',
        'Virtualization & Applications',
        'Cloud Solutions (Azure, AWS, Oracle, Google)',
        'Unified Communications'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      color: '#0072CE',
      description: 'Comprehensive security solutions to protect your digital assets',
      services: [
        'Network Security (NGFW, IDS/IPS)',
        'Endpoint Security (EPP, EDR, MDM)',
        'Identity & Access Management (SSO, MFA, PAM)',
        'Threat Detection & Response (SIEM, XDR)',
        'Cloud Security (CASB, CSPM, WAF)',
        'VAPT & vCISO Services'
      ]
    },
    {
      id: 'grc',
      title: 'Governance, Risk & Compliance (GRC)',
      color: '#58B25B',
      description: 'Navigate complex regulatory landscapes with confidence',
      services: [
        'ISO 27001, ISO 27701, GDPR Compliance',
        'UAE PDPL, NESA UAE IAS',
        'PCI-DSS, HIPAA, NIST',
        'Risk Assessment & Mitigation',
        'Business Continuity Planning',
        'Vendor Risk Management'
      ]
    },
    {
      id: 'managed',
      title: 'Managed IT Services',
      color: '#58B25B',
      description: 'Let us manage your IT, so you can focus on your business',
      services: [
        'Annual Maintenance Contracts (AMC)',
        'Remote & Onsite Support',
        'Proactive System Maintenance',
        '24/7 Monitoring',
        'Backup & Disaster Recovery Management',
        'IT Asset & License Management'
      ]
    }
  ];

  return (
    <div className="page-services">
      <Hero
        title="Comprehensive IT Solutions for Modern Businesses"
        subtitle="From infrastructure to security, we deliver end-to-end technology excellence"
        height="60vh"
        imageUrl="/assets/images/cybersecurity-hero.jpg"
      />

      {serviceCategories.map((category, index) => (
        <Section
          key={category.id}
          id={category.id}
          background={index % 2 === 0 ? 'primary' : 'secondary'}
          padding="large"
        >
          <Container>
            <SlideUp>
              <h2 className="section-title" style={{ color: category.color }}>
                {category.title}
              </h2>
              <p className="section-subtitle">{category.description}</p>
            </SlideUp>

            <StaggerContainer className="services-grid" staggerDelay={0.1}>
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} hover={true}>
                  <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-sm)' }}>
                    {service}
                  </h4>
                </Card>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      ))}

      <CTASection
        title="Ready to Enhance Your IT Security?"
        subtitle="Contact us for a comprehensive assessment"
      />
    </div>
  );
};

export default Services;
