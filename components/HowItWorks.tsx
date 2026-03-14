export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Wallet',
      description: 'Sign in with Phantom. Your trading profile is secured by your Solana wallet.',
    },
    {
      number: '2',
      title: 'Create Profile',
      description: 'Tell us your trading strategy, experience level, and what you\'re looking for.',
    },
    {
      number: '3',
      title: 'Start Swiping',
      description: 'Browse trader profiles and swipe right on traders you\'d like to match with.',
    },
    {
      number: '4',
      title: 'Get Matched',
      description: 'When both traders swipe right, you\'re matched and can start messaging.',
    },
    {
      number: '5',
      title: 'Collaborate',
      description: 'Chat, share strategies, and find opportunities to trade together.',
    },
    {
      number: '6',
      title: 'Grow Together',
      description: 'Build long-term trading partnerships and scale your success together.',
    },
  ]

  return (
    <section id="how" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">SOLMatch</span> Works
          </h2>
          <p className="text-slate-400 text-lg">Get started in 6 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-purple-500/50 rounded-lg p-6">
                <div className="text-5xl font-bold gradient-text mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
