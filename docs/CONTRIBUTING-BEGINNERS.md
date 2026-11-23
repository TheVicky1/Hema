# Beginner's Contribution Guide

Welcome to the **HEMA** open-source project! If this is your first time contributing to an open-source repository on GitHub, you are in the right place. We designed HEMA so that anyone can make a meaningful contribution within 15-30 minutes.

---

## 🧭 Zero-to-PR Walkthrough

### Step 1: Find a Beginner-Friendly Issue
Visit our [**Good First Issues**](https://github.com/TheVicky1/Hema/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) catalog on GitHub. Look for issues labeled:
- `good first issue`: Scoped to a single file, taking 10-20 minutes.
- `first-timers-only`: Reserved exclusively for first-time open-source contributors.
- `up-for-grabs`: Ready for immediate work.

Drop a comment on the issue: *"I would love to work on this issue!"* A maintainer will assign it to you.

---

### Step 2: Fork the Repository
Click the **Fork** button in the top-right corner of the [HEMA GitHub Repository](https://github.com/TheVicky1/Hema) to create a copy under your GitHub account.

---

### Step 3: Clone Your Fork Locally
Open your terminal (PowerShell, Command Prompt, or bash) and clone your fork:

```bash
git clone https://github.com/<your-username>/Hema.git
cd Hema
```

---

### Step 4: Install Dependencies
Install the required packages using npm:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. You will see HEMA running locally with Hot Module Replacement (HMR).

---

### Step 5: Create a Feature Branch
Never make edits directly on the `main` branch. Create a new branch:

```bash
git checkout -b feat/your-feature-name
```

Example branch names:
- `feat/add-search-clear-button`
- `docs/update-readme-badges`
- `a11y/improve-modal-focus`

---

### Step 6: Make Your Changes
Open the project in VS Code or your favorite code editor. Make the changes outlined in your assigned issue.

Verify your changes:
```bash
# 1. Run ESLint static analysis
npm run lint

# 2. Run production build test
npm run build
```

---

### Step 7: Commit and Push
Follow Conventional Commits format (`feat:`, `fix:`, `docs:`, `style:`, `test:`):

```bash
git add .
git commit -m "feat(directory): add accessible clear search button"
git push origin feat/your-feature-name
```

---

### Step 8: Open Your Pull Request
1. Go to your fork on GitHub.
2. Click the green **Compare & pull request** button.
3. Add a clear title and description referencing your issue (e.g. `Closes #54`).
4. Submit your PR!

Our maintainers will review your pull request within **48 hours**, guide you through any minor tweaks, and merge your contribution into `main`.

Once merged, your avatar will appear on our [Contributors Hall of Fame](CONTRIBUTORS.md)! 🩸✨
