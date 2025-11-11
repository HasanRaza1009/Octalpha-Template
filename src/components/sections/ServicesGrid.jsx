import React from 'react';
import { Link } from 'react-router-dom';
import SlideUp from '../animations/SlideUp';
import StaggerContainer from '../animations/StaggerContainer';
import Card from '../common/Card';
import Container from '../common/Container';
import Section from '../common/Section';
import { CORE_SERVICES } from '../../utils/constants';
import './ServicesGrid.css';

const ServicesGrid = () => {
  return (
    <Section id="services" background="primary" padding="large">
      <Container>
        <SlideUp>
          <h2 className="section-title text-center">Our Core Services</h2>
        </SlideUp>

        <StaggerContainer className="services-grid" staggerDelay={0.1}>
          {CORE_SERVICES.map((service) => (
            <Card key={service.id} hover={true} className="service-card-wrapper">
              
              {/* 1. Background Image */}
              <div 
                className="service-bg-image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* 2. Dark Overlay */}
              <div className="service-overlay" />

              {/* 3. Content */}
              <div className="service-content">
                <div
                  className="service-icon"
                  style={{ color: service.color }} // You can keep color or make it white
                >
                  <i className={`fa ${service.icon} fa-2x`}></i>
                </div>
                <h3
                  className="service-title"
                  // style={{ color: service.color }} // Title looks better white
                >
                  {service.title}
                </h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </div>
            </Card>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default ServicesGrid;