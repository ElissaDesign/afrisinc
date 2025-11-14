# Customization Guide

This guide will help you customize the Afrisinc website to match your specific needs.

## Table of Contents

1. [Brand Colors](#brand-colors)
2. [Content Updates](#content-updates)
3. [Images](#images)
4. [Contact Information](#contact-information)
5. [Social Media](#social-media)
6. [SEO & Metadata](#seo--metadata)
7. [Adding New Sections](#adding-new-sections)
8. [Fonts](#fonts)

---

## Brand Colors

### Update Primary & Accent Colors

Edit [tailwind.config.ts](tailwind.config.ts) (lines 10-43):

```typescript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest shade
    100: '#e0f2fe',
    // ... customize all shades
    900: '#0c4a6e',  // Darkest shade
  },
  accent: {
    50: '#fff7ed',
    // ... customize accent colors
    900: '#7c2d12',
  },
}
```

**Pro Tip**: Use tools like [UIColors](https://uicolors.app) to generate complete color palettes.

### Quick Color Reference

Current colors are used in:
- **Primary**: Buttons, links, gradients
- **Accent**: Secondary buttons, highlights, decorative elements

---

## Content Updates

### Hero Section

File: [src/components/Hero.tsx](src/components/Hero.tsx)

```typescript
// Main headline (line 43-47)
<h1>
  Building Africa's Future Through{' '}
  <span className="gradient-text">
    Media, Technology & Innovation
  </span>
</h1>

// Subtitle (line 56-60)
<p>
  Your custom subtitle text here...
</p>
```

### About Section

File: [src/components/About.tsx](src/components/About.tsx)

**Update Story** (lines 44-60):
```typescript
<p className="text-lg text-slate-600 leading-relaxed mb-4">
  Your company story paragraph 1...
</p>
<p className="text-lg text-slate-600 leading-relaxed">
  Your company story paragraph 2...
</p>
```

**Update Mission, Vision, Values** (lines 70-93):
Edit the array objects with your content.

### Departments Section

File: [src/components/Departments.tsx](src/components/Departments.tsx)

Update the `departments` array (lines 39-103):

```typescript
const departments = [
  {
    icon: YourIcon,              // Import from 'lucide-react'
    title: 'Your Department',
    description: 'Your description...',
    gradient: 'from-color-500 to-color-600',
    services: [
      { icon: ServiceIcon, text: 'Service Name' },
      // ... more services
    ],
  },
  // ... more departments
]
```

**Available Icons**: Browse [Lucide Icons](https://lucide.dev/icons/)

### Why Choose Us Section

File: [src/components/WhyChooseUs.tsx](src/components/WhyChooseUs.tsx)

Update the `reasons` array (lines 36-85):

```typescript
const reasons = [
  {
    icon: IconName,
    title: 'Your Reason',
    description: 'Your description...',
    color: 'from-blue-500 to-cyan-600',
  },
  // ... more reasons
]
```

---

## Images

### Adding Real Images

1. **Create images directory**:
```bash
mkdir -p public/images
```

2. **Add your images** to `public/images/`

3. **Use Next.js Image component**:

```tsx
import Image from 'next/image'

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority  // For hero/above-fold images
  className="rounded-2xl"
/>
```

### Recommended Image Sizes

- **Hero Background**: 1920x1080px
- **Department Icons**: 400x400px (or use Lucide icons)
- **Team Photos**: 400x400px (square)
- **Blog/News**: 1200x630px (OpenGraph ratio)

### Optimize Images

Use tools like:
- [TinyPNG](https://tinypng.com) - Compression
- [Squoosh](https://squoosh.app) - Format conversion

---

## Contact Information

### Update Contact Details

File: [src/components/Contact.tsx](src/components/Contact.tsx)

```typescript
// Email (line 57)
detail: 'info@afrisinc.com',

// Phone (line 64)
detail: '+27 (0) 123 456 789',

// Address (line 71)
detail: 'Johannesburg, South Africa',
```

### Contact Form Integration

To make the form functional:

1. **Choose an email service**:
   - [EmailJS](https://www.emailjs.com/)
   - [SendGrid](https://sendgrid.com/)
   - [Resend](https://resend.com/)
   - Custom API endpoint

2. **Update form handler** in [src/components/Contact.tsx](src/components/Contact.tsx) (line 22):

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }),
    })

    if (response.ok) {
      setFormStatus('success')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

3. **Create API route** at `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Your email sending logic here
  // Using SendGrid, Resend, etc.

  return NextResponse.json({ message: 'Email sent' })
}
```

---

## Social Media

### Update Social Links

File: [src/components/Contact.tsx](src/components/Contact.tsx) (lines 76-79)

```typescript
const socialLinks = [
  { icon: Linkedin, link: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' },
  { icon: Twitter, link: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Facebook, link: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: Instagram, link: 'https://instagram.com/yourhandle', label: 'Instagram' },
]
```

---

## SEO & Metadata

### Update Site Metadata

File: [src/app/layout.tsx](src/app/layout.tsx) (lines 12-30)

```typescript
export const metadata: Metadata = {
  title: 'Your Title | Tagline',
  description: 'Your description (150-160 characters)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Company Name' }],
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG description',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your site preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Twitter Title',
    description: 'Your Twitter description',
    images: ['/images/twitter-image.jpg'],
    creator: '@yourhandle',
  },
}
```

### Create OG Image

- Size: 1200x630px
- Place at: `public/images/og-image.jpg`

---

## Adding New Sections

### Step 1: Create Component

Create `src/components/YourSection.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function YourSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="your-section" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="gradient-text">Section</span>
          </h2>
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  )
}
```

### Step 2: Add to Page

Edit [src/app/page.tsx](src/app/page.tsx):

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <YourSection />  {/* Add here */}
      <Departments />
      {/* ... */}
    </main>
  )
}
```

---

## Fonts

### Current Font

The site uses **Inter** (via Google Fonts).

### Change Font

Edit [src/app/layout.tsx](src/app/layout.tsx):

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})

// In return statement:
<body className={`${yourFont.variable} font-sans`}>
```

Update [tailwind.config.ts](tailwind.config.ts):

```typescript
fontFamily: {
  sans: ['var(--font-your-font)', 'system-ui', 'sans-serif'],
},
```

### Popular Font Combinations

- **Modern**: Inter + Manrope
- **Professional**: Poppins + Open Sans
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: Space Grotesk + IBM Plex Sans

Browse all fonts: [Google Fonts](https://fonts.google.com/)

---

## Animation Customization

### Speed Up/Slow Down Animations

In component files, adjust `duration`:

```typescript
transition={{ duration: 0.6 }}  // Default
transition={{ duration: 0.3 }}  // Faster
transition={{ duration: 1.2 }}  // Slower
```

### Disable Animations

Remove Framer Motion components and replace with regular divs:

```typescript
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// After
<div>
```

---

## Need Help?

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **TailwindCSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion Docs**: [framer.com/motion](https://www.framer.com/motion/)
- **Lucide Icons**: [lucide.dev](https://lucide.dev/)

---

Happy customizing! 🎨
