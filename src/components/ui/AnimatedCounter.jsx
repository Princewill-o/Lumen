import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1.8 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [displayValue, setDisplayValue] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    const start = 0
    const end = parseFloat(value) || 0
    const startTime = performance.now()
    const durMs = duration * 1000

    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durMs, 1)
      // Ease out cubic: fast start, soft stop
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * easeOut

      setDisplayValue(current)

      if (progress < 1) {
        countRef.current = requestAnimationFrame(step)
      } else {
        setDisplayValue(end)
      }
    }

    countRef.current = requestAnimationFrame(step)

    return () => {
      if (countRef.current) cancelAnimationFrame(countRef.current)
    }
  }, [inView, value, duration])

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toLocaleString()

  return (
    <span ref={ref} className="font-display font-bold">
      {inView ? formatted : '0'}
      {suffix}
    </span>
  )
}

