import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/common/Container';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import CTASection from '../components/sections/CTASection';
import SlideUp from '../components/animations/SlideUp';
import StaggerContainer from '../components/animations/StaggerContainer';
import './ServicePage.css';

const ServicePage = ({ service }) => {
  return (
    <div className="page-service">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        height="100vh"
        imageUrl={service.heroImage || '/assets/images/hero-bg.jpg'}
        videoUrl="/assets/videos/Hero.mp4"
      />

      {/* Introduction Section */}
      <Section background="primary" padding="large">
        <Container maxWidth="narrow">
          <SlideUp>
            <div className="service-intro">
              <h3>{service.introTitle}</h3>
              <div dangerouslySetInnerHTML={{ __html: service.introContent }} />
            </div>
          </SlideUp>
        </Container>
      </Section>

      {/* Service Features/Offerings */}
      {service.features && service.features.length > 0 && (
        <Section background="secondary" padding="large">
          <Container>
            <SlideUp className="text-center">
              <h2 className="section-title">{service.featuresTitle || 'Our Offerings'}</h2>
            </SlideUp>

            <StaggerContainer className="service-features-grid" staggerDelay={0.1}>
              {service.features.map((feature, index) => (
                <Card key={index} hover={true} className="feature-card">
                  {feature.image && (
                    <div className="feature-image">
                      <img src={feature.image} alt={feature.title} />
                    </div>
                  )}
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    {feature.items && feature.items.length > 0 && (
                      <ul className="feature-list">
                        {feature.items.map((item, idx) => (
                          <li key={idx}>
                            <i className="fa fa-check"></i> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {feature.description && <p>{feature.description}</p>}
                  </div>
                </Card>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Why Choose Section */}
      {service.whyChoose && service.whyChoose.length > 0 && (
        <Section background="primary" padding="large">
          <Container>
            <SlideUp className="text-center">
              <h2 className="section-title">Why Choose Octalpha?</h2>
            </SlideUp>

            <div className="why-choose-list">
              {service.whyChoose.map((reason, index) => (
                <SlideUp key={index} delay={0.1 * index}>
                  <div className="why-choose-item">
                    <div className="why-choose-icon">
                      <i className="fa fa-check-circle"></i>
                    </div>
                    <p>{reason}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today to discuss your requirements"
      />
    </div>
  );
};

export default ServicePage;
