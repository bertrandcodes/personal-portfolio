import React from "react";

import { ProjectContainer } from "./components";
import projectsData from "./projects.json";
import type { ProjectProps } from "./types";
import styles from "./styles.module.scss";

const data: ProjectProps[] = projectsData;

const Projects = () => (
  <div className={styles.root}>
    {data.map((project) => (
      <ProjectContainer key={project.title} data={project} />
    ))}
  </div>
);

export default Projects;
