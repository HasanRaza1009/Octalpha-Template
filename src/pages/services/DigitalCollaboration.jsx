import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const DigitalCollaboration = () => {
  return <ServicePage service={servicesData['digital-collaboration']} />;
};

export default DigitalCollaboration;
