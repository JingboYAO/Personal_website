window.PageHome = {
  renderHome: function(content) {
    // 1. Set Hero Background
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      // Use direct style injection for background image
      heroSection.style.backgroundImage = `url('./assets/images/background.jpg')`;
    }

    // 2. Render Main Content (About Me + Research Interests)
    const container = document.getElementById('home-content');
    if (!container) return;

    // Build Research Themes HTML
    const researchThemesHTML = content.researchThemes ? `
      <ul class="research-themes__list">
        ${content.researchThemes.map(theme => `
          <li class="research-themes__item">
            <strong class="theme-title">${theme.title}:</strong> ${theme.description}
          </li>
        `).join('')}
      </ul>
    ` : '';

    container.innerHTML = `
      <h2 class="page-title">About me</h2>
      <div class="intro">
        <p class="intro__text">${content.intro}</p>
        <p class="intro__text">
          I was a visiting scholar at the <em>University of California San Diego</em> and a senior associate at the <em>Bank for International Settlements</em>. 
          I will visit <em>Hong Kong Institute for Monetary and Financial Research, Hong Kong Monetary Authority</em> from Apr to Jun, 2026.
        </p>
      </div>

      <div class="research-interests-section">
        <h3 class="section-title">Research Interests</h3>
        <p class="intro__text">${content.researchInterestsIntro || ''}</p>
        <div class="research-themes">
          ${researchThemesHTML}
        </div>
      </div>
    `;

    // 3. Update Buttons
    const btnCv = document.getElementById('btn-cv');
    const btnEmail = document.getElementById('btn-email');
    if (btnCv && window.CONFIG && window.CONFIG.profile) {
      btnCv.href = window.CONFIG.profile.cvLink;
    }
    if (btnEmail && window.CONFIG && window.CONFIG.profile) {
      btnEmail.href = `mailto:${window.CONFIG.profile.email}`;
    }
  }
};
