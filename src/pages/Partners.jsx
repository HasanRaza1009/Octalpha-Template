import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import SlideUp from '../components/animations/SlideUp';
import StaggerContainer from '../components/animations/StaggerContainer';
import Card from '../components/common/Card';
import CTASection from '../components/sections/CTASection';
import './Partners.css';

// Define a reusable style for the partner logo cards
const cardContentStyle = {
  textAlign: 'center',
  padding: 'var(--spacing-md)',
  minHeight: '80px', // You can adjust this
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Partners = () => {
  // Updated partner categories with logo objects
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading global technology vendors we work with',
      partners: [
        { name: 'AVAYA', logo: '/assets/images/What-we-Do/partners/avaya.jpg' },
        { name: 'EVOKO', logo: '/assets/images/What-we-Do/partners/Evoko.jpg' },
        { name: 'GRANDSTREAM', logo: '/assets/images/What-we-Do/partners/Grandstream.jpg' },
        { name: 'MAXHUB', logo: '/assets/images/What-we-Do/partners/Maxhub.jpg' },
        { name: 'Microsoft', logo: '/assets/images/What-we-Do/partners/Microsoft.jpg' },
        { name: 'POLYCOM', logo: '/assets/images/What-we-Do/partners/Polycom.jpg' },
        { name: 'YEALINK', logo: '/assets/images/What-we-Do/partners/Yealink.jpg' }
      ]
    },
    {
      title: 'Security Partners',
      description: 'Cybersecurity solutions partners',
      partners: [
        { name: 'CISCO', logo: '/assets/images/What-we-Do/partners/cisco.jpg' },
        { name: 'FORTINET', logo: '/assets/images/What-we-Do/partners/Fortinet.jpg' },
        { name: 'K7', logo: '/assets/images/What-we-Do/partners/K7.jpg' },
        { name: 'LOCKTHREAT', logo: '/assets/images/What-we-Do/partners/LockThreat.jpg' },
        { name: 'MANAGEENGINE', logo: '/assets/images/What-we-Do/partners/ManageEngine.jpg' },
        { name: 'PALOALTO', logo: '/assets/images/What-we-Do/partners/Paloalto.jpg' },
        { name: 'Quorum', logo: '/assets/images/What-we-Do/partners/Quorum.jpg' },
        { name: 'SYMANTEC', logo: '/assets/images/What-we-Do/partners/Symantec.jpg' },
        { name: 'TRELLIX', logo: '/assets/images/What-we-Do/partners/Trellix.jpg' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud and infrastructure technology partners',
      partners: [
        { name: 'ARUBA', logo: '/assets/images/What-we-Do/partners/aruba.jpg' },
        { name: 'APC', logo: '/assets/images/What-we-Do/partners/Apc.jpg' },
        { name: 'AZURE', logo: '/assets/images/What-we-Do/partners/Azure.jpg' },
        { name: 'CISCO', logo: '/assets/images/What-we-Do/partners/cisco.jpg' },
        { name: 'DELL', logo: '/assets/images/What-we-Do/partners/Dell.jpg' },
        { name: 'Eaton', logo: '/assets/images/What-we-Do/partners/Eaton.jpg' },
        { name: 'HP', logo: '/assets/images/What-we-Do/partners/HP.jpg' },
        { name: 'HUAWEI', logo: '/assets/images/What-we-Do/partners/Huawei.jpg' },
        { name: 'LENOVO', logo: '/assets/images/What-we-Do/partners/Lenovo.jpg' },
        { name: 'Quorum', logo: '/assets/images/What-we-Do/partners/Quorum.jpg' },
        { name: 'RUIJIE', logo: '/assets/images/What-we-Do/partners/ruijie.jpg' },
        { name: 'VEAAM', logo: '/assets/images/What-we-Do/partners/Veeam.jpg' },
        { name: 'VMWARE', logo: '/assets/images/What-we-Do/partners/VMware.jpg' }
      ]
    },
    {
      title: 'Enterprise Software',
      description: 'Business applications and ERP partners',
      partners: [
        { name: 'AZURE', logo: '/assets/images/What-we-Do/partners/Azure.jpg' },
        { name: 'FUSION', logo: '/assets/images/What-we-Do/partners/Fusion.jpg' },
        { name: 'MANAGEENGINE', logo: '/assets/images/What-we-Do/partners/ManageEngine.jpg' },
        { name: 'Microsoft', logo: '/assets/images/What-we-Do/partners/Microsoft.jpg' },
        { name: 'VEAAM', logo: '/assets/images/What-we-Do/partners/Veeam.jpg' },
        { name: 'VMWARE', logo: '/assets/images/What-we-Do/partners/VMware.jpg' }
      ]
    }
  ];

  return (
    <div className="page-partners">
      <Hero
        title="Our Technology Partners"
        subtitle="Partnering with global leaders to deliver best-in-class solutions"
        description="We collaborate with the world's leading technology vendors to bring you innovative, reliable, and scalable IT solutions"
        height="100vh"
        videoUrl="/assets/videos/Hero.mp4"
      />

      {/* Introduction */}
      <Section background="primary" padding="large">
        <Container maxWidth="narrow">
          <SlideUp className="text-center">
            <h2 className="section-title">Strategic Partnerships</h2>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-body)' }}>
              At Octalpha, we maintain strong partnerships with over 50 leading technology vendors worldwide.
              These strategic relationships enable us to deliver cutting-edge solutions, competitive pricing,
              and expert support for our clients across the UAE and GCC region.
            </p>
          </SlideUp>
        </Container>
      </Section>

      {/* Partner Categories */}
      {partnerCategories.map((category, index) => (
        <Section
          key={index}
          background={index % 2 === 0 ? 'secondary' : 'primary'}
          padding="large"
        >
          <Container>
            <SlideUp className="text-center">
              <h2 className="section-title">{category.title}</h2>
              <p className="section-subtitle">{category.description}</p>
            </SlideUp>

            <StaggerContainer
              className="partners-grid"
              staggerDelay={0.05}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-xl)'
              }}
            >
              {/* UPDATED JSX TO RENDER LOGOS */}
              {category.partners.map((partner, partnerIndex) => (
                <Card key={partnerIndex} hover={true}>
                  <div style={cardContentStyle}>
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="partner-logo" // <-- Added class for styling
                    />
                  </div>
                </Card>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      ))}

      {/* Partnership Benefits */}
      <Section background="primary" padding="large">
        <Container maxWidth="narrow">
          <SlideUp className="text-center">
            <h2 className="section-title">Partnership Benefits</h2>
          </SlideUp>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)',
            marginTop: 'var(--spacing-xl)'
          }}>
            {[
              'Certified technical expertise on all partner technologies',
              'Access to latest products and solutions',
              'Competitive pricing through strategic partnerships',
              'Priority support and technical resources',
              'Regular training on new technologies and features',
              'Co-innovation opportunities with technology leaders'
            ].map((benefit, index) => (
              <SlideUp key={index} delay={0.1 * index}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--spacing-md)',
                  background: 'var(--color-bg-secondary)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-card)',
                  borderLeft: '4px solid var(--color-primary-blue)'
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-green) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <i className="fa fa-check"></i>
                  </div>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-body)',
                    margin: '6px 0 0 0',
                    flex: 1
                  }}>
                    {benefit}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Become a Partner"
        subtitle="Interested in partnering with Octalpha? Get in touch with us"
      />
    </div>
  );
};

export default Partners;