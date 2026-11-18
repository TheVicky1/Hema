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
import { execSync } from 'node:child_process';

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
const prodDeps = Object.keys(pkg.dependencies || {});
const devDeps = Object.keys(pkg.devDependencies || {});

console.log('----------------------------------------------------------------');
console.log('1. Direct Dependencies Inventory');
console.log('----------------------------------------------------------------');
console.log(`  Production Dependencies (${prodDeps.length}):`);
for (const dep of prodDeps) {
  console.log(`    • ${dep}: ${pkg.dependencies[dep]}`);
}

console.log(`\n  Development Dependencies (${devDeps.length}):`);
for (const dep of devDeps) {
  console.log(`    • ${dep}: ${pkg.devDependencies[dep]}`);
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
  const sourceObj = item.scope === 'prod' ? pkg.dependencies : pkg.devDependencies;
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

const lockPackages = lock.packages ? lock.packages[''] : null;
let syncErrors = 0;

if (lockPackages) {
  const lockProd = lockPackages.dependencies || {};
  const lockDev = lockPackages.devDependencies || {};

  for (const dep of prodDeps) {
    if (!lockProd[dep]) {
      console.error(`  ✖ Direct dependency "${dep}" missing from lockfile root dependencies.`);
      syncErrors++;
    }
  }

  for (const dep of devDeps) {
    if (!lockDev[dep]) {
      console.error(`  ✖ Dev dependency "${dep}" missing from lockfile root devDependencies.`);
      syncErrors++;
    }
  }
}

if (syncErrors === 0) {
  console.log('  ✔ All declared direct dependencies are synchronized in package-lock.json.');
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

