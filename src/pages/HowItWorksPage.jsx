import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart } from "lucide-react";
import WaveBackground from "../components/WaveBackground";

const steps = [
  {
    num: "1",
    title: "Search for a Donor",
    desc: "Start by visiting our Find Donors page. Use the blood type filter pills to narrow down donors to your required blood group. Use the city search to find donors near you. You'll instantly see a live grid of registered donors sorted by availability.",
  },
  {
    num: "2",
    title: "Review Donor Profiles",
    desc: "Click on any donor card to view their full profile — blood type, city, donation history, current availability, and status. Each profile shows whether the donor has already been contacted or is ready to respond.",
  },
  {
    num: "3",
    title: "Send a Request",
    desc: "Hit the 'Request Donor' button. This sends a notification to the donor immediately. No account required. No sign-up forms. The donor will reach out to you at the contact details provided.",
  },
  {
    num: "4",
    title: "Coordinate the Donation",
    desc: "The donor connects with you directly to arrange the donation at a mutually convenient hospital or blood bank. Hema facilitates the connection — the rest is handled with warmth and care by both parties.",
  },
  {
    num: "5",
    title: "Register as a Donor Yourself",
    desc: "Want to give back? Register your profile on our 'Become a Donor' page. It takes under two minutes. Once registered, you'll appear in the donor directory and can receive requests from people in your city.",
  },
];

const faqs = [
  {
    q: "Is Hema free to use?",
    a: "Yes, completely free. Hema is a community platform and will always be free for donors and recipients.",
  },
  {
    q: "How is my privacy protected?",
    a: "Your contact details are never displayed publicly. They are only shared with the person who sends you a blood request, and only after you confirm availability.",
  },
  {
    q: "How often can I donate blood?",
    a: "Whole blood can be donated every 56 days (8 weeks). Platelets can be donated up to 24 times per year. Plasma every 28 days.",
  },
  {
    q: "What are the basic eligibility requirements?",
    a: "Generally: age 18–65, weight above 50 kg, haemoglobin above 12.5 g/dL, no recent illness, tattoos, or surgeries. Your local blood bank will conduct a full screening before each donation.",
  },
  {
    q: "Can I update my availability status?",
    a: "Yes. After registration you can update your availability at any time. This immediately reflects in the donor directory so requestors see accurate information.",
  },
  {
    q: "What if I need blood urgently?",
    a: "Use the 'Available Only' filter on the donors page and search by your city. Select your blood type to narrow results. Requests are sent instantly. For extreme emergencies, always contact your nearest hospital directly first.",
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <WaveBackground variant="subtle" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="page-hero-eyebrow">
            <Heart size={11} fill="currentColor" style={{ display: "inline" }} /> Process
          </span>
          <h1 className="page-hero-title">How Hema Works</h1>
          <p className="page-hero-sub">
            From searching for a donor to making a life-saving connection — here's exactly
            how it works, step by step.
          </p>
        </div>
      </section>

      {/* Steps + Sidebar */}
      <section className="section">
        <div className="container">
          <div className="hiw-layout">
            {/* Steps */}
            <div className="hiw-steps">
              {steps.map((s) => (
                <div className="hiw-step" key={s.num}>
                  <div className="hiw-num">{s.num}</div>
                  <div className="hiw-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="hiw-sidebar">
              <div className="card-base">
                <span style={{ fontSize: "32px", marginBottom: "16px", display: "block" }}>🩸</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "10px" }}>
                  Need blood now?
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "20px", lineHeight: 1.65 }}>
                  Search our directory of available donors filtered by your blood type and city.
                </p>
                <Link
                  to="/donors"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", justifyContent: "center", fontSize: "14px" }}
                >
                  Find a Donor
                </Link>
              </div>

              <div className="card-base">
                <span style={{ fontSize: "32px", marginBottom: "16px", display: "block" }}>❤️</span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "10px" }}>
                  Want to donate?
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "20px", lineHeight: 1.65 }}>
                  Join our network of community donors. Registration takes under two minutes.
                </p>
                <Link
                  to="/become-donor"
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "12px", justifyContent: "center", fontSize: "14px" }}
                >
                  Register as Donor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: "720px", margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <ChevronDown size={18} className="faq-chevron" />
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Find a donor in seconds or join our network — it's free, fast, and life-saving.</p>
          <div className="cta-strip-actions">
            <Link to="/donors"       className="btn btn-cta-white">Find a Donor</Link>
            <Link to="/become-donor" className="btn btn-cta-outline">Become a Donor</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
