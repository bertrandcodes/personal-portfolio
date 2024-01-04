import React from "react";

import type { ApplicationProps } from "../../types";
import { Phone } from "@components";
import styles from "./styles.module.scss";
import type { ModalStateType } from "../..";

interface ApplicationDetailsProps {
  data: ApplicationProps;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = React.memo(
  ({
    data: {
      name,
      timePeriod,
      anchorLink,
      videoSrc,
      isMobileApp,
      technologies,
      playLink,
      gitHubLink,
      modalContent: { description, bulletPoints },
    },
    setModalState,
  }) => {
    const handleInfoClick = () => {
      setModalState({ visible: true, name, description, bulletPoints });
    };

    const VideoComponent = () =>
      isMobileApp ? (
        <Phone src={videoSrc} />
      ) : (
        <video className={styles.video} autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      );

    return (
      <section id={anchorLink} className={styles.root}>
        <div className={styles.container}>
          <h2 className={styles.header}>{name}</h2>
          <time className={styles.time}>{timePeriod}</time>
          <div className={styles.line}></div>
          <VideoComponent />
          <div className={styles.techContainer}>
            <div className={styles.tech}>{technologies.join(" | ")}</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleInfoClick}>
                <i className="fa-solid fa-info fa-2xl" style={{ color: "white" }}></i>
              </button>
              <label className={styles.buttonLabel}>Info</label>
            </div>
            {playLink && (
              <div className={styles.buttonContainer}>
                <a href={playLink} target="_blank" className={styles.button}>
                  <i className="fa fa-play fa-2xl"></i>
                </a>
                <label className={styles.buttonLabel}>Play</label>
              </div>
            )}
            <div className={styles.buttonContainer}>
              <a href={gitHubLink} target="_blank" className={styles.button}>
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
              <label className={styles.buttonLabel}>GitHub</label>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

export default ApplicationDetails;
