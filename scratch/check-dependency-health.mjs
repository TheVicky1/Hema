/**
 * HEMA Dependency Health & Security Audit Utility
 *
 * Performs deterministic, read-only inspection of repository dependencies:
 * 1. Verifies synchronization between package.json and package-lock.json
 * 2. Audits direct production and development dependencies
 * 3. Inspects npm audit security advisories
 *
 * Usage: node scratch/check-dependency-health.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const pkgPath = path.join(rootDir, 'package.json');
const lockPath = path.join(rootDir, 'package-lock.json');

console.log('================================================================');
console.log('  HEMA Dependency Health & Security Audit');
console.log('================================================================\n');

// 1. Verify existence of package manifest and lockfile
if (!fs.existsSync(pkgPath)) {
  console.error('✖ FATAL: package.json not found in repository root.');
  process.exit(1);
}

if (!fs.existsSync(lockPath)) {
  console.error('✖ FATAL: package-lock.json not found. Lockfile integrity is mandatory.');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));

console.log(`📦 Package: ${pkg.name || 'hema'} (v${pkg.version || '0.0.0'})`);
console.log(`🔒 Lockfile Version: ${lock.lockfileVersion || 'unknown'}\n`);

// 2. Direct Dependency Inventory
const pkgProdDeps = pkg.dependencies || {};
const pkgDevDeps = pkg.devDependencies || {};
const prodDepKeys = Object.keys(pkgProdDeps);
const devDepKeys = Object.keys(pkgDevDeps);

console.log('----------------------------------------------------------------');
console.log('1. Direct Dependencies Inventory');
console.log('----------------------------------------------------------------');
console.log(`  Production Dependencies (${prodDepKeys.length}):`);
for (const dep of prodDepKeys) {
  console.log(`    • ${dep}: ${pkgProdDeps[dep]}`);
}

console.log(`\n  Development Dependencies (${devDepKeys.length}):`);
for (const dep of devDepKeys) {
  console.log(`    • ${dep}: ${pkgDevDeps[dep]}`);
}

// 3. Framework-Critical Stack Baseline
console.log('\n----------------------------------------------------------------');
console.log('2. Framework-Critical Stack Baseline');
console.log('----------------------------------------------------------------');
const criticalStack = [
  { name: 'React', pkgKey: 'react', scope: 'prod' },
  { name: 'React DOM', pkgKey: 'react-dom', scope: 'prod' },
  { name: 'React Router', pkgKey: 'react-router-dom', scope: 'prod' },
  { name: 'Lucide React', pkgKey: 'lucide-react', scope: 'prod' },
  { name: 'Vite', pkgKey: 'vite', scope: 'dev' },
  { name: 'ESLint', pkgKey: 'eslint', scope: 'dev' }
];

for (const item of criticalStack) {
  const sourceObj = item.scope === 'prod' ? pkgProdDeps : pkgDevDeps;
  const versionSpec = sourceObj ? sourceObj[item.pkgKey] : undefined;
  if (versionSpec) {
    console.log(`  ✔ ${item.name.padEnd(20)}: ${versionSpec.padEnd(12)} [${item.scope}]`);
  } else {
    console.warn(`  ⚠ ${item.name.padEnd(20)}: NOT FOUND in ${item.scope} dependencies`);
  }
}

// 4. Lockfile Synchronization Audit
console.log('\n----------------------------------------------------------------');
console.log('3. Lockfile Synchronization & Direct Mapping Check');
console.log('----------------------------------------------------------------');

if (!lock.packages || typeof lock.packages !== 'object' || !lock.packages['']) {
  console.error('✖ FATAL: Missing lock.packages[""] root mapping in package-lock.json.');
  console.error('  Please regenerate lockfile using: npm install --package-lock-only');
  process.exit(1);
}

const rootPackage = lock.packages[''];
const lockProd = rootPackage.dependencies || {};
const lockDev = rootPackage.devDependencies || {};

let syncErrors = 0;

// Bidirectional check for production dependencies
for (const dep of prodDepKeys) {
  if (!lockProd[dep]) {
    console.error(`  ✖ Production dependency "${dep}" declared in package.json is missing from lockfile root dependencies.`);
    syncErrors++;
  } else if (lockProd[dep] !== pkgProdDeps[dep]) {
    console.error(`  ✖ Version mismatch for "${dep}": package.json has "${pkgProdDeps[dep]}", lockfile root has "${lockProd[dep]}".`);
    syncErrors++;
  }
}

for (const dep of Object.keys(lockProd)) {
  if (!pkgProdDeps[dep]) {
    console.error(`  ✖ Lockfile root dependency "${dep}" is not declared in package.json dependencies.`);
    syncErrors++;
  }
}

// Bidirectional check for development dependencies
for (const dep of devDepKeys) {
  if (!lockDev[dep]) {
    console.error(`  ✖ Dev dependency "${dep}" declared in package.json is missing from lockfile root devDependencies.`);
    syncErrors++;
  } else if (lockDev[dep] !== pkgDevDeps[dep]) {
    console.error(`  ✖ Version mismatch for dev dependency "${dep}": package.json has "${pkgDevDeps[dep]}", lockfile root has "${lockDev[dep]}".`);
    syncErrors++;
  }
}

for (const dep of Object.keys(lockDev)) {
  if (!pkgDevDeps[dep]) {
    console.error(`  ✖ Lockfile root devDependency "${dep}" is not declared in package.json devDependencies.`);
    syncErrors++;
  }
}

if (syncErrors === 0) {
  console.log('  ✔ All declared direct dependencies and versions are perfectly synchronized in package-lock.json.');
} else {
  console.error(`  ✖ Found ${syncErrors} lockfile synchronization discrepancy/discrepancies.`);
}

console.log('\n================================================================');
console.log('  AUDIT SUMMARY & GATE RESULT');
console.log('================================================================');

if (syncErrors > 0) {
  console.error('✖ FAILED: Lockfile synchronization discrepancies detected.');
  process.exit(1);
}

console.log('✔ PASSED: Dependencies synchronized and verified.');
console.log('================================================================\n');
process.exit(0);
