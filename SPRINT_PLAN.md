# Seth Amigo Personal Brand Website — Sprint Plan

**Prepared:** March 30, 2026
**Current State:** Static 3-page site (About, Work, Personal)
**Vision:** Evolve into a dynamic personal brand platform with blog, projects, dark mode, contact forms, and interactive features

---

## Executive Summary

Seth Amigo's current site is a clean, well-designed foundation with solid typography, animations, and information architecture. However, it lacks the interactivity and content depth needed to establish him as a thought leader in data analytics and organizational transformation.

**Strategic Goals:**
1. **Establish Authority** — Add a blog to share insights on data platforms, AI workflows, and organizational change
2. **Showcase Impact** — Create a dedicated projects/case-studies page highlighting measurable wins (e.g., "$50M unlocked," "2M cost reduction")
3. **Drive Engagement** — Add contact form, dark mode, newsletter signup to increase conversions
4. **Improve UX** — Add search, filtering, smooth interactions, and accessibility improvements
5. **Build Community** — Enable comments, social sharing, and cross-linking to position Seth as an approachable expert

**Technical Philosophy:** Stay vanilla HTML/CSS/JS. No frameworks needed. Use progressive enhancement and modern CSS/DOM APIs.

---

## Priority Matrix

### P1: Foundation (Week 1-2)
*Core infrastructure for scalability*
- [ ] Create blog system (index, individual post pages, archive)
- [ ] Build projects/case-studies page with cards
- [ ] Add dark mode toggle with localStorage persistence
- [ ] Improve navigation (sticky header, breadcrumbs, active states)
- [ ] Create reusable component structure (CSS modules pattern)

### P2: Engagement (Week 2-3)
*Drive conversions and interaction*
- [ ] Add contact form with client-side validation
- [ ] Build blog post filtering (category/tags)
- [ ] Add newsletter signup
- [ ] Implement social share buttons
- [ ] Create "Back to Top" button
- [ ] Add reading time estimates on blog posts

### P3: Polish & Scaling (Week 3-4)
*Refine experience and prepare for growth*
- [ ] Implement dark mode for all new pages
- [ ] Add search functionality (client-side JSON search)
- [ ] Create 404 page
- [ ] Optimize images and lazy loading
- [ ] Add analytics tracking (Google Analytics)
- [ ] Set up form submission handling (Formspree or similar)

### P4: Future (Post-Launch)
*Longer-term enhancements*
- [ ] Comments system (Disqus or similar)
- [ ] Related posts recommendations
- [ ] Email digests for blog subscribers
- [ ] Advanced filtering (date range, read time)
- [ ] Export to PDF (blog posts)

---

## DEV BRIEF — Full Stack Developer

### Overview
Add blog, projects, dark mode, forms, and interactivity while maintaining vanilla JS philosophy. Target: 4-week sprint.

### Phase 1: Structure & Infrastructure

#### Task 1.1: Create Blog Architecture
**File:** Create `/blog/` directory structure
```
/blog/
  index.html (blog homepage with post listing)
  archive.html (chronological/searchable archive)
  category.html (filtered by category)
  /posts/
    post-01-snowflake-platforms.html
    post-02-ai-workflows.html
    post-03-team-scaling.html
    (initial 5-7 posts)
/data/
  posts.json (metadata: title, date, category, excerpt, slug)
```

**Requirements:**
- Create `posts.json` with structure: `{ id, slug, title, date, category, excerpt, readTime, author, content_preview }`
- Build blog/index.html with:
  - Hero section "Blog & Insights"
  - Post card grid (3 columns, responsive to 1)
  - Each card shows: title, date, category badge, excerpt, read time, "Read More" button
  - No pagination initially (lazy load as you scroll, or infinite scroll via JS)
- Implement category pills/filters on blog index (JavaScript-driven, filter posts in real-time)
- Create individual post pages (`/blog/posts/slug.html`) with:
  - Full post content
  - Author byline + date
  - Reading time estimate
  - Social share buttons (Twitter, LinkedIn, Email)
  - Related posts section (fetch 3 related by category from posts.json)
  - Previous/Next navigation
- Estimated effort: 8-10 hours

**Acceptance Criteria:**
- Blog index loads all posts from posts.json
- Clicking category filter updates visible posts
- Individual post pages fully render with metadata
- Related posts accurately fetched
- All links functional

---

#### Task 1.2: Create Projects/Case Studies Page
**File:** Create `/projects.html`

**Requirements:**
- Create projects.json: `{ id, title, company, role, impact, metrics, description, technologies, link, image }`
- Build projects.html with:
  - Hero: "Featured Work & Case Studies"
  - Filterable project cards (by company: Lennar, UKG, Kaplan; or by type: Platform, Analytics, Automation)
  - Each card displays: title, company, role, 2-3 key metrics, short description, tech tags
  - Click to expand or navigate to detail page (or modal)
  - Call-to-action buttons
- Create detail pages for each project (`/projects/project-slug.html`):
  - Full case study narrative: challenge, approach, results
  - Metrics showcase (use visual elements: counters, graphs, percentages)
  - Technologies used with logos/icons
  - Links to related blog posts
  - "Share this project" buttons
- Initial projects to showcase:
  1. Palantir Foundry CoE ($50M value unlock)
  2. Snowflake/dbt Modern Data Platform
  3. Self-Service BI Platform @ UKG ($2M cost reduction)
  4. Six Sigma Process Improvement @ Kaplan
- Estimated effort: 6-8 hours

**Acceptance Criteria:**
- Projects page loads and displays all projects
- Filters work correctly (category-based)
- Project detail pages render fully
- Metrics display prominently with visual styling
- All internal links functional

---

#### Task 1.3: Implement Dark Mode
**Files:** Modify `styles.css` + create `dark.js`

