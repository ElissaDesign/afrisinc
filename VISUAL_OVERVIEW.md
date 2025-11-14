# Visual Overview - Afrisinc Website

A visual guide to understanding your website's design and structure.

## Color Palette

### Primary Colors (Blue Gradient)

```
█ #f0f9ff  primary-50   Very light blue backgrounds
█ #e0f2fe  primary-100  Light backgrounds
█ #bae6fd  primary-200  Borders, subtle highlights
█ #7dd3fc  primary-300  Decorative elements
█ #38bdf8  primary-400  Hover states
█ #0ea5e9  primary-500  Main brand color ⭐
█ #0284c7  primary-600  Primary buttons, links
█ #0369a1  primary-700  Dark text
█ #075985  primary-800  Darker text
█ #0c4a6e  primary-900  Darkest shade
```

### Accent Colors (Orange Gradient)

```
█ #fff7ed  accent-50    Very light backgrounds
█ #ffedd5  accent-100   Light backgrounds
█ #fed7aa  accent-200   Subtle highlights
█ #fdba74  accent-300   Decorative elements
█ #fb923c  accent-400   Hover states
█ #f97316  accent-500   Accent actions ⭐
█ #ea580c  accent-600   Secondary buttons
█ #c2410c  accent-700   Dark accents
█ #9a3412  accent-800   Darker accents
█ #7c2d12  accent-900   Darkest shade
```

### Gradient Combinations

```
Primary Gradient:    primary-600 → primary-500
Accent Gradient:     accent-500 → accent-600
Mixed Gradient:      primary-600 → accent-500 (text)
Background:          slate-50 → blue-50/30 → orange-50/20
```

## Typography Scale

```
Hero Headline:
├─ Mobile:    text-5xl (48px)
├─ Tablet:    text-6xl (60px)
└─ Desktop:   text-7xl (72px)

Section Headings:
├─ Mobile:    text-4xl (36px)
├─ Tablet:    text-5xl (48px)
└─ Desktop:   text-6xl (60px)

Subsection Headings:
├─ Mobile:    text-2xl (24px)
├─ Tablet:    text-3xl (30px)
└─ Desktop:   text-3xl (30px)

Body Text:
├─ Mobile:    text-lg (18px)
├─ Tablet:    text-xl (20px)
└─ Desktop:   text-2xl (24px)

Card Text:
└─ All:       text-lg (18px)

Small Text:
└─ All:       text-sm (14px)
```

**Font Family**: Inter (Google Fonts)

## Spacing System

```
Section Padding (Vertical):
├─ Mobile:    py-16 (4rem / 64px)
├─ Tablet:    py-24 (6rem / 96px)
└─ Desktop:   py-32 (8rem / 128px)

Container Padding (Horizontal):
├─ Mobile:    px-4  (1rem / 16px)
├─ Tablet:    px-6  (1.5rem / 24px)
└─ Desktop:   px-8  (2rem / 32px)

Component Gaps:
├─ Cards:     gap-6 to gap-8
├─ Sections:  mb-12 to mb-16
└─ Elements:  gap-2 to gap-4
```

## Grid Layouts

### Departments Grid

```
Mobile (< 768px):
┌─────────────────┐
│   Department 1  │
├─────────────────┤
│   Department 2  │
├─────────────────┤
│   Department 3  │
├─────────────────┤
│   Department 4  │
└─────────────────┘

Tablet/Desktop (≥ 768px):
┌─────────┬─────────┐
│  Dept 1 │  Dept 2 │
├─────────┼─────────┤
│  Dept 3 │  Dept 4 │
└─────────┴─────────┘
```

### Why Choose Us Grid

```
Mobile (< 640px):
┌──────┐
│ R1   │
├──────┤
│ R2   │
├──────┤
│ ...  │
└──────┘

Tablet (640px - 1024px):
┌─────┬─────┐
│ R1  │ R2  │
├─────┼─────┤
│ R3  │ R4  │
└─────┴─────┘

Desktop (≥ 1024px):
┌────┬────┬────┬────┐
│ R1 │ R2 │ R3 │ R4 │
├────┼────┼────┼────┤
│ R5 │ R6 │ R7 │ R8 │
└────┴────┴────┴────┘
```

## Component Styles

### Card Style (Glassmorphism)

