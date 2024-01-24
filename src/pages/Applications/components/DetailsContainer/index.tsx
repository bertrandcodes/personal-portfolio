import React from "react";

import type { ApplicationProps } from "../../types";
import type { ModalStateType } from "../..";
import ApplicationDetails from "../Details";
import styles from "./styles.module.scss";

interface ApplicationDetailsContainerProps {
  data: ApplicationProps[];
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
}

const ApplicationDetailsContainer: React.FC<ApplicationDetailsContainerProps> = ({
  data,
  setModalState,
}) => (
  <div className={styles.root}>
    {data.map((app) => (
      <ApplicationDetails key={app.name} data={app} setModalState={setModalState} />
    ))}
  </div>
);

export default ApplicationDetailsContainer;
