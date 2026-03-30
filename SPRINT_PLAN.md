# Sprint Plan: Athletic Performance Sections

## Sprint Goal
Build dedicated CrossFit PRs and Tennis sections on the personal page with clean, data-driven design that showcases Seth's athletic performance and competitive achievements.

---

## DEV BRIEF

### CrossFit PRs Section

**Data Structure**: Create `/data/crossfit-prs.json` with the following format:
```json
{
  "benchmark_wods": [
    {
      "name": "Fran",
      "description": "21-15-9 reps: Thrusters (95lb) + Pull-ups",
      "pr": "4:32",
      "date": "2025-08-14",
      "notes": "Recent PR, strong performance"
    },
    {
      "name": "Murph",
      "description": "1-mile run + 100 pull-ups + 200 push-ups + 300 squats + 1-mile run",
      "pr": "38:47",
      "date": "2025-05-26",
      "notes": "Memorial Day WOD"
    },
    {
      "name": "Grace",
      "description": "30 Clean & Jerks (95lb) for time",
      "pr": "3:28",
      "date": "2025-11-03",
      "notes": "Last tested in November"
    }
  ],
  "compound_lifts": [
    {
      "lift": "Back Squat",
      "pr": "315",
      "unit": "lb",
      "date": "2025-09-22"
    },
    {
      "lift": "Deadlift",
      "pr": "385",
      "unit": "lb",
      "date": "2025-10-10"
    },
    {
      "lift": "Clean & Jerk",
      "pr": "205",
      "unit": "lb",
      "date": "2025-07-18"
    },
    {
      "lift": "Snatch",
      "pr": "155",
      "unit": "lb",
      "date": "2025-09-08"
    }
  ],
  "hero_wods": [
    {
      "name": "Helen",
      "description": "3 rounds for time: 400m run + 21 kettlebell swings + 12 pull-ups",
      "pr": "11:24",
      "date": "2025-10-02"
    },
    {
      "name": "Cindy",
      "description": "20 min AMRAP: 5 pull-ups + 10 push-ups + 15 squats",
      "pr": "22 rounds + 8 reps",
      "date": "2025-09-15"
    }
  ]
}
```

**Sample Data Values** (realistic for fit adult male CrossFitter):
- Benchmark WODs: Times ranging 3:28–38:47 (Fran in 4-5 min range, Murph 35-40 min)
- Compound Lifts: Back Squat 305-325lb, Deadlift 365-405lb, Clean & Jerk 195-215lb, Snatch 145-165lb
- Hero WODs: Helen 10-12 min, Cindy 20+ rounds in 20 min

**UI Implementation** (`/personal.html`):
1. Add a new section after "Sports & Fitness" called "CrossFit PRs"
2. Display three sub-sections: **Benchmark WODs**, **Compound Lifts**, **Hero WODs**
3. **Benchmark/Hero WODs**: Grid of cards (2-3 per row on desktop) showing:
   - WOD name (large, bold)
   - Description (smaller, gray text)
   - PR time prominently displayed
   - Date as small label
   - Optional: "Last tested" badge if date is recent (within 60 days)
4. **Compound Lifts**: Horizontal list (or short grid) showing:
   - Lift name | PR weight (e.g., "Back Squat | 315 lb")
   - Date updated
   - Optional: Progress bar comparing to elite standards (e.g., 315 / 400 shows 78% fill)
5. **Sortable/Filterable**: Include small pill buttons to toggle between "Benchmark WODs", "Compound Lifts", "Hero WODs" (JavaScript filters which section shows)
6. Fetch data from `/data/crossfit-prs.json` dynamically (no hardcoding in HTML)
7. Add a "Last Updated" timestamp at bottom of section

**Key Interaction**:
- Clicking on a WOD card expands to show full description + date (or shows in tooltip on hover)
- Hovering over compound lifts shows a tooltip with date and any notes

---

### Tennis Section

**Data Structure**: Create `/data/tennis-profile.json`:
```json
{
  "profile": {
    "ustaRating": "PLACEHOLDER: 4.5 (Update with actual rating)",
    "utrRating": "PLACEHOLDER: UTR No public profile (Add if obtained)",
    "currentTeam": "PLACEHOLDER: [Team Name] (South Florida league)",
    "playingStyle": "PLACEHOLDER: Aggressive baseline game with strong forehand"
  },
  "recentMatches": [
    {
      "id": 1,
      "opponent": "PLACEHOLDER: John Doe",
      "result": "W",
      "score": "6-4, 6-3",
      "date": "2026-03-22",
      "tournament": "Weekly League Match"
    },
    {
      "id": 2,
      "opponent": "PLACEHOLDER: Opponent Name",
      "result": "L",
      "score": "5-7, 6-4",
      "date": "2026-03-15",
      "tournament": "Weekly League Match"
    }
  ],
  "stats": {
    "matchesPlayed": 0,
    "wins": 0,
    "losses": 0,
    "winPercentage": 0
  },
  "favoriteShots": [
    "PLACEHOLDER: Forehand drive",
    "PLACEHOLDER: Slice backhand",
    "PLACEHOLDER: Volley"
  ]
}
```

