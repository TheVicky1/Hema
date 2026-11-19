# Security & Donor Privacy Architecture

HEMA prioritizes user trust, data minimization, and transparent privacy boundaries across demonstration and production architectures.

---

## 🔒 Privacy Safeguards & Architecture Boundaries

1. **Demonstration Data Isolation**: The demonstration application fetches public sample records from JSONPlaceholder to populate the donor directory. Because the sample dataset includes sample email addresses and phone numbers in the initial response payload, production architectures will require a backend proxy layer to strip sensitive fields before transmitting donor summaries to the client.
2. **Display Minimization**: Neither `DonorCard` nor `DonorModal` render phone numbers or email addresses in the user interface. Sending a request updates in-memory request state and displays a confirmation toast without revealing or exchanging private contact credentials.
3. **Zero Third-Party Telemetry**: Zero marketing analytics, tracking cookies, or external ad pixels are injected into the client bundle, maintaining complete user anonymity.
4. **Clean Session Lifecycle**: Demonstration request states exist only in active browser memory and reset cleanly upon page reload or tab closure.
