import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className="logo">Katru Satyanarayana</div>
      <nav className={styles.navStyle}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/skills"}>Skills</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
