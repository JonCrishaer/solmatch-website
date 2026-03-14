export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 section-padding bg-gradient-to-b from-purple-900/40 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 text-sm">
            🚀 Launching on Solana Mobile
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your <span className="gradient-text">Trading Partner</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          SOLMatch connects Solana traders who trade together. Swipe to discover, match to collaborate, and grow your trading network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition">
            Get Early Access
          </button>
          <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold px-8 py-4 rounded-lg text-lg transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-3xl font-bold gradient-text">1000+</div>
            <div className="text-slate-400">Beta Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">$0</div>
            <div className="text-slate-400">To Start</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-slate-400">Community</div>
          </div>
        </div>
      </div>
    </section>
  )
}
