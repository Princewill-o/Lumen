import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react'

export default function BlogPreview() {
  return (
    <section className="py-28 bg-ink-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-spark">
                Parent Resources & Guides
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl font-extrabold text-white">
                Insights from early literacy researchers.
              </h2>
            </ScrollReveal>
          </div>

          <Link to="/blog">
            <button className="text-xs font-bold uppercase tracking-wider text-signal hover:underline flex items-center gap-1">
              View All Articles <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <Link to="/blog" className="block group">
                <div className="p-8 rounded-3xl bg-ink-900/60 border border-white/10 group-hover:border-signal/50 transition-all h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-mist-900">
                      <span className="px-2.5 py-1 rounded-full bg-signal/10 text-signal font-bold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-mist-700 leading-relaxed">
                      {post.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-xs font-bold text-mist-900 group-hover:text-white transition-colors">
                    <span>{post.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
