import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const burgerClasses = classNames(styles.burger, {
    [styles.open]: isOpen,
  });

  const containerClasses = classNames(styles.linkContainer, {
    [styles.open]: isOpen,
  });

  return (
    <nav>
      <div className={containerClasses} onClick={handleToggle}>
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
      <div className={burgerClasses} onClick={handleToggle}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
