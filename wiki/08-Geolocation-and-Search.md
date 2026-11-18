# Geolocation & Fast Search Engine

HEMA provides sub-millisecond donor search and blood type filtering directly on the client.

---

## 🔍 Filter Pipeline Architecture

```mermaid
graph LR
    Input[User Search Query / Blood Pill Click] --> Normalizer[Case-Insensitive String Normalizer]
    Normalizer --> GroupFilter{Blood Group Match?}
    GroupFilter -->|Yes| CityFilter{City Substring Match?}
    CityFilter -->|Yes| AvailFilter{Available Only Active?}
    AvailFilter -->|Yes| Sorter[Prioritize Available Donors First]
    Sorter --> Grid[Render Responsive DonorCard Grid]
```

- **Debounced Input**: Text input changes are debounced to ensure fluid 60fps animations.
- **Normalized Query**: Cities and names are compared after `.toLowerCase().trim()` normalization.
