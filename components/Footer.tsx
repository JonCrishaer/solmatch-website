export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold gradient-text mb-4">💘 SOLMatch</div>
            <p className="text-slate-400 text-sm">
              Connecting Solana traders to collaborate and grow together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://twitter.com" className="hover:text-cyan-400 transition">Twitter</a></li>
              <li><a href="https://discord.com" className="hover:text-cyan-400 transition">Discord</a></li>
              <li><a href="https://instagram.com" className="hover:text-cyan-400 transition">Instagram</a></li>
              <li><a href="https://github.com" className="hover:text-cyan-400 transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2026 Blackboxx LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
