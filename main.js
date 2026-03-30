// Dark Mode Toggle
(function() {
    const THEME_KEY = 'theme-preference';
    const html = document.documentElement;

    function initTheme() {
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem(THEME_KEY);

        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = prefersDark ? 'dark' : 'light';
            html.setAttribute('data-theme', theme);
        }
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME_KEY, newTheme);

        // Update button text/icon aria label
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label',
                newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', toggleTheme);
            }
        });
    } else {
        initTheme();
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    // Expose toggle function
    window.toggleTheme = toggleTheme;
})();

// Set Active Navigation Link
(function() {
    function setActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.classList.remove('active');

            const href = link.getAttribute('href');

            // Handle root path
            if (currentPath === '/' || currentPath === '/index.html') {
                if (href === '/' || href === '/index.html') {
                    link.classList.add('active');
                }
            } else if (href === currentPath) {
                link.classList.add('active');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNav);
    } else {
        setActiveNav();
    }
})();

// Scroll-triggered Animations using IntersectionObserver
(function() {
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }
})();

// Mobile Menu Toggle
(function() {
    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger-menu');
        const navMenu = document.getElementById('nav-menu');

        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();

// Smooth Scroll Behavior (handled by CSS but backup for older browsers)
(function() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Fallback for older browsers handled by CSS
        return;
    }
})();