**Requirements:**
- Extend CSS variables to support dark mode:
  ```css
  /* Light mode (default) */
  :root {
    --bg: #fff;
    --fg: #1a1a1a;
    --accent: #e63946;
  }

  /* Dark mode */
  :root[data-theme="dark"] {
    --bg: #1a1a1a;
    --fg: #fff;
    --accent: #ff6b5b; /* slightly lighter red for contrast)
  }
  ```
- Create `dark.js` (1-2 KB):
  - Check localStorage for `theme` preference
  - Check system preference (prefers-color-scheme)
  - Add dark mode toggle button in header (sun/moon icon, no text)
  - Update all color references to use CSS variables
  - Smooth transition between modes (0.3s)
- Apply to all existing pages + new pages
- Estimated effort: 3-4 hours

**Acceptance Criteria:**
- Dark mode toggle appears in header
- Toggle persists theme in localStorage
- All pages readable in both light and dark
- System preference detected and applied on first visit
- Transition is smooth, no flashing

---

### Phase 2: Engagement Features

#### Task 2.1: Contact Form
**File:** Create `/contact.html` + `contact.js`

**Requirements:**
- Create contact.html with form:
  - Name (required, min 2 chars)
  - Email (required, valid email)
  - Subject (required)
  - Message (required, min 10 chars)
  - Checkbox: "Subscribe to my newsletter"
  - reCAPTCHA v3 (silent, no friction)
  - Submit button + loading state
- Build contact.js for:
  - Client-side validation (show inline errors)
  - Disable submit until valid
  - Show success/error messages
  - Submit to Formspree or similar service
  - Clear form on success
  - Prevent spam (rate limit: max 1 per minute)
- Add Contact link to header navigation
- Estimated effort: 4-5 hours

**Acceptance Criteria:**
- Form validates all fields
- Validation errors display clearly
- Successful submission shows confirmation
- Form data submitted to backend
- Works across all browsers

---

#### Task 2.2: Newsletter Signup (Multiple Placements)
**File:** Create `newsletter.js`

**Requirements:**
- Add newsletter signup blocks to:
  1. Footer section (all pages) — "Stay in the loop"
  2. Blog sidebar or end-of-post CTA
  3. Contact form (as checkbox alternative)
- Each block has:
  - Email input
  - Submit button
  - Success message
- Build newsletter.js:
  - Validates email format
  - Submits to Substack, ConvertKit, or similar via API
  - Shows inline success/error
  - Rate limits (prevent spam)
- Track signup source (footer vs blog) via hidden field
- Estimated effort: 3-4 hours

**Acceptance Criteria:**
- Email signup appears in footer and blog
- Valid emails submitted to service
- Success message displays
- No spam/duplicate submissions

---

#### Task 2.3: Social Share & Back-to-Top
**File:** Modify posts + create `utils.js`

**Requirements:**
- Create utils.js with:
  - `getShareUrl(platform, title, url)` — returns share link for Twitter, LinkedIn, Email
  - `getSocialMeta()` — extracts page title/description for sharing
  - `scrollToTop()` — smooth scroll to top
- Add share buttons to blog posts:
  - Twitter, LinkedIn, Email
  - Icons only (hover shows label)
  - Positioned at bottom of post or floating sidebar
- Add floating "Back to Top" button (appears when scrolled > 300px):
  - Bottom-right corner
  - Smooth scroll to top
  - Hide when at top
- Estimated effort: 2-3 hours

**Acceptance Criteria:**
- Share buttons appear on posts
- Share links open correctly
- Back-to-top button appears/disappears appropriately
- Smooth scroll animations work

---

### Phase 3: Optimization & Polish

#### Task 3.1: Search Functionality
**File:** Create `/search.html` + `search.js`

**Requirements:**
- Create search.html:
  - Search input field
  - Real-time search results (as you type)
  - Results show: type (blog/project), title, excerpt, link
  - Filter by type (Blog, Projects, Pages)
- Build search.js:
  - Load posts.json and projects.json at page load
  - Index content (title, excerpt, category, tags)
  - Client-side search using simple word matching or fuse.js (lightweight library)
  - Display results as you type (debounced, 300ms)
  - Highlight search term in results
  - Show "No results" if empty
- Add search icon to header (opens search.html or modal)
- Estimated effort: 3-4 hours

**Acceptance Criteria:**
- Search finds blog posts and projects
- Results display instantly
- Highlighting works
- No lag or performance issues

---

#### Task 3.2: Image Optimization & Lazy Loading
**File:** Modify all HTML + create `lazyload.js`

**Requirements:**
- Create lazyload.js (using native `loading="lazy"`):
  - Add `loading="lazy"` attribute to all images (automatic or via JS)
  - Placeholder optimization for blog post headers and project images
  - Compress existing images (profile.jpg, family.jpg):
    - Target: <100KB each
    - Use WebP with PNG fallback for new images
- Create `/images/` directory with:
  - Profile image (multiple sizes: 200px, 400px, 800px)
  - Blog post feature images (1200x600)
  - Project images (600x400)
- Estimated effort: 2-3 hours

**Acceptance Criteria:**
- All images lazy load
- No visual reflow
- Images compressed and optimized
- Responsive images (srcset) where applicable

---

#### Task 3.3: 404 & Error Pages
**File:** Create `/404.html` + `/error.html`

**Requirements:**
- Create 404.html:
  - Friendly error message
  - Suggestions to go back or browse blog/projects
  - Same header/footer styling
  - Maybe a fun message related to data/tech
- Estimated effort: 1 hour

**Acceptance Criteria:**
- 404 page renders properly
- Links work correctly

---

#### Task 3.4: SEO & Meta Tags
**File:** Modify all HTML files

**Requirements:**
- Add to all pages:
  - Meta description (120 characters, unique per page)
  - Open Graph tags (og:title, og:description, og:image, og:url)
  - Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
  - Structured data (schema.org) — Person schema for homepage
- Create `meta-tags.js` or template helper to standardize
- Ensure all blog posts have proper meta
- Estimated effort: 2-3 hours

**Acceptance Criteria:**
- All pages have proper meta tags
- Preview in social media looks good
- Schema.org validates

