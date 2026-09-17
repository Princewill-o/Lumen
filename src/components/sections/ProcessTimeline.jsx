import ScrollReveal from '../ui/ScrollReveal'
import { UserPlus, Mic, Award, LineChart } from 'lucide-react'

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Create Child Profile',
      desc: 'Set age (3-8 yrs), preferred avatar, and current reading/math starting tier in under 60 seconds.',
      icon: UserPlus,
    },
    {
      num: '02',
      title: 'Spark Voice Discovery',
      desc: 'Spark conducts a 3-minute voice warm-up to gauge speech pronunciation and comfort level.',
      icon: Mic,
    },
    {
      num: '03',
      title: 'Adaptive Phonics & Math',
      desc: 'Real-time difficulty scaling adjusts word length and math challenges on the fly.',
      icon: Award,
    },
    {
      num: '04',
      title: 'Parent Progress Insights',
      desc: 'Receive skill mastery updates, active streak notifications, and gentle session cap reminders.',
      icon: LineChart,
    },
  ]

  return (
    <section className="py-28 bg-ink-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-spark">
              How It Works
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
              Simple 4-step journey to early confidence.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-ink-900/60 border border-white/10 relative group hover:border-signal/50 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-signal/10 border border-signal/30 flex items-center justify-center text-signal mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-mist-900/40 block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-signal transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-mist-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
