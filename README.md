# Brandon Robinson - Personal Portfolio

A modern, responsive personal portfolio website showcasing professional experience, technical projects, and achievements. Built with Next.js 14, TypeScript, and deployed on Vercel with custom domain integration.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)

## 🚀 Live Demo

**Website:** [Your Custom Domain] (Hosted on Vercel with Route53)  
**Repository:** [GitHub - brob23br](https://github.com/brob23br)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Components Overview](#components-overview)
- [Performance & SEO](#performance--seo)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design:** Mobile-first approach with seamless desktop experience
- **Smooth Animations:** Framer Motion powered transitions and micro-interactions
- **Glass Morphism:** Modern glass effects and gradient backgrounds
- **Dark/Light Theme:** Automatic theme switching based on user preference
- **Accessibility:** WCAG compliant with proper ARIA labels and keyboard navigation

### 🧩 Interactive Components
- **Dynamic Navigation:** Smooth scrolling with active section highlighting
- **Project Showcase:** Categorized portfolio with filtering and search
- **Experience Timeline:** Interactive career progression display
- **Fitness Integration:** Mock Strava API with activity charts and statistics
- **Contact Form:** Functional contact system with form validation

### 📊 Data Visualization
- **Charts & Graphs:** Interactive fitness metrics using Chart.js and Recharts
- **Progress Indicators:** Skill proficiency and certification progress
- **Activity Maps:** Geographic visualization of fitness activities
- **Statistics Dashboard:** Real-time metrics and achievements

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.2
- **Styling:** Tailwind CSS 3.3
- **Animations:** Framer Motion 10.18
- **Icons:** Lucide React
- **UI Components:** Radix UI Primitives

### Data & State Management
- **State:** React Hooks & Context API
- **Data Fetching:** SWR & TanStack Query
- **Forms:** React Hook Form with Zod validation
- **Charts:** Chart.js, Recharts, Plotly.js

### Development Tools
- **Build Tool:** Next.js with SWC
- **Linting:** ESLint with TypeScript rules
- **Formatting:** Prettier
- **Type Checking:** TypeScript strict mode
- **Package Manager:** npm with legacy peer deps

### Deployment & Hosting
- **Primary:** Vercel (Recommended)
- **Alternative:** AWS S3 + CloudFront
- **Domain:** Route53 DNS management
- **CI/CD:** Automated deployment pipelines

## 📁 Project Structure

```
dashboard-app/
├── brandon_portfolio/
│   └── app/
│       ├── app/                    # Next.js App Router
│       │   ├── layout.tsx         # Root layout
│       │   └── page.tsx           # Home page
│       ├── components/            # React components
│       │   ├── ui/               # Reusable UI components
│       │   ├── navigation.tsx    # Main navigation
│       │   ├── hero.tsx         # Hero section
│       │   ├── projects.tsx     # Projects showcase
│       │   ├── experience.tsx   # Work experience
│       │   ├── interests.tsx    # Personal interests
│       │   ├── strava-section.tsx # Fitness tracking
│       │   └── contact.tsx      # Contact form
│       ├── data/                 # Static data files
│       ├── hooks/                # Custom React hooks
│       ├── lib/                  # Utility functions
│       ├── public/               # Static assets
│       └── package.json          # Dependencies
├── deployment/                   # Deployment scripts
│   ├── deploy-static.sh         # Linux/Mac deployment
│   ├── deploy-static.bat        # Windows deployment
│   └── amplify.yml              # AWS Amplify config
├── docs/                        # Documentation
│   ├── DEPLOYMENT_GUIDE.md      # Deployment instructions
│   ├── DEPLOYMENT_CHECKLIST.md  # Pre-deployment checklist
│   └── DEPLOYMENT_STATUS.md     # Current status
└── brandon_portfolio_content.json # Portfolio data
```

## 🚀 Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or v20.0.0+
- **npm:** v8.0.0+ (or yarn/pnpm)
- **Git:** Latest version

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brob23br/portfolio.git
   cd portfolio/dashboard-app
   ```

2. **Install dependencies:**
   ```bash
   cd brandon_portfolio/app
   npm install --legacy-peer-deps
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Environment Setup

Create a `.env.local` file in the `app` directory:

```env
# Optional: Add environment variables for external APIs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAVA_CLIENT_ID=your_strava_client_id
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel:**
   - Import project from GitHub
   - Configure build settings:
     - Build Command: `cd brandon_portfolio/app && npm install --legacy-peer-deps && npm run build`
     - Output Directory: `brandon_portfolio/app/.next`

2. **Custom Domain:**
   - Add your Route53 domain in Vercel dashboard
   - Update DNS records as instructed

### Option 2: AWS S3 + CloudFront

1. **Build static export:**
   ```bash
   cd brandon_portfolio/app
   npm run build
   ```

2. **Deploy using script:**
   ```bash
   # Linux/Mac
   chmod +x ../../deploy-static.sh
   ../../deploy-static.sh
   
   # Windows
   ../../deploy-static.bat
   ```

### Option 3: Manual Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🧩 Components Overview

### Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Navigation` | Site navigation | Smooth scrolling, mobile menu, scroll effects |
| `Hero` | Landing section | Animated introduction, skill badges |
| `Projects` | Portfolio showcase | Categorized projects, filtering, status badges |
| `Experience` | Work history | Timeline layout, detailed descriptions |
| `Interests` | Personal interests | Interactive cards, hobby showcase |
| `StravaSection` | Fitness tracking | Mock API integration, charts, statistics |
| `Contact` | Contact form | Form validation, social links |

### UI Components

Built with Radix UI primitives for accessibility and customization:
- Cards, Buttons, Badges
- Navigation Menu, Dropdown
- Progress indicators, Tooltips
- Form inputs, Date pickers

## 📈 Performance & SEO

### Performance Optimizations
- **Static Site Generation:** Pre-rendered pages for optimal loading
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic bundle splitting and lazy loading
- **Caching:** Aggressive caching strategies for static assets

### SEO Features
- **Meta Tags:** Dynamic meta descriptions and Open Graph tags
- **Structured Data:** JSON-LD schema markup
- **Sitemap:** Automatic sitemap generation
- **Analytics:** Ready for Google Analytics integration

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
npm run export       # Export static files
npm run deploy       # Deploy to configured platform
```

### Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Custom rules for React and TypeScript
- **Prettier:** Consistent code formatting
- **Husky:** Pre-commit hooks for quality checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Brandon Robinson**  
- **Email:** brob23.br@gmail.com
- **GitHub:** [@brob23br](https://github.com/brob23br)
- **LinkedIn:** Available on request
- **Location:** Charlotte, NC

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment platform
- **Tailwind CSS** - For utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Radix UI** - For accessible component primitives

---

**Built with ❤️ by Brandon Robinson**

*This portfolio demonstrates modern web development practices, cloud deployment expertise, and professional presentation skills. It serves as both a showcase of technical abilities and a platform for career advancement in cloud computing and solutions architecture.*