```css
Background:     white/80 (80% opacity)
Backdrop:       blur-xl (24px blur)
Border:         1px solid white/20
Shadow:         shadow-xl
Border Radius:  rounded-2xl to rounded-3xl
Padding:        p-6 to p-10
```

**Hover Effect**:
- Scale: 1.05x or translate Y -5px to -8px
- Shadow: shadow-2xl
- Transition: 300ms

### Button Styles

**Primary Button**:
```css
Background:     gradient (primary-600 → primary-500)
Text:           white
Padding:        px-8 py-4
Border Radius:  rounded-xl
Shadow:         shadow-lg
Hover:          shadow-xl, scale-105
```

**Secondary Button (Glass)**:
```css
Background:     white/80 + backdrop-blur-xl
Text:           slate-700
Border:         1px solid white/20
Padding:        px-8 py-4
Border Radius:  rounded-xl
Hover:          text-primary-600, scale-105
```

### Icon Containers

```css
Size:           w-14 h-14 to w-20 h-20
Background:     gradient (various colors)
Shape:          rounded-xl to rounded-2xl
Icon Size:      w-7 h-7 to w-10 h-10
Icon Color:     white
Hover:          scale-110
```

## Animation Patterns

### Scroll-In Animation

```
Initial State:
  opacity: 0
  y: 20px (below)

Final State:
  opacity: 1
  y: 0

Duration: 0.6s
Easing:   ease-out
```

### Card Stagger

```
Parent Container:
  staggerChildren: 0.15s

Each Child:
  initial: { opacity: 0, y: 30 }
  animate: { opacity: 1, y: 0 }
  duration: 0.7s
```

### Hover Effects

```
Button Hover:
  scale: 1.05
  duration: 300ms

Card Hover:
  translateY: -8px
  shadow: increase
  duration: 300ms

Icon Hover:
  scale: 1.1
  duration: 300ms
```

### Background Animations

```
Floating Orbs:
  scale: [1, 1.2, 1]
  opacity: [0.3, 0.5, 0.3]
  duration: 8-12s
  repeat: infinite
```

## Section Breakdown

### 1. Hero Section

```
┌─────────────────────────────────────┐
│  🏷️ Badge: "International Parent..." │
│                                     │
│  📰 Main Headline (Huge)            │
│  "Building Africa's Future..."     │
│                                     │
│  📝 Subtitle (Large)                │
│                                     │
│  [🔵 Learn More] [⚪ Contact Us]    │
│                                     │
│  ┌──────┬──────┬──────┬──────┐    │
│  │ 4+   │ 20+  │  ∞   │ 100% │    │
│  │Depts │Servs │Global│Innov │    │
│  └──────┴──────┴──────┴──────┘    │
│                                     │
│  🔽 Scroll Indicator               │
└─────────────────────────────────────┘
```

**Height**: 100vh (full viewport)
**Background**: Animated gradient + floating orbs
**Alignment**: Center

### 2. About Section

```
┌─────────────────────────────────────┐
│       About Afrisinc                │
│       ─────────────                 │
│                                     │
│  [Story Card - Full Width]          │
│  • Paragraph 1                      │
│  • Paragraph 2                      │
│                                     │
│  ┌────────┬────────┬────────┐      │
│  │ 🎯     │ 👁️     │ 🏆     │      │
│  │Mission │Vision  │Values  │      │
│  │        │        │        │      │
│  │ Text   │ Text   │ Text   │      │
│  └────────┴────────┴────────┘      │
└─────────────────────────────────────┘
```

**Background**: white/50
**Cards**: Glass effect
**Layout**: 1 full-width card + 3 column grid

### 3. Departments Section

```
┌─────────────────────────────────────┐
│       Our Departments               │
│       ─────────────                 │
│                                     │
│  ┌───────────────┬───────────────┐ │
│  │ 🎬 Media &    │ 💻 Technology  │ │
│  │ Entertainment │ & Software     │ │
│  │               │                │ │
│  │ Description   │ Description    │ │
│  │               │                │ │
│  │ ┌───┬───┐    │ ┌───┬───┐     │ │
│  │ │Svc│Svc│    │ │Svc│Svc│     │ │
│  │ ├───┼───┤    │ ├───┼───┤     │ │
│  │ │Svc│Svc│    │ │Svc│Svc│     │ │
│  │ └───┴───┘    │ └───┴───┘     │ │
│  └───────────────┴───────────────┘ │
│                                     │
│  ┌───────────────┬───────────────┐ │
│  │ 🛒 E-commerce │ 👥 Consulting  │ │
│  │ [Same Layout] │ [Same Layout]  │ │
│  └───────────────┴───────────────┘ │
│                                     │
│  💡 Coming Soon: Industrial...      │
└─────────────────────────────────────┘
```

