import fs from 'node:fs';
import path from 'node:path';

function checkLinksInFile(filePath) {
  if (!fs.existsSync(filePath)) return { totalLinks: 0, missing: [], isOptional: false };
  const content = fs.readFileSync(filePath, 'utf8');
  const dir = path.dirname(filePath);
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const missing = [];
  let totalLinks = 0;

  // Check if document carries explicit optional marker
  const isOptional = content.includes('<!-- link-audit: optional -->');

  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const rawTarget = match[2].trim();
    totalLinks++;

    // Skip web URLs, mailto, and in-page anchors
    if (rawTarget.startsWith('http://') || rawTarget.startsWith('https://') || rawTarget.startsWith('mailto:') || rawTarget.startsWith('#')) {
      continue;
    }

    // Strip anchor #section from path
    const fileTarget = rawTarget.split('#')[0];
    if (!fileTarget) continue;

    const resolved = path.resolve(dir, fileTarget);
    if (!fs.existsSync(resolved)) {
      missing.push({ file: filePath, text: match[1], target: rawTarget, resolved, isOptional });
    }
  }

  return { totalLinks, missing, isOptional };
}

const docsFiles = fs.existsSync('docs')
  ? fs.readdirSync('docs')
      .filter(f => f.endsWith('.md'))
      .map(f => path.join('docs', f))
  : [];

// README.md is always a required core document
const requiredFiles = ['README.md', ...docsFiles].filter(f => fs.existsSync(f));

let total = 0;
let requiredErrors = [];
let optionalWarnings = [];

for (const file of requiredFiles) {
  const res = checkLinksInFile(file);
  total += res.totalLinks;
  for (const err of res.missing) {
    if (res.isOptional) {
      optionalWarnings.push(err);
    } else {
      requiredErrors.push(err);
    }
  }
}

console.log(`Checked ${requiredFiles.length} Markdown files with ${total} total links.`);

if (optionalWarnings.length > 0) {
  console.warn(`⚠️ Found ${optionalWarnings.length} unresolved link(s) in optional document(s):`);
  for (const warn of optionalWarnings) {
    console.warn(`  - [${warn.text}](${warn.target}) in ${warn.file}`);
  }
}

if (requiredErrors.length === 0) {
  console.log('✅ 100% of relative links in required documents are valid and exist.');
  process.exit(0);
} else {
  console.error(`✖ FAILED: Found ${requiredErrors.length} unresolved relative link(s) in required documents:`);
  for (const err of requiredErrors) {
    console.error(`  - [${err.text}](${err.target}) in ${err.file}`);
  }
  process.exit(1);
}
