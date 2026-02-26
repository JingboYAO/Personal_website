window.ComponentProfile = {
  renderProfile: function(profile) {
    // Hero Name & Title
    const nameHero = document.getElementById('profile-name-hero');
    if (nameHero) nameHero.textContent = profile.name;

    const titleHero = document.getElementById('profile-title-hero');
    if (titleHero) titleHero.textContent = `${profile.title} in Economics`;

    // Standard profile elements (for other pages if reused, or if layout changes back)
    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = profile.name;

    const titleEl = document.getElementById('profile-title');
    if (titleEl) titleEl.textContent = profile.title;
    
    // ... keep other bindings just in case ...
  }
};
