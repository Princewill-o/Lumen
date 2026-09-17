import ScrollReveal from '../components/ui/ScrollReveal'
import TeamSection from '../components/sections/TeamSection'
import { ShieldCheck, Heart, Lock, Award, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-36 pb-28 bg-ink-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Safety, Ethics & Pedagogy
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white">
              Child privacy and safety is our foundational promise.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-mist-700 text-base md:text-lg">
              We built Lumen because early childhood digital discovery should be gentle, ad-free, and grounded in sound cognitive science.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-ink-900/80 border border-white/10 space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-signal/15 border border-signal/30 flex items-center justify-center text-signal">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">100% COPPA Certified</h3>
              <p className="text-xs text-mist-700 leading-relaxed">
                We never store raw child audio files on remote servers. All speech-to-text decoding processes locally or via anonymized ephemerally-encrypted speech pipelines.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-ink-900/80 border border-white/10 space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-spark/15 border border-spark/30 flex items-center justify-center text-spark">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Zero Advertisements & Social</h3>
              <p className="text-xs text-mist-700 leading-relaxed">
                No third-party trackers, no behavioral targeting, and no open chat or social features. Children are completely safe from external web exposure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 rounded-3xl bg-ink-900/80 border border-white/10 space-y-4 h-full">
              <div className="w-12 h-12 rounded-2xl bg-ember/15 border border-ember/30 flex items-center justify-center text-ember">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Gentle Screen Pacing</h3>
              <p className="text-xs text-mist-700 leading-relaxed">
                Lumen encourages off-screen physical reading and play. Our session limits prevent digital fatigue and protect growing eyes.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Team Section */}
        <TeamSection />

      </div>
    </div>
  )
}
