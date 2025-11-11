import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const Cybersecurity = () => {
  return <ServicePage service={servicesData['cybersecurity']} />;
};

export default Cybersecurity;
