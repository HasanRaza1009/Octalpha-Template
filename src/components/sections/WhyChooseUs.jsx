import React from 'react';
import SlideUp from '../animations/SlideUp';
import StaggerContainer from '../animations/StaggerContainer';
import FadeIn from '../animations/FadeIn';
import Container from '../common/Container';
import Section from '../common/Section';
import Card from '../common/Card';
import { VALUE_PROPOSITIONS, CLIENT_BENEFITS } from '../../utils/constants';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <Section background="primary" padding="large">
      <Container>
        <div className="why-choose-section">
          {/* Header */}
          <SlideUp className="why-choose-header text-center">
            <h2 className="section-title">Why Choose Octalpha?</h2>
            <p className="section-subtitle">
              Over 10 years delivering IT transformation across GCC markets
            </p>
          </SlideUp>

          {/* Value Propositions Grid */}
          <StaggerContainer className="why-choose-grid" staggerDelay={0.1}>
            {VALUE_PROPOSITIONS.map((proposition, index) => (
              <Card key={index} hover={true} className="value-prop-card">
                <div className="value-icon">
                  <i className={`fa ${proposition.icon}`}></i>
                </div>
                <h4 className="value-title">{proposition.title}</h4>
                <p className="value-description">{proposition.description}</p>
              </Card>
            ))}
          </StaggerContainer>

          {/* Client Benefits Grid */}
          <div className="benefits-section">
            <SlideUp>
              <h3 className="benefits-title text-center">Client Benefits</h3>
            </SlideUp>
            <StaggerContainer className="benefits-grid" staggerDelay={0.1}>
              {CLIENT_BENEFITS.map((benefit) => (
                <Card key={benefit.id} hover={true} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
