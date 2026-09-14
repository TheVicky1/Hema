# Frequently Asked Questions (FAQ)

### What is Hema?
**Hema** is an open-source community blood donor locator web application designed to help patients and healthcare volunteers quickly discover available blood donors by blood group and location.

### Where does the donor data come from?
In the current version, Hema fetches mock donor profile data from the REST API endpoint `https://jsonplaceholder.typicode.com/users` and maps user addresses to city locations with randomized blood group assignments for demonstration.

### Can Hema be integrated with a real backend database?
Yes! The data fetching logic inside [`src/App.jsx`](../src/App.jsx) can be configured or updated to pull from custom REST APIs, Supabase, Firebase, or GraphQL endpoints returning real donor records.

### How does the dark mode preference work?
Dark mode preferences are saved to `localStorage` under key `"theme"`. When toggled, Hema adds or removes the `.dark` class on `document.body` to adjust color properties.

### What technology stack does Hema use?
Hema is built using:
- **React 19.2** (JSX components, custom hooks)
- **Vite 7.3** (Build tooling and dev server)
- **Vanilla CSS** (Responsive Flexbox/Grid layouts, theme variables)
- **ESLint 9.39** (Code linting and static analysis)
