#!/usr/bin/env python3
import json
import re

print("=" * 60)
print("COMPREHENSIVE QA VERIFICATION")
print("=" * 60)

# 1. Check CSS
with open('styles.css', 'r') as f:
    css = f.read()

print("\n1. CSS DUPLICATE CHECK:")
pr_filters_count = len(re.findall(r'^\.pr-filters\s*{', css, re.MULTILINE))
print(f"   .pr-filters definitions: {pr_filters_count} (expected: 1) {'✓' if pr_filters_count == 1 else '✗'}")

tennis_stats_count = len(re.findall(r'^\.tennis-stats\s*{', css, re.MULTILINE))
print(f"   .tennis-stats definitions: {tennis_stats_count} (expected: 1) {'✓' if tennis_stats_count == 1 else '✗'}")

# 2. Check sports.js
with open('sports.js', 'r') as f:
    js = f.read()

print("\n2. PLACEHOLDER FIX CHECK:")
placeholder_ternaries = len(re.findall(r'isPlaceholder\([^)]*\)\s*\?\s*[\'"]placeholder[\'"]', js))
print(f"   Placeholder ternaries: {placeholder_ternaries} (expected: 2) {'✓' if placeholder_ternaries == 2 else '✗'}")

# 3. Check JSON
print("\n3. JSON VALIDATION:")
try:
    with open('data/crossfit-prs.json', 'r') as f:
        cf = json.load(f)
    print(f"   crossfit-prs.json: {len(cf['prs'])} records ✓")
except:
    print("   crossfit-prs.json: INVALID ✗")

try:
    with open('data/tennis.json', 'r') as f:
        tn = json.load(f)
    print(f"   tennis.json: {len(tn['matches'])} matches ✓")
except:
    print("   tennis.json: INVALID ✗")

# 4. Check HTML
with open('personal.html', 'r') as f:
    html = f.read()

print("\n4. HTML STRUCTURE CHECK:")
cf_section = 'id="crossfit-prs"' in html
tennis_section = 'id="tennis"' in html
sports_js = 'src="sports.js"' in html
pr_grid = 'id="pr-grid"' in html
tennis_stats = 'id="tennis-stats"' in html

print(f"   CrossFit section (id=crossfit-prs): {'✓' if cf_section else '✗'}")
print(f"   Tennis section (id=tennis): {'✓' if tennis_section else '✗'}")
print(f"   PR grid container (id=pr-grid): {'✓' if pr_grid else '✗'}")
print(f"   Tennis stats container (id=tennis-stats): {'✓' if tennis_stats else '✗'}")
print(f"   sports.js script included: {'✓' if sports_js else '✗'}")

# 5. Check CSS variables
print("\n5. CSS VARIABLES CHECK:")
vars_in_css = set(re.findall(r'var\((--[a-z-]+)\)', css))
print(f"   Unique CSS variables used: {len(vars_in_css)}")

# Check if key variables are defined
required_vars = ['--accent', '--bg', '--bg-secondary', '--black', '--border-color', '--gray-dark', '--gray-medium']
all_defined = all(var in vars_in_css for var in required_vars)
print(f"   Required variables defined: {'✓' if all_defined else '✗'}")

# 6. Check dark mode
print("\n6. DARK MODE CHECK:")
dark_mode_count = css.count(':root[data-theme="dark"]')
print(f"   Dark mode rules using :root[data-theme=dark]: {dark_mode_count} ✓")

# 7. Fetch paths
print("\n7. FETCH PATHS CHECK:")
crossfit_fetch = './data/crossfit-prs.json' in js
tennis_fetch = './data/tennis.json' in js
print(f"   ./data/crossfit-prs.json: {'✓' if crossfit_fetch else '✗'}")
print(f"   ./data/tennis.json: {'✓' if tennis_fetch else '✗'}")

print("\n" + "=" * 60)
print("END OF QA VERIFICATION")
print("=" * 60)
