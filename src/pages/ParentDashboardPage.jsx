import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Flame, Award, BookOpen, Calculator, Clock, Lock, ShieldCheck, 
  ChevronRight, Sparkles, User, Settings, CheckCircle2, AlertCircle 
} from 'lucide-react'

export default function ParentDashboardPage() {
  const [children] = useState([
    { id: 1, name: 'Leo', age: 4, initial: 'L', streak: 5, readingMastery: 78, mathMastery: 65, currentLevel: 'Level 1: Phonics Explorer' },
    { id: 2, name: 'Maya', age: 6, initial: 'M', streak: 12, readingMastery: 92, mathMastery: 88, currentLevel: 'Level 3: Scholar' },
    { id: 3, name: 'Sam', age: 7, initial: 'S', streak: 3, readingMastery: 64, mathMastery: 79, currentLevel: 'Level 3: Scholar' },
  ])

  const [activeChildId, setActiveChildId] = useState(1)
  const [sessionLimit, setSessionLimit] = useState('20')
  const [pinSaved, setPinSaved] = useState(false)
  const [parentPin, setParentPin] = useState('1234')

  const activeChild = children.find((c) => c.id === activeChildId) || children[0]

  const handleSaveSettings = (e) => {
    e.preventDefault()
    setPinSaved(true)
    setTimeout(() => setPinSaved(false), 3000)
  }

  return (
    <div className="pt-32 pb-24 bg-ink-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal/15 border border-signal/30 text-xs font-bold text-signal mb-2">
              <ShieldCheck className="w-4 h-4" /> Parent Management Portal
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white">
              Welcome back, Parent Portal
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/tutor">
              <button className="px-5 py-2.5 rounded-full bg-signal hover:bg-signal-bright text-ink-950 font-display text-xs font-bold transition-all flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Launch {activeChild.name}'s Learning Session
              </button>
            </Link>
          </div>
        </div>

        {/* Child Profile Switcher Tabs */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-mist-900 block">
            Select Active Child Profile (Up to 4 Profiles)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => setActiveChildId(child.id)}
                className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  activeChildId === child.id
                    ? 'bg-signal/20 border-signal text-white shadow-xl ring-2 ring-signal/50'
                    : 'bg-ink-900/60 border-white/10 text-mist-700 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-signal/20 flex items-center justify-center font-display font-bold text-white text-base border border-white/10">
                    {child.initial}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">{child.name}</h3>
                    <p className="text-xs text-mist-700">Age {child.age} • {child.currentLevel.split(':')[0]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-ember bg-ember/10 px-2.5 py-1 rounded-full border border-ember/20">
                  <Flame className="w-4 h-4 fill-current" /> {child.streak}d
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 8 Cols: Overview & Progress */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Progress Card */}
            <div className="p-8 rounded-3xl bg-ink-900/80 border border-white/10 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-signal">
                    Current Progress Overview
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1">
                    {activeChild.name}'s Mastery Snapshot
                  </h2>
                </div>
                <span className="text-xs font-mono text-spark bg-spark/10 px-3 py-1 rounded-full border border-spark/20">
                  {activeChild.currentLevel}
                </span>
              </div>

              {/* Progress Rings / Bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Reading Ring */}
                <div className="p-6 rounded-2xl bg-ink-950 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span className="flex items-center gap-2 text-signal">
                      <BookOpen className="w-5 h-5" /> Phonics & Reading
                    </span>
                    <span className="font-mono text-signal">{activeChild.readingMastery}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-signal rounded-full transition-all duration-700" 
                      style={{ width: `${activeChild.readingMastery}%` }} 
                    />
                  </div>
                  <p className="text-xs text-mist-700">
                    Mastered 28 phonemes & 45 sight words this week.
                  </p>
                </div>

                {/* Math Ring */}
                <div className="p-6 rounded-2xl bg-ink-950 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span className="flex items-center gap-2 text-spark">
                      <Calculator className="w-5 h-5" /> Early Math & Patterns
                    </span>
                    <span className="font-mono text-spark">{activeChild.mathMastery}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-spark rounded-full transition-all duration-700" 
                      style={{ width: `${activeChild.mathMastery}%` }} 
                    />
                  </div>
                  <p className="text-xs text-mist-700">
                    Mastered subitizing 1-10 & shape matching.
                  </p>
                </div>

              </div>

              {/* Recent Learning Sessions Log */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-mist-900">
                  Recent Learning Sessions
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 flex justify-between items-center text-mist-100">
                    <span className="font-medium">Phonics Blend Challenge (/str/ & /bl/)</span>
                    <span className="text-mist-900">Today, 4:15 PM • 14 mins</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 flex justify-between items-center text-mist-100">
                    <span className="font-medium">Math Subitizing Level 2 (Adding Dots)</span>
                    <span className="text-mist-900">Yesterday, 5:00 PM • 18 mins</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right 4 Cols: Screen Pacing & Parent PIN Gate */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Screen Time & Pacing */}
            <div className="p-7 rounded-3xl bg-ink-900/80 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-spark/20 border border-spark/40 flex items-center justify-center text-spark">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Daily Screen Pacing</h3>
                  <p className="text-xs text-mist-700">Prevent fatigue with auto-breaks</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-mist-700 block">
                  Max Daily Learning Session Limit
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['15', '20', '30'].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setSessionLimit(mins)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        sessionLimit === mins
                          ? 'bg-spark text-white border-spark'
                          : 'bg-ink-950 border-white/10 text-mist-700 hover:text-white'
                      }`}
                    >
                      {mins} mins
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-ink-950 border border-white/5 text-xs text-mist-700 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-spark shrink-0 mt-0.5" />
                <span>
                  Spark gently ends sessions with a relaxing breathing wind-down when <strong>{sessionLimit} minutes</strong> is reached.
                </span>
              </div>
            </div>

            {/* Parent PIN Settings */}
            <div className="p-7 rounded-3xl bg-ink-900/80 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-signal/20 border border-signal/40 flex items-center justify-center text-signal">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Parent PIN Safety Gate</h3>
                  <p className="text-xs text-mist-700">Restricts child exit to main site</p>
                </div>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-mist-700 block mb-1.5">
                    4-Digit Security PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={parentPin}
                    onChange={(e) => setParentPin(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 text-white font-mono text-center text-lg tracking-widest focus:outline-none focus:border-signal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-signal hover:text-ink-950 font-display text-xs font-bold text-white transition-all flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Save Security Settings
                </button>

                {pinSaved && (
                  <div className="p-3 rounded-xl bg-signal/15 border border-signal/30 text-xs font-semibold text-signal text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> PIN Updated Successfully!
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
