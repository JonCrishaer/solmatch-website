export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold gradient-text">💘 SOLMatch</div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#how" className="hover:text-cyan-400 transition">How It Works</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </nav>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold px-6 py-2 rounded-lg transition">
          Join Waitlist
        </button>
      </div>
    </header>
  )
}
