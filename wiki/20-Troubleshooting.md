# Troubleshooting & Solutions Guide

Common development questions and their solutions.

---

### Issue 1: Port 5173 is already in use
**Fix**: Vite will automatically select the next available port (e.g. 5174), or you can specify `npm run dev -- --port 3000`.

### Issue 2: ESLint warning on Fast Refresh
**Fix**: Ensure non-component helpers like `addToast` or `useDonors` are exported alongside components with `allowConstantExport: true` in `eslint.config.js`.
