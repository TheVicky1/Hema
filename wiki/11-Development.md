# Local Development Guide

Get started with local development in under two minutes.

---

## 🛠️ Prerequisites
- **Node.js**: Version 20.19 or later (in the 20.x LTS line), or Node.js 22.12 or later
- **npm**: Version 10.0.0 or higher
- **Git**: Installed and configured on your operating system

---

## 🚀 Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/TheVicky1/Hema.git
cd Hema

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR) active.

---

## 📜 Available npm Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`dev`** | `vite` | Starts local development server on port 5173 with instant HMR |
| **`build`** | `vite build` | Compiles production assets into the `dist/` directory |
| **`preview`** | `vite preview` | Serves production build locally for pre-release verification |
| **`lint`** | `eslint .` | Runs static code analysis across JavaScript and JSX files |

---

## 🐳 Docker Devcontainer Setup

If you prefer containerized development without installing Node.js locally:

```bash
docker run -it --rm -p 5173:5173 -v $(pwd):/app -w /app node:20-alpine sh -c "npm install && npm run dev -- --host"
```
