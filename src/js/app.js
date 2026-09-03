import { store } from './state.js';
import { renderNavbar, attachNavbarEvents } from './components/Navbar.js';
import { renderHeroSection, attachHeroEvents } from './components/HeroSection.js';
import { renderHowItWorks } from './components/HowItWorks.js';
import { renderAboutSection } from './components/AboutSection.js';
import { renderResourcesSection } from './components/ResourcesSection.js';
import { renderPricingSection, attachPricingEvents } from './components/PricingSection.js';
import { renderAuthModal, attachAuthModalEvents } from './components/AuthModal.js';
import { renderParentDashboard, attachParentDashboardEvents } from './components/ParentDashboard.js';
import { renderChildSession, attachChildSessionEvents } from './components/ChildSession.js';
import { renderFooter, attachFooterEvents } from './components/Footer.js';

function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const state = store.getState();
  const currentView = state.currentView;

  // Set initial document theme
  document.documentElement.setAttribute('data-theme', state.theme);

  if (currentView === 'child-mode') {
    // Child mode full screen view
    appContainer.innerHTML = renderChildSession();
    attachChildSessionEvents();
  } else if (currentView === 'parent-dashboard') {
    // Parent platform view
    appContainer.innerHTML = `
      ${renderNavbar()}
      ${renderParentDashboard()}
      ${renderAuthModal()}
    `;
    attachNavbarEvents();
    attachParentDashboardEvents();
    attachAuthModalEvents();
  } else {
    // Marketing site view
    appContainer.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHeroSection()}
        ${renderHowItWorks()}
        ${renderAboutSection()}
        ${renderResourcesSection()}
        ${renderPricingSection()}
      </main>
      ${renderFooter()}
      ${renderAuthModal()}
    `;
    attachNavbarEvents();
    attachHeroEvents();
    attachPricingEvents();
    attachFooterEvents();
    attachAuthModalEvents();
  }

  // Refresh Lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Subscribe to state changes and render
store.subscribe(() => {
  renderApp();
});

// Initial boot
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// Direct execution fallback if DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderApp();
}
