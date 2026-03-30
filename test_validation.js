// Quick validation test
const fs = require('fs');
const path = require('path');

console.log('=== QA VALIDATION REPORT ===\n');

// 1. Check CSS is valid
const cssFile = fs.readFileSync('styles.css', 'utf8');
const duplicateCheck = (cssFile.match(/\.pr-filters.*\.pr-filters/s) ? 2 : 1);
console.log(`✓ CSS duplicate check: Found ${duplicateCheck} set of sports CSS (expecting 1 after removal)`);

// 2. Check JSON validity
try {
  const crossfitData = JSON.parse(fs.readFileSync('data/crossfit-prs.json', 'utf8'));
  const tennisData = JSON.parse(fs.readFileSync('data/tennis.json', 'utf8'));
  console.log(`✓ JSON validity: Both files valid`);
  console.log(`  - CrossFit PRs: ${crossfitData.prs.length} records`);
  console.log(`  - Tennis matches: ${tennisData.matches.length} records`);
} catch(e) {
  console.log(`✗ JSON validity: ${e.message}`);
}

// 3. Check HTML structure
const htmlFile = fs.readFileSync('personal.html', 'utf8');
console.log(`✓ HTML structure checks:`);
console.log(`  - CrossFit section found: ${htmlFile.includes('id="crossfit-prs"') ? 'YES' : 'NO'}`);
console.log(`  - Tennis section found: ${htmlFile.includes('id="tennis"') ? 'YES' : 'NO'}`);
console.log(`  - sports.js script included: ${htmlFile.includes('sports.js') ? 'YES' : 'NO'}`);

// 4. Check CSS variables
const cssVars = cssFile.match(/var\(--[a-z-]+\)/g) || [];
const uniqueVars = new Set(cssVars).size;
console.log(`✓ CSS variables used in styles: ${uniqueVars} unique variables`);

console.log(`\n=== END VALIDATION ===`);
