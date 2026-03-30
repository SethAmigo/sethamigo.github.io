// Load and display blog posts
let allBlogPosts = [];
let currentBlogFilter = 'all';

async function loadBlogPosts() {
    try {
        const response = await fetch('/data/blog.json');
        allBlogPosts = await response.json();
        renderBlogPosts();
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blog-grid').innerHTML = '<p>Error loading blog posts. Please try again.</p>';
    }
}

function renderBlogPosts() {
    const grid = document.getElementById('blog-grid');
    const filteredPosts = currentBlogFilter === 'all'
        ? allBlogPosts
        : allBlogPosts.filter(p => p.category === currentBlogFilter);

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    grid.innerHTML = filteredPosts.map(post => {
        const dateObj = new Date(post.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <a href="#" class="blog-card animate-on-scroll" data-slug="${post.slug}">
                <h3>${post.title}</h3>
                <div class="blog-meta">
                    <span class="blog-date">${formattedDate}</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-footer">
                    <span class="read-time">${post.readTime}</span>
                    <span class="read-more">Read →</span>
                </div>
            </a>
        `;
    }).join('');

    // Add event listeners to cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const slug = card.dataset.slug;
            // For now, just log. In future, navigate to post detail page
            console.log('Clicked blog post:', slug);
        });
    });
}

function initBlogFilters() {
    const filterPills = document.querySelectorAll('.blog-filter-section .filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentBlogFilter = pill.dataset.filter;
            renderBlogPosts();
        });
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadBlogPosts();
        initBlogFilters();
    });
} else {
    loadBlogPosts();
    initBlogFilters();
}
