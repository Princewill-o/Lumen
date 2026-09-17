import ScrollReveal from '../ui/ScrollReveal'
import { Cpu, ShieldCheck, Zap, Layers, RefreshCw, Radio } from 'lucide-react'

export default function TechStack() {
  const stack = [
    { name: 'Web Speech API', desc: 'Real-time client voice recognition', icon: Radio },
    { name: 'Science of Reading', desc: 'Structured phonemic decoding framework', icon: Layers },
    { name: 'On-Device Privacy Engine', desc: 'Local acoustic feature processing', icon: ShieldCheck },
    { name: 'Adaptive Difficulty Scaler', desc: 'Micro-frustration detection algorithm', icon: Zap },
    { name: 'Parent Sync Protocol', desc: 'Encrypted real-time mastery ring updates', icon: RefreshCw },
    { name: 'Synthetic Audio Engine', desc: 'Calm, kid-friendly voice feedback', icon: Cpu },
  ]

  return (
    <section className="py-24 border-y border-white/10 bg-ink-900/60 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Engineering & Pedagogy
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl font-extrabold text-white">
              Powered by advanced speech & learning science.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stack.map((st, i) => {
            const Icon = st.icon
            return (
              <ScrollReveal key={st.name} delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-ink-950 border border-white/10 hover:border-signal/40 transition-all text-center space-y-3 group h-full flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl bg-signal/10 border border-signal/30 flex items-center justify-center text-signal mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm group-hover:text-signal transition-colors">
                      {st.name}
                    </h4>
                    <p className="text-[11px] text-mist-700 mt-1 leading-tight">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
