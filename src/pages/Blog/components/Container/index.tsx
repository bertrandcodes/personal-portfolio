import React from "react";
import { Link } from "react-router-dom";

import type { BlogProps } from "@src/pages/Blog/types";
import styles from "./styles.module.scss";

interface BlogContainerProps {
  data: BlogProps;
}

const BlogContainer: React.FC<BlogContainerProps> = ({
  data: { title, imgSrc, alt, link, timePeriod, description, readTime },
}) => (
  <div className={styles.root}>
    <Link
      to={`/blog/${link}`}
      style={{ color: "inherit", textDecoration: "none", display: "flex" }}
    >
      <div className={styles.preview}>
        <img className={styles.image} src={imgSrc} alt={alt} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subheader}>
          {timePeriod} | {readTime} min read
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  </div>
);

export default BlogContainer;
