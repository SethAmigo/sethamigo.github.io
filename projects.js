// Load and display projects
let allProjects = [];
let currentFilter = 'all';

async function loadProjects() {
    try {
        const response = await fetch('/data/projects.json');
        allProjects = await response.json();
        renderProjects();
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-grid').innerHTML = '<p>Error loading projects. Please try again.</p>';
    }
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const filteredProjects = currentFilter === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === currentFilter);

    grid.innerHTML = filteredProjects.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <p class="project-company">${project.company} • ${project.role}</p>
            <p class="project-impact">${project.impact}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function initFilters() {
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.dataset.filter;
            renderProjects();
        });
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadProjects();
        initFilters();
    });
} else {
    loadProjects();
    initFilters();
}
