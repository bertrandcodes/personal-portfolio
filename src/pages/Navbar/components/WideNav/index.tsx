import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles.module.scss";

const WideNav = () => {
  return (
    <nav>
      <div className={styles.linkContainer}>
        <NavLink exact activeClassName={styles.linkActive} className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to="/applications">
          Applications
        </NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to="/resume">
          Resume
        </NavLink>
        <NavLink activeClassName={styles.linkActive} className={styles.link} to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default WideNav;
