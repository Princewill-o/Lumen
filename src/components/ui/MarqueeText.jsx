import { motion } from 'framer-motion'

export default function MarqueeText({ items = [], reverse = false, className = '' }) {
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none ${className}`}>
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-display text-4xl md:text-6xl font-bold tracking-tight text-mist-900/40 uppercase hover:text-signal hover:opacity-100 transition-all cursor-default">
              {item}
            </span>
            <div className="w-3 h-3 rounded-full bg-signal/30"></div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
