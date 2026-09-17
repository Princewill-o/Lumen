import Hero from '../components/sections/Hero'
import LogoCloud from '../components/sections/LogoCloud'
import StorySection from '../components/sections/StorySection'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import CaseStudies from '../components/sections/CaseStudies'
import StatsSection from '../components/sections/StatsSection'
import TeamSection from '../components/sections/TeamSection'
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel'
import TechStack from '../components/sections/TechStack'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import BlogPreview from '../components/sections/BlogPreview'
import CTASection from '../components/sections/CTASection'

export default function HomePage({ onOpenAuth }) {
  return (
    <main>
      <Hero onOpenAuth={onOpenAuth} />
      <LogoCloud />
      <StorySection />
      <ServicesGrid />
      <ProcessTimeline />
      <CaseStudies />
      <StatsSection />
      <TeamSection />
      <TestimonialsCarousel />
      <TechStack />
      <PricingSection onOpenAuth={onOpenAuth} />
      <FAQSection />
      <BlogPreview />
      <CTASection onOpenAuth={onOpenAuth} />
    </main>
  )
}
