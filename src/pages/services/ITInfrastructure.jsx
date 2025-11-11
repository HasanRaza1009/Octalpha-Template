import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const ITInfrastructure = () => {
  return <ServicePage service={servicesData['it-infrastructure']} />;
};

export default ITInfrastructure;
