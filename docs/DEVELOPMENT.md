# Development Guide

This guide covers developer workflows, npm scripts, code formatting standards, and testing procedures for **Hema**.

---

## Workspace Setup

Ensure you have initialized your development environment as described in [GETTING_STARTED.md](GETTING_STARTED.md).

```bash
git clone https://github.com/TheVicky1/Hema.git
cd Hema
npm install
```

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the local Vite development server with Hot Module Replacement (HMR).
- URL: `http://localhost:5173`

### `npm run build`
Bundles the application for production deployment into the `dist/` directory.
- Runs Vite build optimization.
- Generates minified JavaScript bundles and optimized CSS.

### `npm run lint`
Runs ESLint across all `.js` and `.jsx` files using the Flat Config system (`eslint.config.js`).
- Verifies React Hooks rules, React Refresh rules, and catches unused variables.

### `npm run preview`
Locally serves the production build from the `dist/` folder to test production behavior before deploying.

---

## Code Quality & Style Guidelines

- **ESLint**: Ensure all code passes `npm run lint` cleanly prior to committing.
- **Component Design**: Keep components modular, functional, and single-purpose.
- **CSS Architecture**: Standard Vanilla CSS scoped via `index.css` and `App.css` utilizing CSS variables for dark and light theme tokens.
