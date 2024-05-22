import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <Link to="/">
          <img src={Logo} alt="Brand Logo" />
        </Link>
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_link}>
          <Link to="/login" className="styles.link">Login</Link>{" "}
        </div>
        <div className={styles.navbar_link}>
          {" "}
          <Link to="/register"className="styles.link">Register</Link>{" "}
        </div>
        <div className={styles.profileIcon}></div>
      </div>
    </nav>
  );
};

export default Navbar;
