import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import type { ProjectProps } from "@src/pages/Projects/types";
import styles from "./styles.module.scss";

interface ProjectContainerProps {
  data: ProjectProps;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  data: { title, imgSrc, alt, link, timePeriod, tags, description, readTime },
}) => (
  <div className={styles.root}>
    <Link
      to={`/projects/${link}`}
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
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <div
              className={classNames(styles.tag, {
                [styles.design]: tag === "Design",
                [styles.frontend]: tag === "Frontend",
                [styles.backend]: tag === "Backend",
              })}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  </div>
);

export default ProjectContainer;