---

### Technical Requirements (All Tasks)
- **No frameworks** — vanilla HTML/CSS/JS only
- **Browser support** — Chrome, Firefox, Safari (last 2 versions), modern Edge
- **Performance:**
  - Page load < 3 seconds on 4G
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Lighthouse score > 90
- **Accessibility:**
  - WCAG 2.1 AA compliance
  - Semantic HTML
  - ARIA labels where needed
  - Keyboard navigation
  - Color contrast >= 4.5:1
- **Code style:**
  - Vanilla JS (ES6+, no minification needed yet)
  - CSS follows BEM-ish naming (component-based)
  - Mobile-first responsive design
  - Comments on complex logic

---

## DESIGNER BRIEF — Web Graphic Designer

### Overview
Enhance visual design across all pages, implement dark mode aesthetics, and create new page layouts. Target: 2-3 week sprint.

### Brand & Color System

**Current Palette (Maintain):**
- Black: #1a1a1a (primary dark)
- White: #fff (primary light)
- Gray scale: #333 (dark), #666 (medium), #999 (light)
- Red accent: #e63946 (primary), #ff6b5b (dark mode variant)

**New Additions:**
- **Accent variations:**
  - Highlight: #ff8a80 (for hover states)
  - Error: #d32f2f (form validation)
  - Success: #2e7d32 (form confirmation)
- **Background tints:**
  - Code blocks: #f5f5f5 (light) / #2a2a2a (dark)
  - Quote panels: #fafafa (light) / #262626 (dark)

---

### Phase 1: Dark Mode & Layout Refinement

#### Task 1.1: Dark Mode Visual Specification
**Deliverables:** Design guidelines + CSS variables

**Requirements:**
- Define dark mode color mappings:
  - Text: #f0f0f0 (primary), #b0b0b0 (secondary)
  - Backgrounds: #1a1a1a (primary), #252525 (secondary)
  - Borders: #333 (subtle), #555 (pronounced)
  - Shadows: adjust opacity to work on dark (use rgba(255,255,255,0.1))
- Update accent color for better contrast:
  - Light mode: #e63946 (current)
  - Dark mode: #ff6b5b (more luminous)
- Create dark mode state for all elements:
  - Header: dark bg maintained, ensure nav links visible
  - Cards: subtle borders or background tint instead of fill
  - Code/quotes: distinct dark background
  - Links: ensure 4.5:1 contrast ratio in both modes
- Test contrast in both modes (use WCAG tool)
- Provide CSS variable mappings document
- Estimated effort: 4-5 hours

**Acceptance Criteria:**
- All colors meet WCAG AA (4.5:1 contrast)
- Dark mode feels intentional, not just inverted
- CSS variables clearly documented
- Visual spec shared with dev team

---

#### Task 1.2: Blog Page Layout Design
**Deliverable:** Wireframe + CSS specs for `/blog/index.html`

**Requirements:**
- Design blog listing page:
  - **Hero:** "Blog & Insights" headline + short tagline ("Share thoughts on data platforms, AI, and org transformation")
  - **Filter bar:** Category pills (All, Data Platforms, AI/Automation, Team Building, Career) with active/hover states
  - **Post cards grid:**
    - 3 columns (desktop), 2 (tablet), 1 (mobile)
    - Card layout: thumbnail (left, 150x150) + content (right)
    - Content: title, date + reading time, category badge, excerpt
    - Hover: lift effect (shadow), slight scale (1.02), title color change to red
    - No image initially; text-only cards acceptable (can add images later)
  - **Sidebar (optional on desktop, hidden on mobile):**
    - "Popular posts" (top 3 by views)
    - "Categories" (linked)
    - Newsletter signup
  - **Pagination or infinite scroll:** Design for smooth UX (no jarring jumps)
- Spacing: 48px gutters (desktop), 24px (tablet), 16px (mobile)
- Typography:
  - Post title: 24px/32px bold
  - Excerpt: 15px regular, gray
  - Meta (date, read time): 12px uppercase, light gray
- Estimated effort: 6-8 hours

**Acceptance Criteria:**
- Wireframe clearly shows layout
- CSS specifications complete
- Responsive breakpoints defined
- Color/typography specs match brand
- Hover/active states designed

---

#### Task 1.3: Project/Case Study Page Layout
**Deliverable:** Wireframe + CSS specs for `/projects.html` + project detail pages

**Requirements:**
- Design projects page:
  - **Hero:** "Featured Work" + "Measurable impact across data platforms, analytics, and organizational transformation"
  - **Filter bar:** Type pills (All, Platform, Analytics, Automation) — or by company (All, Lennar, UKG, Kaplan)
  - **Project cards grid:**
    - 2 columns (desktop), 1 (mobile)
    - Card layout: image (top, 600x300) + content (bottom)
    - Content: title, company + role, 2-3 key metrics (bold, large), short description, tech tags
    - Hover: overlay with "View Case Study" CTA, image slight zoom
  - **Filter interactivity:** Show/hide cards on click
- Design project detail page layout:
  - **Header:** Title, company, role, date, metrics showcase (4 key numbers in large typography)
  - **Content sections:**
    1. Challenge/Situation (800px max width)
    2. Approach/Solution with visual (image on right)
    3. Results/Impact with metrics (use visual elements: bars, counters, icons)
    4. Technologies used (grid of logos/icons)
    5. Related blog posts (3-post card grid)
  - **Sidebar (desktop only):** Share buttons, navigation (Prev/Next project)
- Metrics styling:
  - Use bold, large numbers (48px+)
  - Add currency symbols, percentages, or units clearly
  - Use accent color for emphasis
  - Consider micro-interactions (counting animation on page load)
- Estimated effort: 8-10 hours

**Acceptance Criteria:**
- Wireframes clear and detailed
- CSS specs for card hover/filter states
- Metrics styling prominent and readable
- Detail page layout supports long-form content
- Responsive across all breakpoints

---

### Phase 2: New Component Design

