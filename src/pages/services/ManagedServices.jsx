import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const ManagedServices = () => {
  return <ServicePage service={servicesData['managed-services']} />;
};

export default ManagedServices;
