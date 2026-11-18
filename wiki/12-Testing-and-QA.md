# Testing & Quality Assurance Matrix

HEMA enforces rigorous quality gates before merging code to ensure zero regressions.

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
