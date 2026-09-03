import { store } from '../state.js';

let isAddProfileOpen = false;

export function renderParentDashboard() {
  const state = store.getState();
  const activeChild = store.getActiveChild();
  const tab = state.dashboardTab;

  return `
    <div class="dashboard-layout">
      <!-- Sidebar Navigation -->
      <aside class="dashboard-sidebar">
        <!-- Active Child Profile Selector Card -->
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-secondary); margin-bottom: 0.5rem;">
            Active Child Profile
          </div>
          <div class="child-selector" id="sidebar-child-selector-btn">
            <div class="child-avatar">${activeChild.avatar}</div>
            <div style="flex: 1;">
              <strong style="font-size: 0.95rem; display: block;">${activeChild.name}</strong>
              <span style="font-size: 0.75rem; color: var(--color-text-secondary);">${activeChild.grade} • Age ${activeChild.age}</span>
            </div>
            <span style="font-size: 0.8rem; color: var(--color-text-secondary);">▼</span>
          </div>
        </div>

        <!-- Sidebar Links -->
        <ul class="sidebar-nav">
          <li class="sidebar-item ${tab === 'overview' ? 'active' : ''}" data-tab="overview">
            <span>📊</span> Overview
          </li>
          <li class="sidebar-item ${tab === 'profiles' ? 'active' : ''}" data-tab="profiles">
            <span>👶</span> Child Profiles (${state.children.length}/3)
          </li>
          <li class="sidebar-item ${tab === 'progress' ? 'active' : ''}" data-tab="progress">
            <span>📈</span> Progress & Insights
          </li>
          <li class="sidebar-item ${tab === 'settings' ? 'active' : ''}" data-tab="settings">
            <span>⚙️</span> Settings & Billing
          </li>
        </ul>

        <!-- Launch Kid Session CTA -->
        <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-border);">
          <button class="btn btn-accent btn-lg" style="width: 100%; border-radius: var(--radius-md);" id="dash-launch-kid-btn">
            🚀 Start Session for ${activeChild.name}
          </button>
        </div>
      </aside>

      <!-- Main Workspace Content -->
      <main class="dashboard-main">
        ${renderTabContent(tab, activeChild, state)}
      </main>
    </div>

    <!-- Add Child Profile Modal -->
    ${isAddProfileOpen ? renderAddChildModal() : ''}
  `;
}

function renderTabContent(tab, activeChild, state) {
  switch (tab) {
    case 'overview':
      return renderOverviewTab(activeChild, state);
    case 'profiles':
      return renderProfilesTab(state);
    case 'progress':
      return renderProgressTab(activeChild);
    case 'settings':
      return renderSettingsTab(state);
    default:
      return renderOverviewTab(activeChild, state);
  }
}

