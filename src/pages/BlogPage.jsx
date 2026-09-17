import { blogPosts } from '../data/content'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="pt-36 pb-28 bg-ink-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-signal">
              Parent & Educator Library
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white">
              Early Literacy & Cognitive Guides
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-mist-700 text-base md:text-lg">
              Evidence-based tips from speech-language pathologists, literacy coaches, and child psychologists.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 0.1}>
              <article className="p-8 rounded-3xl bg-ink-900/80 border border-white/10 hover:border-signal/50 transition-all flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-mist-900">
                    <span className="px-3 py-1 rounded-full bg-signal/15 text-signal font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-mist-700 leading-relaxed">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-xs font-bold text-mist-900 group-hover:text-white transition-colors">
                  <span>Published {post.date}</span>
                  <span className="text-signal flex items-center gap-1">Read Article <ArrowUpRight className="w-4 h-4" /></span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  )
}
