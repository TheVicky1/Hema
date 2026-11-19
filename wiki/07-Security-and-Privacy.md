# Security Architecture & Privacy Safeguards

Protecting donor safety and safeguarding personal data is a foundational architectural priority in HEMA.

---

## 🛡️ Privacy-by-Design Principles

1. **PII Minimization**: Personal Identifiable Information (such as personal phone numbers and direct email addresses) is stripped from all client-facing donor card renderings.
2. **Contact Masking**: The profile inspection modal demonstrates masked communication channels rather than exposing raw telecommunications numbers to prevent web scraping and unwanted marketing calls.
3. **No Third-Party Trackers**: HEMA does not integrate invasive third-party advertising scripts, telemetry trackers, or fingerprinting libraries.
4. **Local Session Scoping**: Request states are held in memory during the active session and are not stored in persistent third-party databases.

---

## 🔒 Security Best Practices

### Client-Side Security
- **XSS Prevention**: React automatically escapes all string expressions rendered in JSX, mitigating Cross-Site Scripting (XSS) risks.
- **Strict HTTPS**: Deployed via Vercel with automatic SSL/TLS certificate renewal and HSTS headers.
- **Safe External Links**: All external anchors utilize `rel="noopener noreferrer"` to prevent reverse tab-jacking.

### Dependency Security
- Automated `npm audit` checks are executed on every pull request via the GitHub Actions CI pipeline.
- Continuous vulnerability scanning ensures zero high or critical severity dependencies.
