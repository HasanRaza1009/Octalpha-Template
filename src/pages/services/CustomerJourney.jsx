import React from 'react';
import ServicePage from '../ServicePage';
import { servicesData } from '../../data/serviceData';

const CustomerJourney = () => {
  return <ServicePage service={servicesData['customer-journey']} />;
};

export default CustomerJourney;
