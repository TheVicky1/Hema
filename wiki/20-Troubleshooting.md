# Troubleshooting & Solutions Guide

Common development questions and their solutions.

---

### Issue 1: Port 5173 is already in use
**Fix**: Vite will automatically select the next available port (e.g. 5174), or you can specify `npm run dev -- --port 3000`.

### Issue 2: ESLint warning on Fast Refresh
**Fix**: Vite's React Fast Refresh plugin expects component files to export only React components. Non-component helpers and custom hooks (such as `addToast` or `useDonors`) should be isolated into their own dedicated modules (e.g. `src/utils/toast.js` or `src/context/useDonors.js`) rather than relying on `allowConstantExport`, which only exempts constant identifiers.