**Cards**: 4 large cards (2x2 grid on desktop)
**Each Card**: Icon + Title + Description + 4 services
**Hover**: Lift up + shadow increase

### 4. Why Choose Us Section

```
┌─────────────────────────────────────┐
│      Why Choose Afrisinc            │
│      ─────────────────              │
│                                     │
│  ┌────┬────┬────┬────┐            │
│  │🌍  │⚡  │🛡️  │🚀  │            │
│  │Glbl│Innv│Lead│Futr│            │
│  └────┴────┴────┴────┘            │
│  ┌────┬────┬────┬────┐            │
│  │👥  │🏆  │📈  │❤️  │            │
│  │Team│Excl│Grwt│Prid│            │
│  └────┴────┴────┴────┘            │
│                                     │
│  [CTA Card - Full Width]            │
│  Ready to Work with Africa's Future?│
│  [Get in Touch]                     │
└─────────────────────────────────────┘
```

**Background**: white/50
**Layout**: 4-column grid (2 rows)
**Bottom**: CTA card

### 5. Contact Section

```
┌─────────────────────────────────────┐
│         Get in Touch                │
│         ────────────                │
│                                     │
│  ┌─────────────┬─────────────────┐ │
│  │ Left Side   │   Right Side    │ │
│  │             │                 │ │
│  │ 📧 Email    │  ┌────────────┐ │ │
│  │ 📞 Phone    │  │ Contact    │ │ │
│  │ 📍 Location │  │   Form     │ │ │
│  │             │  │            │ │ │
│  │ 🔗 Social   │  │ [Name]     │ │ │
│  │ ⚪⚪⚪⚪    │  │ [Email]    │ │ │
│  │             │  │ [Subject]  │ │ │
│  │ 💼 Business │  │ [Message]  │ │ │
│  │ Inquiries   │  │            │ │ │
│  │             │  │ [Send]     │ │ │
│  │             │  └────────────┘ │ │
│  └─────────────┴─────────────────┘ │
└─────────────────────────────────────┘
```

**Layout**: 2-column grid (1 column on mobile)
**Left**: Contact cards + social + business info
**Right**: Contact form

### 6. Footer

```
┌─────────────────────────────────────┐
│  Afrisinc          Quick    Our     │
│  Made with ❤️      Links    Depts   │
│  in Africa                          │
│                                     │
│  ───────────────────────────────── │
│  © 2025 Afrisinc   Privacy  Terms  │
│                                     │
│                    [🔼 Scroll Top]  │
└─────────────────────────────────────┘
```

**Background**: Dark (slate-900)
**Text**: White
**Button**: Floating scroll-to-top

## Responsive Behavior

### Mobile (< 768px)

- Single column layout
- Larger touch targets (min 44x44px)
- Hamburger menu
- Reduced text sizes
- Full-width cards
- Simplified grids

### Tablet (768px - 1024px)

- 2-column grids
- Medium text sizes
- Desktop navigation
- Balanced spacing

### Desktop (≥ 1024px)

- 3-4 column grids
- Large text sizes
- Hover effects active
- Maximum spacing
- Side-by-side layouts

## Performance Features

- **Code Splitting**: Automatic per route
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts via next/font
- **CSS Purging**: Unused styles removed
- **Lazy Loading**: Components load on scroll
- **GPU Acceleration**: Transform & opacity animations

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: For interactive elements
- **Keyboard Navigation**: Full support
- **Focus Indicators**: Visible focus states
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: Image descriptions (when added)

---

## Design Principles Used

1. **Hierarchy**: Clear visual hierarchy with size, weight, color
2. **Whitespace**: Generous spacing for breathing room
3. **Consistency**: Repeated patterns and styles
4. **Contrast**: Dark text on light, light text on dark
5. **Alignment**: Grid-based, everything lines up
6. **Balance**: Symmetrical and asymmetrical balance
7. **Proximity**: Related items grouped together
8. **Repetition**: Consistent card styles, buttons, etc.

---

This visual overview helps you understand the design system at a glance. Use it as a reference when customizing your website!
