import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles.module.scss";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {};

  return (
    <nav>
      <div className={styles.burger} onClick={() => {}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default MobileNav;
