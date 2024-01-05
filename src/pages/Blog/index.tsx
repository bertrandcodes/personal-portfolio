import React from "react";

import styles from "./styles.module.scss";
import { BlogContainer } from "./SDC/components";

const Blog = () => (
  <div className={styles.root}>
    {[1, 2, 3, 4].map((blog) => (
      <BlogContainer />
    ))}
  </div>
);

export default Blog;
