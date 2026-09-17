import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        const cursorType = target.getAttribute('data-cursor')
        setIsHovered(true)
        if (cursorType !== 'hover') {
          setCursorText(cursorType)
        } else {
          setCursorText('')
        }
      } else if (e.target.closest('button, a, input, select')) {
        setIsPointer(true)
      } else {
        setIsHovered(false)
        setIsPointer(false)
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-signal/60 mix-blend-difference hidden md:block"
        animate={{
          x: position.x - (isHovered ? 28 : 12),
          y: position.y - (isHovered ? 28 : 12),
          width: isHovered ? 56 : 24,
          height: isHovered ? 56 : 24,
          backgroundColor: isHovered ? 'rgba(181, 142, 49, 0.15)' : 'transparent',
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase text-signal">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 bg-signal rounded-full hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
    </>
  )
}
