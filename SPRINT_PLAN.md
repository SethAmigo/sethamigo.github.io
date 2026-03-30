# Sprint Plan: Seth Amigo Website Improvements

## Sprint Goal
Fix broken UI elements, add family photos to the personal page, and deliver meaningful visual polish to create a more professional and engaging portfolio experience.

---

## DEV BRIEF

### Broken/Non-Functional Button Fixes

1. **Blog Card Links** — `/blog.html`
   - **Issue**: Blog cards are styled as clickable links (`.blog-card`) but have `href="#"` and only log click events; they don't navigate anywhere
   - **Fix**: Replace the `href="#"` with proper slug-based URLs (e.g., `/blog/building-modern-data-platforms.html`) and remove the preventDefault behavior OR if full blog infrastructure isn't ready, clearly disable them and show a "Coming Soon" badge
   - **Recommendation**: Remove the click prevention and implement real navigation, or mark cards as disabled

2. **Scroll Indicator** — `/index.html`
   - **Issue**: The `.scroll-indicator` with down arrow (↓) is purely decorative and has no functionality; it's visually distracting
   - **Fix**: Either remove it entirely (cleaner) or make it functional with smooth scroll-to-section behavior on click (anchor to #about section)
   - **Recommendation**: Remove it entirely for cleaner design; the page is already responsive and modern enough without it

### Photo Implementation on Personal Page

3. **Family Section Photos** — `/personal.html`
   - **Current State**: Family section shows names (Kim, Finley, Grey, Noah) but no photos
   - **Task**: Add placeholder images using picsum.photos URLs to the `.family-member` cards
   - **Implementation**:
     - Update each `.family-member` div to include: `<img src="https://picsum.photos/200/200?random=1" alt="Kim">`
     - Use different random seeds for each (random=1, random=2, random=3, random=4)
     - Add `class="family-photo"` for styling
     - Ensure images display as circles or rounded squares with proper aspect ratio (200x200px recommended)
     - Alternative: Use specific themes like `?random=family-{number}` for visual consistency

### Verification Checklist
- [ ] Blog cards either navigate correctly or are disabled/hidden
- [ ] Scroll indicator either removed or functional
- [ ] All four family members have placeholder photos
- [ ] Photos render correctly at 200x200 with proper styling
- [ ] No console errors on any page

---

## DESIGNER BRIEF

The site has solid bones but needs visual refinement to compete as a senior executive portfolio. Here are 8 specific improvements:

### 1. **Hero Section Typography Hierarchy** — `/index.html`
   - **Current**: Large "DATA DRIVEN" headline feels flat and lacks emphasis
   - **Improve**: Add a subtle gradient or color accent to one word (e.g., "DRIVEN" in accent red #e63946). Use `background: linear-gradient(90deg, var(--accent) 0%, var(--accent) 100%); -webkit-background-clip: text; color: transparent;` on the `.fade` span. Currently the fade effect is opacity only.

### 2. **Hero Tagline and Spacing** — `/index.html`
   - **Current**: "Director of Data Analytics · South Florida" sits close to headline; impact cards feel cramped below
   - **Improve**: Increase top margin of `hero-tagline` from current spacing to 32px+. Add more breathing room between headline, tagline, skill chips, and impact section. Use CSS Grid gap to organize the hero better.

### 3. **Skill Chips Styling** — `/index.html` & `/work.html`
   - **Current**: Skill chips are plain with minimal visual feedback
   - **Improve**:
     - Add subtle `box-shadow: var(--shadow-sm)` to `.skill-chip`
     - Add smooth hover transform: `transform: translateY(-2px); box-shadow: var(--shadow-md);`
     - Consider a light background tint (use `--bg-secondary`) instead of just border
     - Add transition: `transition: all var(--transition-fast);`

### 4. **Impact Cards Design** — `/index.html`
   - **Current**: Cards are borderless rectangles, minimal visual hierarchy
   - **Improve**:
     - Add `background: var(--bg-secondary)` to `.impact-card`
     - Add `border-radius: var(--radius-lg)`
     - Add `padding: 32px 24px` for better internal spacing
     - Add `box-shadow: var(--shadow-sm)` for depth
     - Make numbers larger and bolder: `font-weight: 700; font-size: 40px;` (was 32px)
     - On hover: `transform: translateY(-4px); box-shadow: var(--shadow-md);`

### 5. **Filter Pills / Buttons Hover States** — `/projects.html` & `/blog.html`
   - **Current**: Minimal hover feedback on filter buttons
   - **Improve**:
     - Add `transition: all var(--transition-base)` to `.filter-pill`
     - Active state should have stronger visual distinction: add `box-shadow: var(--shadow-md)` when active
     - Hover should lift slightly: `transform: translateY(-2px);`
     - Consider a subtle scale or brightness increase on non-active pills too

### 6. **Project/Blog Card Polish** — `/projects.html` & `/blog.html`
   - **Current**: Cards lack shadow and feel flat
   - **Improve**:
     - Add `box-shadow: var(--shadow-sm)` to `.project-card` and `.blog-card`
     - Add `border-radius: var(--radius-lg)` to both
     - Add `background: var(--bg-secondary)` as subtle background
     - On hover: `box-shadow: var(--shadow-md); transform: translateY(-4px);`
     - Ensure smooth transitions: `transition: all var(--transition-base);`

### 7. **Footer Contrast & Spacing** — All pages
   - **Current**: Footer is cramped; links have poor contrast in light mode
   - **Improve**:
     - Increase `.footer-grid` gap from current to `gap: 48px;`
     - Make footer links bolder/darker (footer-column a should have more weight)
     - Add subtle `border-top: 1px solid var(--border-color)` above footer to separate it visually
     - Increase top padding of footer to `padding-top: 64px;`

### 8. **Personal Page Family Section Visual Treatment** — `/personal.html`
   - **Current**: Family cards are text-only rectangles
   - **Improve** (once photos are added):
     - Center photos at top of each `.family-member` card
     - Add `text-align: center;` and `padding: 24px 16px;`
     - Style photos as circles: `border-radius: 50%;` with a subtle border
     - Add subtle card background: `background: var(--bg-secondary); border-radius: var(--radius-lg);`
     - Add spacing between photo and text: `margin-bottom: 12px;`
     - Consider a subtle hover scale on family cards too

### General Polish Notes
- All interactive elements need clear transition definitions
- Ensure hover states have consistent lift/shadow patterns across the site
- Review spacing/padding to ensure breathing room in all sections
- Test dark mode thoroughly to ensure shadows and colors work in both themes

---

## QA BRIEF

After dev and design work is complete, verify:

1. **Navigation & Buttons**
   - [ ] Theme toggle button works and persists preference
   - [ ] Hamburger menu works on mobile/tablet and closes properly
   - [ ] Navigation links highlight active page correctly
   - [ ] All nav links navigate to correct pages
   - [ ] Blog cards (if fixed) navigate or are properly disabled
   - [ ] Scroll indicator (if kept) works on click or removed

2. **Personal Page Photos**
   - [ ] All 4 family photos load and display correctly
   - [ ] Photos are properly sized (200x200 or styled consistently)
   - [ ] Photos have alt text
   - [ ] Photos render in both light and dark modes
   - [ ] No broken image placeholders showing

3. **Visual Design**
   - [ ] Hero section has color gradient/accent on word
   - [ ] Spacing between hero elements is generous (no cramping)
   - [ ] All cards have shadows and hover effects working
   - [ ] Hover states are smooth and responsive
   - [ ] Filter pill transitions are smooth
   - [ ] Footer has proper spacing and visual separation
   - [ ] Dark mode colors look good with new shadows/styling

4. **Performance & Responsiveness**
   - [ ] All pages load without console errors
   - [ ] Responsive on mobile (375px), tablet (768px), and desktop (1024px+)
   - [ ] Hover effects don't cause layout shift
   - [ ] Transitions don't feel sluggish or janky
   - [ ] Images load without affecting layout (no CLS)

5. **Accessibility**
   - [ ] All buttons have proper aria-labels
   - [ ] Color contrast meets WCAG AA standards
   - [ ] Keyboard navigation works (Tab through all interactive elements)
   - [ ] Focus states are visible
   - [ ] Alt text on all images is descriptive
