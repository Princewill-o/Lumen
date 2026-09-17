import { motion } from 'framer-motion'

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.35, 
  direction = 'up',
  className = '' 
}) {
  const getOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -20, y: 0 }
      case 'right':
        return { x: 20, y: 0 }
      case 'down':
        return { x: 0, y: -20 }
      case 'up':
      default:
        return { x: 0, y: 20 }
    }
  }

  const offset = getOffset()

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
