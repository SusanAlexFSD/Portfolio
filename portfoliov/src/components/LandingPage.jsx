// src/components/LandingPage.jsx
import { useState } from "react";
import "./LandingPage.css"; // import your CSS here
import { useNavigate } from "react-router-dom";
import ChangingText from "./ChangingText";
import { FaSun, FaMoon, FaTh } from "react-icons/fa";

export default function LandingPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <section id="landing" className="landing">
      {/* Top-right controls */}
      
  <div className="landing-controls">
    <button
      id="landing-toggle"
      className="icon-btn"
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
    <button id="landing-btn" className="icon-btn">
      <FaTh />
    </button>
  </div>

      {/* Main content */}
      <div className="landing-content">
        <h1>
          Hi, I’m <span className="highlight">Susan Alexander</span>
        </h1>
          <h2 className="changing-text">
                <ChangingText />
          </h2>

        <button
          id="enter-btn"
          className="enter-btn"
          onClick={() => navigate("/home")}
        >
          Enter Portfolio
        </button>
      </div>

      {/* Blobs */}
      <div className="blobs">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
    </section>
  );
}
