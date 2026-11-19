# Troubleshooting & Developer FAQ

Quick solutions to common development, environment, and build challenges.

---

## ❓ Common Issues & Solutions

### 1. Node.js Version Incompatibility
- **Symptom**: `vite: command not found` or `crypto` errors during `npm install`.
- **Cause**: Running an older Node.js version (e.g. Node 16 or 18).
- **Solution**: Switch to Node.js 20 LTS using `nvm` or `fnm`:
  ```bash
  nvm install 20
  nvm use 20
  ```

### 2. Port 5173 Already in Use (`EADDRINUSE`)
- **Symptom**: Vite starts on port 5174 or throws an address in use error.
- **Solution**: Terminate the previous process or specify a different port:
  ```bash
  npm run dev -- --port 3000
  ```

### 3. Corrupted Vite Cache
- **Symptom**: Stale CSS tokens or old components persisting after edits.
- **Solution**: Remove the local cache and restart:
  ```bash
  rm -rf node_modules/.vite
  npm run dev
  ```

### 4. Git Merge Conflicts on Protected Branches
- **Symptom**: PR displays merge conflicts with `main`.
- **Solution**: Rebase onto the latest main branch:
  ```bash
  git checkout main && git pull origin main
  git checkout your-branch && git rebase main
  ```
