# Maintainer Runbook & Operations Manual

Operational procedures for HEMA repository maintainers.

---

## 📋 Daily Triage Routine

1. **Review Inbound Issues**:
   - Check if new issues have clear reproduction steps.
   - Attach appropriate labels (`bug`, `enhancement`, `documentation`, `good first issue`).
2. **Review Open Pull Requests**:
   - Verify automated CI checks pass.
   - Check for strict Single-Dash Rule compliance (no em-dashes or en-dashes).
   - Ensure clean commit history and conventional commit prefixes.
   - Leave constructive, supportive feedback within 48 hours.

---

## 🏷️ Release Management Protocol

1. Verify all target PRs are merged into `main`.
2. Bump version in `package.json`.
3. Update `wiki/19-Releases.md` with release notes.
4. Draft a new GitHub Release with a git tag (e.g. `v1.1.0`).
5. Confirm Vercel production deployment succeeds.
