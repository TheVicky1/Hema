# Security Policy for Hema

The Hema project takes security and data integrity seriously.

---

## Supported Versions

Only the latest version of the `main` branch is actively supported with security updates.

| Version | Supported |
| :--- | :--- |
| `0.0.0` (main branch) | :white_check_mark: Yes |
| Older commits / forks | :x: No |

---

## Reporting a Vulnerability

If you discover a potential security vulnerability in Hema, please **DO NOT** open a public issue.

Instead, please report security concerns directly to the project maintainer:
- **Maintainer**: `@TheVicky1` via GitHub.

Include as much details as possible:
- Steps to reproduce the issue
- Affected components or dependencies
- Potential impact

We will evaluate the report and respond promptly.

---

## Secret Safety & Privacy Guidelines

- Hema is a client-side web application. Never hardcode API keys, credentials, or private access tokens into source code or committed `.env` files.
- Always check `.gitignore` before committing configuration files.
