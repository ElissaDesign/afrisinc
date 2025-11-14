# Project Structure

Complete file and folder structure for the Afrisinc website.

```
afrisinc/
│
├── 📁 src/
│   ├── 📁 app/                          # Next.js 15 App Router
│   │   ├── 📄 layout.tsx                # Root layout with metadata & fonts
│   │   ├── 📄 page.tsx                  # Home page (main entry point)
│   │   ├── 📄 globals.css               # Global CSS styles
│   │   └── 📄 favicon.ico               # Site favicon
│   │
│   └── 📁 components/                   # React Components
│       ├── 📄 Navbar.tsx                # Navigation bar (sticky header)
│       ├── 📄 Hero.tsx                  # Hero section with animations
│       ├── 📄 About.tsx                 # About section (story, mission, vision)
│       ├── 📄 Departments.tsx           # Our Departments section (4 cards)
│       ├── 📄 WhyChooseUs.tsx           # Why Choose Us section (8 reasons)
│       ├── 📄 Contact.tsx               # Contact section with form
│       └── 📄 Footer.tsx                # Footer with links & scroll-to-top
│
├── 📁 public/                           # Static Assets
│   └── 📁 images/                       # (Create this) Store images here
│       ├── hero-bg.jpg                  # (Optional) Hero background
│       ├── og-image.jpg                 # (Optional) OpenGraph image
│       └── ...                          # Your other images
│
├── 📄 package.json                      # NPM dependencies & scripts
├── 📄 package-lock.json                 # Locked dependency versions
│
├── 📄 next.config.js                    # Next.js configuration
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 tailwind.config.ts                # TailwindCSS configuration
├── 📄 postcss.config.mjs                # PostCSS configuration
├── 📄 .eslintrc.json                    # ESLint configuration
│
├── 📄 .gitignore                        # Git ignore rules
├── 📄 .env.example                      # Environment variables template
│
├── 📄 README.md                         # Main documentation
├── 📄 QUICKSTART.md                     # Quick start guide
├── 📄 CUSTOMIZATION.md                  # Customization guide
├── 📄 DEPLOYMENT.md                     # Deployment guide
└── 📄 PROJECT_STRUCTURE.md              # This file
```

## File Descriptions

### Core Application Files

| File | Purpose | Lines |
|------|---------|-------|
| `src/app/layout.tsx` | Root layout, SEO metadata, font setup | ~50 |
| `src/app/page.tsx` | Main landing page, imports all sections | ~20 |
| `src/app/globals.css` | Global styles, TailwindCSS imports | ~40 |

### Component Files

| Component | Purpose | Key Features | Lines |
|-----------|---------|--------------|-------|
| `Navbar.tsx` | Navigation header | Sticky, scroll detection, mobile menu | ~100 |
| `Hero.tsx` | Hero section | Animated background, CTAs, stats | ~150 |
| `About.tsx` | About section | Story, mission, vision, values cards | ~130 |
| `Departments.tsx` | Departments showcase | 4 animated cards, service lists | ~180 |
| `WhyChooseUs.tsx` | Benefits section | 8 reason cards with icons | ~160 |
| `Contact.tsx` | Contact form | Form, contact info, social links | ~200 |
| `Footer.tsx` | Footer | Links, scroll-to-top button | ~80 |

### Configuration Files

| File | Purpose | Editable |
|------|---------|----------|
| `package.json` | NPM dependencies & scripts | ✅ Rarely |
| `next.config.js` | Next.js settings | ✅ For advanced config |
| `tsconfig.json` | TypeScript settings | ✅ Rarely |
| `tailwind.config.ts` | TailwindCSS theme | ✅ **Yes** (colors, fonts) |
| `postcss.config.mjs` | PostCSS plugins | ❌ No |
| `.eslintrc.json` | Linting rules | ✅ Rarely |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main documentation, installation, overview |
| `QUICKSTART.md` | 5-minute setup guide |
| `CUSTOMIZATION.md` | How to customize content, colors, fonts |
| `DEPLOYMENT.md` | Deployment to Vercel, Netlify, VPS, Docker |
| `PROJECT_STRUCTURE.md` | This file - project structure overview |

## Component Dependencies

### Import Tree

