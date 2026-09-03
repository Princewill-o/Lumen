export function renderHowItWorks() {
  return `
    <section id="how-it-works" style="padding: 5rem 0; background-color: var(--color-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
      <div class="container">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 3.5rem;">
          <div class="badge" style="margin-bottom: 1rem;">Simple & Science-Backed</div>
          <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">How Lumen transforms daily screentime</h2>
          <p style="color: var(--color-text-secondary); font-size: 1.1rem;">
            Designed by childhood educators and AI experts to build confidence, phonics fluency, and early math mastery in 15 minutes a day.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <!-- Step 1 -->
          <div class="card card-interactive">
            <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background-color: var(--color-primary-soft); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: var(--font-heading); font-weight: 800;">
              1
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Create Profile & Baseline</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.95rem;">
              Set up your child’s age, grade, and current reading & math level in 60 seconds. Lumen tailors the initial question bank automatically.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="card card-interactive">
            <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background-color: var(--color-accent-soft); color: var(--color-accent); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: var(--font-heading); font-weight: 800;">
              2
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Adaptive AI Tutoring</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.95rem;">
              Child meets Spark! When they excel, difficulty gently ramps up. If they get stuck, Spark provides gentle scaffolding hints without frustration.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="card card-interactive">
            <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background-color: var(--color-primary-soft); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: var(--font-heading); font-weight: 800;">
              3
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Clear Parent Dashboards</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.95rem;">
              See real-time progress rings, phonics mastery, time spent, and AI recommendations without hovering or stressing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- For Parents Feature Highlight Section -->
    <section id="for-parents" style="padding: 5rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div>
            <div class="badge badge-accent" style="margin-bottom: 1rem;">Built For Families</div>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.25rem;">
              Screentime you’ll feel proud of.
            </h2>
            <p style="color: var(--color-text-secondary); font-size: 1.05rem; margin-bottom: 1.5rem;">
              No distracting ads, no addictive pay-to-win mechanics. Just focused, joyous learning customized to your child's pace.
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem;">
              <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-primary); font-size: 1.2rem;">✓</span>
                <div>
                  <strong>Multi-Child Support (up to 3 profiles)</strong>
                  <div style="font-size: 0.9rem; color: var(--color-text-secondary);">Separate learning trajectories for every child in the home.</div>
                </div>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-primary); font-size: 1.2rem;">✓</span>
                <div>
                  <strong>Parent PIN Protection</strong>
                  <div style="font-size: 0.9rem; color: var(--color-text-secondary);">Gentle hand-off gates prevent kids from exiting into settings.</div>
                </div>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-primary); font-size: 1.2rem;">✓</span>
                <div>
                  <strong>Text-To-Speech Audio Scaffolding</strong>
                  <div style="font-size: 0.9rem; color: var(--color-text-secondary);">Early readers can tap any word to listen to crystal-clear audio pronunciation.</div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Graphic Card Showcase -->
          <div class="card" style="padding: 2.5rem; background: linear-gradient(135deg, var(--color-primary-soft), var(--color-accent-soft)); border: none;">
            <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                <strong>Reading Phonics Mastery</strong>
                <span class="badge">88% Mastered</span>
              </div>
              <div style="height: 12px; background: rgba(0,0,0,0.06); border-radius: 99px; overflow: hidden; margin-bottom: 1.5rem;">
                <div style="width: 88%; height: 100%; background: var(--color-primary); border-radius: 99px;"></div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                <strong>Early Math & Counting</strong>
                <span class="badge badge-accent">92% Mastered</span>
              </div>
              <div style="height: 12px; background: rgba(0,0,0,0.06); border-radius: 99px; overflow: hidden;">
                <div style="width: 92%; height: 100%; background: var(--color-accent); border-radius: 99px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
