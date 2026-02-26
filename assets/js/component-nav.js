window.ComponentNav = {
  renderNav: function(items) {
    const navList = document.getElementById('nav-list');
    if (navList && items) {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      navList.innerHTML = items.map(item => `
        <li class="nav__item">
          <a href="${item.url}" class="nav__link ${item.url === currentPath ? 'nav__link--active' : ''}">
            ${item.name}
          </a>
        </li>
      `).join('');
    }
  }
};
