export function renderResourcesSection() {
  return `
    <section id="resources" style="padding: 5rem 0; border-top: 1px solid var(--color-border);">
      <div class="container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3.5rem;">
          <div class="badge badge-accent" style="margin-bottom: 1rem;">Parent Resources & Blog</div>
          <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">Guides for raising confident early learners</h2>
          <p style="color: var(--color-text-secondary); font-size: 1.05rem;">
            Practical tips from child psychologists, literacy specialists, and pediatric educators.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <!-- Article 1 -->
          <article class="card card-interactive">
            <div style="height: 160px; background: linear-gradient(135deg, var(--color-primary-soft), var(--color-accent-soft)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 3rem; margin-bottom: 1.25rem;">
              📚
            </div>
            <div class="badge" style="margin-bottom: 0.5rem;">Early Literacy</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">5 Phonics Games You Can Play at the Dinner Table</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
              How to turn everyday conversations into fun letter-sound association practice for ages 4 to 7.
            </p>
            <a href="#" style="color: var(--color-primary); font-weight: 600; font-size: 0.85rem;">Read Article →</a>
          </article>

          <!-- Article 2 -->
          <article class="card card-interactive">
            <div style="height: 160px; background: linear-gradient(135deg, var(--color-accent-soft), var(--color-primary-soft)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 3rem; margin-bottom: 1.25rem;">
              🔢
            </div>
            <div class="badge badge-accent" style="margin-bottom: 0.5rem;">Early Math</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Why Counting Objects Beats Memorizing Math Tables</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
              Understanding visual cardinality builds a stronger foundation than rote flashcards.
            </p>
            <a href="#" style="color: var(--color-primary); font-weight: 600; font-size: 0.85rem;">Read Article →</a>
          </article>

          <!-- Article 3 -->
          <article class="card card-interactive">
            <div style="height: 160px; background: linear-gradient(135deg, var(--color-primary-soft), var(--color-surface)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 3rem; margin-bottom: 1.25rem;">
              📱
            </div>
            <div class="badge" style="margin-bottom: 0.5rem;">Parenting</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Passive Screentime vs Active Screentime</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
              Not all screen time is created equal. How interactive AI tutors foster active neural engagement.
            </p>
            <a href="#" style="color: var(--color-primary); font-weight: 600; font-size: 0.85rem;">Read Article →</a>
          </article>
        </div>
      </div>
    </section>
  `;
}
