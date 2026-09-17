import MarqueeText from '../ui/MarqueeText'

export default function LogoCloud() {
  const credentials = [
    'Science of Reading Framework',
    'COPPA Verified Privacy',
    'Early Childhood Ed Excellence',
    'Common Core Math Standard',
    'Parent Choice Gold Award 2026',
    'National Literacy Association',
    'Kids Safe Speech AI Certified',
  ]

  return (
    <section className="py-12 border-y border-white/10 bg-ink-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-mist-900">
          Recognized & Certified for Early Learning Standards
        </p>
      </div>
      <MarqueeText items={credentials} />
    </section>
  )
}
