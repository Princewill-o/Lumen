import { store } from '../state.js';

export function renderAuthModal() {
  const state = store.getState();
  if (!state.authModalOpen) return '';

  const isSignup = state.authModalType === 'signup';

  return `
    <div class="modal-overlay" id="auth-modal-overlay">
      <div class="modal-card" onclick="event.stopPropagation()">
        <button class="btn btn-ghost btn-sm" id="auth-modal-close" style="position: absolute; top: 1rem; right: 1rem; font-size: 1.2rem;">
          ✕
        </button>

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div class="brand-spark" style="margin: 0 auto 0.75rem; width: 44px; height: 44px; font-size: 1.4rem;">✨</div>
          <h3 style="font-size: 1.5rem;">${isSignup ? 'Start Your 14-Day Free Trial' : 'Welcome Back to Lumen'}</h3>
          <p style="color: var(--color-text-secondary); font-size: 0.9rem;">
            ${isSignup ? 'Set up your parent account to unlock AI adaptive learning for your child.' : 'Sign in to access your parent dashboard and child profiles.'}
          </p>
        </div>

        <form id="auth-form" style="display: flex; flex-direction: column; gap: 1rem;">
          ${isSignup ? `
            <div>
              <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Parent Full Name</label>
              <input type="text" id="auth-name" class="btn btn-outline" style="width: 100%; text-align: left;" placeholder="e.g. Sarah Jenkins" value="${state.user.name}" required />
            </div>
          ` : ''}

          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Email Address</label>
            <input type="email" id="auth-email" class="btn btn-outline" style="width: 100%; text-align: left;" placeholder="parent@example.com" value="${state.user.email}" required />
          </div>

          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Password</label>
            <input type="password" class="btn btn-outline" style="width: 100%; text-align: left;" placeholder="••••••••" value="password123" required />
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 0.5rem; width: 100%;">
            ${isSignup ? 'Create Free Account & Continue →' : 'Sign In to Parent Dashboard →'}
          </button>
        </form>

        <div style="margin-top: 1.25rem; text-align: center; font-size: 0.85rem; color: var(--color-text-secondary);">
          ${isSignup ? 'Already have an account?' : "Don't have an account yet?"}
          <a href="#" id="auth-toggle-type" style="color: var(--color-primary); font-weight: 600; text-decoration: underline; margin-left: 0.25rem;">
            ${isSignup ? 'Log In' : 'Sign Up Free'}
          </a>
        </div>
      </div>
    </div>
  `;
}

export function attachAuthModalEvents() {
  const overlay = document.getElementById('auth-modal-overlay');
  const closeBtn = document.getElementById('auth-modal-close');
  const toggleBtn = document.getElementById('auth-toggle-type');
  const form = document.getElementById('auth-form');

  if (closeBtn) {
    closeBtn.onclick = () => store.setState({ authModalOpen: false });
  }

  if (overlay) {
    overlay.onclick = (e) => {
      if (e.target === overlay) store.setState({ authModalOpen: false });
    };
  }

  if (toggleBtn) {
    toggleBtn.onclick = (e) => {
      e.preventDefault();
      const currentType = store.getState().authModalType;
      store.setState({ authModalType: currentType === 'signup' ? 'login' : 'signup' });
    };
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('auth-name');
      const emailInput = document.getElementById('auth-email');

      store.setState(prev => ({
        authModalOpen: false,
        user: {
          ...prev.user,
          isLoggedIn: true,
          name: nameInput ? nameInput.value : prev.user.name,
          email: emailInput ? emailInput.value : prev.user.email
        },
        currentView: 'parent-dashboard'
      }));
    };
  }
}
