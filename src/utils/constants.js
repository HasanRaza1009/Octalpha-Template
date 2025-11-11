// Constants and Data for the Octalpha Website

// Company Information
export const COMPANY_INFO = {
  name: 'Octalpha Business Solutions',
  tagline: 'Your End-to-End Technology Partner',
  subtitle: 'From Data Centers to Digital Transformation',
  yearsInBusiness: 10,
  address: '2408, 24th floor, Tower B, Business Central Towers, Dubai Internet City, Dubai, UAE',
  phone: '+971 4 242 4920',
  fax: '+971 4 242 4917',
  email: 'info.dxb@octalpha.com',
  website: 'www.octalpha.com',
  workingHours: 'Sunday - Thursday, 9:00 AM - 6:00 PM GST'
};

// Social Media Links
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/OctalphaS',
  facebook: 'https://www.facebook.com/octalphabusinesssolutions',
  linkedin: 'https://www.linkedin.com/company/octalpha/',
  instagram: 'https://www.instagram.com/octalpha_/?hl=en',
  youtube: '#'
};

// Navigation Items - Matching real OctAlpha website
export const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  {
    label: 'WHAT WE DO',
    path: '/services',
    dropdown: [
      { label: 'IT Infrastructure', path: '/services/it-infrastructure' },
      {
        label: 'Cybersecurity',
        path: '/services/cybersecurity',
        subMenu: [
          { label: 'Risk Assessment', path: '/services/risk-assessment' },
          { label: 'VAPT', path: '/services/vapt' },
          { label: 'VCISO', path: '/services/vciso' }
        ]
      },
      { label: 'GRC', path: '/services/grc' },
      { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
      { label: 'Digital Collaboration', path: '/services/digital-collaboration' },
      { label: 'Managed IT Solutions', path: '/services/managed-services' },
      { label: 'Customer Journey', path: '/services/customer-journey' },
      { label: 'ERP', path: '/services/erp' }
    ]
  },
  { label: 'PARTNERS', path: '/partners' },
  { label: 'CONTACT US', path: '/contact' }
];

// Core Services for Homepage Grid - All 8 services from real website
export const CORE_SERVICES = [
  {
    id: 1,
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure design, virtualization, servers, storage, networking, and structured cabling solutions',
    icon: 'fa-server',
    link: '/services/it-infrastructure',
    color: '#0072CE', 
    image: '/assets/images/What-we-Do/IT.png'
  },
  {
    id: 2,
    title: 'Cybersecurity',
    description: 'Next-Gen Firewalls, EDR, IAM, VAPT, vCISO, and comprehensive security frameworks',
    icon: 'fa-shield-alt',
    link: '/services/cybersecurity',
    color: '#0072CE', 
    image: '/assets/images/What-we-Do/cybersecurity.png'
  },
  {
    id: 3,
    title: 'Governance, Risk & Compliance (GRC)',
    description: 'Corporate policies, IT governance, risk management, business continuity, and compliance frameworks',
    icon: 'fa-gavel',
    link: '/services/grc',
    color: '#58B25B', 
    image: '/assets/images/What-we-Do/GRC.png'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Azure, AWS, Oracle, Google Cloud with cost optimization, migration, and containerization',
    icon: 'fa-cloud',
    link: '/services/cloud-solutions',
    color: '#0072CE' , 
    image: '/assets/images/What-we-Do/cloud.png'
  },
  {
    id: 5,
    title: 'Digital Collaboration',
    description: 'Modern collaboration tools and unified communication platforms for seamless teamwork',
    icon: 'fa-users',
    link: '/services/digital-collaboration',
    color: '#58B25B', 
    image: '/assets/images/What-we-Do/3_1.webp'
  },
  {
    id: 6,
    title: 'Managed IT Services',
    description: '24/7 monitoring, proactive maintenance, AMC contracts, backup & DR, and certified engineering support',
    icon: 'fa-cogs',
    link: '/services/managed-services',
    color: '#0072CE' ,
    image: '/assets/images/What-we-Do/managedIT_Right.jpg'
  },
  {
    id: 7,
    title: 'Customer Journey',
    description: 'End-to-end customer experience optimization and digital transformation strategies',
    icon: 'fa-route',
    link: '/services/customer-journey',
    color: '#58B25B',
    image: '/assets/images/What-we-Do/CRM.png'
  },
  {
    id: 8,
    title: 'ERP Solutions',
    description: 'SAP ERP implementations, Microsoft Retail Solutions, and comprehensive business process automation',
    icon: 'fa-cube',
    link: '/services/erp',
    color: '#0072CE', 
    image: '/assets/images/What-we-Do/ERP.png'
  }
];

// Stats from real website
export const COMPANY_STATS = {
  happyClients: 300,
  finishedProjects: 200,
  vendors: 50
};

// Value Propositions - Why Choose Octalpha (from real website)
export const VALUE_PROPOSITIONS = [
  {
    icon: 'fa-users',
    title: 'Multi-disciplinary Expertise',
    description: 'IT Infrastructure, Cloud, Cybersecurity, GRC, Data Centers, AV, and Managed Services under one roof'
  },
  {
    icon: 'fa-handshake',
    title: 'Flexible Engagement',
    description: 'Project-based, AMC, or contract models tailored to your business needs and budget'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Vendor-Agnostic',
    description: 'Best-fit solutions regardless of vendor, ensuring optimal performance and cost-effectiveness'
  },
  {
    icon: 'fa-award',
    title: 'UAE Compliance Expert',
    description: 'Deep knowledge of NESA, PCI DSS, ISO 27001, and local regulations for seamless compliance'
  },
  {
    icon: 'fa-dollar-sign',
    title: 'Competitive Pricing',
    description: 'High-quality solutions without compromising on quality, ensuring maximum ROI for your investment'
  },
  {
    icon: 'fa-rocket',
    title: 'Rapid Deployment',
    description: 'Quick procurement and deployment processes to get your solutions up and running faster'
  },
  {
    icon: 'fa-globe',
    title: 'GCC Experience',
    description: 'Over 10 years delivering IT transformation across the Gulf Cooperation Council region'
  }
];