**UI Implementation** (`/personal.html`):
1. Add a new section "Tennis" after CrossFit PRs
2. **Top Section — Profile Stats**: Horizontal card layout showing:
   - USTA Rating (e.g., "4.5")
   - UTR Rating (e.g., "N/A" or "TBD")
   - Current Team/League (e.g., "Miami Racquet Club · Winter League")
   - Win-Loss Record as metric (e.g., "12W — 8L" with win % badge)
3. **Playing Style Box**: Centered text card with italic description: "Aggressive baseline game with strong forehand"
4. **Recent Matches Timeline** (below stats):
   - Display last 6 matches as a compact list/timeline
   - Each match shows:
     * Opponent name (clickable? or just text)
     * Result badge (green "W" or red "L")
     * Score (e.g., "6-4, 6-3")
     * Date
     * Tournament/League name
   - Sortable by date (most recent first)
   - Optional: "See all matches" link if more than 6 exist
5. **Favorite Shots**: Small pill-style tags below timeline (e.g., "Forehand drive", "Slice backhand", "Volley")
6. Fetch data from `/data/tennis-profile.json` dynamically

**Placeholder Strategy**:
- Every field with example data clearly marked "PLACEHOLDER:" so Seth knows exactly what to replace
- Use light gray background or dashed border on placeholder sections to visually distinguish editable content
- Include inline hint text (e.g., "Add your USTA rating here")

