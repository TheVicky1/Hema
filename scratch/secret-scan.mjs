import fs from 'node:fs';
import path from 'node:path';

const filesToScan = [
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'src/App.css',
  'src/context/DonorContext.jsx',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/components/DonorCard.jsx',
  'src/components/DonorModal.jsx',
  'src/components/StatsBar.jsx',
  'src/components/SkeletonCard.jsx',
  'src/components/ToastContainer.jsx',
  'src/components/WaveBackground.jsx',
  'src/components/ScrollToTop.jsx',
  'src/components/HemaLogo.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/DonorsPage.jsx',
  'src/pages/BecomeDonorPage.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/HowItWorksPage.jsx',
  'src/pages/NotFoundPage.jsx',
  'index.html',
  'package.json',
  'vite.config.js',
  'eslint.config.js'
];

const secretPatterns = [
  /(?:secret|private)[_-]?key/i,
  /eyJhbGciOi[a-zA-Z0-9_-]+/i,
  /ghp_[a-zA-Z0-9]{36}/i,
  /AIza[0-9A-Za-z-_]{35}/i,
  /sk-[a-zA-Z0-9]{20,}/i,
  /BEGIN (?:RSA|OPENSSH|EC|PGP) PRIVATE KEY/i,
];

let violations = 0;

for (const relPath of filesToScan) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;

  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const pattern of secretPatterns) {
      if (pattern.test(line)) {
        console.error(`[VIOLATION] ${relPath}:${i + 1} matches prohibited secret pattern: ${pattern.toString()}`);
        violations++;
      }
    }
  }
}

if (violations === 0) {
  console.log(`✔ Secret Scan PASSED: 0 secrets or sensitive credentials detected across ${filesToScan.length} scanned files.`);
  process.exit(0);
} else {
  console.error(`✖ Secret Scan FAILED: ${violations} potential secret(s) detected.`);
  process.exit(1);
}
