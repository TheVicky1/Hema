# CI/CD Workflows & Branch Protection

HEMA uses GitHub Actions automated pipelines aligned with branch protection rulesets.

---

## 🔒 Branch Ruleset Alignment

The `main` branch is protected by the **Protect Main** ruleset requiring:
1. **Quality Gates & Verification (20.x)**: Validates secrets, markdown links, ESLint, and Vite build.
2. **Dependency Health & Vulnerability Scan (20.x)**: Validates lockfile synchronization and audits dependency health. Vulnerability advisories from `npm audit` are reported as workflow warnings rather than hard failures, so a passing check verifies lockfile sync and dependency structure rather than the complete absence of high- or critical-severity advisories.
3. **Pull Request Required**: 1 approving review required before merging.
4. **Squash Merge**: Enforces linear history and clean commit trees.
5. **No Force Pushing**: Force pushes are strictly blocked.
