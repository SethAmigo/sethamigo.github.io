// Elite standards for different lifts (for progress bars)
const ELITE_STANDARDS = {
  'Back Squat': 405,
  'Deadlift': 500,
  'Clean & Jerk': 300,
  'Snatch': 245,
  'Front Squat': 315,
  'Overhead Press': 185,
  'Pull-ups': 50
};

// Load and render CrossFit PRs
async function loadCrossFitPRs() {
  try {
    const response = await fetch('./data/crossfit-prs.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    // Store data globally for filtering
    window.crossfitPRsData = data.prs;

    // Render all PRs initially
    renderCrossFitPRs(data.prs, 'all');

    // Setup filter buttons
    setupPRFilters();
  } catch (error) {
    console.error('Error loading CrossFit PRs:', error);
    const prGrid = document.getElementById('pr-grid');
    if (prGrid) {
      prGrid.innerHTML = '<p style="color: var(--gray-medium); padding: var(--space-lg);">Unable to load PR data. Please try again later.</p>';
    }
  }
}

// Render PR cards
function renderCrossFitPRs(prs, filter = 'all') {
  const prGrid = document.getElementById('pr-grid');
  if (!prGrid) return;

  // Filter PRS based on category
  let filteredPRs = prs;
  if (filter !== 'all') {
    filteredPRs = prs.filter(pr => pr.category === filter);
  }

  // Clear grid
  prGrid.innerHTML = '';

  // Render cards
  filteredPRs.forEach(pr => {
    const card = createPRCard(pr);
    prGrid.appendChild(card);
  });
}

// Create individual PR card
function createPRCard(pr) {
  const card = document.createElement('div');
  card.className = 'pr-card';

  // Format date
  const dateObj = new Date(pr.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Determine if recent (within 60 days)
  const now = new Date();
  const diffTime = Math.abs(now - dateObj);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isRecent = diffDays <= 60;

  // Category label
  const categoryLabel = {
    'benchmark': 'Benchmark WOD',
    'lifts': 'Lift',
    'hero': 'Hero WOD'
  }[pr.category] || pr.category;

  // Build card HTML
  let html = `
    <div class="pr-card-content">
      <div class="pr-header">
        <h3 class="pr-name">${escapeHtml(pr.name)}</h3>
        <span class="pr-category ${pr.category}">${categoryLabel}</span>
      </div>

      <div class="pr-value">
        <span class="pr-number">${escapeHtml(pr.value)}</span>
        <span class="pr-unit">${escapeHtml(pr.unit)}</span>
      </div>
  `;

  // Add progress bar for lifts
  if (pr.category === 'lifts' && typeof pr.value === 'number') {
    const eliteStandard = ELITE_STANDARDS[pr.name];
    if (eliteStandard) {
      const percentage = Math.min((pr.value / eliteStandard) * 100, 100);
      html += `
        <div class="pr-progress-container">
          <div class="pr-progress-bar">
            <div class="pr-progress-fill" style="width: ${percentage}%"></div>
          </div>
          <span class="pr-progress-label">${Math.round(percentage)}% of elite</span>
        </div>
      `;
    }
  }

  html += `
      <div class="pr-footer">
        <span class="pr-date">${formattedDate}</span>
        ${isRecent ? '<span class="pr-badge">Recent</span>' : ''}
      </div>
  `;

  if (pr.notes) {
    html += `<p class="pr-notes">${escapeHtml(pr.notes)}</p>`;
  }

  html += '</div>';

  card.innerHTML = html;
  return card;
}

// Setup PR filter buttons
function setupPRFilters() {
  const filterButtons = document.querySelectorAll('.pr-filter');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      // Get filter value
      const filter = this.getAttribute('data-filter');

      // Re-render with filter
      renderCrossFitPRs(window.crossfitPRsData, filter);
    });
  });
}

// Load and render Tennis stats
async function loadTennis() {
  try {
    const response = await fetch('./data/tennis.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    // Render tennis stats
    renderTennisStats(data);
  } catch (error) {
    console.error('Error loading tennis data:', error);
    const tennisStats = document.getElementById('tennis-stats');
    if (tennisStats) {
      tennisStats.innerHTML = '<p style="color: var(--gray-medium); padding: var(--space-lg);">Unable to load tennis data. Please try again later.</p>';
    }
  }
}

// Render tennis section
function renderTennisStats(data) {
  const statsContainer = document.getElementById('tennis-stats');
  if (!statsContainer) return;

  // Calculate win rate and record
  const wins = data.matches.filter(m => m.result === 'W').length;
  const losses = data.matches.filter(m => m.result === 'L').length;
  const total = wins + losses;
  const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;

  // Sort matches by date (newest first)
  const sortedMatches = [...data.matches].sort((a, b) => new Date(b.date) - new Date(a.date));

  let html = `
    <div class="tennis-stats-grid">
      <div class="stat-card">
        <div class="stat-label">USTA Rating</div>
        <div class="stat-value ${isPlaceholder(data.usta_rating) ? 'placeholder' : ''}">${escapeHtml(data.usta_rating)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">UTR</div>
        <div class="stat-value ${isPlaceholder(data.utr) ? 'placeholder' : ''}">${escapeHtml(data.utr)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Years Playing</div>
        <div class="stat-value">${escapeHtml(data.years_playing.toString())}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Win Rate</div>
        <div class="stat-value">${winRate}%</div>
      </div>
    </div>

    <div class="tennis-record">
      <span class="record-wins">${wins}W</span>
      <span class="record-separator">—</span>
      <span class="record-losses">${losses}L</span>
    </div>

    <div class="tennis-playing-style">
      <p class="style-text">${escapeHtml(data.playing_style)}</p>
    </div>

    <div class="tennis-favorite-shot">
      <span class="shot-label">Favorite Shot:</span>
      <span class="shot-name">${escapeHtml(data.favorite_shot)}</span>
    </div>

    <div class="tennis-matches">
      <h3 class="matches-title">Recent Matches</h3>
      <div class="matches-list">
  `;

  // Add match rows
  sortedMatches.slice(0, 6).forEach((match, index) => {
    const dateObj = new Date(match.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const resultClass = match.result === 'W' ? 'match-win' : 'match-loss';

    html += `
      <div class="match-row ${index % 2 === 0 ? 'even' : 'odd'}">
        <div class="match-result ${resultClass}">
          ${match.result}
        </div>
        <div class="match-details">
          <div class="match-opponent ${isPlaceholder(match.opponent) ? 'placeholder' : ''}">
            ${escapeHtml(match.opponent)}
          </div>
          <div class="match-score">${escapeHtml(match.score)}</div>
        </div>
        <div class="match-date">${formattedDate}</div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  statsContainer.innerHTML = html;
}

// Helper function to detect placeholders
function isPlaceholder(value) {
  if (typeof value !== 'string') return false;
  return value.includes('PLACEHOLDER:');
}

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadCrossFitPRs();
  loadTennis();
});