**Key Interaction**:
- Hovering over a match card shows additional details (if any)
- Win/Loss badges colored distinctly (green #2ecc71 for W, red #e63946 for L, or site accent)

---

## DESIGNER BRIEF

### Visual Treatment — Energetic & Athletic

Both sections should feel **energetic, performance-focused, and competitive** while maintaining the clean, minimalist aesthetic of the existing site.

#### CrossFit PRs Section

**Color & Typography**:
- Use accent color (#e63946) sparingly for PR numbers and category headers
- Benchmark WOD cards: White/light background with subtle border and shadow
- PR times should be **bold, large** (32-40px) in accent red to draw eye
- Description text in gray-medium for hierarchy
- Dates in gray-light, smaller font

**Layout**:
- 3-column grid on desktop (2 columns on tablet, 1 on mobile) for WOD cards
- Compound lifts as compact 2-column grid or horizontal list with left-align
- Clear visual separation between Benchmark, Compound, and Hero sections (light divider line or whitespace)
- Add subtle icons/emojis before section headers (e.g., 🏋️ "Compound Lifts")

**Hover & Interaction**:
- WOD cards: Lift shadow on hover (`box-shadow: var(--shadow-md)`) + slight scale (1.02x)
- Transition: 200ms ease-in-out
- Filter pills (category toggles) should show active state with underline or background fill

**Progress Bars** (Compound Lifts):
- Thin horizontal bars (4px height) showing PR vs. elite standard
- Color: gradient from accent-light to accent (red)
- Example: 315 lb back squat vs. 400 lb elite = 78% filled bar
- Include % text to the right of bar (e.g., "78%")

#### Tennis Section

**Color & Typography**:
- Stats cards: Subtle background (--bg-secondary), similar styling to impact cards on home page
- Record metrics (W-L) in larger font (28-32px), numbers bold
- Match results: Win in green (#2ecc71), Loss in red (#e63946)
- Opponent names in gray-dark, date in gray-light
- Playing style text in italic, gray-medium

**Layout**:
- **Profile Stats**: Horizontal grid, 4 stat cards in a row (2x2 on tablet, 1 col on mobile)
- Each stat card has:
  * Small label (gray-light, uppercase, 11px)
  * Large value (bold, 28-36px)
  * Subtle background + border-radius (same card treatment as CrossFit PRs)
- **Playing Style**: Centered container, larger font (18px), light background, padding 24px, subtle border
- **Recent Matches**: Vertical timeline or list with:
  * Left side: Result badge (circular, W or L) — 40px diameter
  * Right side: Opponent, score, date, tournament in column layout
  * Alternating subtle backgrounds (every other match has slight tint) for visual rhythm
- **Favorite Shots**: Horizontal flex of pill tags with subtle background

**Hover & Interaction**:
- Stat cards: Lift on hover (`transform: translateY(-4px)`) + shadow increase
- Match rows: Highlight background on hover, transition 150ms
- Shots pills: Subtle scale or color shift on hover

**Placeholder Visual Distinction**:
- Placeholder fields should have a dashed border OR light yellow/gray background tint
- Icon or badge: small "📝 Edit" indicator visible on hover
- Font: slightly lighter gray for placeholders to indicate "not final"

---

## QA BRIEF

### Functional Testing

1. **Data Loading**
   - [ ] `/data/crossfit-prs.json` loads successfully in browser console (no 404)
   - [ ] `/data/tennis-profile.json` loads successfully
   - [ ] JSON files are valid (no parse errors in console)
   - [ ] Data renders without console errors

2. **CrossFit PRs Section**
   - [ ] All three WOD categories load and display correctly
   - [ ] Compound lift PR values display with correct weight units
   - [ ] Filter pills toggle between categories smoothly
   - [ ] All dates display in consistent format
   - [ ] Hover effects work: cards lift, shadows increase
   - [ ] Progress bars (if implemented) calculate correctly and display 0-100%
   - [ ] Recent badge ("Last tested") shows only for PRs within 60 days

3. **Tennis Section**
   - [ ] Profile stats display with correct labels and values
   - [ ] USTA/UTR ratings show placeholder text clearly
   - [ ] Win-loss record calculates correctly from matches array
   - [ ] Recent matches list shows in chronological order (newest first)
   - [ ] Result badges correctly show "W" in green, "L" in red
   - [ ] Scores display in correct format (e.g., "6-4, 6-3")
   - [ ] All placeholder fields are visually distinct and editable
   - [ ] Favorite shots pills render as horizontal list

4. **Responsive Design**
   - [ ] Desktop (1024px+): Layouts match design specs
   - [ ] Tablet (768px): Grids adjust to 2 columns, spacing remains balanced
   - [ ] Mobile (375px): Single column, cards stack vertically, text remains readable
   - [ ] No horizontal scrolling on any breakpoint
   - [ ] Touch targets ≥48px on mobile (filter pills, match rows)

5. **Visual & Polish**
   - [ ] Shadows and hover effects smooth (no janky transitions)
   - [ ] All text readable in light and dark modes
   - [ ] Colors match design brief (accent red #e63946, grays consistent)
   - [ ] Line heights and spacing match existing site (breathing room)
   - [ ] Icons/emojis (if added) render correctly across browsers
   - [ ] Card borders, if used, have consistent 1px stroke in --border-color

6. **Accessibility**
   - [ ] All section headers are semantic `<h2>` or `<h3>` tags
   - [ ] Color-coded results (W/L) have text fallback (not color-only)
   - [ ] Filter pills are keyboard accessible (Tab to focus, Space/Enter to toggle)
   - [ ] All images and badges have alt text or aria-labels
   - [ ] Focus states visible on all interactive elements
   - [ ] Contrast meets WCAG AA (4.5:1 for normal text)

7. **Cross-Browser & Device**
   - [ ] Test on Chrome, Firefox, Safari, Edge (latest versions)
   - [ ] Test on iOS Safari and Android Chrome
   - [ ] Fonts load correctly (no FOUT/FOIT flicker)
   - [ ] JSON files serve with correct MIME type (application/json)

8. **Performance**
   - [ ] Page load time <2.5s (including all data files)
   - [ ] No layout shift when images or data loads (CLS <0.1)
   - [ ] Transitions don't cause jank (60fps on hover/filter)
   - [ ] Console has no warnings or errors

### Content Testing

9. **Placeholder Data Verification**
   - [ ] Every placeholder field has "PLACEHOLDER:" prefix clearly visible
   - [ ] Placeholder text is realistic but obviously temporary (e.g., "[Opponent Name]")
   - [ ] No live personal data in placeholders (e.g., no real phone numbers or addresses)

10. **Integration with Existing Site**
    - [ ] New sections don't break layout of "Family", "Sports & Fitness", or "Beyond Work" sections
    - [ ] Footer remains accessible below all sections
    - [ ] Page title "PERSONAL LIFE" still displays prominently
    - [ ] Navigation highlighting works correctly (Personal page active state)

---

## Implementation Notes

- Use the existing design tokens from `styles.css` (colors, spacing, shadows, transitions)
- Follow the component patterns already in site (cards, grids, tags/pills, stat displays)
- Keep HTML semantic and clean (avoid wrapper divs when not needed)
- Use CSS Grid or Flexbox (no floats) for layouts
- Consider lazy-loading or data fetching patterns if performance becomes a concern
- Test all data entry with Seth before deploying (coordinate placeholder → real data migration)
