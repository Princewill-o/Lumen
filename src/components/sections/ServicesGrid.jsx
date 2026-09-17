import { services } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import { Sparkles, BookOpen, Calculator, Mic, ShieldCheck, BarChart3, Clock, School } from 'lucide-react'

const iconMap = {
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Calculator: Calculator,
  Mic: Mic,
  ShieldCheck: ShieldCheck,
  BarChart3: BarChart3,
  Clock: Clock,
  School: School,
}

export default function ServicesGrid() {
  return (
    <section id="features" className="py-28 bg-ink-900/40 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Core Capabilities
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
              Built for young minds.{' '}
              <span className="text-mist-700 font-normal">Tuned for parent peace of mind.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles
            return (
              <ScrollReveal key={item.id} delay={idx * 0.05} className={item.span}>
                <div 
                  className="h-full p-8 rounded-3xl bg-ink-950/80 border border-white/10 hover:border-signal/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
                  data-cursor="hover"
                >
                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-signal group-hover:scale-110 group-hover:bg-signal group-hover:text-ink-950 transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-mist-900 tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-mist-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-6 relative z-10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-mist-700 group-hover:border-signal/30 group-hover:text-mist-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
