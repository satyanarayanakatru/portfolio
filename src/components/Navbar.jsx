import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Centralized navigation items list to keep both menus perfectly synced
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Dashboard",
    "Clients",
    "Contact",
  ];

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* RESTORED FULL BRAND LOGO */}
      <div className={styles.logo}>KATRU SATYANARAYANA</div>

      {/* DESKTOP NAV */}
      <nav className={styles.desktopNav}>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ACTION BUTTONS (STAYS ALIVE AND ALWAYS ON TOP) */}
      <div className={styles.actions}>
        <button
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        <button
          onClick={() => setOpen(!open)}
          className={styles.menuBtn}
          aria-label="Toggle Menu"
        >
          {open ? <FiX className={styles.closeIcon} /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
