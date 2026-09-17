import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'

export default function PricingPage({ onOpenAuth }) {
  return (
    <div className="pt-24 pb-20 bg-ink-950 min-h-screen">
      <PricingSection onOpenAuth={onOpenAuth} />
      <FAQSection />
    </div>
  )
}
