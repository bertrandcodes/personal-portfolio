import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import styles from "./styles.module.scss";

const ScrollIndicator = () => {
  const { y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);

  return (
    <div className={styles.root}>
      <div className={styles.indicator} style={{ width: `${scrolled}%` }} />
    </div>
  );
};

export default ScrollIndicator;
