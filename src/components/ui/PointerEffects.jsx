import { useEffect, useRef } from 'react'

export default function PointerEffects() {
  const ring = useRef(null)
  const dot = useRef(null)
  useEffect(() => {
    const media = matchMedia('(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)')
    let cleanup = () => {}
    function setup() {
      cleanup()
      if (!media.matches) return
      let frame = 0
      let x = -100, y = -100, rx = -100, ry = -100
      const root = document.documentElement
      const move = event => {
        x = event.clientX; y = event.clientY
        root.classList.add('pointer-active')
        const target = event.target instanceof Element ? event.target : null
        ring.current?.classList.toggle('is-interactive', !!target?.closest('a,button,summary,input,textarea,select'))
        const hero = document.querySelector('.hero')
        if (hero) {
          const rect = hero.getBoundingClientRect()
          hero.style.setProperty('--mouse-x', `${x - rect.left}px`)
          hero.style.setProperty('--mouse-y', `${y - rect.top}px`)
        }
      }
      const hide = () => root.classList.remove('pointer-active')
      const tick = () => {
        rx += (x - rx) * .18; ry += (y - ry) * .18
        if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
        if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`
        frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
      window.addEventListener('pointermove', move, { passive: true })
      document.addEventListener('mouseleave', hide)
      window.addEventListener('blur', hide)
      cleanup = () => {
        cancelAnimationFrame(frame); hide()
        window.removeEventListener('pointermove', move)
        document.removeEventListener('mouseleave', hide)
        window.removeEventListener('blur', hide)
      }
    }
    setup(); media.addEventListener('change', setup)
    return () => { cleanup(); media.removeEventListener('change', setup) }
  }, [])
  return <div aria-hidden="true"><div ref={ring} className="lumen-cursor-ring"/><div ref={dot} className="lumen-cursor-dot"/></div>
}

export function ScrollEffects() {
 useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)')
    let observer
    const onScroll = () => document.documentElement.classList.toggle('is-scrolled', window.scrollY > 36)
    const nodes = [...document.querySelectorAll('.section-heading, .section > h2, .solution-card, .process-grid article, .comparison article, .demo-window, .work-card, .belief, .faq-section, .contact-section')]
    function setup() {
      observer?.disconnect()
      nodes.forEach(node => node.classList.remove('reveal-pending'))
      if (media.matches || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target) }
      }), { threshold: .08 })
      nodes.forEach(node => {
        if (node.getBoundingClientRect().top > innerHeight) { node.classList.add('reveal-pending'); observer.observe(node) }
      })
    }
    setup(); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); media.addEventListener('change', setup)
    return () => { observer?.disconnect(); nodes.forEach(node=>node.classList.remove('reveal-pending')); window.removeEventListener('scroll', onScroll); media.removeEventListener('change', setup) }
  }, [])
  return null
}
