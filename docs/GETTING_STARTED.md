# Getting Started with Hema

Welcome to **Hema** — an open-source community blood donor locator web application built with React 19 and Vite 7.

This guide provides step-by-step instructions for getting Hema up and running on your local machine.

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher (Node.js 20+ recommended)
- **npm**: `v9.0.0` or higher (bundled with Node.js)
- **Git**: For cloning the repository

Verify your local installation:

```bash
node -v
npm -v
git --version
```

---

## Quickstart Installation

### 1. Clone the Repository

```bash
git clone https://github.com/TheVicky1/Hema.git
cd Hema
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables (Optional)

Hema works out-of-the-box using public mock API endpoints. If you wish to customize local configuration:

```bash
cp .env.example .env
```

Available configuration options in `.env`:
- `VITE_API_BASE_URL`: Base REST endpoint URL for fetching donor dataset (default: `https://jsonplaceholder.typicode.com`).

---

## Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:5173
```

---

## Next Steps

- Explore the [Architecture Overview](ARCHITECTURE.md) to learn how Hema maps data and manages application state.
- Check out the [Development Guide](DEVELOPMENT.md) for code styling, scripts, and build commands.
- Read [CONTRIBUTING.md](CONTRIBUTING.md) to start submitting issues or pull requests.
