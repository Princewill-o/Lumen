import ScrollReveal from '../ui/ScrollReveal'
import { Sparkles, Brain, HeartHandshake, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react'

export default function StorySection() {
  return (
    <section className="py-28 bg-ink-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-signal/10 border border-signal/30 text-xs font-bold text-signal uppercase tracking-wider">
                <Brain className="w-4 h-4" /> The Science of Early Learning
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Static screen time causes frustration.{' '}
                <span className="text-signal">Voice AI builds mastery.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-mist-700 leading-relaxed text-base">
                Most educational apps for toddlers rely on silent tapping, random animations, or paywalled levels. When a child makes a mistake, standard apps trigger harsh red Buzzers that cause anxiety.
              </p>
              <p className="text-mist-700 leading-relaxed text-base mt-4">
                <strong>Lumen changes the medium.</strong> Using natural speech synthesis and adaptive acoustic feedback, Spark acts like a patient human tutor—listening to your child's exact voice, breaking words down into phoneme bites, and celebrating every micro-step forward.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Comparison Box */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="grid grid-cols-1 gap-6">
                
                {/* Traditional Apps Card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-3 mb-3 text-red-400 font-display font-bold text-base">
                    <ShieldAlert className="w-5 h-5" /> Traditional Kids Apps
                  </div>
                  <ul className="space-y-2 text-xs text-mist-700">
                    <li className="flex items-center gap-2"><XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Passive tap-and-guess mechanics</li>
                    <li className="flex items-center gap-2"><XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" /> Annoying pop-up ads & accidental purchases</li>
                    <li className="flex items-center gap-2"><XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" /> One-size-fits-all static difficulty curves</li>
                  </ul>
                </div>

                {/* Lumen AI Tutor Card */}
                <div className="p-7 rounded-2xl bg-ink-900 border-2 border-signal relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 bg-signal text-ink-950 font-bold text-[10px] uppercase tracking-wider rounded-bl-xl">
                    Lumen Difference
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-signal font-display font-bold text-lg">
                    <Sparkles className="w-6 h-6" /> Lumen Adaptive Voice AI
                  </div>

                  <ul className="space-y-3 text-sm text-mist-100">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-signal shrink-0" />
                      <span><strong>Kid Speech Recognition:</strong> Responds to actual sound pronunciations.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-signal shrink-0" />
                      <span><strong>Instant Difficulty Adjustment:</strong> Adapts in real-time to avoid tantrums.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-signal shrink-0" />
                      <span><strong>COPPA Privacy & Zero Ads:</strong> Safe independent screen time.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
