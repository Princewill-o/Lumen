export function renderAboutSection() {
  return `
    <section id="approach" style="padding: 5rem 0; background-color: var(--color-surface); border-top: 1px solid var(--color-border);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div class="card" style="padding: 2.5rem; background: linear-gradient(135deg, var(--color-primary-soft), var(--color-surface)); border-color: var(--color-primary);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🧠 📖 🔢</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">The Cognitive Science Behind Lumen</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.25rem;">
              Traditional apps rely on repetitive drills or flashing lights that cause cognitive overload. Lumen employs <strong>Zone of Proximal Development (ZPD)</strong> algorithms:
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> <strong>Dynamic Difficulty Scaling:</strong> Never too hard to cause frustration, never too easy to cause boredom.
              </li>
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> <strong>Socratic Scaffolding:</strong> Spark AI guides children toward the answer rather than telling them they are wrong.
              </li>
              <li style="display: flex; gap: 0.5rem; align-items: center;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> <strong>Multi-Sensory Phonics:</strong> Combining visual story cards with crystal-clear Text-to-Speech audio.
              </li>
            </ul>
          </div>

          <div>
            <div class="badge" style="margin-bottom: 1rem;">Our Approach</div>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.25rem;">
              Reimagining early education for digital native kids.
            </h2>
            <p style="color: var(--color-text-secondary); font-size: 1.05rem; margin-bottom: 1.5rem;">
              Founded by former educators and machine learning engineers, Lumen was created to give every child access to a patient, encouraging 1-on-1 private tutor.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
              <div style="padding: 1.25rem; border-radius: var(--radius-md); background: var(--color-bg); border: 1px solid var(--color-border);">
                <strong style="font-size: 1.8rem; font-family: var(--font-heading); color: var(--color-primary); display: block;">15 Mins</strong>
                <span style="font-size: 0.85rem; color: var(--color-text-secondary);">Optimal daily session time for maximum retention</span>
              </div>
              <div style="padding: 1.25rem; border-radius: var(--radius-md); background: var(--color-bg); border: 1px solid var(--color-border);">
                <strong style="font-size: 1.8rem; font-family: var(--font-heading); color: var(--color-accent); display: block;">Zero Ads</strong>
                <span style="font-size: 0.85rem; color: var(--color-text-secondary);">100% distraction-free & COPPA child privacy safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
