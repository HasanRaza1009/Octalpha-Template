import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const GRC = () => {
  return <ServicePage service={servicesData['grc']} />;
};

export default GRC;
