import { caseStudies } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import { Award, ArrowUpRight, TrendingUp } from 'lucide-react'

export default function CaseStudies() {
  return (
    <section className="py-28 bg-ink-900/60 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-ember">
                Real Learning Impact
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
                Proven results in homes & classrooms.
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1}>
              <div 
                className="p-8 rounded-3xl bg-ink-950 border border-white/10 hover:border-signal/50 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-full"
                data-cursor="Read Impact"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-mist-900">
                        {item.industry}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white mt-1">
                        {item.company}
                      </h3>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-signal/15 border border-signal/30 text-xs font-extrabold text-signal flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" /> {item.result}
                    </span>
                  </div>

                  <p className="text-sm text-mist-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-6 relative z-10">
                  {item.services.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-mist-100"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
