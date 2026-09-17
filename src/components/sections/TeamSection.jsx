import { team } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import { GraduationCap } from 'lucide-react'

export default function TeamSection() {
  return (
    <section className="py-28 bg-ink-900/40 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Expert Pedagogy & Ethics
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
              Guided by child psychologists & speech scientists.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div 
                className="p-7 rounded-3xl bg-ink-950 border border-white/10 hover:border-signal/50 transition-all group relative"
                data-cursor="Team"
              >
                <div className="w-14 h-14 rounded-2xl bg-signal flex items-center justify-center text-ink-950 font-bold mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-signal uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-xs text-mist-700 italic border-t border-white/5 pt-4">
                  "{member.quote}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
