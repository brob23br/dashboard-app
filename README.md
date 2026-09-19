# Brandon Robinson — Personal Portfolio

A responsive single-page portfolio presenting professional experience, AWS project walkthroughs, and personal interests. Built with Next.js and deployed on Vercel.

## Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.7 |
| UI | React 19, Tailwind CSS 3.4, Radix UI |
| Animation | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel |

## Project Structure

```
dashboard-app/
└── brandon_portfolio/          # Next.js application root
    ├── app/
    │   ├── components/         # Page sections and Radix-based UI primitives
    │   ├── data/               # Static portfolio content
    │   ├── hooks/              # Custom React hooks
    │   ├── lib/                # Shared types and utilities
    │   ├── layout.tsx          # Root layout, theming, metadata
    │   ├── page.tsx            # Home page composition
    │   └── globals.css         # Global styles
    ├── public/
    │   ├── Demos/              # Published AWS walkthroughs (static HTML)
    │   ├── images/             # Gallery photography
    │   └── videos/             # Gallery video clips
    ├── next.config.js
    ├── tailwind.config.ts
    └── vercel.json
```

## Page Sections

| Component | Purpose |
|-----------|---------|
| `navigation` | Fixed header with smooth scrolling and mobile menu |
| `hero` | Introduction and headline skills |
| `projects` | AWS demos and technical walkthroughs |
| `experience` | Professional history |
| `interests` | Personal interests and an image/video gallery with lightbox |
| `contact` | Contact details and social links |

## Getting Started

Requires Node.js 20 or later.

```bash
cd brandon_portfolio
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment Variables

All variables are optional.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used to resolve Open Graph and canonical metadata |

## Deployment

The project deploys to Vercel from the `brandon_portfolio` directory. Vercel detects the Next.js framework via `vercel.json`; pushes to `main` trigger a production deployment.

## License

MIT