// Client Benefits
export const CLIENT_BENEFITS = [
  {
    id: 1,
    title: 'Predictable IT Costs',
    description: 'Flexible SLAs with transparent pricing',
    icon: '💰'
  },
  {
    id: 2,
    title: 'Minimized Downtime',
    description: 'Proactive 24/7 monitoring prevents issues before impact',
    icon: '⏱️'
  },
  {
    id: 3,
    title: 'Expert Access',
    description: 'Certified experts without increasing headcount',
    icon: '👥'
  },
  {
    id: 4,
    title: 'Faster Resolution',
    description: 'Improved user productivity through rapid support',
    icon: '⚡'
  },
  {
    id: 5,
    title: 'Scalable Services',
    description: 'Solutions that grow with your business',
    icon: '📈'
  }
];

// Case Studies / Customer References
export const CASE_STUDIES = [
  {
    id: 1,
    industry: 'Major Retail Organization',
    duration: '5 years AMC',
    services: [
      'Data Center build',
      '160+ stores management',
      'DR site implementation',
      'IT Infrastructure',
      'Virtualization',
      'Backup and DR',
      'WLAN',
      'Exchange Server',
      'UPS & EMS',
      'EDR'
    ],
    achievement: 'Zero downtime across 160+ locations',
    stat: '160+'
  },
  {
    id: 2,
    industry: 'Financial Services Company',
    duration: '2 years AMC',
    services: [
      'vCISO for 2 years',
      'VAPT',
      'Data Center revamp',
      'DR site',
      'IT Infrastructure',
      'Virtualization',
      'Backup and DR',
      'Networking',
      'UPS & EMS',
      'Risk Assessment'
    ],
    achievement: 'Achieved ISO 27001 certification',
    stat: 'ISO 27001'
  },
  {
    id: 3,
    industry: 'Healthcare Provider',
    duration: '6 years AMC',
    services: [
      'IT Infrastructure',
      'Virtualization',
      'Networking',
      'DR site',
      'OPSWAT Sanitization',
      'PAM',
      'Manage Engine UEM & MDM',
      'Fortinet SIEM/NAC/Analyzer',
      'Data Center Power',
      'CCTV'
    ],
    achievement: 'HIPAA compliance maintained',
    stat: '6 Years'
  }
];

// Core Values for About Page
export const CORE_VALUES = [
  {
    id: 1,
    title: 'Excellence',
    description: 'Delivering world-class solutions without compromise',
    icon: '⭐'
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'Transparent communication and honest guidance',
    icon: '🤝'
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'Staying ahead with emerging technologies',
    icon: '💡'
  },
  {
    id: 4,
    title: 'Partnership',
    description: 'Long-term relationships built on trust',
    icon: '🔗'
  },
  {
    id: 5,
    title: 'Agility',
    description: 'Responsive service with local presence',
    icon: '🚀'
  }
];

// Industries
export const INDUSTRIES = [
  {
    id: 1,
    name: 'Retail & E-commerce',
    icon: '🛒',
    challenges: 'Omnichannel experience, inventory management, secure payments',
    solutions: 'Cloud infrastructure, POS systems, secure connectivity, 24/7 monitoring',
    reference: '160+ stores managed'
  },
  {
    id: 2,
    name: 'Financial Services',
    icon: '🏦',
    challenges: 'Regulatory compliance, data security, uptime requirements',
    solutions: 'ISO 27001, PCI DSS, vCISO, VAPT, secure infrastructure',
    reference: 'ISO 27001 certification achieved'
  },
  {
    id: 3,
    name: 'Healthcare',
    icon: '🏥',
    challenges: 'HIPAA compliance, patient data security, system reliability',
    solutions: 'Secure infrastructure, endpoint protection, compliance audits, DR planning',
    reference: 'HIPAA compliance maintained'
  },
  {
    id: 4,
    name: 'Education',
    icon: '🎓',
    challenges: 'Remote learning, student data protection, budget constraints',
    solutions: 'Cloud collaboration, network security, cost-effective infrastructure'
  },
  {
    id: 5,
    name: 'Manufacturing',
    icon: '🏭',
    challenges: 'IoT security, operational technology protection, supply chain',
    solutions: 'Industrial network security, monitoring, backup solutions'
  },
  {
    id: 6,
    name: 'Hospitality',
    icon: '🏨',
    challenges: 'Guest experience, Wi-Fi performance, payment security',
    solutions: 'Enterprise Wi-Fi, PCI compliance, guest management systems'
  }
];

// Service Interest Options for Contact Form
export const SERVICE_INTERESTS = [
  'IT Infrastructure & Cloud',
  'Cybersecurity Services',
  'GRC & Compliance',
  'Managed IT Services',
  'VAPT Assessment',
  'vCISO Services',
  'General Inquiry'
];

// Footer Quick Links
export const FOOTER_QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];

// Footer Services Links
export const FOOTER_SERVICES = [
  { label: 'IT Infrastructure', path: '/services/it-infrastructure' },
  { label: 'Cybersecurity', path: '/services/cybersecurity' },
  { label: 'GRC', path: '/services/grc' },
  { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
  { label: 'Managed IT Services', path: '/services/managed-services' },
  { label: 'ERP Solutions', path: '/services/erp' }
];
