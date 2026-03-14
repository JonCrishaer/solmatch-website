# SOLMatch Landing Page

**Marketing website for SOLMatch — Trader Matchmaking for Solana**

Live at: `https://solmatch.app`

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## 📁 Structure

- **app/** - Next.js pages & layout
- **components/** - React components (Header, Hero, Features, etc.)
- **public/** - Static assets

## 🎨 Design

- Built with Next.js 14 + React 18
- Styled with Tailwind CSS
- Dark theme with cyan/purple gradient
- Mobile responsive

## 📝 Pages

- `/` - Main landing page
  - Hero section
  - Features showcase
  - How it works
  - Pricing tiers
  - Email signup CTA
  - Footer

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts, select this folder, and it deploys automatically.

### Deploy to Other Hosts

1. Build: `npm run build`
2. Start: `npm start`
3. Run on port 3000

## 📝 Environment Variables

None required for basic setup. Create `.env.local` if needed for analytics/tracking.

## 🔗 Links to Update

- Social media links in Footer
- Email signup handler (currently placeholder)
- Privacy/Terms links

## 📱 Social Media

Add social links in `components/Footer.tsx`:
- Twitter
- Discord
- Instagram
- GitHub

## 📊 Analytics

To add Google Analytics or other trackers, update `app/layout.tsx`.

## 🛠️ Customization

- Colors: Edit `tailwind.config.ts`
- Content: Edit component files
- Fonts: Update in `app/globals.css`

## 📄 License

MIT
