# Afrisinc - Official Website

A modern, production-ready website for Afrisinc, an international parent company based in Africa, built with Next.js 15, TailwindCSS, and Framer Motion.

## Features

- **Next.js 15** with App Router
- **TailwindCSS** for styling
- **Framer Motion** for smooth animations
- **Lucide Icons** for beautiful icons
- **Fully Responsive** design
- **SEO Optimized** with metadata
- **Production Ready**

## Project Structure

```
afrisinc/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main landing page
│   │   ├── globals.css          # Global styles
│   │   └── favicon.ico          # Favicon
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section
│       ├── Departments.tsx      # Our departments section
│       ├── WhyChooseUs.tsx      # Why choose us section
│       ├── Contact.tsx          # Contact section with form
│       └── Footer.tsx           # Footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.mjs
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## Customization Guide

### Update Company Information

1. **Contact Details** - Edit [src/components/Contact.tsx](src/components/Contact.tsx):
   - Email: Line 57
   - Phone: Line 64
   - Address: Line 71

2. **Social Media Links** - Edit [src/components/Contact.tsx](src/components/Contact.tsx):
   - Lines 76-79

3. **SEO Metadata** - Edit [src/app/layout.tsx](src/app/layout.tsx):
   - Lines 12-30

### Update Content

- **Hero Section**: [src/components/Hero.tsx](src/components/Hero.tsx)
- **About Section**: [src/components/About.tsx](src/components/About.tsx)
- **Departments**: [src/components/Departments.tsx](src/components/Departments.tsx)
- **Why Choose Us**: [src/components/WhyChooseUs.tsx](src/components/WhyChooseUs.tsx)

### Update Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

## Environment Variables

For production contact form integration, create a `.env.local` file:

```env
NEXT_PUBLIC_CONTACT_EMAIL=info@afrisinc.com
NEXT_PUBLIC_CONTACT_API_ENDPOINT=your-api-endpoint
```

## Performance Optimization

The website is already optimized with:
- Code splitting via Next.js
- Image optimization (when you add real images)
- Lazy loading for components
- Smooth animations with GPU acceleration
- Optimized fonts via next/font

## Adding Images

1. Create a `public/images` folder
2. Add your images
3. Update image references in components:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for hero images
/>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Afrisinc. All rights reserved.

## Support

For support, email info@afrisinc.com

---

Built with ❤️ in Africa
