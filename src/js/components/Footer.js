import { store } from '../state.js';

export function renderFooter() {
  return `
    <footer style="background-color: var(--color-surface); border-top: 1px solid var(--color-border); padding: 4rem 0 2rem; margin-top: auto;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 3rem; margin-bottom: 3rem;">
          <div>
            <a href="#" class="brand-logo" style="margin-bottom: 1rem;">
              <div class="brand-spark">✨</div>
              <span>Lumen</span>
            </a>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; max-width: 320px; margin-bottom: 1.5rem;">
              The adaptive AI private tutor empowering children aged 3–8 to master reading & early math with joy and confidence.
            </p>
            <div style="font-size: 0.85rem; color: var(--color-text-secondary);">
              © 2026 Lumen Early Learning Inc. All rights reserved.
            </div>
          </div>

          <div>
            <strong style="display: block; margin-bottom: 1rem; font-size: 0.95rem;">Product</strong>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem; color: var(--color-text-secondary);">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#for-parents">For Parents</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#" id="footer-demo-btn">Interactive Demo</a></li>
            </ul>
          </div>

          <div>
            <strong style="display: block; margin-bottom: 1rem; font-size: 0.95rem;">Approach</strong>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem; color: var(--color-text-secondary);">
              <li><a href="#">Phonics Methodology</a></li>
              <li><a href="#">Visual Arithmetic</a></li>
              <li><a href="#">Adaptive AI Safety</a></li>
              <li><a href="#">Research & Studies</a></li>
            </ul>
          </div>

          <div>
            <strong style="display: block; margin-bottom: 1rem; font-size: 0.95rem;">Account & Trust</strong>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem; color: var(--color-text-secondary);">
              <li><a href="#" id="footer-login-btn">Parent Login</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Support & FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function attachFooterEvents() {
  const demoBtn = document.getElementById('footer-demo-btn');
  if (demoBtn) {
    demoBtn.onclick = (e) => {
      e.preventDefault();
      store.startChildSession('math');
    };
  }

  const loginBtn = document.getElementById('footer-login-btn');
  if (loginBtn) {
    loginBtn.onclick = (e) => {
      e.preventDefault();
      store.setState({ authModalOpen: true, authModalType: 'login' });
    };
  }
}
