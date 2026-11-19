# Testing & Quality Assurance Matrix

HEMA enforces automated quality gates before merging code to assess code quality, static syntax correctness, and build compilation without guaranteeing zero regressions. The gates currently verify secret patterns, link integrity, dependency synchronization, static lint rules, and production bundle compilation.

---

## 🧪 Quality Gate Commands

```bash
# 1. Zero-Secret Scan
node scratch/secret-scan.mjs

# 2. Markdown Link Integrity Audit
node scratch/check-links.mjs

# 3. Dependency Health & Lockfile Sync Audit
node scratch/check-dependency-health.mjs

# 4. ESLint Code Quality Check
npm run lint

# 5. Production Build Compilation
npm run build
```
