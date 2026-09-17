import { curriculumLevels } from '../data/content'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BookOpen, Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CurriculumPage() {
  return (
    <div className="pt-36 pb-28 bg-ink-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Structured Milestones (Ages 3–8)
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white">
              Science of Reading & Early Math Curriculum
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-mist-700 text-base md:text-lg">
              Mapped directly to cognitive development stages, Common Core standards, and auditory phonemic research.
            </p>
          </ScrollReveal>
        </div>

        {/* Level Cards */}
        <div className="space-y-12">
          {curriculumLevels.map((lvl, idx) => (
            <ScrollReveal key={lvl.level} delay={idx * 0.1}>
              <div className="p-8 md:p-12 rounded-3xl bg-ink-900/80 border border-white/10 relative overflow-hidden group hover:border-signal/50 transition-all">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 border-b border-white/10 pb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-signal/15 border border-signal/30 text-xs font-extrabold text-signal uppercase tracking-wider">
                      Level 0{lvl.level}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2">
                      {lvl.title}
                    </h2>
                  </div>
                  <Link to="/tutor">
                    <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-signal hover:text-ink-950 font-display text-xs font-bold text-white transition-all flex items-center gap-2">
                      Test Level 0{lvl.level} in Spark <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Reading Column */}
                  <div className="p-6 rounded-2xl bg-ink-950 border border-white/5 space-y-4">
                    <div className="flex items-center gap-2.5 text-signal font-display font-bold text-lg">
                      <BookOpen className="w-5 h-5" /> Phonics & Early Reading
                    </div>
                    <ul className="space-y-3 text-xs text-mist-700">
                      {lvl.reading.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-signal shrink-0" />
                          <span className="text-mist-100">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Math Column */}
                  <div className="p-6 rounded-2xl bg-ink-950 border border-white/5 space-y-4">
                    <div className="flex items-center gap-2.5 text-spark font-display font-bold text-lg">
                      <Calculator className="w-5 h-5" /> Early Math & Number Sense
                    </div>
                    <ul className="space-y-3 text-xs text-mist-700">
                      {lvl.math.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-spark shrink-0" />
                          <span className="text-mist-100">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  )
}
