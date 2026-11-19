# Production Deployment Architecture

HEMA is deployed globally across the Vercel Edge Network for optimal performance, low latency, and 99.99% availability.

---

## 🌐 Production Environment

- **Live URL**: [https://hema-blood.vercel.app](https://hema-blood.vercel.app)
- **Hosting Provider**: Vercel
- **Edge Routing**: Global Anycast CDN

---

## ⚙️ SPA Routing Configuration (`vercel.json`)

To ensure client-side routing with React Router DOM works across all subpaths without 404 errors, `vercel.json` configures path rewrites:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🚀 Automatic Deployment Flow

1. Every pull request generates an isolated **Vercel Preview Deployment** for visual review.
2. Merges to the `main` branch automatically trigger **Production Deployment**.
