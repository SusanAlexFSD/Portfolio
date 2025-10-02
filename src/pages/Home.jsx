import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaTh, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const menuItems = ["ABOUT", "PROJECTS", "CONTACT"];

  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="home-page">
      {/* Top-right controls */}
      <div className="home-controls">
        <button id="home-toggle" className="icon-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button id="home-btn" className="icon-btn" onClick={() => setMenuOpen(true)}>
          <FaTh />
        </button>
      </div>

      {/* Background blobs */}
      <div className="blobs">
        <motion.div
          className="blob"
          animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0], rotate: [0, 45, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob"
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0], rotate: [0, -30, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob"
          animate={{ x: [0, 30, -30, 0], y: [0, -40, 40, 0], rotate: [0, 60, -60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="home-center">
        {/* Name */}
        <motion.h1
          className="home-name"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Susan Alexander
        </motion.h1>

        {/* Main Menu */}
        <nav className="home-menu">
          <ul>
            {menuItems.map((item, i) => (
              <motion.li
                key={item}
                className="menu-item"
                custom={i}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.2,
                  background: "linear-gradient(135deg, #ff7eb9, #ff65a3, #7afcff)",
                  color: "#fff",
                  borderRadius: "12px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                <FaTimes />
              </button>
              <ul>
                <li onClick={() => navigate("/about")}>About Me</li>
                <li onClick={() => navigate("/projects")}>Projects</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
                <li onClick={() => alert("Extra link clicked!")}>Extra Link</li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
