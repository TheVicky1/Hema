# Continuous Integration & Deployment Pipeline

Every commit and pull request to HEMA is automatically verified through GitHub Actions and deployed via Vercel.

---

## 🔄 CI Workflow Architecture (`.github/workflows/ci.yml`)

```mermaid
flowchart TD
    Push[Code Pushed / PR Opened] --> Checkout[Checkout Repository]
    Checkout --> SetupNode[Setup Node.js 20.x]
    SetupNode --> Install[npm ci Clean Install]
    Install --> Audit[npm audit Security Scan]
    Install --> Lint[npm run lint Static Analysis]
    Install --> Build[npm run build Production Bundle]
    Audit --> Gate{All Checks Pass?}
    Lint --> Gate
    Build --> Gate
    Gate -->|Yes| Success[Merge Permitted / Preview Deployed]
    Gate -->|No| Fail[PR Blocked with Error Logs]
```

---

## 🛡️ Protected Branch Rulesets

The `main` branch requires:
1. **Pull Request Required**: Direct pushes to `main` are prohibited.
2. **Required Approving Review**: At least 1 review from a maintainer with write access.
3. **Required Status Checks**:
   - `Continuous Integration / Quality Gates & Verification (20.x) (pull_request)`
   - `Dependency Security Audit / Dependency Health & Vulnerability Scan (20.x) (pull_request)`
