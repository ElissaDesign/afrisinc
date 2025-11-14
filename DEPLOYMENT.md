# Deployment Guide for Afrisinc Website

This guide covers multiple deployment options for your Afrisinc website.

## Table of Contents

1. [Vercel (Recommended)](#vercel-deployment)
2. [Netlify](#netlify-deployment)
3. [Custom Server](#custom-server-deployment)
4. [Docker](#docker-deployment)

---

## Vercel Deployment

Vercel is the recommended platform for Next.js applications.

### Method 1: GitHub Integration (Easiest)

1. **Prepare your repository**:
```bash
git init
git add .
git commit -m "Initial commit: Afrisinc website"
git branch -M main
```

2. **Push to GitHub**:
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/your-username/afrisinc.git
git push -u origin main
```

3. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `afrisinc.com`)
   - Update your DNS records as instructed

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Deploy to Production**:
```bash
vercel --prod
```

---

## Netlify Deployment

### Via GitHub

1. **Push code to GitHub** (same as Vercel method)

2. **Deploy on Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
   - Click "Deploy site"

### Via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Build your site**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy --prod
```

---

## Custom Server Deployment

For VPS or dedicated servers (DigitalOcean, AWS EC2, etc.)

### Prerequisites
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

### Steps

1. **Install PM2**:
```bash
npm install -g pm2
```

2. **Build the application**:
```bash
npm run build
```

3. **Start with PM2**:
```bash
pm2 start npm --name "afrisinc" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx** (`/etc/nginx/sites-available/afrisinc`):
```nginx
server {
    listen 80;
    server_name afrisinc.com www.afrisinc.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Enable site**:
```bash
sudo ln -s /etc/nginx/sites-available/afrisinc /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. **Install SSL with Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d afrisinc.com -d www.afrisinc.com
```

---

## Docker Deployment

### Dockerfile

Create `Dockerfile` in the root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  afrisinc:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Deploy with Docker

```bash
# Build
docker build -t afrisinc .

# Run
docker run -p 3000:3000 afrisinc

# Or with Docker Compose
docker-compose up -d
```

---

## Environment Variables

For production, create `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://afrisinc.com
NEXT_PUBLIC_CONTACT_EMAIL=info@afrisinc.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Email Service (Optional - for contact form)
EMAIL_SERVICE_API_KEY=your-api-key
EMAIL_SERVICE_ENDPOINT=your-endpoint
```

---

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify social media links
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Verify SEO metadata
- [ ] Test on different browsers
- [ ] Set up monitoring (optional)

---

## Performance Monitoring

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics** - For user tracking
3. **Google Search Console** - For SEO monitoring
4. **Sentry** - For error tracking

---

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Memory Issues

Update `package.json`:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}
```

---

## Support

For deployment issues, contact: tech@afrisinc.com

---

**Congratulations!** Your Afrisinc website is now live! 🚀
