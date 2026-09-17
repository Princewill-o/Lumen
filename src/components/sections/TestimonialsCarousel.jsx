import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function TestimonialsCarousel() {
  const reviews = [
    {
      id: 1,
      quote: "My 4-year-old son Leo went from getting frustrated with physical flashcards to begging for his daily 15 minutes of Spark Phonics. The speech recognition is insanely accurate!",
      author: "Jessica M.",
      role: "Mother of 2 (Ages 4 & 6)",
      rating: 5,
      location: "Austin, TX",
    },
    {
      id: 2,
      quote: "As a Kindergarten teacher, finding COPPA-compliant software that actually aligns with the Science of Reading framework is rare. Lumen is now our gold standard.",
      author: "Robert Vance",
      role: "Lead Kindergarten Teacher",
      rating: 5,
      location: "Seattle, WA",
    },
    {
      id: 3,
      quote: "The parent dashboard gives me complete visibility without needing to hover over my daughter. The 20-minute gentle screen time lock keeps balance in our home.",
      author: "Amara & David K.",
      role: "Parents of 5-year-old Maya",
      rating: 5,
      location: "Chicago, IL",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const current = reviews[currentIndex]

  return (
    <section className="py-28 bg-ink-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-spark">
                Parent & Educator Reviews
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
                Loved by 18,000+ families.
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 hover:border-signal transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 hover:border-signal transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[260px] p-10 md:p-14 rounded-3xl bg-ink-900/80 border border-white/10 shadow-2xl">
          <Quote className="w-16 h-16 text-signal/15 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-1 text-signal">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="font-display text-xl md:text-2xl font-semibold text-white leading-relaxed max-w-4xl">
                "{current.quote}"
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{current.author}</h4>
                  <p className="text-xs text-mist-700">{current.role} • {current.location}</p>
                </div>
                <span className="text-xs font-mono text-signal bg-signal/10 px-3 py-1 rounded-full border border-signal/20">
                  Verified Parent Review
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
