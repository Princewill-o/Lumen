/**
 * Central State Store for Lumen Platform
 * Clean zero-data initial state that builds dynamically as real users register & learn.
 */

const STORAGE_KEY = 'lumen_app_state_v1';

const defaultState = {
  theme: 'light',
  user: {
    isLoggedIn: false,
    name: '',
    email: '',
    plan: 'Pro Trial',
    trialDaysLeft: 14,
    pin: '1234'
  },
  children: [], // Clean empty children array
  activeChildId: null,
  currentView: 'marketing', // 'marketing' | 'parent-dashboard' | 'child-mode'
  dashboardTab: 'overview', // 'overview' | 'profiles' | 'progress' | 'settings'
  authModalOpen: false,
  authModalType: 'signup', // 'signup' | 'login'
  activities: [], // Real activity log entries

  // Child Mode Active Session State
  childSession: {
    activeSubject: 'reading', // 'reading' | 'math'
    questionIndex: 0,
    difficulty: 1, // Start at Level 1 baseline
    consecutiveCorrect: 0,
    sessionStars: 0,
    isComplete: false,
    history: []
  }
};

class StateStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage', e);
    }
    return { ...defaultState };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state to localStorage', e);
    }
  }

  getState() {
    return this.state;
  }

  setState(updater) {
    if (typeof updater === 'function') {
      this.state = updater(this.state);
    } else {
      this.state = { ...this.state, ...updater };
    }
    this.saveState();
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // --- Helper State Actions ---
  toggleTheme() {
    const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    this.setState({ theme: nextTheme });
  }

  setView(view) {
    this.setState({ currentView: view });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setDashboardTab(tab) {
    this.setState({ dashboardTab: tab });
  }

  setActiveChild(childId) {
    this.setState({ activeChildId: childId });
  }

  getActiveChild() {
    if (!this.state.activeChildId && this.state.children.length > 0) {
      return this.state.children[0];
    }
    return this.state.children.find(c => c.id === this.state.activeChildId) || null;
  }

  addChild(profileData) {
    const newChild = {
      id: 'child_' + Date.now(),
      name: profileData.name || 'Child',
      age: profileData.age || 5,
      grade: profileData.grade || (profileData.age <= 5 ? 'Pre-K' : 'Kindergarten'),
      avatar: profileData.avatar || '🦁',
      color: profileData.color || '#0D9488',
      readingLevel: 1,
      mathLevel: 1,
      readingProgress: 0, // Clean 0% baseline
      mathProgress: 0,
      streakDays: 1,
      totalMinutes: 0,
      totalStars: 0,
      favoriteSubject: 'Reading'
    };

    this.setState(prev => ({
      children: [...prev.children, newChild],
      activeChildId: newChild.id
    }));
  }

  startChildSession(subject = 'reading') {
    const child = this.getActiveChild();
    const initialDifficulty = child ? (subject === 'reading' ? child.readingLevel : child.mathLevel) : 1;

    this.setState({
      currentView: 'child-mode',
      childSession: {
        activeSubject: subject,
        questionIndex: 0,
        difficulty: initialDifficulty,
        consecutiveCorrect: 0,
        sessionStars: 0,
        isComplete: false,
        history: []
      }
    });
  }

  recordAnswer(isCorrect) {
    const child = this.getActiveChild();
    const session = this.state.childSession;
    
    let newConsecutive = isCorrect ? session.consecutiveCorrect + 1 : 0;
    let newStars = isCorrect ? session.sessionStars + 1 : session.sessionStars;
    let newDiff = session.difficulty;

    // Adaptive Engine: If child gets 2 correct in a row, step up difficulty
    if (isCorrect && newConsecutive >= 2 && newDiff < 5) {
      newDiff += 1;
      newConsecutive = 0;
    }

    const nextIndex = session.questionIndex + 1;
    const isComplete = nextIndex >= 5; // 5 questions per session loop

    if (isComplete && child) {
      const earnedStars = newStars + 2; // bonus completion stars
      const newActivity = {
        id: 'act_' + Date.now(),
        childName: child.name,
        subject: session.activeSubject === 'reading' ? 'Reading Story' : 'Math Explorer',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        stars: earnedStars
      };

      // Update child overall stats
      const updatedChildren = this.state.children.map(c => {
        if (c.id === child.id) {
          const addedProgress = Math.min(100, (session.activeSubject === 'reading' ? c.readingProgress : c.mathProgress) + 20);
          return {
            ...c,
            totalStars: c.totalStars + earnedStars,
            totalMinutes: c.totalMinutes + 5,
            readingLevel: session.activeSubject === 'reading' ? newDiff : c.readingLevel,
            mathLevel: session.activeSubject === 'math' ? newDiff : c.mathLevel,
            readingProgress: session.activeSubject === 'reading' ? addedProgress : c.readingProgress,
            mathProgress: session.activeSubject === 'math' ? addedProgress : c.mathProgress
          };
        }
        return c;
      });

      this.setState(prev => ({
        children: updatedChildren,
        activities: [newActivity, ...prev.activities].slice(0, 10),
        childSession: {
          ...session,
          consecutiveCorrect: newConsecutive,
          sessionStars: earnedStars,
          difficulty: newDiff,
          isComplete: true
        }
      }));
    } else {
      this.setState({
        childSession: {
          ...session,
          questionIndex: nextIndex,
          consecutiveCorrect: newConsecutive,
          sessionStars: newStars,
          difficulty: newDiff
        }
      });
    }
  }

  resetAllData() {
    localStorage.removeItem(STORAGE_KEY);
    this.state = { ...defaultState };
    this.notify();
  }
}

export const store = new StateStore();
