export function Features() {
  const features = [
    {
      icon: '💬',
      title: 'Smart Discovery',
      description: 'Swipe through verified trader profiles and find partners aligned with your strategy.',
    },
    {
      icon: '💝',
      title: 'Instant Matching',
      description: 'When both traders like each other, match instantly and start collaborating.',
    },
    {
      icon: '🔗',
      title: 'Solana Wallet Auth',
      description: 'Connect with Phantom. No passwords, no compromise on security.',
    },
    {
      icon: '💬',
      title: 'Direct Messaging',
      description: 'Chat with matched traders in-app. Share strategies, ideas, and opportunities.',
    },
    {
      icon: '⭐',
      title: 'Trader Ratings',
      description: 'Build trust through verified trading history and community ratings.',
    },
    {
      icon: '🎯',
      title: 'Premium Features',
      description: 'Unlimited matches, priority placement, and advanced filters for serious traders.',
    },
  ]

  return (
    <section id="features" className="section-padding bg-slate-800/50 border-y border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Solana Traders</span>
          </h2>
          <p className="text-slate-400 text-lg">Everything you need to find and collaborate with trading partners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-700/50 to-purple-900/30 border border-purple-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
