import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToast } from "../utils/toast";
import WaveBackground from "../components/WaveBackground";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const CITIES = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"];

const benefits = [
  {
    icon: "❤️",
    title: "Save up to 3 lives",
    desc: "A single donation can be separated into red cells, plasma, and platelets - helping up to three patients.",
  },
  {
    icon: "🔬",
    title: "Free health screening",
    desc: "Every donation includes a mini health check - blood pressure, haemoglobin, and more.",
  },
  {
    icon: "🌍",
    title: "Strengthen your community",
    desc: "Blood cannot be manufactured. Your donation is irreplaceable for patients in emergency situations.",
  },
  {
    icon: "🩺",
    title: "Replenishes in 56 days",
    desc: "Your body fully replenishes donated red blood cells within 4-8 weeks. It's safe, quick, and easy.",
  },
];

export default function BecomeDonorPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", bloodGroup: "", availability: "available", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.city) e.city = "Please select a city";
    if (!form.bloodGroup) e.bloodGroup = "Please select your blood group";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      addToast({ type: "success", title: "Welcome to Hema!", message: "Your donor profile has been registered.", duration: 5000 });
    }, 1400);
  };

  const set = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => { const n = { ...p }; delete n[k]; return n; });
  };

  return (
    <div className="page-wrapper donate-page">
      <section className="page-hero">
        <WaveBackground variant="subtle" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="page-hero-eyebrow">🩸 Join Us</span>
          <h1 className="page-hero-title">Become a Blood Donor</h1>
          <p className="page-hero-sub">
            Register your profile and be ready to help when someone in your community needs you most.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="donate-layout">
            {/* Left - Info */}
            <div className="donate-info">
              <h2 className="donate-title">Why donate blood?</h2>
              <p className="donate-subtitle">
                Blood cannot be manufactured or stored indefinitely. Every donation you make is a direct, 
                irreplaceable gift to someone fighting for their life.
              </p>

              <div className="donate-benefits">
                {benefits.map((b) => (
                  <div className="benefit-row" key={b.title}>
                    <div className="benefit-icon">{b.icon}</div>
                    <div className="benefit-text">
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <span className="success-icon">🎉</span>
                  <h3>You're registered!</h3>
                  <p>
                    Thank you, <strong>{form.name.split(" ")[0]}</strong>. Your demonstration registration has been recorded for this session.
                    In a production release, donors in your area will be able to discover your profile when they need {form.bloodGroup || "blood"}.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link to="/donors" className="btn btn-primary" style={{ padding: "12px", justifyContent: "center" }}>
                      Browse Other Donors
                    </Link>
                    <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", city: "", bloodGroup: "", availability: "available", message: "" }); }}>
                      Register Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="form-title">Donor Registration</h3>
                  <p className="form-subtitle">Fill in your details to join the Hema donor network.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className={`input ${errors.name ? "input-error" : ""}`} placeholder="John Doe" value={form.name} onChange={(e) => set("name", e.target.value)} />
                      {errors.name && <span style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px", display: "block" }}>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Blood Group *</label>
                      <select className={`input select ${errors.bloodGroup ? "input-error" : ""}`} value={form.bloodGroup} onChange={(e) => set("bloodGroup", e.target.value)}>
                        <option value="">Select type</option>
                        {BLOOD_GROUPS.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
                      </select>
                      {errors.bloodGroup && <span style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px", display: "block" }}>{errors.bloodGroup}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className={`input ${errors.email ? "input-error" : ""}`} type="email" placeholder="john@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                    {errors.email && <span style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input className={`input ${errors.phone ? "input-error" : ""}`} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                      {errors.phone && <span style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px", display: "block" }}>{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">City *</label>
                      <select className={`input select ${errors.city ? "input-error" : ""}`} value={form.city} onChange={(e) => set("city", e.target.value)}>
                        <option value="">Select city</option>
                        {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.city && <span style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px", display: "block" }}>{errors.city}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Availability</label>
                    <select className="input select" value={form.availability} onChange={(e) => set("availability", e.target.value)}>
                      <option value="available">Available to donate now</option>
                      <option value="soon">Available in 1-2 weeks</option>
                      <option value="unavailable">Currently unavailable</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Additional Notes <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(optional)</span></label>
                    <textarea className="input" placeholder="Any medical conditions or preferred contact times…" value={form.message} onChange={(e) => set("message", e.target.value)} />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                    {loading ? "Registering…" : "Register as Donor"}
                  </button>

                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", textAlign: "center", marginTop: "14px", lineHeight: "1.5" }}>
                    Your information is kept private and only shared when a request is sent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

