export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-800/50 border-y border-purple-500/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg">Start free. Upgrade when you need more.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="bg-gradient-to-br from-slate-700/50 to-purple-900/30 border border-purple-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="text-slate-400 mb-6">Perfect to get started</div>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-slate-400">/month</span></div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Browse trader profiles</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>5 matches per day</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Limited messaging</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-600">✗</span>
                <span className="text-slate-600">Priority placement</span>
              </li>
            </ul>
            
            <button className="w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-3 rounded-lg transition">
              Get Started Free
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 rounded-lg p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <div className="text-slate-300 mb-6">For serious traders</div>
            <div className="text-4xl font-bold mb-6">$9.99<span className="text-lg text-slate-400">/month</span></div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Unlimited matches</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Unlimited messaging</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Priority placement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Verified trader badge</span>
              </li>
            </ul>
            
            <button className="glow-button w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-bold py-3 rounded-lg transition">
              Upgrade to Premium
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            All prices in USD. Cancel anytime. Money-back guarantee within 7 days.
          </p>
        </div>
      </div>
    </section>
  )
}
