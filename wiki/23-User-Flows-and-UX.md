# User Flows & UX Journey

Visual sequence flows and interaction walkthroughs across primary user journeys.

---

## 🔄 Flow A: Emergency Donor Discovery

```mermaid
sequenceDiagram
    actor Recipient as Family Coordinator
    participant Nav as Navbar / Directory
    participant State as DonorContext
    participant Modal as DonorModal
    participant Toast as Toast Container

    Recipient->>Nav: Selects 'O+' blood pill and enters 'Mumbai'
    Nav->>State: Applies compound predicate filter
    State-->>Nav: Returns matching donor cards
    Recipient->>Nav: Clicks 'View Profile' on donor card
    Nav->>Modal: Opens accessible profile modal
    Recipient->>Modal: Clicks 'Request Donor'
    Modal->>State: Dispatches requestDonor(id)
    State->>State: Sets requested = true
    State->>Toast: Emits success toast notification
    Toast-->>Recipient: Displays 'Demonstration request recorded'
```

---

## 🔄 Flow B: Self-Service Donor Registration

1. User navigates to `/become-donor`.
2. Fills in donor credentials: Full Name, City, Phone, Email, and Blood Group.
3. Form validates inputs on submission.
4. Triggers confirmation toast and welcomes the contributor to the network.
