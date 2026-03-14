export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-y border-purple-500/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Find Your <span className="gradient-text">Trading Partner?</span>
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          SOLMatch is launching on Solana Mobile in March 2026. Join the waitlist and get early access.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg bg-slate-700 border border-purple-500/50 focus:outline-none focus:border-cyan-500 text-white placeholder-slate-400"
          />
          <button className="glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-bold px-8 py-3 rounded-lg transition whitespace-nowrap">
            Join Waitlist
          </button>
        </div>
        
        <p className="text-slate-400 text-sm mt-4">
          No spam. We'll only email you about launch updates.
        </p>
      </div>
    </section>
  )
}
