import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Mic, Volume2, ArrowRight, Play, CheckCircle, ShieldCheck, Award, BookOpen, Star, Calculator } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Hero({ onOpenAuth }) {
  const [activeWord, setActiveWord] = useState('CAT')
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [demoFeedback, setDemoFeedback] = useState('Click "Listen to Spark" to hear voice feedback!')

  const words = [
    { word: 'CAT', phonics: '/k/ - /æ/ - /t/', iconType: 'cat', level: 'Phonics Level 1' },
    { word: 'STAR', phonics: '/s/ - /t/ - /ɑː/ - /r/', iconType: 'star', level: 'Phonics Level 2' },
    { word: '5 + 3 = 8', phonics: 'Five plus three equals eight!', iconType: 'math', level: 'Math Level 1' },
  ]

  const renderWordIcon = (type) => {
    if (type === 'cat') return <BookOpen className="w-5 h-5 mx-auto text-signal" />
    if (type === 'star') return <Star className="w-5 h-5 mx-auto text-amber-400 fill-amber-400" />
    return <Calculator className="w-5 h-5 mx-auto text-spark" />
  }

  const handlePlayDemoSound = (item) => {
    setIsPlayingAudio(true)
    setDemoFeedback(`Spark Tutor: "Great job! ${item.phonics}"`)

    // Web Speech API fallback if available in browser
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(
        item.word.includes('+') ? item.phonics : `The word is ${item.word}. Sounds like ${item.phonics}`
      )
      utterance.rate = 0.85
      utterance.pitch = 1.2
      utterance.onend = () => setIsPlayingAudio(false)
      window.speechSynthesis.speak(utterance)
    } else {
      setTimeout(() => setIsPlayingAudio(false), 1500)
    }
  }

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-signal animate-spin-slow" />
            <span className="text-xs font-semibold tracking-wide text-mist-100">
              Adaptive Voice AI for Children Aged 3–8
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-signal"></span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Empower early reading & math with{' '}
            <span className="text-signal">
              adaptive voice AI.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-mist-700 max-w-2xl leading-relaxed font-body"
          >
            Lumen's gentle AI tutor, <strong className="text-white">Spark</strong>, listens, adapts difficulty in real-time, and guides children through phonics and early math without frustrating trial-and-error.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link to="/tutor">
              <MagneticButton
                className="px-8 py-4 rounded-full bg-signal hover:bg-signal-bright text-ink-950 font-display text-base font-bold transition-all hover:scale-105"
                data-cursor="Start"
              >
                Try Spark Tutor Free <ArrowRight className="w-5 h-5 ml-2 inline" />
              </MagneticButton>
            </Link>

            <Link to="/dashboard">
              <button
                className="px-7 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 hover:border-signal/50 transition-all flex items-center gap-2"
                data-cursor="hover"
              >
                Parent Dashboard Demo
              </button>
            </Link>

            {onOpenAuth && (
              <button
                onClick={onOpenAuth}
                className="px-5 py-4 text-mist-700 hover:text-white font-semibold text-sm transition-colors"
                data-cursor="hover"
              >
                Sign In
              </button>
            )}
          </motion.div>

          {/* Trust Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-mist-900 border-t border-white/5"
          >
            <span className="flex items-center gap-1.5 text-mist-700">
              <ShieldCheck className="w-4 h-4 text-signal" /> 100% COPPA Privacy Safe
            </span>
            <span className="flex items-center gap-1.5 text-mist-700">
              <CheckCircle className="w-4 h-4 text-spark" /> Zero Ads & Distractions
            </span>
            <span className="flex items-center gap-1.5 text-mist-700">
              <Award className="w-4 h-4 text-ember" /> Early Ed Certified
            </span>
          </motion.div>

        </div>

        {/* Right Column: Live Spark Widget Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Card Frame */}
          <div className="relative rounded-3xl bg-ink-900 border border-white/15 shadow-2xl overflow-hidden">
            
            {/* Inner Header */}
            <div className="p-6 bg-ink-900/90 rounded-[22px] border border-white/5 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-signal/20 border border-signal/40 flex items-center justify-center relative">
                    <Sparkles className="w-6 h-6 text-signal animate-pulse" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-signal animate-ping" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Spark Voice Demo</h3>
                    <p className="text-xs text-mist-900">Adaptive Phonics & Math</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-signal/15 border border-signal/30 text-[10px] font-bold text-signal uppercase tracking-wider">
                  Live Interactive
                </span>
              </div>

              {/* Word Select Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {words.map((item) => (
                  <button
                    key={item.word}
                    onClick={() => setActiveWord(item.word)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      activeWord === item.word
                        ? 'bg-signal/20 border-signal text-white font-bold shadow-lg'
                        : 'bg-white/5 border-white/5 text-mist-700 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-center h-6">{renderWordIcon(item.iconType)}</div>
                    <div className="text-xs font-bold font-display mt-1">{item.word}</div>
                  </button>
                ))}
              </div>

              {/* Active Sound Box */}
              {(() => {
                const current = words.find((w) => w.word === activeWord) || words[0]
                return (
                  <div className="p-5 rounded-2xl bg-ink-950 border border-white/10 text-center space-y-4 relative overflow-hidden">
                    <div className="text-xs font-semibold text-spark tracking-wider uppercase">
                      {current.level}
                    </div>

                    <div className="text-4xl font-extrabold font-display text-white tracking-wider">
                      {current.word}
                    </div>

                    <div className="text-sm font-mono text-signal">
                      {current.phonics}
                    </div>

                    <button
                      onClick={() => handlePlayDemoSound(current)}
                      disabled={isPlayingAudio}
                      className="w-full py-3 rounded-xl bg-signal hover:bg-signal-bright text-ink-950 font-display font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isPlayingAudio ? (
                        <>
                          <Volume2 className="w-5 h-5 animate-bounce" /> Speaking Sound...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" /> Listen to Spark Tutor
                        </>
                      )}
                    </button>
                  </div>
                )
              })()}

              {/* Live Feedback Line */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-mist-100 flex items-center gap-2.5">
                <Mic className="w-4 h-4 text-signal shrink-0" />
                <span className="italic">{demoFeedback}</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
