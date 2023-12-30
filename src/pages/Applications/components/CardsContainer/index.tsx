import React from "react";
import is from "is_js";
import ApplicationCard from "../Card";
import type { ApplicationProps } from "../../types";
import styles from "./styles.module.scss";

interface ApplicationCardsContainerProps {
  data: ApplicationProps[];
}

const ApplicationCardsContainer: React.FC<ApplicationCardsContainerProps> = ({ data }) => {
  if (is.mobile()) return null;

  return (
    <div className={styles.root}>
      {data.map(({ name, description, anchorLink }) => (
        <ApplicationCard key={name} name={name} description={description} anchorLink={anchorLink} />
      ))}
    </div>
  );
};

export default ApplicationCardsContainer;
