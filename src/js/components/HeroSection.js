import { store } from '../state.js';

export function renderHeroSection() {
  return `
    <section class="hero container">
      <div class="hero-grid">
        <!-- Text Column -->
        <div class="hero-text">
          <div class="badge" style="margin-bottom: 1.25rem;">
            <span>✨ The 1-on-1 AI Tutor for Early Readers & Mathematicians</span>
          </div>

          <h1 class="hero-title">
            The private tutor that <span>grows with your child</span>.
          </h1>

          <p class="hero-subtitle">
            Lumen adapts to your child’s unique reading level and early math skills in real time — keeping them confident, curious, and excited to learn.
          </p>

          <div class="hero-ctas">
            <button class="btn btn-primary btn-lg" id="hero-start-trial-btn">
              Start 14-Day Free Trial →
            </button>
            <button class="btn btn-outline btn-lg" id="hero-demo-kid-btn">
              🎮 Try Kid Session Demo
            </button>
          </div>

          <div class="hero-proof">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.2rem;">
              <span>🛡️</span> <span>⭐</span> <span>💡</span>
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Designed for Children Ages 3–8</div>
              <div style="font-size: 0.85rem; color: var(--color-text-secondary);">Phonics Fluency & Early Arithmetic Mastery</div>
            </div>
          </div>
        </div>

        <!-- Visual Hero Preview Card (Interactive Demo Widget) -->
        <div class="hero-preview-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.4rem;">🦁</span>
              <div>
                <strong style="font-size: 0.95rem;">Interactive Demo Session</strong>
                <div style="font-size: 0.8rem; color: var(--color-text-secondary);">Level 1 • Adaptive Scaling</div>
              </div>
            </div>
            <div class="badge badge-accent">⭐ Demo Mode</div>
          </div>

          <!-- Spark AI Tutor Bubble -->
          <div class="tutor-avatar-container" style="padding: 1rem; margin-bottom: 1.25rem;">
            <div class="spark-mascot" style="width: 52px; height: 52px; font-size: 1.6rem;">✨</div>
            <div class="tutor-speech-bubble" style="font-size: 1rem;" id="hero-spark-speech">
              "Hi! Can you help me count? What is <strong>2 + 3</strong>?"
            </div>
          </div>

          <!-- Interactive Options Demo -->
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;" id="hero-demo-options">
            <button class="option-card hero-opt-btn" data-val="4" style="min-height: 70px; font-size: 1.1rem; padding: 0.75rem;">
              4 🍎
            </button>
            <button class="option-card hero-opt-btn" data-val="5" style="min-height: 70px; font-size: 1.1rem; padding: 0.75rem;">
              5 🍎
            </button>
          </div>

          <div style="margin-top: 1rem; font-size: 0.8rem; text-align: center; color: var(--color-text-secondary);">
            💡 Click an answer to test Spark's real-time AI response!
          </div>
        </div>
      </div>
    </section>
  `;
}

export function attachHeroEvents() {
  const trialBtn = document.getElementById('hero-start-trial-btn');
  if (trialBtn) {
    trialBtn.onclick = () => store.setState({ authModalOpen: true, authModalType: 'signup' });
  }

  const demoKidBtn = document.getElementById('hero-demo-kid-btn');
  if (demoKidBtn) {
    demoKidBtn.onclick = () => store.startChildSession('math');
  }

  const optBtns = document.querySelectorAll('.hero-opt-btn');
  const speechBubble = document.getElementById('hero-spark-speech');

  optBtns.forEach(btn => {
    btn.onclick = () => {
      const val = btn.getAttribute('data-val');
      if (val === '5') {
        btn.classList.add('correct');
        if (speechBubble) {
          speechBubble.innerHTML = '🎉 <strong>Bingo!</strong> 2 + 3 = 5! You are so smart! Let’s step up difficulty! 🚀';
        }
        if (window.confetti) {
          window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
        }
      } else {
        btn.classList.add('incorrect');
        if (speechBubble) {
          speechBubble.innerHTML = '💡 <strong>Almost!</strong> Let’s count together: 1, 2, 3, 4... 5! Try again!';
        }
      }
    };
  });
}
