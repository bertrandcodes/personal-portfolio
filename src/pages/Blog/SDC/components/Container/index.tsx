import React from "react";

import styles from "./styles.module.scss";

const BlogContainer = () => (
  <div className={styles.root}>
    <div className={styles.preview}>
      <img
        className={styles.image}
        src="/servers.jpg"
        alt="graphic depicting computer servers on the cloud"
      />
    </div>
    <div className={styles.text}>
      <h2 className={styles.title}>Restocking Project</h2>
      <div className={styles.date}>1/12/2020 - 1/5/2020</div>
      <div className={styles.description}>
        A brief description of the project. A brief description of the project. A brief description
        of the project. A brief description of the project.
      </div>
    </div>
  </div>
);

export default BlogContainer;
