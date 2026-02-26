window.PageTeaching = {
  renderTeaching: function(teachingContent) {
    const container = document.getElementById('teaching-content');
    if (!container) return;

    if (!teachingContent || teachingContent.length === 0) {
      container.innerHTML = '<p>No teaching experience listed yet.</p>';
      return;
    }

    const teachingList = teachingContent.map(inst => `
      <div class="institution-block">
        <h3 class="institution-title">${inst.institution}</h3>
        <ul class="course-list">
          ${inst.courses.map(course => `
            <li class="course-item">
              <span class="course-role">${course.role}</span>: ${course.title}
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

    container.innerHTML = `
      <h2 class="page-title">Teaching</h2>
      <div class="teaching-list">
        ${teachingList}
      </div>
    `;
  }
};
