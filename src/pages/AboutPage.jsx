import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import WaveBackground from "../components/WaveBackground";

const mission = [
  {
    icon: "🩸",
    title: "Our Mission",
    desc: "Hema exists to eliminate the gap between blood donors and those who urgently need them. We believe no life should be lost simply because the right donor couldn't be found in time.",
  },
  {
    icon: "🌍",
    title: "Community First",
    desc: "We are built entirely on the generosity of community members. Every donor on Hema is a volunteer giving the most irreplaceable gift - a part of themselves to save another.",
  },
  {
    icon: "🔒",
    title: "Privacy & Trust",
    desc: "Donor privacy is paramount. Personal contact details are omitted from public directory cards. In this prototype demonstration, donor profiles utilize simulated sample records.",
  },
  {
    icon: "⚡",
    title: "Speed Matters",
    desc: "In medical emergencies, every minute counts. Hema is designed to surface the right donor in seconds - not hours - when time is literally life.",
  },
];

const values = [
  { emoji: "❤️", title: "Compassion", desc: "Every feature we build puts human life and dignity first." },
  { emoji: "🤝", title: "Community", desc: "We succeed only when our donors and recipients succeed." },
  { emoji: "🔬", title: "Accuracy", desc: "Real-time availability data you can trust in a crisis." },
  { emoji: "🛡️", title: "Safety", desc: "Your data and your donors' privacy are never compromised." },
  { emoji: "⚡", title: "Speed", desc: "Built for emergencies - fast search, instant requests." },
  { emoji: "🌱", title: "Growth", desc: "More cities, more donors, more lives saved every month." },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* About Hero */}
      <section className="about-hero">
        <WaveBackground variant="subtle" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-eyebrow">
            <Heart size={10} fill="currentColor" />
            Our Story
          </span>
          <h1 className="section-title" style={{ fontSize: "clamp(32px, 5vw, 52px)", marginTop: "12px" }}>
            Connecting donors with those<br />who need them most
          </h1>
          <p className="section-subtitle" style={{ marginTop: "16px", maxWidth: "580px" }}>
            Hema was born from a simple belief: that the right donor should always be reachable 
            at the right time. We're building the infrastructure that makes that possible.
          </p>
        </div>
      </section>

      {/* Mission Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What we stand for</span>
            <h2 className="section-title">Built on purpose</h2>
          </div>
          <div className="mission-grid">
            {mission.map((m) => (
              <div className="mission-card" key={m.title}>
                <span className="mission-icon">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Interlude */}
      <section className="how-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--color-border)", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--color-border)" }}>
            {[
              { val: "1 in 7", label: "Hospital patients need blood" },
              { val: "56 days", label: "Until you can donate again" },
              { val: "3 lives", label: "Saved per single donation" },
            ].map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-value red">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our values</span>
            <h2 className="section-title">What drives every decision</h2>
          </div>
          <div className="values-row">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-emoji">{v.emoji}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Join the Hema network</h2>
          <p>Register as a donor or find one - it only takes a minute, and it could save a life.</p>
          <div className="cta-strip-actions">
            <Link to="/become-donor" className="btn btn-cta-white">
              Become a Donor
            </Link>
            <Link to="/donors" className="btn btn-cta-outline">
              Find a Donor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

