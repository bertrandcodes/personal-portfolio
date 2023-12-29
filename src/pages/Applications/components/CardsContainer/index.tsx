import React from "react";
import is from "is_js";
import ApplicationCard from "../Card";
import applicationsData from "../../applicationsData.json";
import styles from "./styles.module.scss";

const ApplicationCardsContainer = () => {
  if (is.mobile()) return null;

  return (
    <div className={styles.root}>
      {applicationsData.map(({ name, description, href }) => (
        <ApplicationCard key={name} name={name} description={description} href={href} />
      ))}
    </div>
  );
};

export default ApplicationCardsContainer;
