window.PageAbout = {
  renderAbout: function(content) {
    const container = document.getElementById('about-content');
    if (!container) return;

    const interestsList = content.researchInterests.map(interest => `
      <li class="interests__item">${interest}</li>
    `).join('');

    const themesList = content.researchThemes.map(theme => `
      <div class="theme">
        <h3 class="theme__title">${theme.title}</h3>
        <p class="theme__desc">${theme.description}</p>
      </div>
    `).join('');

    container.innerHTML = `
      <h1 class="page-title">About</h1>
      <div class="bio">
        <p class="bio__text">${content.intro}</p>
      </div>
      
      <div class="interests">
        <h2 class="section-title">Research Interests</h2>
        <ul class="interests__list">
          ${interestsList}
        </ul>
      </div>
      
      <div class="themes">
        <h2 class="section-title">Research Themes</h2>
        <div class="themes__list">
          ${themesList}
        </div>
      </div>
    `;
  }
};