/* Tab 1: Overview */
function renderOverviewTab(child, state) {
  return `
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 0.25rem;">Welcome back, ${state.user.name.split(' ')[0]}! 👋</h1>
          <p style="color: var(--color-text-secondary);">Here is ${child.name}’s learning activity for today.</p>
        </div>
        <div class="badge badge-accent" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
          <span class="streak-fire">🔥 ${child.streakDays} Day Learning Streak!</span>
        </div>
      </div>

      <!-- Hero Recommendation Card -->
      <div class="card" style="padding: 2rem; background: linear-gradient(135deg, var(--color-primary-soft), var(--color-surface)); border-color: var(--color-primary); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
          <div>
            <div class="badge" style="margin-bottom: 0.75rem;">Today's Recommended Session</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${child.favoriteSubject} Mastery Loop</h3>
            <p style="color: var(--color-text-secondary); max-width: 500px; margin-bottom: 1rem;">
              Spark has generated a 5-minute interactive story session focusing on phonics and early counting tailored for Level ${child.readingLevel}.
            </p>
            <button class="btn btn-primary" id="overview-start-session-btn">
              ▶ Start Today’s Session (5 mins)
            </button>
          </div>
          <div style="text-align: center; background: var(--color-surface); padding: 1.25rem 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
            <div style="font-size: 2.5rem; margin-bottom: 0.25rem;">⭐ ${child.totalStars}</div>
            <strong style="display: block; font-size: 0.9rem;">Total Stars Earned</strong>
            <span style="font-size: 0.8rem; color: var(--color-text-secondary);">${child.totalMinutes} total minutes learned</span>
          </div>
        </div>
      </div>

      <!-- Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Reading Progress Ring Card -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <strong style="font-size: 1.1rem; display: block;">Reading & Phonics</strong>
              <span style="font-size: 0.85rem; color: var(--color-text-secondary);">Level ${child.readingLevel} • Adaptive Storyteller</span>
            </div>
            <span style="font-size: 1.5rem;">📚</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1.5rem;">
            <div style="position: relative; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="var(--color-border)" stroke-width="10" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="var(--color-primary)" stroke-width="10" fill="none"
                        stroke-dasharray="251.2" stroke-dashoffset="${251.2 * (1 - child.readingProgress / 100)}"
                        stroke-linecap="round" class="progress-ring-circle" />
              </svg>
              <strong style="position: absolute; font-size: 1.1rem;">${child.readingProgress}%</strong>
            </div>
            <div>
              <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.25rem;">Strong Phonics Fluency</div>
              <div style="font-size: 0.8rem; color: var(--color-text-secondary);">Recognizes 40+ sight words and short story morals.</div>
            </div>
          </div>
        </div>

        <!-- Math Progress Ring Card -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <strong style="font-size: 1.1rem; display: block;">Early Arithmetic</strong>
              <span style="font-size: 0.85rem; color: var(--color-text-secondary);">Level ${child.mathLevel} • Visual Counter</span>
            </div>
            <span style="font-size: 1.5rem;">🔢</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1.5rem;">
            <div style="position: relative; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="var(--color-border)" stroke-width="10" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="var(--color-accent)" stroke-width="10" fill="none"
                        stroke-dasharray="251.2" stroke-dashoffset="${251.2 * (1 - child.mathProgress / 100)}"
                        stroke-linecap="round" class="progress-ring-circle" />
              </svg>
              <strong style="position: absolute; font-size: 1.1rem;">${child.mathProgress}%</strong>
            </div>
            <div>
              <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.25rem;">Addition & Shape Patterns</div>
              <div style="font-size: 0.8rem; color: var(--color-text-secondary);">Mastered single digit addition up to 10.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity Log -->
      <div class="card">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Recent Learning Activity</h3>
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-border);">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.25rem;">✨</span>
              <div>
                <strong>Completed Early Addition Loop</strong>
                <div style="font-size: 0.8rem; color: var(--color-text-secondary);">Today, 10:15 AM • 5 Questions • +6 Stars</div>
              </div>
            </div>
            <span class="badge">100% Accuracy</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-size: 1.25rem;">📖</span>
              <div>
                <strong>Read "Leo & Green Tree Story"</strong>
                <div style="font-size: 0.8rem; color: var(--color-text-secondary);">Yesterday, 4:30 PM • 5 Questions • +5 Stars</div>
              </div>
            </div>
            <span class="badge badge-accent">Phonics Focus</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* Tab 2: Profiles */
function renderProfilesTab(state) {
  return `
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 0.25rem;">Child Profiles</h1>
          <p style="color: var(--color-text-secondary);">Manage learning baseline levels and avatars for up to 3 kids.</p>
        </div>
        ${state.children.length < 3 ? `
          <button class="btn btn-primary" id="add-child-profile-btn">
            + Add Child Profile
          </button>
        ` : `
          <span class="badge" style="padding: 0.5rem 1rem;">3 / 3 Max Profiles Reached</span>
        `}
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
        ${state.children.map(c => `
          <div class="card" style="border-top: 4px solid ${c.color};">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <div style="display: flex; align-items: center; gap: 0.85rem;">
                <div class="child-avatar" style="width: 50px; height: 50px; font-size: 1.8rem; background: ${c.color}20;">${c.avatar}</div>
                <div>
                  <h3 style="font-size: 1.25rem;">${c.name}</h3>
                  <div style="font-size: 0.85rem; color: var(--color-text-secondary);">${c.grade} • Age ${c.age}</div>
                </div>
              </div>
              <button class="btn btn-outline btn-sm select-child-profile-btn" data-id="${c.id}">
                ${c.id === state.activeChildId ? '✓ Active' : 'Switch To'}
              </button>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--color-bg); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
              <div>
                <span style="font-size: 0.75rem; color: var(--color-text-secondary); font-weight: 600;">READING LEVEL</span>
                <div style="font-size: 1.1rem; font-weight: 700;">Level ${c.readingLevel}</div>
              </div>
              <div>
                <span style="font-size: 0.75rem; color: var(--color-text-secondary); font-weight: 600;">MATH LEVEL</span>
                <div style="font-size: 1.1rem; font-weight: 700;">Level ${c.mathLevel}</div>
              </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; color: var(--color-text-secondary);">
              <span>⭐ ${c.totalStars} Stars Earned</span>
              <span>🔥 ${c.streakDays} Day Streak</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* Tab 3: Progress & Insights */
function renderProgressTab(child) {
  return `
    <div>
      <div style="margin-bottom: 2rem;">
        <h1 style="font-size: 2rem; margin-bottom: 0.25rem;">Progress & AI Insights for ${child.name}</h1>
        <p style="color: var(--color-text-secondary);">Detailed mastery matrix powered by Spark adaptive learning engine.</p>
      </div>

      <!-- AI Tutor Recommendation Banner -->
      <div class="card" style="padding: 1.5rem; background: var(--color-primary-soft); border-color: var(--color-primary); margin-bottom: 2rem;">
        <div style="display: flex; align-items: flex-start; gap: 1rem;">
          <span style="font-size: 2rem;">✨</span>
          <div>
            <strong style="font-size: 1.1rem; color: var(--color-primary); display: block; margin-bottom: 0.25rem;">
              Spark AI Progress Summary
            </strong>
            <p style="font-size: 0.95rem; color: var(--color-text);">
              "${child.name} shows exceptional visual counting retention! Recommendation: Practice 2-digit addition and sight-word comprehension story cards this week."
            </p>
          </div>
        </div>
      </div>

      <!-- Skill Breakdown -->
      <div class="card">
        <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem;">Skill Mastery Breakdown</h3>
        
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <span>Phonics & Letter Sounds</span>
              <strong>95%</strong>
            </div>
            <div style="height: 10px; background: var(--color-border); border-radius: 99px; overflow: hidden;">
              <div style="width: 95%; height: 100%; background: var(--color-primary); border-radius: 99px;"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <span>Single Digit Addition (0-10)</span>
              <strong>88%</strong>
            </div>
            <div style="height: 10px; background: var(--color-border); border-radius: 99px; overflow: hidden;">
              <div style="width: 88%; height: 100%; background: var(--color-accent); border-radius: 99px;"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; font-size: 0.95rem;">
              <span>Story Comprehension & Details</span>
              <strong>78%</strong>
            </div>
            <div style="height: 10px; background: var(--color-border); border-radius: 99px; overflow: hidden;">
              <div style="width: 78%; height: 100%; background: var(--color-primary); border-radius: 99px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* Tab 4: Settings & Billing */
function renderSettingsTab(state) {
  return `
    <div style="max-width: 650px;">
      <div style="margin-bottom: 2rem;">
        <h1 style="font-size: 2rem; margin-bottom: 0.25rem;">Settings & Subscription</h1>
        <p style="color: var(--color-text-secondary);">Manage billing, security pin, and account details.</p>
      </div>

      <div class="card" style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Subscription Plan</h3>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-primary-soft); border-radius: var(--radius-md); margin-bottom: 1rem;">
          <div>
            <strong style="font-size: 1.05rem; color: var(--color-primary); display: block;">${state.user.plan}</strong>
            <span style="font-size: 0.85rem; color: var(--color-text-secondary);">${state.user.trialDaysLeft} days remaining in trial</span>
          </div>
          <button class="btn btn-primary btn-sm">Manage Billing</button>
        </div>
      </div>

      <div class="card">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Parent Lock PIN</h3>
        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
          Required when child attempts to exit Child Mode back into Parent Dashboard.
        </p>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <input type="text" value="${state.user.pin}" class="btn btn-outline" style="width: 120px; font-weight: 700; letter-spacing: 2px;" readonly />
          <button class="btn btn-outline btn-sm">Change PIN</button>
        </div>
      </div>
    </div>
  `;
}

/* Add Child Modal */
function renderAddChildModal() {
  return `
    <div class="modal-overlay" id="add-child-modal-overlay">
      <div class="modal-card" onclick="event.stopPropagation()">
        <button class="btn btn-ghost btn-sm" id="close-add-child-btn" style="position: absolute; top: 1rem; right: 1rem;">✕</button>
        
        <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">Add New Child Profile</h3>
        <form id="add-child-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Child's First Name</label>
            <input type="text" id="new-child-name" class="btn btn-outline" style="width: 100%; text-align: left;" placeholder="e.g. Sam" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Age</label>
              <input type="number" id="new-child-age" min="3" max="10" value="6" class="btn btn-outline" style="width: 100%;" required />
            </div>
            <div>
              <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.35rem;">Avatar Emoji</label>
              <input type="text" id="new-child-avatar" value="🐰" class="btn btn-outline" style="width: 100%; text-align: center; font-size: 1.2rem;" required />
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 0.5rem; width: 100%;">
            Create Profile & Begin Baseline
          </button>
        </form>
      </div>
    </div>
  `;
}

export function attachParentDashboardEvents() {
  // Sidebar tab clicking
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.onclick = () => {
      const tab = item.getAttribute('data-tab');
      store.setDashboardTab(tab);
    };
  });

  const launchKidBtn = document.getElementById('dash-launch-kid-btn');
  if (launchKidBtn) {
    launchKidBtn.onclick = () => store.startChildSession('reading');
  }

  const overviewStartBtn = document.getElementById('overview-start-session-btn');
  if (overviewStartBtn) {
    overviewStartBtn.onclick = () => store.startChildSession('reading');
  }

  const addProfileBtn = document.getElementById('add-child-profile-btn');
  if (addProfileBtn) {
    addProfileBtn.onclick = () => {
      isAddProfileOpen = true;
      store.notify();
    };
  }

  const closeAddProfileBtn = document.getElementById('close-add-child-btn');
  if (closeAddProfileBtn) {
    closeAddProfileBtn.onclick = () => {
      isAddProfileOpen = false;
      store.notify();
    };
  }

  const addChildForm = document.getElementById('add-child-form');
  if (addChildForm) {
    addChildForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('new-child-name').value;
      const age = parseInt(document.getElementById('new-child-age').value, 10);
      const avatar = document.getElementById('new-child-avatar').value;

      store.addChild({ name, age, avatar });
      isAddProfileOpen = false;
    };
  }

  const selectChildBtns = document.querySelectorAll('.select-child-profile-btn');
  selectChildBtns.forEach(btn => {
    btn.onclick = () => {
      const childId = btn.getAttribute('data-id');
      store.setActiveChild(childId);
    };
  });
}
