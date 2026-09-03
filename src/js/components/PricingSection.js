import { store } from '../state.js';

let isYearly = true;

export function renderPricingSection() {
  const monthlyPrice = isYearly ? '$9.99' : '$14.99';
  const billingPeriod = isYearly ? 'per month, billed annually ($119.88/yr)' : 'per month, billed monthly';

  return `
    <section id="pricing" style="padding: 5rem 0; background-color: var(--color-surface); border-top: 1px solid var(--color-border);">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 3rem;">
          <div class="badge badge-accent" style="margin-bottom: 1rem;">Simple & Transparent Pricing</div>
          <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">Invest in your child's core foundation</h2>
          <p style="color: var(--color-text-secondary); font-size: 1.05rem; margin-bottom: 2rem;">
            One simple plan includes up to 3 child profiles, full adaptive AI tutoring in Reading + Math, and real-time parent progress dashboards.
          </p>

          <!-- Interactive Monthly / Yearly Toggle -->
          <div style="display: inline-flex; align-items: center; gap: 0.75rem; background: var(--color-bg); padding: 0.35rem 0.5rem; border-radius: var(--radius-full); border: 1px solid var(--color-border);">
            <button class="btn btn-sm ${!isYearly ? 'btn-primary' : 'btn-ghost'}" id="pricing-monthly-toggle">
              Monthly
            </button>
            <button class="btn btn-sm ${isYearly ? 'btn-primary' : 'btn-ghost'}" id="pricing-yearly-toggle">
              Yearly <span style="background: var(--color-accent); color: white; border-radius: 99px; padding: 0.1rem 0.4rem; font-size: 0.7rem; margin-left: 0.25rem;">Save 33%</span>
            </button>
          </div>
        </div>

        <div style="max-width: 480px; margin: 0 auto;">
          <div class="card" style="padding: 2.5rem; position: relative; border-color: var(--color-primary); box-shadow: var(--shadow-lg), var(--shadow-glow);">
            <div class="badge" style="position: absolute; top: -14px; right: 2rem; background: var(--color-accent); color: white;">
              ⭐ Most Popular
            </div>

            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Family Pro Plan</h3>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem;">Everything you need for early reading & math success.</p>

            <div style="display: flex; align-items: baseline; gap: 0.35rem; margin-bottom: 0.5rem;">
              <span style="font-size: 3.25rem; font-weight: 800; font-family: var(--font-heading); color: var(--color-primary);" id="pricing-display-amount">${monthlyPrice}</span>
              <span style="color: var(--color-text-secondary); font-weight: 500;">/ month</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 2rem;" id="pricing-display-subtext">
              ${billingPeriod}
            </div>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Up to 3 Child Profiles
              </li>
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Adaptive Phonics & Story Comprehension
              </li>
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Adaptive Visual Counting & Arithmetic
              </li>
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Real-Time AI Tutor ("Spark") with Audio Synthesis
              </li>
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Parent Dashboard & Mastery Analytics
              </li>
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem;">
                <span style="color: var(--color-primary); font-weight: 800;">✓</span> Parent PIN Security Lock
              </li>
            </ul>

            <button class="btn btn-primary btn-lg" style="width: 100%;" id="pricing-cta-btn">
              Start 14-Day Free Trial →
            </button>
            <div style="text-align: center; font-size: 0.8rem; color: var(--color-text-secondary); margin-top: 0.85rem;">
              No credit card required upfront • Cancel anytime in 1 click
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function attachPricingEvents() {
  const monthlyBtn = document.getElementById('pricing-monthly-toggle');
  const yearlyBtn = document.getElementById('pricing-yearly-toggle');

  if (monthlyBtn && yearlyBtn) {
    monthlyBtn.onclick = () => {
      isYearly = false;
      store.notify();
    };
    yearlyBtn.onclick = () => {
      isYearly = true;
      store.notify();
    };
  }

  const ctaBtn = document.getElementById('pricing-cta-btn');
  if (ctaBtn) {
    ctaBtn.onclick = () => {
      store.setState({ authModalOpen: true, authModalType: 'signup' });
    };
  }
}
