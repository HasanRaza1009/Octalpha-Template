import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Partners from './pages/Partners';

// Individual Service Pages
import ITInfrastructure from './pages/services/ITInfrastructure';
import Cybersecurity from './pages/services/Cybersecurity';
import GRC from './pages/services/GRC';
import CloudSolutions from './pages/services/CloudSolutions';
import DigitalCollaboration from './pages/services/DigitalCollaboration';
import ManagedServices from './pages/services/ManagedServices';
import CustomerJourney from './pages/services/CustomerJourney';
import ERP from './pages/services/ERP';

import './styles/index.css';
import './styles/animations.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />

            {/* Individual Service Pages */}
            <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/grc" element={<GRC />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/digital-collaboration" element={<DigitalCollaboration />} />
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/customer-journey" element={<CustomerJourney />} />
            <Route path="/services/erp" element={<ERP />} />

            {/* Cybersecurity Sub-pages */}
            <Route path="/services/risk-assessment" element={<Cybersecurity />} />
            <Route path="/services/vapt" element={<Cybersecurity />} />
            <Route path="/services/vciso" element={<Cybersecurity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
