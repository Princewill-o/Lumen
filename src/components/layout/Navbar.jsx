import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import { Menu, X, Sparkles, BookOpen, ShieldCheck, UserCheck, LayoutDashboard, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

export default function Navbar({ onOpenAuth }) {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Curriculum', path: '/curriculum' },
    { label: 'Parent Dashboard', path: '/dashboard' },
    { label: 'Child Mode (Spark)', path: '/tutor' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Safety & About', path: '/about' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-white/90 dark:bg-ink-950/85 border-b border-slate-200 dark:border-white/10 py-3.5 shadow-md dark:shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer z-50 group">
            <div className="w-10 h-10 rounded-xl bg-signal/20 border border-signal p-[2px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-100 dark:bg-ink-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-signal group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Lumen
                <span className="w-2 h-2 rounded-full bg-signal" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-signal -mt-1">
                AI Early Tutor
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-xs font-semibold tracking-wide transition-colors relative group py-1 ${
                    isActive ? 'text-signal' : 'text-slate-600 dark:text-mist-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-signal transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-amber-300 transition-colors flex items-center justify-center"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={onOpenAuth}
              className="text-xs font-semibold text-slate-600 dark:text-mist-700 hover:text-slate-900 dark:hover:text-white px-3 py-2 transition-colors flex items-center gap-1.5"
              data-cursor="hover"
            >
              <UserCheck className="w-4 h-4 text-signal" />
              Parent Login
            </button>

            <Link to="/tutor">
              <MagneticButton
                className="px-5 py-2.5 rounded-full bg-signal hover:bg-signal-bright text-ink-950 font-display text-xs font-bold hover:scale-105 transition-all"
                data-cursor="Try Spark"
              >
                <Sparkles className="w-4 h-4 mr-1.5 inline" />
                Launch Spark Demo
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Actions (Theme Toggle & Hamburger) */}
          <div className="flex lg:hidden items-center gap-2 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-amber-300"
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              className="text-slate-900 dark:text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} className="text-signal" /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-ink-950/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-8 pt-28 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-3xl font-bold text-white hover:text-signal transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 pt-8 border-t border-white/10"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenAuth()
                }}
                className="w-full py-3 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Parent Dashboard Sign In
              </button>
              <Link
                to="/tutor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-signal text-ink-950 font-display font-bold text-sm text-center shadow-lg"
              >
                Try Spark Demo Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
