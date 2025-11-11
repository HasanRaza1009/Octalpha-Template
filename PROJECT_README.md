# Octalpha Business Solutions Website

A fully responsive, modern website for Octalpha Business Solutions built with React, Vite, and Framer Motion.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions using Framer Motion
- ✅ 5 complete pages (Home, Services, Industries, About, Contact)
- ✅ Dark modern theme with brand colors
- ✅ Contact form with validation
- ✅ Mobile-friendly navigation with slide-in menu
- ✅ Scroll-triggered animations
- ✅ SEO-optimized with meta tags

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Animations:** Framer Motion 12
- **Styling:** CSS3 with CSS Variables
- **Scroll Detection:** React Intersection Observer 10

## Project Structure

```
octa-revised/
├── public/
│   └── assets/
│       ├── images/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── animations/    # Animation wrapper components
│   │   ├── common/        # Reusable components (Button, Card, etc.)
│   │   ├── layout/        # Header, Footer, Navigation
│   │   └── sections/      # Page sections (Hero, ServicesGrid, etc.)
│   ├── pages/             # All page components
│   ├── styles/            # Global styles and CSS variables
│   ├── utils/             # Constants and helper functions
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # Application entry point
├── index.html             # Root HTML file
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## Pages

1. **Home** (`/`) - Hero, Services Grid, Why Choose Us, Customer References, Tech Partners, CTA
2. **Services** (`/services`) - Detailed breakdown of all services with sections
3. **Industries** (`/industries`) - Industry-specific solutions
4. **About** (`/about`) - Company story, mission, vision, values, location
5. **Contact** (`/contact`) - Contact form and company information

## Design System

### Colors
- Primary Blue: `#0072CE`
- Primary Green: `#58B25B`
- Accent Blue: `#2E75B6`
- Dark Background: `#0a0e27`
- Secondary Background: `#1a1f3a`

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes using CSS variables

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1024px
- Desktop: 1025px - 1440px
- Large Desktop: 1441px+

## Components

### Common Components
- **Button** - Multi-variant button (primary, secondary, tertiary, outline)
- **Card** - Container with hover effects
- **Container** - Centered content container with max-width
- **Section** - Full-width section with padding and background options

### Animation Components
- **FadeIn** - Fade in on scroll
- **SlideUp** - Slide up + fade in on scroll
- **StaggerContainer** - Stagger children animations

### Layout Components
- **Header** - Sticky header with navigation and mobile menu
- **Footer** - 4-column footer with company info
- **MobileMenu** - Slide-in mobile navigation

### Section Components
- **Hero** - Full-screen hero with video/image background
- **ServicesGrid** - Service cards grid
- **WhyChooseUs** - Value propositions and client benefits
- **CustomerReferences** - Case study cards
- **TechStack** - Partner logos grid
- **CTASection** - Call-to-action with gradient background
- **ContactForm** - Contact form with validation

## Company Information

**Octalpha Business Solutions**
- Address: 2408, 24th floor, Tower B, Business Central Towers, Dubai Internet City, Dubai, UAE
- Phone: +971 4 242 4920
- Email: info.dxb@octalpha.com
- Website: www.octalpha.com

## Assets

Place images and videos in:
- `public/assets/images/` - All images
- `public/assets/images/services/` - Service-specific images
- `public/assets/images/partners/` - Partner logos
- `public/assets/videos/` - Video files

The application has fallback handling for missing assets.

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 13+
- Chrome Mobile (Android 8+)

## Performance

- Code splitting with React.lazy()
- Lazy loading for images
- GPU-accelerated animations
- Optimized bundle size with tree shaking
- Respects prefers-reduced-motion

## License

© 2025 Octalpha Business Solutions. All rights reserved.
