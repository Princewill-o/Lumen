import { store } from '../state.js';

export function renderNavbar() {
  const state = store.getState();
  const theme = state.theme;
  const isLoggedIn = state.user.isLoggedIn;
  const currentView = state.currentView;

  return `
    <header class="navbar glass">
      <div class="container nav-container">
        <!-- Logo -->
        <a href="#" class="brand-logo" id="nav-logo-btn">
          <div class="brand-spark">✨</div>
          <span>Lumen</span>
        </a>

        <!-- Nav Links (Marketing) -->
        ${currentView === 'marketing' ? `
          <ul class="nav-links">
            <li><a href="#how-it-works" class="nav-link">How It Works</a></li>
            <li><a href="#for-parents" class="nav-link">For Parents</a></li>
            <li><a href="#pricing" class="nav-link">Pricing</a></li>
            <li><a href="#approach" class="nav-link">Our Approach</a></li>
            <li><a href="#resources" class="nav-link">Blog & Resources</a></li>
          </ul>
        ` : `
          <div class="badge badge-accent" style="font-size: 0.9rem; padding: 0.35rem 0.9rem;">
            <span>🛡️ Parent Platform</span>
          </div>
        `}

        <!-- Actions -->
        <div class="nav-actions">
          <!-- Dark/Light Theme Toggle -->
          <button class="btn btn-outline btn-sm" id="theme-toggle-btn" title="Toggle Light/Dark Theme">
            ${theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>

          ${currentView === 'marketing' ? `
            <button class="btn btn-outline btn-sm" id="login-nav-btn">Log In</button>
            <button class="btn btn-primary btn-sm" id="dashboard-nav-btn">
              ${isLoggedIn ? 'Go to Dashboard →' : 'Start Free Trial'}
            </button>
          ` : `
            <button class="btn btn-outline btn-sm" id="back-marketing-btn">
              🏠 Homepage
            </button>
            <button class="btn btn-accent btn-sm" id="launch-kids-nav-btn">
              🚀 Launch Kid Mode
            </button>
          `}
        </div>
      </div>
    </header>
  `;
}

export function attachNavbarEvents() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.onclick = () => store.toggleTheme();
  }

  const logoBtn = document.getElementById('nav-logo-btn');
  if (logoBtn) {
    logoBtn.onclick = (e) => {
      e.preventDefault();
      store.setView('marketing');
    };
  }

  const loginBtn = document.getElementById('login-nav-btn');
  if (loginBtn) {
    loginBtn.onclick = () => store.setState({ authModalOpen: true, authModalType: 'login' });
  }

  const dashBtn = document.getElementById('dashboard-nav-btn');
  if (dashBtn) {
    dashBtn.onclick = () => store.setView('parent-dashboard');
  }

  const backMarketingBtn = document.getElementById('back-marketing-btn');
  if (backMarketingBtn) {
    backMarketingBtn.onclick = () => store.setView('marketing');
  }

  const launchKidsBtn = document.getElementById('launch-kids-nav-btn');
  if (launchKidsBtn) {
    launchKidsBtn.onclick = () => store.startChildSession('reading');
  }
}
