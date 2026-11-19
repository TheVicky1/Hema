import React from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronRight, Shield, Clock, Users } from "lucide-react";
import { useDonors } from "../context/useDonors";
import StatsBar from "../components/StatsBar";
import WaveBackground from "../components/WaveBackground";

const steps = [
  {
    icon: "🔍",
    num: "01",
    title: "Search for Donors",
    desc: "Filter by blood type and city to instantly find compatible donors in your area.",
  },
  {
    icon: "📩",
    num: "02",
    title: "Send a Request",
    desc: "One click sends a notification to the donor. No sign-up or registration needed.",
  },
  {
    icon: "🩸",
    num: "03",
    title: "Connect & Donate",
    desc: "The donor reaches out to coordinate the donation - fast, safe, and community-driven.",
  },
];

export default function HomePage() {
  const { donors, loading } = useDonors();
  const available = donors.filter((d) => d.available).length;
  const bloodGroups = [...new Set(donors.map((d) => d.bloodGroup))].length;

  return (
    <div className="page-wrapper">
      {/* Urgency Banner */}
      <div className="urgency-banner">
        <div className="urgency-banner-inner container">
          <span className="urgency-sep" />
          <strong>Live Network:</strong> Blood donors actively helping communities across cities every day.
          <span className="urgency-sep" />
        </div>
      </div>

      {/* Hero - with wave background */}
      <section className="hero">
        {/* Wave background layers */}
        <WaveBackground variant="hero" />
        {/* Legacy center glow */}
        <div className="hero-glow" />

        <div className="container">
          <div className="hero-eyebrow">
            <Heart size={11} fill="currentColor" />
            Community Blood Donor Network
          </div>

          <h1 className="hero-title">
            Find the right donor,
            <span className="accent">save a life today</span>
          </h1>

          <p className="hero-subtitle">
            Connect instantly with verified blood donors in your city.
            Filter by blood type, check real-time availability, and send requests in seconds.
          </p>

          <div className="hero-actions">
            <Link to="/donors" className="btn btn-primary btn-hero-primary">
              Find a Donor
              <ChevronRight size={16} />
            </Link>
            <Link to="/become-donor" className="btn-hero-secondary">
              Become a Donor
            </Link>
          </div>

          {/* Trust row */}
          <div className="hero-trust">
            <span className="trust-item">
              <Shield size={14} className="trust-icon" />
              Community verified
            </span>
            <span className="trust-item">
              <Clock size={14} className="trust-icon" />
              Real-time availability
            </span>
            <span className="trust-item">
              <Users size={14} className="trust-icon" />
              {loading ? "Loading..." : `${donors.length}+ registered donors`}
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      {!loading && (
        <div className="stats-section">
          <div className="container">
            <StatsBar total={donors.length} available={available} bloodGroups={bloodGroups} />
          </div>
        </div>
      )}

      {/* How It Works - Preview */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Heart size={10} fill="currentColor" />
              Simple Process
            </span>
            <h2 className="section-title">How Hema works</h2>
            <p className="section-subtitle">
              Three simple steps to find a donor or save a life in your community.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.num}>
                <div className="step-number">{s.num}</div>
                <span className="step-icon">{s.icon}</span>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link to="/how-it-works" className="btn btn-ghost" style={{ padding: "10px 24px" }}>
              Learn more about the process
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="container">
          <h2>Ready to make a difference?</h2>
          <p>Join our community of blood donors and help save lives in your city.</p>
          <div className="cta-strip-actions">
            <Link to="/become-donor" className="btn btn-cta-white">
              Register as a Donor
            </Link>
            <Link to="/donors" className="btn btn-cta-outline">
              Browse Donors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
