import { faqs } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  return (
    <section className="py-28 bg-ink-900/40 relative overflow-hidden text-left">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Parent & Educator Questions
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl font-extrabold text-white">
              Everything you need to know about Lumen.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={faq.q}
                value={`item-${i}`}
                className="rounded-2xl bg-ink-950 border border-white/10 overflow-hidden transition-colors data-[state=open]:border-signal/50"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full p-6 text-left font-display font-bold text-white text-base md:text-lg flex justify-between items-center gap-4 hover:text-signal transition-colors group">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-signal shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className="w-5 h-5 text-mist-700 group-hover:text-signal transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="px-6 pb-6 pt-0 text-sm text-mist-700 leading-relaxed border-t border-white/5 mt-2 pt-4">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>

      </div>
    </section>
  )
}
