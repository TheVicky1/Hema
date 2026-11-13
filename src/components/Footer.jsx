import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import HemaLogo from "./HemaLogo";

const COLS = [
  {
    title: "Platform",
    links: [
      { label: "Find Donors",    to: "/donors" },
      { label: "Become a Donor", to: "/become-donor" },
      { label: "How It Works",   to: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Hema",  to: "/about" },
      { label: "Our Mission", to: "/about" },
      { label: "Our Values",  to: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ",              to: "/how-it-works" },
      { label: "Eligibility Info", to: "/how-it-works" },
      { label: "Register",         to: "/become-donor" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Top grid */}
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-link">
              <HemaLogo size={28} />
              <span className="footer-brand-name">Hema</span>
            </Link>
            <p className="footer-tagline">
              Connecting blood donors with those who need them most —
              one request at a time.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.title} className="footer-col">
              <p className="footer-col-title">{col.title}</p>
              <ul className="footer-link-list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© {year} Hema. All rights reserved.</p>
          <p className="footer-made">
            Made with&nbsp;
            <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" />
            &nbsp;for life
          </p>
        </div>

      </div>
    </footer>
  );
}
