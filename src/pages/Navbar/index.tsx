import React, { useEffect, useState } from "react";
import { WideNav, MobileNav } from "./components";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isWideScreen ? <WideNav /> : <MobileNav />;
};

export default Navbar;
