import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import HemaLogo from "./HemaLogo";

const NAV_LINKS = [
  { to: "/",             label: "Home",           end: true },
  { to: "/donors",       label: "Find Donors",    end: false },
  { to: "/become-donor", label: "Become a Donor", end: false },
  { to: "/how-it-works", label: "How It Works",   end: false },
  { to: "/about",        label: "About",          end: false },
];

export default function Navbar({ darkMode, setDarkMode, liveCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Add shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">

            {/* ── Brand ── */}
            <Link to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
              <HemaLogo size={30} />
              <span className="navbar-brand-text">Hema</span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="navbar-nav-desktop" aria-label="Main navigation">
              {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link-active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div className="navbar-right">
              {liveCount !== null && (
                <div className="navbar-live-pill" aria-live="polite">
                  <span className="live-dot" />
                  {liveCount} available
                </div>
              )}

              <button
                className="btn btn-icon"
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? "Light mode" : "Dark mode"}
              >
                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Mobile hamburger */}
              <button
                className="navbar-hamburger"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="mobile-drawer" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/become-donor"
            className="btn btn-primary"
            style={{ marginTop: "8px", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Become a Donor
          </Link>
        </div>
      )}
    </>
  );
}