```
page.tsx
├── Navbar.tsx
├── Hero.tsx
│   └── lucide-react (ArrowRight, Sparkles)
├── About.tsx
│   └── lucide-react (Target, Eye, Award)
├── Departments.tsx
│   └── lucide-react (Film, Code2, ShoppingCart, Users, etc.)
├── WhyChooseUs.tsx
│   └── lucide-react (Globe2, Zap, Shield, Rocket, etc.)
├── Contact.tsx
│   └── lucide-react (Mail, Phone, MapPin, Send, etc.)
└── Footer.tsx
    └── lucide-react (Heart, ArrowUp)
```

### External Dependencies

```json
{
  "next": "^15.0.0",           // Framework
  "react": "^19.0.0",          // UI library
  "react-dom": "^19.0.0",      // React DOM
  "framer-motion": "^11.0.0",  // Animations
  "lucide-react": "^0.344.0",  // Icons
  "tailwindcss": "^3.4.1",     // Styling
  "typescript": "^5.3.3"       // Type safety
}
```

## Page Sections Flow

```
┌─────────────────────────────────┐
│         Navbar (Fixed)          │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│     Hero Section (Viewport)     │
│   • Headline                    │
│   • Subtitle                    │
│   • CTA Buttons                 │
│   • Stats                       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│      About Section              │
│   • Story                       │
│   • Mission/Vision/Values       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│    Departments Section          │
│   • 4 Department Cards          │
│   • Services per department     │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Why Choose Us Section         │
│   • 8 Reason Cards              │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│     Contact Section             │
│   • Contact Form                │
│   • Contact Info                │
│   • Social Links                │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│          Footer                 │
│   • Links                       │
│   • Copyright                   │
└─────────────────────────────────┘
```

## Style Architecture

### TailwindCSS Utilities

Defined in `globals.css`:

```css
.glass-effect      /* Glassmorphism backdrop */
.gradient-text     /* Primary-to-accent gradient */
.section-padding   /* Consistent section spacing */
.container-custom  /* Responsive container */
```

### Color System

```
Primary Colors (Blue)
├── 50-100:  Very light backgrounds
├── 200-400: Hover states, borders
├── 500-600: Main brand color (buttons, links)
└── 700-900: Dark text, dark mode

Accent Colors (Orange)
├── 50-100:  Light backgrounds
├── 200-400: Highlights
├── 500-600: Secondary actions
└── 700-900: Dark accents
```

## Animation Strategy

### Framer Motion Patterns

1. **Scroll-triggered animations**:
   - `useInView` hook for viewport detection
   - Fade in + slide up on scroll

2. **Staggered children**:
   - Cards animate in sequence
   - 0.1-0.2s delay between items

3. **Hover animations**:
   - Scale up (1.05x)
   - Translate Y (-5px to -8px)
   - Shadow increase

4. **Page load**:
   - Navbar slides down
   - Hero fades in progressively

## Responsive Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large)
```

### Layout Strategy

- **Mobile-first**: Base styles for mobile
- **Progressive enhancement**: Add features at larger screens
- **Grid system**: 1 → 2 → 3 → 4 columns
- **Typography**: Scales with viewport (text-lg → text-xl → text-2xl)

## Total Project Stats

- **Total Files**: ~25
- **Total Components**: 7
- **Lines of Code**: ~1,800
- **Dependencies**: 12
- **Sections**: 6 main sections
- **Pages**: 1 (single-page site)

---

## Quick Navigation

### To Customize:
1. **Colors**: [tailwind.config.ts](tailwind.config.ts)
2. **Content**: Components in [src/components/](src/components/)
3. **SEO**: [src/app/layout.tsx](src/app/layout.tsx)
4. **Contact Info**: [src/components/Contact.tsx](src/components/Contact.tsx)

### To Deploy:
1. **Vercel**: See [DEPLOYMENT.md](DEPLOYMENT.md#vercel-deployment)
2. **Custom Server**: See [DEPLOYMENT.md](DEPLOYMENT.md#custom-server-deployment)

### To Learn:
1. **Getting Started**: [QUICKSTART.md](QUICKSTART.md)
2. **Full Guide**: [README.md](README.md)
3. **Customization**: [CUSTOMIZATION.md](CUSTOMIZATION.md)

---

**Project built with best practices for production use.** ✨
