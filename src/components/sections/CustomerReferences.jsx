import React from 'react';
import SlideUp from '../animations/SlideUp';
import StaggerContainer from '../animations/StaggerContainer';
import Card from '../common/Card';
import Container from '../common/Container';
import Section from '../common/Section';
import { CASE_STUDIES } from '../../utils/constants';
import './CustomerReferences.css';

const CustomerReferences = () => {
  return (
    <Section background="secondary" padding="large">
      <Container>
        <SlideUp className="text-center">
          <h2 className="section-title">Trusted by Leading Organizations</h2>
          <p className="section-subtitle">
            Over 50+ enterprise clients across GCC
          </p>
        </SlideUp>

        <StaggerContainer className="case-studies-grid" staggerDelay={0.2}>
          {CASE_STUDIES.map((caseStudy) => (
            <Card key={caseStudy.id} hover={true} className="case-study-card">
              <div className="case-study-header">
                <h3 className="case-study-industry">{caseStudy.industry}</h3>
                <span className="case-study-duration">{caseStudy.duration}</span>
              </div>

              <div className="case-study-services">
                <h4 className="services-label">Services Delivered:</h4>
                <ul className="services-list">
                  {caseStudy.services.slice(0, 6).map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                  {caseStudy.services.length > 6 && (
                    <li className="more-services">
                      +{caseStudy.services.length - 6} more services
                    </li>
                  )}
                </ul>
              </div>

              <div className="case-study-footer">
                <div className="achievement">
                  <span className="achievement-stat">{caseStudy.stat}</span>
                  <span className="achievement-text">{caseStudy.achievement}</span>
                </div>
              </div>
            </Card>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default CustomerReferences;
