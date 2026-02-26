document.addEventListener('DOMContentLoaded', () => {
  const config = window.CONFIG;
  if (!config) {
    console.error('Config not loaded');
    return;
  }

  // Render common layout components
  if (window.ComponentProfile) {
    window.ComponentProfile.renderProfile(config.profile);
  }
  if (window.ComponentNav) {
    window.ComponentNav.renderNav(config.navigation);
  }

  // Determine current page and render content
  const path = window.location.pathname;
  const isHome = path.endsWith('index.html') || path.endsWith('/') || path.endsWith('Personal_website/'); 
  const isResearch = path.endsWith('research.html');
  const isTeaching = path.endsWith('teaching.html');

  if (isHome) {
    if (window.PageHome) {
      window.PageHome.renderHome(config.content);
    }
  } else if (isResearch) {
    if (window.PageResearch) {
      // Pass the specific research content
      window.PageResearch.renderResearch(config.content.research);
    }
  } else if (isTeaching) {
    if (window.PageTeaching) {
      window.PageTeaching.renderTeaching(config.content.teaching);
    }
  }

  // Footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
