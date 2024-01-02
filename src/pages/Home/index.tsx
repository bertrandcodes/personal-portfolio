import React from "react";
import { NavLink } from "react-router-dom";
import is from "is_js";

import { SeoData } from "@components";
import { HomeButton } from "./components";
import styles from "./styles.module.scss";

const MountainBackground = () => (
  <img className={styles.image} src="mountainlake.jpg" alt="mountains and lake" />
);

const Home = () => (
  <div className={styles.root}>
    <SeoData
      title="Home | Bertrand Shao"
      content="Begin your journey here. Find out about the latest creative web projects I've been working on. Try out some cool applications."
    />
    <div className={styles.background}>
      <div className={styles.overlay} />
      {is.mobile() ? (
        <MountainBackground />
      ) : (
        <video className={styles.video} autoPlay loop muted>
          <source src="code.mp4" type="video/mp4" />
          <MountainBackground />
        </video>
      )}
      <div className={styles.text}>
        <NavLink className={styles.face} to="/about" />
        <div className={styles.about}>
          <p className={styles.line1}>Welcome! My name is Bertrand Shao</p>
          <p className={styles.line2}>and I develop web experiences.</p>
        </div>
        <HomeButton />
      </div>
    </div>
  </div>
);

export default Home;
