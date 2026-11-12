import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import { DonorProvider, useDonors } from "./context/DonorContext";
import Navbar      from "./components/Navbar";
import Footer      from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage        from "./pages/HomePage";
import DonorsPage      from "./pages/DonorsPage";
import BecomeDonorPage from "./pages/BecomeDonorPage";
import AboutPage       from "./pages/AboutPage";
import HowItWorksPage  from "./pages/HowItWorksPage";
import NotFoundPage    from "./pages/NotFoundPage";

function AppShell({ darkMode, setDarkMode }) {
  const { donors, loading } = useDonors();
  const liveCount = loading ? null : donors.filter((d) => d.available).length;

  return (
    <>
      <ScrollToTop />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} liveCount={liveCount} />

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/donors"        element={<DonorsPage />} />
          <Route path="/become-donor"  element={<BecomeDonorPage />} />
          <Route path="/how-it-works"  element={<HowItWorksPage />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="*"              element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("hema-theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("hema-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <DonorProvider>
        <AppShell darkMode={darkMode} setDarkMode={setDarkMode} />
      </DonorProvider>
    </BrowserRouter>
  );
}
