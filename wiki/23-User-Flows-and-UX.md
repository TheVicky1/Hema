# User Flows & UX Journey

Detailed user journey workflows for demonstration donor discovery and volunteer registration flows.

---

## 🩸 Donor Discovery Flow
```
Home -> Click 'Find Donors' -> Select Blood Group Pill -> Enter City -> Review Donor Cards -> Click 'Request Donor' -> Receive Confirmation Toast (Simulated Action, Updates Local In-Memory State Only)
```

> [!NOTE]
> In this demonstration version, clicking 'Request Donor' updates the local in-memory request state and displays a confirmation toast notification. It does not dispatch external network notifications to real donors or initiate live contact.

---

## 📝 Volunteer Donor Registration Flow
```
Home -> Click 'Become a Donor' -> Fill Name, Phone, Blood Group -> Review Donation Benefits -> Submit Form -> Receive Instant Local Success Feedback (Demonstration Mode)
```

> [!NOTE]
> Submitting the volunteer registration form displays local success feedback and a confirmation toast. It does not append the entered profile to the donor directory, which loads demonstration records from an external API.
