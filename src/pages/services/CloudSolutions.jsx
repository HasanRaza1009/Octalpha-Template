import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const CloudSolutions = () => {
  return <ServicePage service={servicesData['cloud-solutions']} />;
};

export default CloudSolutions;
