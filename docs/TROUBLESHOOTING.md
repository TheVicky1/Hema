# Troubleshooting Guide

Solutions to common local setup, build, and Git roadblocks when working on HEMA.

---

## ❓ Common Issues & Step-by-Step Fixes

### 1. Node.js Version Incompatibility
- **Symptom**: `vite: command not found` or syntax errors during `npm install`.
- **Cause**: Node.js version is below 20.x LTS.
- **Solution**: Install or switch to Node.js 20 using `nvm` or `fnm`:
  ```bash
  nvm install 20
  nvm use 20
  ```

### 2. Port 5173 Already in Use (`EADDRINUSE`)
- **Symptom**: Vite starts on port 5174 or fails with `Port 5173 is in use`.
- **Solution**: Either terminate the existing dev server or specify an alternate port:
  ```bash
  npm run dev -- --port 3000
  ```

### 3. Stale Vite Cache
- **Symptom**: CSS token changes or component updates do not reflect in the browser.
- **Solution**: Clear Vite's pre-bundled dependency cache and restart:
  ```bash
  rm -rf node_modules/.vite
  npm run dev
  ```

### 4. Git Merge Conflicts on Protected Branches
- **Symptom**: Pull request indicates conflicts with the `main` branch.
- **Solution**: Rebase your feature branch on the latest `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout feat/your-feature-branch
  git rebase main
  # Resolve any file conflicts, then:
  git push origin feat/your-feature-branch --force-with-lease
  ```

### 5. PowerShell Execution Policy Restriction (Windows)
- **Symptom**: `npm` or `vite` script execution is blocked on Windows PowerShell.
- **Solution**: Run PowerShell as Administrator and adjust the execution policy:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
