import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const ERP = () => {
  return <ServicePage service={servicesData['erp']} />;
};

export default ERP;
