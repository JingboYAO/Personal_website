window.PageResearch = {
  renderResearch: function(researchContent) {
    const container = document.getElementById('research-content');
    if (!container) return;

    // Helper to render paper list
    const renderPapers = (papers, type) => {
      if (!papers || papers.length === 0) return '';
      return `
        <div class="research-category">
          <h3 class="research-category__title">${type}</h3>
          <ul class="paper-list">
            ${papers.map((paper, index) => `
              <li class="paper-item">
                <h4 class="paper-title"><a href="${paper.link || '#'}" class="paper-link" target="_blank" rel="noopener noreferrer">${paper.title}</a></h4>
                <p class="paper-authors">${paper.authors}</p>
                
                <div class="paper-details">
                  <button class="toggle-btn" onclick="const summary = this.nextElementSibling; summary.classList.toggle('hidden'); this.textContent = summary.classList.contains('hidden') ? 'Show Summary' : 'Hide Summary'">Show Summary</button>
                  <div class="paper-summary hidden">
                    <p class="summary-block"><strong>Summary:</strong> ${paper.summary}</p>
                    ${paper.presentation ? `<p class="summary-block"><strong>Presentation:</strong> ${paper.presentation}</p>` : ''}
                    ${paper.award ? `<p class="summary-block"><strong>Award:</strong> ${paper.award}</p>` : ''}
                  </div>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    };

    container.innerHTML = `
      <h2 class="page-title">Research</h2>
      ${renderPapers(researchContent.jobMarketPaper, 'Job Market Paper')}
      ${renderPapers(researchContent.workingPapers, 'Working Papers')}
      ${renderPapers(researchContent.workInProgress, 'Work in Progress')}
    `;
  }
};
