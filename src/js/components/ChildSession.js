import { store } from '../state.js';
import { ADAPTIVE_QUESTION_BANK } from '../data/adaptiveBank.js';

let isParentGateOpen = false;

// Audio Chime Synthesizer via Web Audio API (Zero external mp3 files needed)
function playSuccessSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.3); // G5

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch (e) {
    // Ignore audio autoplay restrictions
  }
}

// Text-to-Speech Helper
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for kids
    utterance.pitch = 1.1; // Friendly tone
    window.speechSynthesis.speak(utterance);
  }
}

export function renderChildSession() {
  const state = store.getState();
  const child = store.getActiveChild();
  const session = state.childSession;
  const subject = session.activeSubject;
  const level = session.difficulty;

  // Get question from question bank matching subject and level
  const levelQuestions = ADAPTIVE_QUESTION_BANK[subject][level] || ADAPTIVE_QUESTION_BANK[subject][1];
  const qIndex = session.questionIndex % levelQuestions.length;
  const currentQuestion = levelQuestions[qIndex];

  // Progress percentage (5 questions per session loop)
  const progressPercent = (session.questionIndex / 5) * 100;

  return `
    <div class="child-mode">
      <!-- Child Top Header -->
      <header class="child-header">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="child-avatar" style="width: 44px; height: 44px; font-size: 1.5rem; border: 2px solid var(--color-primary);">${child.avatar}</div>
          <div>
            <strong style="font-size: 1.1rem; display: block;">${child.name}'s Adventure</strong>
            <span style="font-size: 0.8rem; opacity: 0.8;">Level ${level} ${subject === 'reading' ? 'Reading Story' : 'Math Explorer'}</span>
          </div>
        </div>

        <!-- Session Progress Bar -->
        <div class="child-progress-bar">
          <div class="child-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <!-- Action Items -->
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="badge badge-accent" style="font-size: 1.1rem; padding: 0.4rem 1rem;">
            ⭐ ${session.sessionStars} Stars
          </div>

          <!-- Subject Toggle Buttons -->
          <div style="display: flex; gap: 0.35rem; background: rgba(0,0,0,0.06); padding: 0.25rem; border-radius: var(--radius-full);">
            <button class="btn btn-sm ${subject === 'reading' ? 'btn-primary' : 'btn-ghost'}" id="kids-toggle-reading">
              📚 Reading
            </button>
            <button class="btn btn-sm ${subject === 'math' ? 'btn-primary' : 'btn-ghost'}" id="kids-toggle-math">
              🔢 Math
            </button>
          </div>

          <!-- Parent Lock Exit Button -->
          <button class="btn btn-outline btn-sm" id="kids-exit-btn" title="Exit to Parent View">
            🔒 Parent Exit
          </button>
        </div>
      </header>

      <!-- Main Learning Content -->
      <main class="child-main">
        ${session.isComplete ? renderSessionCompleteView(child, session) : renderActiveQuestionView(currentQuestion, session, level)}
      </main>

      <!-- Parent PIN Protection Gate Modal -->
      ${isParentGateOpen ? renderParentPinModal(state.user.pin) : ''}
    </div>
  `;
}

