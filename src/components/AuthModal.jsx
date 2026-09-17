import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Lock, ArrowRight, ShieldCheck } from 'lucide-react'

export default function AuthModal({ isOpen, onClose }) {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [pin, setPin] = useState('1234')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
    navigate('/dashboard')
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-ink-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-6 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="max-w-md w-full p-8 rounded-3xl bg-ink-900 border border-white/15 shadow-2xl relative space-y-6"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-mist-700 hover:text-white p-2"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-signal/20 border border-signal/40 flex items-center justify-center text-signal">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                {isRegister ? 'Create Parent Account' : 'Parent Dashboard Login'}
              </h3>
              <p className="text-xs text-mist-700">COPPA Secure & Encrypted</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-mist-700 block mb-1">
                Parent Email Address
              </label>
              <input
                type="email"
                required
                placeholder="parent@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 text-white text-sm focus:outline-none focus:border-signal"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-mist-700 block mb-1">
                4-Digit Security PIN
              </label>
              <input
                type="password"
                maxLength={4}
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 text-white font-mono text-center text-lg tracking-widest focus:outline-none focus:border-signal"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-signal hover:bg-signal-bright text-ink-950 font-display font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              {isRegister ? 'Register & Start Free Trial' : 'Sign In to Dashboard'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-mist-700">
            <span>{isRegister ? 'Already have an account?' : 'New to Lumen?'}</span>
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-signal font-bold hover:underline"
            >
              {isRegister ? 'Sign In Here' : 'Create Free Trial'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
