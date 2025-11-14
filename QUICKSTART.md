# Quick Start Guide

Get your Afrisinc website running in 5 minutes!

## Prerequisites

Before you begin, make sure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Basic knowledge of React/Next.js (helpful but not required)

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages:
- Next.js 15
- React 19
- TailwindCSS
- Framer Motion
- Lucide Icons
- TypeScript

**Installation time**: ~2-3 minutes

### 2. Start Development Server

```bash
npm run dev
```

Your website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Open in Browser

Navigate to `http://localhost:3000` and you should see your beautiful Afrisinc website!

## What You'll See

The website includes these sections (in order):

1. **Navbar** - Sticky navigation with smooth scrolling
2. **Hero** - Bold headline with animated background
3. **About** - Company story, mission, vision, values
4. **Departments** - 4 main service areas with animated cards
5. **Why Choose Us** - 8 reasons to choose Afrisinc
6. **Contact** - Contact form and information
7. **Footer** - Links and social media

## Next Steps

### Customize Content

1. **Update company name & branding**:
   - [src/components/Hero.tsx](src/components/Hero.tsx) - Hero section
   - [src/components/Navbar.tsx](src/components/Navbar.tsx) - Logo

2. **Update contact info**:
   - [src/components/Contact.tsx](src/components/Contact.tsx) - Email, phone, address

3. **Update colors** (optional):
   - [tailwind.config.ts](tailwind.config.ts) - Brand colors

For detailed customization, see [CUSTOMIZATION.md](CUSTOMIZATION.md)

### Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

### Deploy to Vercel

Easiest deployment option:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Project Structure

```
afrisinc/
├── src/
│   ├── app/              # Next.js 15 App Router
│   │   ├── layout.tsx    # Root layout + SEO metadata
│   │   ├── page.tsx      # Home page (all sections)
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Departments.tsx
│       ├── WhyChooseUs.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/               # Static assets (add images here)
├── package.json          # Dependencies
├── tailwind.config.ts    # TailwindCSS config
└── tsconfig.json         # TypeScript config
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

## Troubleshooting

### Port 3000 already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Features Included

- ✅ Fully responsive design
- ✅ Smooth scroll animations (Framer Motion)
- ✅ SEO optimized
- ✅ Modern UI/UX
- ✅ Production-ready
- ✅ TypeScript support
- ✅ Mobile-first approach
- ✅ Fast page loads
- ✅ Accessible (WCAG compliant)

## Need Help?

- 📖 Read the full [README.md](README.md)
- 🎨 See [CUSTOMIZATION.md](CUSTOMIZATION.md) for styling
- 🚀 See [DEPLOYMENT.md](DEPLOYMENT.md) for going live
- 🐛 Found a bug? Check GitHub issues

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

---

**You're all set!** Start customizing your Afrisinc website. 🚀

For questions: info@afrisinc.com