#### Task 2.1: Form Styling (Contact Form & Newsletter)
**Deliverable:** CSS specs + component styles

**Requirements:**
- Design contact form elements:
  - **Input fields:** 48px height, 16px padding, border-bottom style (no box), underline animation on focus
  - **Text area:** Same style, 4-row height minimum
  - **Labels:** 12px uppercase, positioned above input, gray until focus (then accent color)
  - **Error states:** Red underline, error message in red below field
  - **Success states:** Green checkmark, success message
  - **Submit button:** 48px height, full-width mobile/tablet, auto width desktop; accent background on hover
  - **Loading state:** Button shows spinner while submitting
- Newsletter signup (simplified):
  - Email input + button on same line (desktop) or stacked (mobile)
  - Compact version for footer: 40px height
  - Success message: green overlay or toast notification
- reCAPTCHA badge: position and styling
- Estimated effort: 3-4 hours

**Acceptance Criteria:**
- All form elements styled consistently
- Error/success states clear and accessible
- Mobile layout works (buttons don't overlap)
- Loading and submission states visible

---

#### Task 2.2: Blog Post Template Design
**Deliverable:** CSS specs for `/blog/posts/*.html`

**Requirements:**
- Design blog post page:
  - **Hero:** Feature image (full-width, 800x400 or 16:9), title overlay (bottom-left), date + read time (top-right)
  - **Content area:** 760px max-width, centered, 48px padding
  - **Typography:**
    - H1 (post title): 42px, bold, line-height 1.2
    - H2 (subheadings): 28px, bold, margin-top 48px
    - H3: 22px, bold
    - Body: 16px, line-height 1.8, gray
    - Code blocks: monospace, 14px, light gray bg, padding 16px
    - Blockquotes: left border (4px accent), italic, slightly larger, gray
  - **Author byline:** Small card with avatar (40x40), name, title, date, read time
  - **Share buttons:** Fixed sidebar (desktop) or bottom (mobile) — Twitter, LinkedIn, Email with icons
  - **Related posts:** 3-post grid at bottom
  - **Navigation:** Prev/Next post links (titles + thumbnail images)
- Code highlighting: use subtle background (not bright)
- Lists: bullets for unordered, numbers for ordered, 16px margin-left
- Estimated effort: 4-5 hours

**Acceptance Criteria:**
- Post content is highly readable (contrast, line-height, width)
- Code blocks styled clearly
- Share buttons accessible and clear
- Metadata (author, date) prominent but not intrusive
- Responsive to mobile (single column, no sidebar)

---

#### Task 2.3: Header & Navigation Updates
**Deliverable:** CSS + design specs for header refinements

**Requirements:**
- **Sticky header:** Current style maintained, add:
  - More pronounced shadow on scroll (triggers after 50px)
  - Slight blur/frosted glass effect (backdrop-filter already present, enhance)
- **Logo:** Current style, ensure brand consistency (uppercase "Seth Amigo")
- **Navigation links:** Current hover underline maintained, add:
  - Active state indicator (underline always visible for current page)
  - Mobile menu (hamburger icon) at < 768px
    - Off-canvas menu (slides in from left)
    - Dark background with white text
    - Close button (X)
    - Smooth animation
- **New elements in header:**
  - Dark mode toggle (moon icon, no text) — 24x24px, right of nav
  - Search icon (magnifying glass) — opens search modal
  - Position: far right, next to dark mode toggle
- Mobile header adjustments:
  - Compress padding (16px instead of 18px)
  - Hamburger menu replaces nav links
  - Dark mode + search in header still visible
- Estimated effort: 5-6 hours

**Acceptance Criteria:**
- Header sticky works smoothly
- Dark mode toggle visible and accessible
- Search icon functional
- Mobile menu toggles smoothly
- All interactive elements have hover states

---

#### Task 2.4: Footer Redesign
**Deliverable:** CSS specs for footer across all pages

**Requirements:**
- **Current footer:** Contact section only — enhance:
  - Add more sections (multi-column):
    1. Contact: Email, phone, links (current)
    2. Quick links: Home, Work, Personal, Blog, Projects
    3. Follow: LinkedIn, Twitter, GitHub (if applicable)
    4. Newsletter signup: Email input + button
  - Add separator line (1px, light gray)
  - Copyright notice: small, gray, bottom
- **Layout:**
  - 4 columns on desktop, 2 on tablet, 1 on mobile
  - 48px padding top/bottom, gutters between columns
  - Max-width 1200px (same as main content)
- **Styling:**
  - Section headings: 12px uppercase, bold, gray
  - Links: gray, hover -> black (light mode) / white (dark mode)
  - Subtle background tint (nearly white or very dark gray)
  - Smooth transitions on hover
- **Dark mode:** Footer text light gray, background dark, maintain contrast
- Estimated effort: 3-4 hours

**Acceptance Criteria:**
- Footer multi-column layout responsive
- Newsletter signup functional
- All links are accessible and styled
- Looks good in both light and dark modes

---

### Phase 3: Visual Polish & Consistency

#### Task 3.1: Illustrations & Icons
**Deliverable:** Icon set + optional illustrations

**Requirements:**
- Create/procure icons for:
  - Dark mode toggle (sun/moon)
  - Search (magnifying glass)
  - Share (Twitter, LinkedIn, Email)
  - Back to top (chevron up)
  - Menu (hamburger)
  - Tech stack (Snowflake, dbt, Palantir, Python, SQL — simple icons or logos)
  - Success/error indicators (checkmark, X)
- Icon specs:
  - Size: 24x24px (base), scalable to 16px, 32px
  - Stroke-based (1.5-2px strokes)
  - Consistent weight and style
  - Color: inherit (use text color)
  - Format: SVG inline or icon font (icomoon, if desired)
- Optional: Subtle illustrations for:
  - Blog hero section (data-related, minimal)
  - Projects page (abstract shapes, no realistic images)
  - 404 page (playful error illustration)
- Estimated effort: 4-6 hours

**Acceptance Criteria:**
- Icons consistent style and sizing
- All needed icons created/procured
- SVG or icon font properly integrated
- Icons scale well at different sizes
- Accessible (ARIA labels where needed)

---

#### Task 3.2: Hover & Interaction States
**Deliverable:** CSS specs for micro-interactions

**Requirements:**
- Document hover states for all interactive elements:
  - Links: color change + underline animation (0.3s)
  - Buttons: background shift, slight shadow, scale (1.02)
  - Cards: lift (shadow increase), slight scale (1.02), border color change
  - Form inputs: underline animation, label color to accent
  - Tags: background shift, no scale (or subtle)
- Animations:
  - All transitions 0.3s ease
  - No acceleration (keep smooth)
  - Avoid janky opacity changes (use transform instead)
- Focus states (keyboard navigation):
  - Visible outline or border (2px, accent color)
  - Apply to all interactive elements
  - Ensure contrast >= 3:1
- Estimated effort: 2-3 hours

**Acceptance Criteria:**
- All interactive elements have clear hover states
- Focus states visible for keyboard users
- Animations smooth and consistent
- No lag or jank on interaction

---

#### Task 3.3: Responsive Design & Mobile Refinements
**Deliverable:** CSS breakpoint specs + mobile UX doc

**Requirements:**
- Define responsive breakpoints:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px
- Mobile refinements:
  - Single column layouts (grid-template-columns: 1fr)
  - Increased touch targets (48px height minimum for buttons)
  - Reduced padding/margins (24px padding, 16px gutters)
  - Stack navigation (hamburger menu)
  - Hide sidebars on mobile (move content to end)
- Typography adjustments:
  - Headlines scale down (clamp() for fluidity)
  - Body text: 16px (minimum, for accessibility)
  - Line height maintained (1.6+)
- Image handling:
  - Responsive images (srcset where applicable)
  - Aspect-ratio preservation
  - Mobile-optimized sizes
- Test on actual devices (iPhone, Android, iPad)
- Estimated effort: 4-5 hours

**Acceptance Criteria:**
- All pages responsive across breakpoints
- Touch targets >= 48px on mobile
- No horizontal scrolling
- Text readable without zoom
- Images load appropriately

---

#### Task 3.4: Accessibility Audit & Polish
**Deliverable:** WCAG 2.1 AA compliance report

**Requirements:**
- Review all pages for:
  - Color contrast (WAVE tool, Lighthouse)
  - Keyboard navigation (Tab through all pages)
  - ARIA labels (buttons, icons, links)
  - Semantic HTML (use of headings, lists, etc.)
  - Alt text for images
  - Form labels and error messages
- Create/update styles for:
  - Focus outlines (visible, 2px, contrast >= 3:1)
  - Skip-to-main-content link (hidden, visible on focus)
  - Readable font sizes (16px minimum)
- Documentation:
  - Accessibility checklist per page
  - Notes on any known limitations
  - Testing process (tools used, browser versions tested)
- Estimated effort: 5-6 hours

**Acceptance Criteria:**
- All pages pass WAVE accessibility scan
- Keyboard navigation works on all pages
- All images have alt text
- Focus states visible
- Color contrast >= 4.5:1 for text

---

## QA BRIEF — QA Tester

### Overview
Comprehensive testing across functionality, responsiveness, accessibility, and performance. Target: 2-week sprint running parallel with dev/design.

### Test Environment Setup
- **Browsers:** Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
- **Devices:** Desktop (1920x1080, 1366x768), Tablet (iPad 10.5"), Mobile (iPhone 13, Samsung S21)
- **Network:** Throttled (Slow 4G), Regular 4G, WiFi
- **Tools:** Lighthouse, WAVE, aXe, Chrome DevTools, BrowserStack (if available)

---

### Phase 1: Functional Testing

#### Test Suite 1.1: Navigation & Page Structure
**Test Cases:**

1. **Header Navigation**
   - [ ] Header sticky on all pages
   - [ ] Active state shows correct page
   - [ ] Logo links to home
   - [ ] All nav links functional
   - [ ] Dark mode toggle present and functional
   - [ ] Search icon present
   - [ ] Mobile hamburger menu appears at 768px
   - [ ] Hamburger menu opens/closes smoothly
   - [ ] Mobile menu links functional

2. **Page Title & Breadcrumbs**
   - [ ] Each page has unique, descriptive title
   - [ ] Page titles render correctly (no overflow)
   - [ ] Fade animation works on titles

3. **Footer**
   - [ ] Footer displays on all pages
   - [ ] All footer links functional
   - [ ] Newsletter signup form present and functional
   - [ ] Contact info displays correctly
   - [ ] Footer responsive (stacks on mobile)

---

#### Test Suite 1.2: Blog Functionality
**Test Cases:**

1. **Blog Index Page**
   - [ ] All blog posts load
   - [ ] Category filter works (filters update in real-time)
   - [ ] Post cards display correctly (title, excerpt, date, read time, category)
   - [ ] "Read More" buttons navigate to correct post
   - [ ] Posts sorted by date (newest first)
   - [ ] No broken images or missing text

2. **Individual Blog Posts**
   - [ ] Page loads without errors
   - [ ] Post title, content, date, read time display
   - [ ] Author byline present
   - [ ] Share buttons present and functional (click opens share link)
   - [ ] Related posts show (correct category)
   - [ ] Prev/Next navigation works
   - [ ] Code blocks display correctly (with background)
   - [ ] Blockquotes styled distinctly
   - [ ] Images load and are responsive

3. **Blog Post Links**
   - [ ] All internal links in posts functional
   - [ ] External links open in new tab (target="_blank")
   - [ ] Link colors distinct from body text

---

#### Test Suite 1.3: Projects Page
**Test Cases:**

1. **Projects Index**
   - [ ] All projects load
   - [ ] Project filter works (by type/company)
   - [ ] Project cards display correctly
   - [ ] "View Case Study" CTA navigates to detail page
   - [ ] Grid responsive (2 cols > 1 col on mobile)

2. **Project Detail Pages**
   - [ ] Page loads without errors
   - [ ] All sections render (Challenge, Approach, Results, Technologies)
   - [ ] Metrics display prominently
   - [ ] Images load and are responsive
   - [ ] Related blog posts show (3 posts)
   - [ ] Share buttons functional
   - [ ] Prev/Next project navigation works

---

#### Test Suite 1.4: Contact Form
**Test Cases:**

1. **Form Validation**
   - [ ] Name field required, min 2 chars
   - [ ] Email field required, email format validated
   - [ ] Subject field required
   - [ ] Message field required, min 10 chars
   - [ ] Error messages display inline
   - [ ] Submit button disabled until form valid
   - [ ] Newsletter checkbox optional

2. **Form Submission**
   - [ ] Submit button shows loading state
   - [ ] Form data submitted to backend (Formspree, etc.)
   - [ ] Success message displays
   - [ ] Form clears after success
   - [ ] Error handling (network error, backend error)
   - [ ] reCAPTCHA functions (no false positives)

3. **Spam Prevention**
   - [ ] Rate limiting works (max 1 per minute)
   - [ ] Duplicate submissions prevented

---

#### Test Suite 1.5: Dark Mode
**Test Cases:**

1. **Dark Mode Toggle**
   - [ ] Toggle button functional
   - [ ] Theme persists in localStorage
   - [ ] Theme persists on page reload
   - [ ] System preference detected (prefers-color-scheme)
   - [ ] Smooth transition between modes (0.3s)

2. **Dark Mode Styling**
   - [ ] All text readable in dark mode
   - [ ] All backgrounds render correctly
   - [ ] Code blocks visually distinct
   - [ ] Links visible (underlines or color)
   - [ ] No images have transparency issues
   - [ ] Form inputs styled correctly
   - [ ] Borders/shadows visible

---

#### Test Suite 1.6: Newsletter & Share
**Test Cases:**

1. **Newsletter Signup**
   - [ ] Email input validates format
   - [ ] Submit button functional
   - [ ] Success message displays
   - [ ] Data submitted to service (Substack, ConvertKit, etc.)
   - [ ] Appears on blog and footer

2. **Social Share Buttons**
   - [ ] Twitter share link correct
   - [ ] LinkedIn share link correct
   - [ ] Email share link correct
   - [ ] Links open in new tab
   - [ ] Preview images/titles correct (meta tags)

---

#### Test Suite 1.7: Search (if implemented)
**Test Cases:**

1. **Search Functionality**
   - [ ] Search icon opens search page/modal
   - [ ] Results display in real-time (as you type)
   - [ ] Results filter by type (Blog, Projects)
   - [ ] Search term highlighted in results
   - [ ] Results link to correct pages
   - [ ] "No results" message displays when empty

---

### Phase 2: Responsive Design Testing

#### Test Suite 2.1: Mobile Layout (< 768px)
**Test Cases:**

1. **Layout & Spacing**
   - [ ] Single column layout on all pages
   - [ ] No horizontal scrolling
   - [ ] Padding/margins appropriate (16-24px)
   - [ ] Images fill width (no gaps)
   - [ ] Text readable (font size >= 16px, no zoom needed)

2. **Navigation**
   - [ ] Hamburger menu present and functional
   - [ ] Menu items stack vertically
   - [ ] Close menu on link click
   - [ ] Header height appropriate (not too tall)

3. **Forms**
   - [ ] Input fields full width (or 90%)
   - [ ] Labels above inputs
   - [ ] Submit buttons large (48px+)
   - [ ] Error messages visible
   - [ ] Keyboard doesn't obscure form (test on real device)

4. **Touch Targets**
   - [ ] All buttons >= 48x48px
   - [ ] All links >= 44x44px
   - [ ] Spacing between targets >= 8px
   - [ ] No accidental taps

5. **Images & Media**
   - [ ] Images responsive (scale with viewport)
   - [ ] Aspect ratios maintained
   - [ ] No image stretching

#### Test Suite 2.2: Tablet Layout (768px - 1199px)
**Test Cases:**

1. **Grid Layouts**
   - [ ] 2-column layouts on tablet
   - [ ] Spacing appropriate (24-32px gutters)
   - [ ] Content readable
   - [ ] No sidebar collapse issues

2. **Navigation**
   - [ ] Full nav displays (no hamburger)
   - [ ] Header spacing adequate

#### Test Suite 2.3: Desktop Layout (1200px+)
**Test Cases:**

1. **Content Width**
   - [ ] Max-width respected (1200px for content)
   - [ ] Centered properly
   - [ ] Sidebar displays (where applicable)

2. **Multi-column Grids**
   - [ ] 3-column grids render correctly (blog cards)
   - [ ] 2-column grids render correctly (projects)
   - [ ] Spacing even and predictable

---

### Phase 3: Accessibility Testing

#### Test Suite 3.1: WCAG 2.1 Compliance
**Test Cases:**

1. **Color Contrast (WCAG AA, 4.5:1 minimum)**
   - [ ] All body text has sufficient contrast
   - [ ] All labels have sufficient contrast
   - [ ] Link colors distinct (not just color, but underline/bold)
   - [ ] Focus outlines have sufficient contrast
   - [ ] Error messages clear
   - Test with: WAVE tool, Lighthouse, aXe

2. **Keyboard Navigation**
   - [ ] All interactive elements focusable (Tab)
   - [ ] Focus order logical (top-to-bottom, left-to-right)
   - [ ] Focus outline visible (2px, contrast >= 3:1)
   - [ ] No keyboard traps (can always tab out)
   - [ ] Forms submittable via keyboard
   - [ ] Menu closable via Escape key

3. **Semantic HTML**
   - [ ] Headings used correctly (h1 > h2 > h3, no skips)
   - [ ] Lists use list elements (ul, ol, li)
   - [ ] Buttons use button elements (not div)
   - [ ] Links are actual links (a tags)
   - [ ] Form inputs have labels

4. **ARIA & Labels**
   - [ ] All buttons have accessible names (text, aria-label, or title)
   - [ ] Icons have aria-labels or titles
   - [ ] Form inputs have associated labels (for attribute)
   - [ ] Error messages linked to inputs (aria-describedby)
   - [ ] Page has proper lang attribute
   - [ ] Skip-to-main-content link present

5. **Images & Media**
   - [ ] All images have alt text
   - [ ] Alt text descriptive (not "image" or empty)
   - [ ] Decorative images have empty alt (alt="")
   - [ ] Videos have captions (if applicable)

6. **Motion & Animations**
   - [ ] Animations don't flash (no more than 3 flashes/sec)
   - [ ] Animations don't interfere with readability
   - [ ] prefers-reduced-motion respected (disable animations if set)

---

#### Test Suite 3.2: Screen Reader Testing
**Test Cases (if resources available):**

1. **Content Flow**
   - [ ] Screen reader reads content in logical order
   - [ ] Headings announced correctly
   - [ ] Links announced with context
   - [ ] Form labels announced

2. **Navigation**
   - [ ] Navigation menu announces as landmark
   - [ ] Main content landmark present
   - [ ] Footer announced

3. **Dynamic Content**
   - [ ] Blog filter results update announced
   - [ ] Form validation errors announced
   - [ ] Success messages announced

---

### Phase 4: Performance Testing

#### Test Suite 4.1: Page Load Performance
**Test Cases:**

1. **Core Web Vitals (Target: Good)**
   - [ ] Largest Contentful Paint (LCP): < 2.5s
   - [ ] First Input Delay (FID): < 100ms (or INP < 200ms)
   - [ ] Cumulative Layout Shift (CLS): < 0.1
   - Test with: Lighthouse, PageSpeed Insights, WebVitals JS

2. **Overall Performance**
   - [ ] First Contentful Paint (FCP): < 1.8s
   - [ ] Time to Interactive (TTI): < 3.8s
   - [ ] Total Blocking Time (TBT): < 200ms
   - [ ] Page load size < 2MB
   - [ ] Lighthouse score > 90

3. **Network Conditions**
   - [ ] Slow 4G: loads in < 5s
   - [ ] Regular 4G: loads in < 3s
   - [ ] WiFi: loads in < 2s
   - [ ] Test with: DevTools throttling, WebPageTest

#### Test Suite 4.2: Asset Optimization
**Test Cases:**

1. **Images**
   - [ ] Images compressed (< 100KB for profiles, < 500KB for feature images)
   - [ ] Lazy loading implemented (loading="lazy")
   - [ ] Responsive images (srcset, sizes attributes)
   - [ ] WebP with PNG fallback used where applicable

2. **CSS & JS**
   - [ ] CSS properly scoped (no global bleed)
   - [ ] JS doesn't block rendering (async/defer where applicable)
   - [ ] No unused CSS (checked with coverage tool)
   - [ ] No render-blocking resources

3. **Caching**
   - [ ] Static assets cache-busted (versioned)
   - [ ] HTTP caching headers set appropriately

---

#### Test Suite 4.3: Browser DevTools Testing
**Test Cases:**

1. **Console Errors**
   - [ ] No JavaScript errors in console
   - [ ] No warnings (except known third-party)
   - [ ] Network requests all successful (no 404s)

2. **Memory Leaks**
   - [ ] Heap snapshot stable (no growing memory)
   - [ ] Event listeners removed properly
   - [ ] DOM nodes cleaned up

3. **Rendering**
   - [ ] No layout thrashing
   - [ ] Animations 60fps (DevTools Rendering tab)
   - [ ] No jank or stuttering

---

### Phase 5: Cross-Browser Testing

#### Test Suite 5.1: Browser Compatibility
**Test Cases per browser (Chrome, Firefox, Safari, Edge):**

1. **Rendering**
   - [ ] Layout matches (allow 1-2px variance)
   - [ ] Colors render correctly
   - [ ] Fonts render correctly (no substitution)
   - [ ] Animations smooth

2. **Features**
   - [ ] CSS variables work
   - [ ] CSS Grid/Flexbox work
   - [ ] CSS animations work
   - [ ] Dark mode toggle works
   - [ ] LocalStorage works
   - [ ] fetch/XHR works (forms submission)

3. **Forms**
   - [ ] Input types work (email, text, textarea)
   - [ ] Validation works
   - [ ] Form submission works

4. **Known Issues**
   - [ ] Document any browser-specific issues
   - [ ] Provide workarounds if needed

#### Test Suite 5.2: Mobile Browser Testing
**Test Cases (iOS Safari, Chrome, Samsung Internet):**

1. **Rendering**
   - [ ] Layout responsive
   - [ ] Touch interactions smooth
   - [ ] Viewport scaling correct

2. **Mobile-Specific**
   - [ ] Long press menu works (share, copy links)
   - [ ] Status bar doesn't obscure content
   - [ ] Keyboard (on focus) doesn't obscure inputs

---

### Phase 6: User Journey Testing

#### Test Case 6.1: First-Time Visitor Journey
**Scenario:** New visitor discovers site via Google search for "data analytics South Florida" or similar.

1. [ ] Land on homepage
2. [ ] Read about Seth (About section)
3. [ ] Scroll to footer, see newsletter signup
4. [ ] Click blog link
5. [ ] Browse blog posts
6. [ ] Click on a post (read a full post)
7. [ ] Share post on LinkedIn
8. [ ] Return to blog, filter by category
9. [ ] Click contact link
10. [ ] Fill out contact form
11. [ ] Submit form (success message)

**Expected Outcome:** Visitor completes CTA (newsletter signup or contact form)

#### Test Case 6.2: Returning Visitor Journey
**Scenario:** Someone visited before, now checking for new content.

1. [ ] Land on homepage
2. [ ] Click blog link
3. [ ] See new posts
4. [ ] Use search to find post on specific topic
5. [ ] Read post
6. [ ] Click related post
7. [ ] Explore projects page
8. [ ] Share project

**Expected Outcome:** Easy content discovery, no friction

#### Test Case 6.3: Mobile-First Journey
**Scenario:** Mobile user accessing site for first time.

1. [ ] Mobile site loads quickly (< 3s)
2. [ ] Content readable without zoom
3. [ ] Navigation accessible (hamburger menu)
4. [ ] Can scroll and interact smoothly
5. [ ] Forms usable on mobile
6. [ ] Share buttons work on mobile

---

### Regression Testing
**After each code change, run these critical tests:**

1. [ ] Homepage loads and renders
2. [ ] Navigation works (all links)
3. [ ] Blog loads and filters work
4. [ ] Projects load and display
5. [ ] Contact form submits
6. [ ] Dark mode toggles
7. [ ] Mobile layout responsive
8. [ ] No console errors
9. [ ] Forms validate correctly

---

### Test Report Template
For each test run, document:
- **Date:** [Date]
- **Tester:** [Name]
- **Browser/Device:** [Chrome/Desktop, Safari/iPhone, etc.]
- **Network:** [WiFi, 4G, Throttled]

**Results:**
- **Passing:** [X tests]
- **Failing:** [Y tests]
- **Blocked:** [Z tests]

**Issues Found:**
1. **[Severity: Critical/High/Medium/Low]** [Description] — Expected: [X], Actual: [Y]
2. ...

**Notes & Recommendations:**
- [Any observations, patterns, or improvements]

---

### Success Criteria
- [ ] All P1 tests pass
- [ ] All P2 tests pass
- [ ] Lighthouse score > 90 (all pages)
- [ ] WCAG 2.1 AA compliance (WAVE reports zero errors)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] No console errors
- [ ] Cross-browser testing: no critical issues
- [ ] Mobile UX: all tests pass
- [ ] User journey tests complete successfully

---

## Success Metrics

### Traffic & Engagement
- **Blog traffic:** 500+ unique visitors/month (by month 3)
- **Avg time on site:** 2:30+ (currently 1:30)
- **Pages per session:** 2.5+ (currently 1.8)
- **Newsletter signups:** 50+ in first month
- **Contact form submissions:** 10+ in first month

### Technical Performance
- **Lighthouse score:** > 90 (all pages)
- **Core Web Vitals:** All "Good" (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Page load time:** < 3s on 4G
- **SEO ranking:** "Seth Amigo data analytics" top 3 results

### Content & Features
- **Blog posts:** 7 published (by end of sprint)
- **Projects showcased:** 4 detailed case studies
- **Dark mode:** 40%+ of visitors using it (by month 2)
- **Mobile traffic:** 50%+ of total (responsive design success)

### Accessibility & Quality
- **WCAG 2.1 AA:** 0 auto-detected errors (WAVE)
- **Keyboard navigation:** 100% of pages fully navigable
- **Cross-browser:** 0 critical rendering issues
- **QA test pass rate:** > 95%

---

## Timeline Overview

| Week | Dev | Design | QA | Deliverables |
|------|-----|--------|----|----|
| 1-2 | Blog + Projects + Dark Mode | Page layouts + Dark mode specs | Setup + Functional tests (P1) | Blog live, Projects live, Dark mode working |
| 2-3 | Forms + Search + Optimization | Components + Interactions | Functional tests (P2) + Responsive | Contact form, Newsletter, Share buttons |
| 3-4 | Polish + Performance + SEO | Accessibility + Final polish | Performance + Cross-browser + A11y | Launch-ready site, Lighthouse > 90 |

---

## Deployment Checklist

- [ ] All tests pass (dev, design QA approved)
- [ ] Lighthouse scores > 90
- [ ] WCAG 2.1 AA compliance verified
- [ ] DNS/domain configured
- [ ] SSL certificate active (HTTPS)
- [ ] Git repository clean and documented
- [ ] README.md updated with setup instructions
- [ ] Analytics tracking (Google Analytics) configured
- [ ] Form backend (Formspree) configured
- [ ] Newsletter service (Substack/ConvertKit) connected
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Meta tags reviewed
- [ ] Open Graph images optimized
- [ ] Favicon set
- [ ] 404 page configured
- [ ] Performance monitoring set up (Sentry, if applicable)
- [ ] Final manual QA on staging
- [ ] Deploy to production
- [ ] Monitor for errors (week 1 post-launch)

---

## Post-Launch (Month 2-3)

### Monitoring
- Track Google Analytics for traffic patterns
- Monitor newsletter signup quality
- Track contact form submissions
- Monitor Core Web Vitals
- Set up alerts for errors/performance issues

### Content Planning
- Publish blog posts on 2-week cadence
- Share posts on LinkedIn, Twitter
- Update projects as Seth completes new work
- Gather case study metrics/testimonials

### Optimization
- A/B test CTA placement (contact form, newsletter)
- Analyze user behavior (scroll depth, click heat maps)
- Optimize images based on real-world performance data
- Refine dark mode based on user feedback

---

## Notes for Team

1. **Vanilla JS Philosophy:** No frameworks (React, Vue, etc.). Keep it simple, performant, and maintainable.
2. **Mobile-First:** Design and build mobile first, enhance for desktop.
3. **Accessibility:** Not an afterthought. Build with a11y in mind from day one.
4. **Content First:** Blog and projects are the engine. Prioritize content structure.
5. **Dark Mode:** Not just an inversion. Design intentionally for both modes.
6. **Performance:** Every KB matters. Optimize images, lazy load, cache assets.
7. **Testing:** QA runs parallel, not at the end. Early feedback is critical.
8. **Documentation:** Comment code, document decisions, maintain this sprint plan.

---

**End of Sprint Plan**

For questions or clarifications, reference specific task IDs (e.g., "Task 1.1: Create Blog Architecture") and collaborate early.
