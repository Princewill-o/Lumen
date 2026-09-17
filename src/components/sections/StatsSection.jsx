import { stats } from '../../data/content'
import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'

export default function StatsSection() {
  return (
    <section className="py-20 border-y border-white/10 bg-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((st, i) => (
            <ScrollReveal key={st.label} delay={i * 0.1}>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-6xl font-extrabold text-white">
                  <AnimatedCounter value={st.value} suffix={st.suffix} decimals={st.decimals || 0} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-mist-700">
                  {st.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
