import React from "react";

import styles from "./styles.module.scss";
import { SocialMediaButtonContainer } from "./components";

const Footer = () => (
  <div className={styles.root}>
    <SocialMediaButtonContainer />
    <span>Copyright © 2024 Bertrand Shao | All Rights Reserved</span>
  </div>
);

export default Footer;
