import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../common/Container';
import Section from '../common/Section';
import { COMPANY_STATS } from '../../utils/constants';
import './Stats.css';

const StatCounter = ({ value, label, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="stat-icon">
        <i className={`fa ${icon}`}></i>
      </div>
      <div className="stat-content">
        <div className="stat-number">{count}+</div>
        <div className="stat-label">{label}</div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <Section className="stats-section" background="gradient" padding="medium">
      <Container>
        <div className="stats-grid">
          <StatCounter
            value={COMPANY_STATS.happyClients}
            label="Happy Clients"
            icon="fa-users"
            delay={0.1}
          />
          <StatCounter
            value={COMPANY_STATS.finishedProjects}
            label="Finished Projects"
            icon="fa-check"
            delay={0.2}
          />
          <StatCounter
            value={COMPANY_STATS.vendors}
            label="Vendors"
            icon="fa-award"
            delay={0.3}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Stats;
