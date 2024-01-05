import React from "react";

import { BlogContainer } from "./components";
import blogData from "./blogs.json";
import type { BlogProps } from "./types";
import styles from "./styles.module.scss";

const data: BlogProps[] = blogData;

const Blog = () => (
  <div className={styles.root}>
    {data.map((blog) => (
      <BlogContainer key={blog.title} data={blog} />
    ))}
  </div>
);

export default Blog;
