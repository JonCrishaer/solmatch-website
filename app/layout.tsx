import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOLMatch - Trader Matchmaking for Solana',
  description: 'Find trading partners, match, and trade together on Solana. Freemium trader network launching soon.',
  keywords: 'Solana, traders, matchmaking, crypto, trading partners',
  openGraph: {
    title: 'SOLMatch',
    description: 'Trader matchmaking on Solana',
    url: 'https://solmatch.app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
