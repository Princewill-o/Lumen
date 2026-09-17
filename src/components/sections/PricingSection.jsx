import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import MagneticButton from '../ui/MagneticButton'
import { Check, Sparkles, ShieldCheck } from 'lucide-react'

export default function PricingSection({ onOpenAuth }) {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Spark Free Demo',
      badge: 'Free Trial',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: 'forever',
      desc: 'Immediate access to the voice-interactive Spark tutor demo.',
      features: [
        'Level 1 Phonics & Math Demo',
        'Basic Speech Recognition',
        '1 Child Profile',
        'No credit card required',
      ],
      cta: 'Try Spark Demo',
      highlighted: false,
      isDemoLink: true,
    },
    {
      name: 'Parent Pro',
      badge: 'Most Popular',
      priceMonthly: '$12',
      priceAnnual: '$8.25',
      period: isAnnual ? '/mo (billed $99/yr)' : '/month',
      desc: 'Complete reading & math access for 1 child with full parent insights.',
      features: [
        'Unlimited Spark Voice Tutor Access',
        'Phonics & Early Math Levels 1–4',
        'Real-Time Parent Dashboard',
        'Skill Mastery Rings & Weekly Digest',
        'Custom Screen Time Session Lock',
        '100% COPPA Safe & Zero Ads',
      ],
      cta: 'Start 14-Day Free Trial',
      highlighted: true,
      isDemoLink: false,
    },
    {
      name: 'Family All-Access',
      badge: 'Best Value',
      priceMonthly: '$19',
      priceAnnual: '$12.40',
      period: isAnnual ? '/mo (billed $149/yr)' : '/month',
      desc: 'Personalized early learning for up to 4 children with multi-profile switching.',
      features: [
        'Everything in Parent Pro',
        'Up to 4 Distinct Child Profiles',
        'Multi-Child Progress Comparison',
        'Printable Phonics & Math Worksheets',
        'Priority Parent Support Line',
      ],
      cta: 'Get Family Plan',
      highlighted: false,
      isDemoLink: false,
    },
  ]

  return (
    <section id="pricing" className="py-28 bg-ink-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Transparent Pricing
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
              Invest in your child's learning foundation.
            </h2>
          </ScrollReveal>

          {/* Billing Toggle */}
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-ink-900 border border-white/10 mt-4">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  !isAnnual ? 'bg-signal text-ink-950 shadow-md' : 'text-mist-700 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isAnnual ? 'bg-signal text-ink-950 shadow-md' : 'text-mist-700 hover:text-white'
                }`}
              >
                Annual Billing <span className="px-2 py-0.5 rounded-full bg-spark text-white text-[10px]">Save 30%</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 0.1} className="h-full">
              <div 
                className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                  plan.highlighted
                    ? 'bg-ink-900 border-2 border-signal scale-105 z-10'
                    : 'bg-ink-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-signal text-ink-950 font-display font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-mist-900">
                      {plan.badge}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-mist-700 mt-2 min-h-[36px]">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="py-4 border-y border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl md:text-5xl font-extrabold text-white">
                        {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-xs text-mist-700 font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs text-mist-100">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-signal shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6">
                  {plan.isDemoLink ? (
                    <Link to="/tutor" className="w-full block">
                      <MagneticButton className="w-full py-3.5 rounded-full border border-signal text-signal font-display font-bold text-xs hover:bg-signal hover:text-ink-950 transition-all">
                        {plan.cta}
                      </MagneticButton>
                    </Link>
                  ) : (
                    <button
                      onClick={onOpenAuth}
                      className={`w-full py-3.5 rounded-full font-display font-bold text-xs transition-all ${
                        plan.highlighted
                          ? 'bg-signal hover:bg-signal-bright text-ink-950'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
