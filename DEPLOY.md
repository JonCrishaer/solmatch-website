# Deployment Guide for SOLMatch Website

## 🚀 Deploy to Vercel (Recommended - 2 minutes)

### Option 1: Via GitHub (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click **"New Project"**
4. Select **`solmatch-website`** repository
5. Click **"Import"**
6. Vercel auto-detects Next.js configuration
7. Click **"Deploy"**
8. **Done!** Your site is live in ~1 minute

### Option 2: Via CLI

```bash
npm install -g vercel
cd ~/.openclaw/workspace/solmatch-website
vercel
```

Follow the prompts and your site deploys automatically.

### Custom Domain Setup

1. After deployment, go to Vercel dashboard
2. Select the `solmatch-website` project
3. Go to **Settings** → **Domains**
4. Add custom domain: `solmatch.app`
5. Update DNS records (Vercel provides instructions)
6. Wait 5-30 minutes for DNS propagation

**Recommended registrar:** Namecheap, Cloudflare, or GoDaddy

## 📱 Update Social Links

Edit `components/Footer.tsx` and update:
- Twitter: `https://twitter.com/solmatch_app`
- Discord: `https://discord.gg/solmatch`
- Instagram: `https://instagram.com/solmatch`
- GitHub: `https://github.com/JonCrishaer/solmatch-rn`

## 📧 Email Signup Handler

Currently, the email input is a placeholder. To make it work:

### Option 1: Mailchimp (Free)

1. Go to [mailchimp.com](https://mailchimp.com)
2. Create account
3. Create audience
4. Copy form action URL
5. Update `components/CTA.tsx` form action

### Option 2: SendGrid (Free tier available)

1. Go to [sendgrid.com](https://sendgrid.com)
2. Create account
3. Set up API key
4. Create form handler

### Option 3: Firebase (Free tier)

```typescript
import { collection, addDoc } from 'firebase/firestore'

const handleSignup = async (email: string) => {
  await addDoc(collection(db, 'waitlist'), {
    email,
    timestamp: new Date(),
  })
}
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  cyan: '#00d4ff',
  // Change to your brand colors
}
```

### Change Text
Edit component files in `components/`:
- `Header.tsx` - Navigation
- `Hero.tsx` - Main headline
- `Features.tsx` - Feature list
- `Pricing.tsx` - Price & features
- `Footer.tsx` - Links & copyright

### Add Logo/Images
1. Add files to `public/` folder
2. Reference in components:
```tsx
<img src="/logo.png" alt="Logo" />
```

## 📊 Analytics

### Add Google Analytics

1. Create [Google Analytics](https://analytics.google.com) account
2. Get tracking ID (format: `G-XXXXXXXXXX`)
3. Install in `app/layout.tsx`:

```typescript
// In <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitor Visits

1. Go to Vercel dashboard
2. Click on your project
3. Go to **Analytics**
4. Track visits, page views, etc.

## 🔒 Security Checklist

- [ ] Update social links (Footer)
- [ ] Set up email signup handler
- [ ] Add privacy policy page
- [ ] Add terms of service page
- [ ] Add GDPR compliance notice
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set up analytics

## 📝 Pre-Launch Checklist

- [ ] Domain registered (`solmatch.app`)
- [ ] Website deployed to Vercel
- [ ] Email signup working
- [ ] Social links correct
- [ ] Mobile responsive tested
- [ ] Analytics tracking live
- [ ] All content reviewed

## 🆘 Troubleshooting

**Build fails?**
- Check that all imports use `@/` path alias
- Ensure TypeScript types are correct
- Run `npm run build` locally to test

**Domain not resolving?**
- Wait 15-30 minutes for DNS propagation
- Check DNS settings in registrar
- Verify in Vercel settings

**Performance slow?**
- Use Next.js Image optimization for images
- Add `next/image` for automatic optimization
- Check Vercel Analytics for bottlenecks

## 📚 Next Steps

1. **Deploy to Vercel** (follow steps above)
2. **Configure domain** (solmatch.app)
3. **Set up email signup** (Mailchimp or SendGrid)
4. **Create social media accounts**
5. **Share landing page** on Twitter, Discord, etc.

---

**Deployment docs:** https://vercel.com/docs/frameworks/nextjs
**Custom domain:** https://vercel.com/docs/concepts/projects/domains
