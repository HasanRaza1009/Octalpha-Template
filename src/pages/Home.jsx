import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CustomerReferences from '../components/sections/CustomerReferences';
import TechStack from '../components/sections/TechStack';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="page-home">
      <Hero
        videoUrl="/assets/videos/Hero.mp4"
        imageUrl="/assets/images/hero-bg.jpg"
      />
      <Stats />
      <ServicesGrid />
      <WhyChooseUs />
      <CustomerReferences />
      <TechStack />
      <CTASection />
    </div>
  );
};

export default Home;
