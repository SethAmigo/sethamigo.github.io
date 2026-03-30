#!/bin/bash
echo "=== FINAL VERIFICATION REPORT ==="
echo ""

echo "1. CSS File Status:"
echo "   Total lines: $(wc -l < styles.css)"
echo "   CSS .pr-filters occurrences: $(grep -c '^\.pr-filters' styles.css) (expecting 1)"
echo "   CSS tennis-stats occurrences: $(grep -c '^\.tennis-stats' styles.css) (expecting 1)"

echo ""
echo "2. sports.js Placeholder Fix:"
grep -n "stat-value.*isPlaceholder.*placeholder" sports.js | wc -l | xargs echo "   Placeholder ternaries: (expecting 2)"

echo ""
echo "3. JSON Files:"
python3 -c "
import json
cf = json.load(open('data/crossfit-prs.json'))
tn = json.load(open('data/tennis.json'))
print(f'   CrossFit PRs: {len(cf[\"prs\"])} records')
print(f'   Tennis matches: {len(tn[\"matches\"])} records')
"

echo ""
echo "4. HTML Integration:"
echo "   CrossFit section found: $(grep -c 'id=\"crossfit-prs\"' personal.html)"
echo "   Tennis section found: $(grep -c 'id=\"tennis\"' personal.html)"
echo "   sports.js script included: $(grep -c 'src=\"sports.js\"' personal.html)"

echo ""
echo "5. CSS Variables Check:"
echo "   Variables used in sports CSS: $(sed -n '1635,2187p' styles.css | grep -o 'var(--[^)]*' | sort -u | wc -l)"

echo ""
echo "=== VERIFICATION COMPLETE ==="
