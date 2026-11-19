# Maintainer Governance & PR Review Runbook

Checklist and operational procedures for core maintainers reviewing community pull requests and managing repository assets.

---

## 📋 Pull Request Review Checklist
1. **Status Checks**: Verify `Quality Gates & Verification (20.x)` and `Dependency Health & Vulnerability Scan (20.x)` pass.
2. **Branch Ruleset**: Ensure 1 approval and linear squash merge into `main`.
3. **Code Quality**: Ensure zero ESLint errors, zero secret-scan warnings, valid relative links, and a clean Vite build.
4. **Tone**: Always be welcoming, supportive, and constructive with first-time contributors.

---

## 📖 GitHub Wiki Publication Procedure

GitHub hosts wiki documentation in a dedicated, standalone Git repository (`https://github.com/TheVicky1/Hema.wiki.git`). Only commits pushed directly to that repository's default branch are displayed on the public GitHub Wiki.

Because pull request merges to `main` update files in the `wiki/` directory of the primary repository, maintainers must manually synchronize and publish changes to the wiki repository. This manual publication procedure is required after each merge to the default branch (`main`).

### Step-by-Step Wiki Synchronization

1. **Clone the Wiki repository** (first time only):
   ```bash
   git clone https://github.com/TheVicky1/Hema.wiki.git
   ```

2. **Pull the latest wiki revisions**:
   ```bash
   cd Hema.wiki
   git checkout master
   git pull origin master
   ```

3. **Copy updated markdown documents from the main repository**:
   ```bash
   # From the root of your local Hema workspace:
   cp wiki/*.md ../Hema.wiki/
   ```

4. **Review changes and commit**:
   ```bash
   cd ../Hema.wiki
   git status
   git diff
   git add .
   git commit -m "docs: synchronize wiki with main repository"
   ```

5. **Push to GitHub Wiki**:
   ```bash
   git push origin master
   ```

Once pushed, verify that the updated pages and navigation are visible at [https://github.com/TheVicky1/Hema/wiki](https://github.com/TheVicky1/Hema/wiki).