function renderActiveQuestionView(q, session, level) {
  return `
    <div style="width: 100%;">
      <!-- AI Spark Mascot & Speech Container -->
      <div class="tutor-avatar-container">
        <div class="spark-mascot">✨</div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span class="badge" style="font-size: 0.75rem;">Spark AI Tutor • Level ${level}</span>
            <!-- TTS Audio Button -->
            <button class="btn btn-outline btn-sm" id="spark-tts-btn" style="font-size: 0.8rem; padding: 0.2rem 0.6rem;">
              🔊 Listen to Prompt
            </button>
          </div>
          <div class="tutor-speech-bubble" id="spark-live-speech">
            ${q.story ? `<p style="font-style: italic; color: var(--color-primary); margin-bottom: 0.5rem;">"${q.story}"</p>` : ''}
            <p>${q.prompt}</p>
          </div>
        </div>
      </div>

      <!-- Question Visual Card (if present) -->
      ${q.visual ? `
        <div style="text-align: center; font-size: 2.2rem; margin-bottom: 1rem; background: var(--color-surface); padding: 0.75rem; border-radius: var(--radius-lg); border: 2px dashed var(--color-border);">
          ${q.visual}
        </div>
      ` : ''}

      <!-- Options Grid -->
      <div class="options-grid">
        ${q.options.map((opt, idx) => `
          <button class="option-card kid-option-btn" data-correct="${opt.isCorrect}" data-hint="${q.sparkHint}">
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSessionCompleteView(child, session) {
  return `
    <div style="text-align: center; max-width: 500px; width: 100%;">
      <div style="font-size: 4rem; margin-bottom: 1rem; animation: floatMascot 2s ease infinite;">🌟</div>
      <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; font-family: var(--font-kids);">You Grew Today, ${child.name}!</h1>
      <p style="font-size: 1.25rem; color: var(--color-text-secondary); margin-bottom: 2rem;">
        You earned <strong>${session.sessionStars} Stars</strong> in today's adaptive session!
      </p>

      <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-xl); border: 2px solid var(--color-primary-soft); margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-around;">
          <div>
            <div style="font-size: 2rem; font-weight: 800; color: var(--color-primary);">5/5</div>
            <div style="font-size: 0.85rem; color: var(--color-text-secondary);">Questions Solved</div>
          </div>
          <div>
            <div style="font-size: 2rem; font-weight: 800; color: var(--color-accent);">+5 Mins</div>
            <div style="font-size: 0.85rem; color: var(--color-text-secondary);">Brain Power</div>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button class="btn btn-primary btn-lg" id="kids-another-round-btn">
          🔄 Play Another Loop
        </button>
        <button class="btn btn-accent btn-lg" id="kids-finish-handoff-btn">
          🔒 Hand to Parent
        </button>
      </div>
    </div>
  `;
}

function renderParentPinModal(correctPin) {
  return `
    <div class="modal-overlay" id="parent-gate-overlay">
      <div class="modal-card" style="text-align: center;" onclick="event.stopPropagation()">
        <button class="btn btn-ghost btn-sm" id="close-parent-gate-btn" style="position: absolute; top: 1rem; right: 1rem;">✕</button>
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛡️</div>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">Parent Safety Lock</h3>
        <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 1.5rem;">
          To return to the Parent Dashboard, enter your PIN (Default: <strong>1234</strong>) or solve: <strong>3 + 4 = ?</strong>
        </p>

        <form id="parent-pin-form">
          <input type="password" id="parent-pin-input" class="btn btn-outline" style="width: 180px; text-align: center; font-size: 1.5rem; letter-spacing: 4px; margin-bottom: 1rem;" placeholder="••••" required autofocus />
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            Confirm & Exit to Parent Mode →
          </button>
        </form>
      </div>
    </div>
  `;
}

export function attachChildSessionEvents() {
  const state = store.getState();
  const session = state.childSession;
  const child = store.getActiveChild();
  const levelQuestions = ADAPTIVE_QUESTION_BANK[session.activeSubject][session.difficulty] || ADAPTIVE_QUESTION_BANK[session.activeSubject][1];
  const qIndex = session.questionIndex % levelQuestions.length;
  const currentQuestion = levelQuestions[qIndex];

  // Subject toggles
  const readingToggle = document.getElementById('kids-toggle-reading');
  const mathToggle = document.getElementById('kids-toggle-math');

  if (readingToggle) readingToggle.onclick = () => store.startChildSession('reading');
  if (mathToggle) mathToggle.onclick = () => store.startChildSession('math');

  // Text-To-Speech button
  const ttsBtn = document.getElementById('spark-tts-btn');
  if (ttsBtn && currentQuestion) {
    ttsBtn.onclick = () => speakText(currentQuestion.ttsText || currentQuestion.prompt);
  }

  // Option Cards interaction
  const optionBtns = document.querySelectorAll('.kid-option-btn');
  const speechBubble = document.getElementById('spark-live-speech');

  optionBtns.forEach(btn => {
    btn.onclick = () => {
      const isCorrect = btn.getAttribute('data-correct') === 'true';
      const hint = btn.getAttribute('data-hint');

      if (isCorrect) {
        btn.classList.add('correct');
        playSuccessSound();
        if (window.confetti) {
          window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        }
        setTimeout(() => {
          store.recordAnswer(true);
        }, 700);
      } else {
        btn.classList.add('incorrect');
        if (speechBubble && hint) {
          speechBubble.innerHTML = `<span style="color: var(--color-accent); font-weight: 700;">💡 Spark's Hint:</span> ${hint}`;
          speakText(hint);
        }
        setTimeout(() => {
          store.recordAnswer(false);
        }, 1200);
      }
    };
  });

  // Exit button -> triggers parent pin modal
  const exitBtn = document.getElementById('kids-exit-btn');
  const handoffBtn = document.getElementById('kids-finish-handoff-btn');

  if (exitBtn) {
    exitBtn.onclick = () => {
      isParentGateOpen = true;
      store.notify();
    };
  }

  if (handoffBtn) {
    handoffBtn.onclick = () => {
      isParentGateOpen = true;
      store.notify();
    };
  }

  const closeGateBtn = document.getElementById('close-parent-gate-btn');
  if (closeGateBtn) {
    closeGateBtn.onclick = () => {
      isParentGateOpen = false;
      store.notify();
    };
  }

  const pinForm = document.getElementById('parent-pin-form');
  if (pinForm) {
    pinForm.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('parent-pin-input').value;
      if (input === state.user.pin || input === '7') { // Accept PIN '1234' or math answer '7'
        isParentGateOpen = false;
        store.setView('parent-dashboard');
      } else {
        alert('Incorrect PIN or math answer. Try 1234 or 7.');
      }
    };
  }

  const anotherRoundBtn = document.getElementById('kids-another-round-btn');
  if (anotherRoundBtn) {
    anotherRoundBtn.onclick = () => store.startChildSession(session.activeSubject);
  }
}
