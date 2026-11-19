import React from "react";

/**
 * WaveBackground - Soft flowing crimson wave orbs
 * Inspired by the reference image: gentle, translucent waves
 * in brand color, completely non-distracting.
 */
export default function WaveBackground({ variant = "hero" }) {
  if (variant === "hero") {
    return (
      <div className="wave-bg" aria-hidden="true">
        {/* Large ambient orb - top left */}
        <div className="wave-orb wave-orb-1" />
        {/* Flowing wave - top right */}
        <div className="wave-orb wave-orb-2" />
        {/* Bottom accent wave */}
        <div className="wave-orb wave-orb-3" />
        {/* SVG curved line accents */}
        <svg
          className="wave-svg wave-svg-top"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96 C240,160 480,0 720,80 C960,160 1200,40 1440,100 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="wave-svg wave-svg-bottom"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 C360,120 720,280 1080,200 C1260,160 1380,220 1440,240 L1440,320 L0,320 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className="wave-bg wave-bg-subtle" aria-hidden="true">
        <div className="wave-orb wave-orb-subtle-1" />
        <div className="wave-orb wave-orb-subtle-2" />
      </div>
    );
  }

  return null;
}

