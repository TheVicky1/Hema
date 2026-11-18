# Security & Donor Privacy Architecture

Donor privacy is fundamental to trust. HEMA enforces strict data minimization and contact credential isolation.

---

## 🔒 Privacy Safeguards
1. **No Public Scraping**: Donor phone numbers and emails are never exposed directly in open static text to prevent robotic web scrapers from harvesting contacts.
2. **Contact Masking**: Full contact info is rendered only within interactive inspection dialogs during confirmed request workflows.
3. **Zero Third-Party Telemetry**: Zero marketing analytics, tracking cookies, or external ad pixels are injected into the application bundle.
4. **Local State Hygiene**: Active request tokens stored in `sessionStorage` are cleared upon browser tab dismissal.
