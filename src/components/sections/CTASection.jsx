import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function CTASection({ onOpenAuth }) {
  return (
    <section className="py-28 bg-ink-950 relative overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-8">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-signal/15 border border-signal/40 text-xs font-bold text-signal uppercase tracking-wider">
            <Sparkles className="w-4 h-4 animate-spin-slow" /> Start Your Child's Voice Learning Journey
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ready to spark early reading & math confidence?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-mist-700 text-lg max-w-2xl mx-auto leading-relaxed">
            No credit card needed. Launch our voice-interactive Spark tutor demo in seconds or set up your parent dashboard.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/tutor">
              <MagneticButton 
                className="px-9 py-4 rounded-full bg-signal hover:bg-signal-bright text-ink-950 font-display text-base font-extrabold hover:scale-105 transition-all"
                data-cursor="Try Spark"
              >
                Launch Spark Demo Free <ArrowRight className="w-5 h-5 ml-2 inline" />
              </MagneticButton>
            </Link>

            <button
              onClick={onOpenAuth}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 hover:border-signal transition-all"
              data-cursor="hover"
            >
              Parent Sign In
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-xs text-mist-900 flex items-center justify-center gap-2 pt-4">
            <ShieldCheck className="w-4 h-4 text-signal" /> 100% COPPA Safe • Zero Advertisements • Gentle Screen Time Pacing
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
