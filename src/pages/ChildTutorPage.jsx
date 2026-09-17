import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Mic, Volume2, ArrowLeft, Lock, CheckCircle2, Award, Flame, RotateCcw, BookOpen, Star, Calculator, Sun } from 'lucide-react'

export default function ChildTutorPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(120)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [showExitPinModal, setShowExitPinModal] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState(false)

  const challenges = [
    {
      type: 'phonics',
      title: 'Listen & Say Word',
      prompt: 'What sound does this friendly cat make?',
      word: 'CAT',
      phonics: '/k/ - /æ/ - /t/',
      iconType: 'book',
      options: ['CAT', 'BAT', 'DOG'],
      correct: 'CAT',
    },
    {
      type: 'math',
      title: 'Count & Add Stars',
      prompt: 'How many shiny stars do you see?',
      word: '3 + 2 = ?',
      phonics: 'Three plus two equals five!',
      iconType: 'math',
      options: ['4', '5', '6'],
      correct: '5',
    },
    {
      type: 'phonics',
      title: 'Rhyme Challenge',
      prompt: 'Which word rhymes with SUN?',
      word: 'SUN',
      phonics: '/s/ - /ʌ/ - /n/',
      iconType: 'sun',
      options: ['FUN', 'PIN', 'TOP'],
      correct: 'FUN',
    },
  ]

  const renderChallengeIcon = (type) => {
    if (type === 'book') return <BookOpen className="w-16 h-16 mx-auto text-signal" />
    if (type === 'sun') return <Sun className="w-16 h-16 mx-auto text-amber-400" />
    return <Calculator className="w-16 h-16 mx-auto text-spark" />
  }

  const activeChallenge = challenges[currentStep]

  const triggerVictoryConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0D9488', '#8B5CF6', '#F97316', '#E8FF47'],
    })
  }

  const speakText = (text) => {
    setIsPlayingAudio(true)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.rate = 0.85
      u.pitch = 1.2
      u.onend = () => setIsPlayingAudio(false)
      window.speechSynthesis.speak(u)
    } else {
      setTimeout(() => setIsPlayingAudio(false), 1200)
    }
  }

  const handleSelectOption = (opt) => {
    if (opt === activeChallenge.correct) {
      triggerVictoryConfetti()
      speakText(`Fantastic job! ${opt} is correct!`)
      setScore((s) => s + 50)
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % challenges.length)
      }, 1500)
    } else {
      speakText(`Let's try again together! Listen to Spark!`)
    }
  }

  const handleVerifyExitPin = (e) => {
    e.preventDefault()
    if (pinInput === '1234' || pinInput === '0000') {
      navigate('/dashboard')
    } else {
      setPinError(true)
    }
  }

  return (
    <div className="fixed inset-0 bg-ink-950 text-white z-50 overflow-y-auto flex flex-col justify-between p-6 md:p-12 font-kids select-none">
      
      {/* Top Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-signal/20 border border-signal/40 flex items-center justify-center text-signal">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-white flex items-center gap-2">
              Spark Learning Mode
            </h1>
            <p className="text-xs text-mist-900 font-sans">Leo's Active Session (Age 4)</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold">
            <Flame className="w-4 h-4 fill-current" /> 5 Day Streak
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-signal/15 border border-signal/30 text-signal text-sm font-bold font-mono">
            <Award className="w-4 h-4" /> {score} pts
          </div>

          <button
            onClick={() => setShowExitPinModal(true)}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-mist-700 hover:text-white transition-colors"
            title="Parent Exit Gate"
          >
            <Lock className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Challenge Area */}
      <div className="max-w-3xl mx-auto w-full my-auto py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="p-8 md:p-12 rounded-3xl bg-ink-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-center space-y-8 relative overflow-hidden"
          >
            {/* Spark Tutor Voice Header */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-spark/20 border border-spark/40 text-spark font-display text-sm font-bold">
              <Sparkles className="w-4 h-4" /> {activeChallenge.title}
            </div>

            <p className="text-xl md:text-2xl text-mist-100 font-medium">
              {activeChallenge.prompt}
            </p>

            {/* Visual Icon & Word */}
            <div className="py-6 bg-ink-950 rounded-2xl border border-white/10 space-y-3">
              <div className="py-2 flex items-center justify-center">{renderChallengeIcon(activeChallenge.iconType)}</div>
              <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-widest">
                {activeChallenge.word}
              </div>
              <div className="text-sm font-mono text-signal">
                {activeChallenge.phonics}
              </div>

              <button
                onClick={() => speakText(activeChallenge.phonics)}
                className="mt-2 px-4 py-2 rounded-xl bg-signal/20 border border-signal/40 text-signal font-sans text-xs font-bold inline-flex items-center gap-2 hover:bg-signal/30 transition-all"
              >
                <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                {isPlayingAudio ? 'Spark Speaking...' : 'Hear Sound Again'}
              </button>
            </div>

            {/* Multiple Choice Buttons */}
            <div className="grid grid-cols-3 gap-4">
              {activeChallenge.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  className="py-5 px-4 rounded-2xl bg-white/10 border border-white/15 font-display text-2xl font-bold text-white hover:bg-signal hover:text-ink-950 hover:border-signal transition-all shadow-lg active:scale-95"
                >
                  {opt}
                </button>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Session Bar */}
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center text-xs font-sans text-mist-900 border-t border-white/10 pt-6">
        <span>Session Time: 8 mins active</span>
        <span>Automatic Parent Lock: 20 mins</span>
      </div>

      {/* Parent PIN Exit Modal */}
      {showExitPinModal && (
        <div className="fixed inset-0 bg-ink-950/90 backdrop-blur-xl z-50 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full p-8 rounded-3xl bg-ink-900 border border-white/15 shadow-2xl space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-signal/20 border border-signal/40 flex items-center justify-center text-signal mx-auto">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white">Parent Security Gate</h3>
              <p className="text-xs text-mist-700 mt-1">Enter your 4-digit Parent PIN to exit child session.</p>
            </div>

            <form onSubmit={handleVerifyExitPin} className="space-y-4">
              <input
                type="password"
                maxLength={4}
                autoFocus
                placeholder="1234"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value)
                  setPinError(false)
                }}
                className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 text-white font-mono text-center text-2xl tracking-widest focus:outline-none focus:border-signal"
              />

              {pinError && (
                <p className="text-xs text-red-400">Incorrect PIN. (Default PIN: 1234)</p>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowExitPinModal(false)}
                  className="py-3 rounded-xl border border-white/10 text-white text-xs font-semibold hover:bg-white/5"
                >
                  Return to Learning
                </button>
                <button
                  type="submit"
                  className="py-3 rounded-xl bg-signal text-ink-950 text-xs font-bold font-display hover:bg-signal-bright shadow-lg"
                >
                  Exit to Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
