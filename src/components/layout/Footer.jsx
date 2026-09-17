import { Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, Heart, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Footer({ onOpenAuth }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-ink-900 border-t border-white/10 pt-20 pb-12 overflow-hidden text-mist-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-signal flex items-center justify-center text-ink-950 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Lumen <span className="text-signal text-sm font-normal">Tutor</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm text-mist-700">
              Empowering early learners aged 3–8 with real-time adaptive AI voice tutoring for reading and early math. Designed alongside parent screen-time limits and COPPA safety standards.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-signal flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> COPPA Certified
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-mist-100 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-spark" /> Zero Ads & Tracking
              </span>
            </div>
          </div>

          {/* Sitemap Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-signal transition-colors">Home</Link></li>
              <li><Link to="/curriculum" className="hover:text-signal transition-colors">Curriculum (3-8 yrs)</Link></li>
              <li><Link to="/dashboard" className="hover:text-signal transition-colors">Parent Dashboard</Link></li>
              <li><Link to="/tutor" className="hover:text-signal transition-colors">AI Spark Demo Mode</Link></li>
              <li><Link to="/pricing" className="hover:text-signal transition-colors">Plans & Pricing</Link></li>
            </ul>
          </div>

          {/* Safety & Pedagogy */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-5">
              Safety & Pedagogy
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-signal transition-colors">Science of Reading</Link></li>
              <li><Link to="/about" className="hover:text-signal transition-colors">Child Privacy Standards</Link></li>
              <li><Link to="/about" className="hover:text-signal transition-colors">Screen Pacing & Limits</Link></li>
              <li><Link to="/blog" className="hover:text-signal transition-colors">Parent Resource Guides</Link></li>
              <li><button onClick={onOpenAuth} className="hover:text-signal transition-colors text-left">Parent Portal Sign In</button></li>
            </ul>
          </div>

          {/* Newsletter / Trial */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-5">
              Parent Newsletter
            </h4>
            <p className="text-xs text-mist-700 mb-4">
              Get weekly early literacy tips and printable phonics sheets.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="parent@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-ink-950 border border-white/10 text-xs text-white placeholder:text-mist-900 focus:outline-none focus:border-signal transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-signal text-ink-950 font-display text-xs font-bold hover:bg-signal-bright transition-colors shadow-md"
              >
                Join Free Parent Club
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Lumen Early Learning Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <button onClick={scrollToTop} className="text-signal hover:underline flex items-center gap-1">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
