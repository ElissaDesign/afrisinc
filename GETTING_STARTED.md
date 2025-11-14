# Getting Started with Afrisinc Website

Welcome to your new production-ready Afrisinc website! This guide will help you get up and running quickly.

## What You Have

A complete, modern website featuring:

- **Next.js 15** - Latest React framework with App Router
- **TailwindCSS** - Modern utility-first CSS
- **Framer Motion** - Smooth, professional animations
- **TypeScript** - Type safety and better developer experience
- **Full Responsive Design** - Works on all devices
- **SEO Optimized** - Ready for search engines
- **Production Ready** - Deploy immediately

## Three Quick Steps

### Step 1: Install (2 minutes)

```bash
npm install
```

### Step 2: Run (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Step 3: Deploy (5 minutes)

```bash
npm i -g vercel
vercel
```

**Done!** Your site is live.

## What's Included

### 🎨 **6 Main Sections**

1. **Hero** - Bold headline with animated background
2. **About** - Company story, mission, vision, values
3. **Departments** - 4 service areas (Media, Tech, Commerce, Consulting)
4. **Why Choose Us** - 8 compelling reasons
5. **Contact** - Form + contact information
6. **Footer** - Links and social media

### 🧩 **7 Components**

All located in `src/components/`:
- Navbar.tsx
- Hero.tsx
- About.tsx
- Departments.tsx
- WhyChooseUs.tsx
- Contact.tsx
- Footer.tsx

### 📚 **5 Documentation Files**

1. **QUICKSTART.md** ← Start here (5 min read)
2. **README.md** ← Full documentation
3. **CUSTOMIZATION.md** ← How to customize
4. **DEPLOYMENT.md** ← How to deploy
5. **PROJECT_STRUCTURE.md** ← File structure

## First Customizations

### 1. Update Contact Information (2 minutes)

Edit `src/components/Contact.tsx`:

```typescript
// Line 57
detail: 'your-email@afrisinc.com',

// Line 64
detail: '+27 (0) 123 456 789',

// Line 71
detail: 'Your City, Country',
```

### 2. Update Social Media Links (1 minute)

Same file, lines 76-79:

```typescript
{ icon: Linkedin, link: 'https://linkedin.com/company/afrisinc' },
{ icon: Twitter, link: 'https://twitter.com/afrisinc' },
// etc.
```

### 3. Customize Colors (Optional)

Edit `tailwind.config.ts` - See [CUSTOMIZATION.md](CUSTOMIZATION.md#brand-colors)

## File Overview

```
afrisinc/
├── src/
│   ├── app/
│   │   ├── layout.tsx    ← SEO metadata
│   │   ├── page.tsx      ← Main page
│   │   └── globals.css   ← Global styles
│   └── components/       ← All sections
├── public/               ← Add images here
├── package.json          ← Dependencies
└── tailwind.config.ts    ← Colors & theme
```

## Common Tasks

### Add an Image

1. Place image in `public/images/your-image.jpg`
2. Use in component:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Change Text Content

Navigate to the relevant component in `src/components/` and edit the text directly.

### Change Colors

Edit `tailwind.config.ts` → See full guide in [CUSTOMIZATION.md](CUSTOMIZATION.md)

### Deploy

**Vercel** (Recommended):
```bash
vercel
```

**Netlify**:
```bash
netlify deploy --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for all options.

## Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint
```

## Key Features Explained

### Animations

Powered by Framer Motion:
- Scroll-triggered fade-ins
- Staggered card animations
- Smooth hover effects
- Scroll-to-top button

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly on mobile
- Optimized for all screen sizes

### SEO

Pre-configured in `src/app/layout.tsx`:
- Meta description
- OpenGraph tags
- Twitter cards
- Structured data ready

### Performance

- Automatic code splitting
- Image optimization
- Font optimization
- CSS purging (removes unused styles)

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| Next.js | Framework | 15.0 |
| React | UI Library | 19.0 |
| TypeScript | Type Safety | 5.3 |
| TailwindCSS | Styling | 3.4 |
| Framer Motion | Animations | 11.0 |
| Lucide React | Icons | 0.344 |

## Learning Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Project Docs
- **Quick Setup**: [QUICKSTART.md](QUICKSTART.md)
- **Customization**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Structure**: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## Support & Help

### Troubleshooting

**Port 3000 in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
```

**Build errors?**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

**Module not found?**
```bash
npm install
```

### Getting Help

1. Check documentation files
2. Review component code (well-commented)
3. Check Next.js/TailwindCSS docs
4. GitHub issues (if applicable)

## Next Steps

### Now
1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ View at `localhost:3000`

### Soon
1. 📝 Update contact information
2. 🎨 Customize colors (optional)
3. 📸 Add real images
4. 🚀 Deploy to Vercel

### Later
1. 📧 Set up contact form backend
2. 📊 Add analytics (Google Analytics)
3. 🔍 Submit to search engines
4. 📱 Add more content/pages

## Project Checklist

Before deploying to production:

- [ ] Update all contact information
- [ ] Update social media links
- [ ] Replace placeholder images
- [ ] Test contact form
- [ ] Update SEO metadata
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Add favicon (optional)
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (optional)

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Create production build
npm start            # Run production build
npm run lint         # Check for code issues

# Deployment
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
netlify deploy       # Deploy to Netlify
```

## File You'll Edit Most

1. **Components** (`src/components/*.tsx`) - Content & structure
2. **Tailwind Config** (`tailwind.config.ts`) - Colors & styling
3. **Layout** (`src/app/layout.tsx`) - SEO metadata

## Files You Won't Touch

- `next.config.js` - Advanced config only
- `tsconfig.json` - TypeScript settings
- `postcss.config.mjs` - Build tools
- `.eslintrc.json` - Linting rules

---

## You're Ready! 🚀

Your Afrisinc website is production-ready. Start with:

1. Read [QUICKSTART.md](QUICKSTART.md) (5 min)
2. Run `npm install && npm run dev`
3. Open `localhost:3000`
4. Start customizing!

**Questions?** Check the documentation files or email: tech@afrisinc.com

**Good luck!** Built with ❤️ for African innovation.

---

*Last updated: 2025*
