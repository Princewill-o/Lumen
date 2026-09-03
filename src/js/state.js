/**
 * Central State Store for Lumen Platform
 * Manages local reactive state, local storage persistence, and view routing.
 */

const STORAGE_KEY = 'lumen_app_state_v1';

const defaultState = {
  theme: 'light',
  user: {
    isLoggedIn: true,
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@example.com',
    plan: 'Pro Trial',
    trialDaysLeft: 12,
    pin: '1234'
  },
  children: [
    {
      id: 'child_1',
      name: 'Leo',
      age: 5,
      grade: 'Pre-K',
      avatar: '🦁',
      color: '#F97316',
      readingLevel: 2,
      mathLevel: 2,
      readingProgress: 68, // percentage
      mathProgress: 75,
      streakDays: 5,
      totalMinutes: 140,
      totalStars: 42,
      favoriteSubject: 'Early Arithmetic'
    },
    {
      id: 'child_2',
      name: 'Maya',
      age: 7,
      grade: '1st Grade',
      avatar: '🦊',
      color: '#0D9488',
      readingLevel: 3,
      mathLevel: 4,
      readingProgress: 88,
      mathProgress: 92,
      streakDays: 8,
      totalMinutes: 210,
      totalStars: 89,
      favoriteSubject: 'Story Comprehension'
    }
  ],
  activeChildId: 'child_1',
  currentView: 'marketing', // 'marketing' | 'parent-dashboard' | 'child-mode'
  dashboardTab: 'overview', // 'overview' | 'profiles' | 'progress' | 'settings'
  authModalOpen: false,
  authModalType: 'signup', // 'signup' | 'login'
  
  // Child Mode Active Session State
  childSession: {
    activeSubject: 'reading', // 'reading' | 'math'
    questionIndex: 0,
    difficulty: 2, // 1 to 5
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
    return this.state.children.find(c => c.id === this.state.activeChildId) || this.state.children[0];
  }

  addChild(profileData) {
    const newChild = {
      id: 'child_' + Date.now(),
      name: profileData.name || 'New Kid',
      age: profileData.age || 5,
      grade: profileData.grade || 'K',
      avatar: profileData.avatar || '🐰',
      color: profileData.color || '#0D9488',
      readingLevel: 1,
      mathLevel: 1,
      readingProgress: 10,
      mathProgress: 10,
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
    const initialDifficulty = subject === 'reading' ? child.readingLevel : child.mathLevel;

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

    if (isComplete) {
      // Update child overall stats
      const updatedChildren = this.state.children.map(c => {
        if (c.id === child.id) {
          const addedProgress = Math.min(100, (session.activeSubject === 'reading' ? c.readingProgress : c.mathProgress) + 8);
          return {
            ...c,
            totalStars: c.totalStars + newStars + 2, // bonus completion stars
            totalMinutes: c.totalMinutes + 5,
            readingProgress: session.activeSubject === 'reading' ? addedProgress : c.readingProgress,
            mathProgress: session.activeSubject === 'math' ? addedProgress : c.mathProgress
          };
        }
        return c;
      });

      this.setState({
        children: updatedChildren,
        childSession: {
          ...session,
          consecutiveCorrect: newConsecutive,
          sessionStars: newStars + 2,
          difficulty: newDiff,
          isComplete: true
        }
      });
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
}

export const store = new StateStore();
