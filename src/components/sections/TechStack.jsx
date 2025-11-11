import React from 'react';
import SlideUp from '../animations/SlideUp';
import FadeIn from '../animations/FadeIn';
import Container from '../common/Container';
import Section from '../common/Section';
import './TechStack.css';

const TechStack = () => {
  // 1. Updated partners array to include logo paths
  // I'm assuming the path based on your previous files.
  const partners = [
    { name: 'APC', logo: '/assets/images/What-we-Do/partners/Apc.jpg' },
    { name: 'ARUBA', logo: '/assets/images/What-we-Do/partners/aruba.jpg' },
    { name: 'AVAYA', logo: '/assets/images/What-we-Do/partners/avaya.jpg' },
    { name: 'AZURE', logo: '/assets/images/What-we-Do/partners/Azure.jpg' },
    { name: 'CISCO', logo: '/assets/images/What-we-Do/partners/cisco.jpg' },
    { name: 'DELL', logo: '/assets/images/What-we-Do/partners/Dell.jpg' },
    { name: 'Eaton', logo: '/assets/images/What-we-Do/partners/Eaton.jpg' },
    { name: 'EVOKO', logo: '/assets/images/What-we-Do/partners/Evoko.jpg' },
    { name: 'FORTINET', logo: '/assets/images/What-we-Do/partners/Fortinet.jpg' },
    { name: 'FUSION', logo: '/assets/images/What-we-Do/partners/Fusion.jpg' },
    { name: 'GRANDSTREAM', logo: '/assets/images/What-we-Do/partners/Grandstream.jpg' },
    { name: 'HP', logo: '/assets/images/What-we-Do/partners/HP.jpg' },
    { name: 'HUAWEI', logo: '/assets/images/What-we-Do/partners/Huawei.jpg' },
    { name: 'K7', logo: '/assets/images/What-we-Do/partners/K7.jpg' },
    { name: 'LENOVO', logo: '/assets/images/What-we-Do/partners/Lenovo.jpg' },
    { name: 'LOCKTHREAT', logo: '/assets/images/What-we-Do/partners/LockThreat.jpg' },
    { name: 'MANAGEENGINE', logo: '/assets/images/What-we-Do/partners/ManageEngine.jpg' },
    { name: 'MAXHUB', logo: '/assets/images/What-we-Do/partners/Maxhub.jpg' },
    { name: 'Microsoft', logo: '/assets/images/What-we-Do/partners/Microsoft.jpg' },
    { name: 'PALOALTO', logo: '/assets/images/What-we-Do/partners/Paloalto.jpg' },
    { name: 'POLYCOM', logo: '/assets/images/What-we-Do/partners/Polycom.jpg' },
    { name: 'Quorum', logo: '/assets/images/What-we-Do/partners/Quorum.jpg' },
    { name: 'RUIJIE', logo: '/assets/images/What-we-Do/partners/ruijie.jpg' },
    { name: 'SYMANTEC', logo: '/assets/images/What-we-Do/partners/Symantec.jpg' },
    { name: 'TRELLIX', logo: '/assets/images/What-we-Do/partners/Trellix.jpg' },
    { name: 'VEAAM', logo: '/assets/images/What-we-Do/partners/Veeam.jpg' },
    { name: 'VMWARE', logo: '/assets/images/What-we-Do/partners/VMware.jpg' },
    { name: 'YEALINK', logo: '/assets/images/What-we-Do/partners/Yealink.jpg' }
  ];

  return (
    <Section background="primary" padding="large">
      <Container>
        <SlideUp className="text-center">
          <h2 className="section-title">Strategic Technology Partners</h2>
          <p className="section-subtitle">
            Partnering with industry leaders to deliver world-class solutions
          </p>
        </SlideUp>

        <FadeIn delay={0.3}>
          <div className="partners-grid">
            {/* 2. Updated loop to render <img> tags */}
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default TechStack;