import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

// Directories and patterns explicitly excluded from secret scanning
const IGNORED_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '.gemini',
  '.system_generated'
]);

const IGNORED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.ico',
  '.webp',
  '.pdf',
  '.zip',
  '.tar',
  '.gz',
  '.lockb'
]);

// Ignored files (e.g., cached PR HTML, temporary scratch outputs)
const IGNORED_FILES = new Set([
  'package-lock.json',
  'pr30.html'
]);

const secretPatterns = [
  /(?:secret|private)[_-]?key/i,
  /eyJhbGciOi[a-zA-Z0-9_-]+/i,
  /ghp_[a-zA-Z0-9]{36}/i,
  /AIza[0-9A-Za-z-_]{35}/i,
  /sk-[a-zA-Z0-9]{20,}/i,
  /BEGIN (?:RSA|OPENSSH|EC|PGP) PRIVATE KEY/i,
];

function discoverFiles(dir) {
  const discovered = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        discovered.push(...discoverFiles(fullPath));
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (IGNORED_FILES.has(entry.name) || IGNORED_FILES.has(relPath)) continue;
      if (IGNORED_EXTENSIONS.has(ext)) continue;
      if (relPath.startsWith('scratch/extracted_') || relPath.startsWith('scratch/cr_')) continue;

      discovered.push(relPath);
    }
  }

  return discovered;
}

const filesToScan = discoverFiles(rootDir);
let violations = 0;

for (const relPath of filesToScan) {
  const fullPath = path.resolve(rootDir, relPath);
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
  console.log(`✔ Secret Scan PASSED: 0 secrets or sensitive credentials detected across ${filesToScan.length} automatically discovered files.`);
  process.exit(0);
} else {
  console.error(`✖ Secret Scan FAILED: ${violations} potential secret(s) detected.`);
  process.exit(1);
}
