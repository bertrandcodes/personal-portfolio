import React from "react";

import type { ApplicationProps } from "../../types";
import { Phone } from "@components";
import type { ModalStateType } from "../..";
import styles from "./styles.module.scss";

interface ApplicationDetailsProps {
  data: ApplicationProps;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
}

interface VideoComponentProps {
  src: string;
  isMobileApp: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, isMobileApp }) => {
  if (isMobileApp) {
    return <Phone src={src} />;
  }
  return (
    <video className={styles.video} autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};

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

    return (
      <section id={anchorLink} className={styles.root}>
        <div className={styles.container}>
          <h2 className={styles.header}>{name}</h2>
          <time className={styles.time}>{timePeriod}</time>
          <div className={styles.line} />
          <VideoComponent src={videoSrc} isMobileApp={isMobileApp} />
          <div className={styles.techContainer}>
            <div className={styles.tech}>{technologies.join(" | ")}</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.buttonContainer}>
              <button type="button" className={styles.button} onClick={handleInfoClick}>
                <i className="fa-solid fa-info fa-2xl" style={{ color: "white" }} />
              </button>
              <label className={styles.buttonLabel}>Info</label>
            </div>
            {playLink && (
              <div className={styles.buttonContainer}>
                <a href={playLink} rel="noreferrer" target="_blank" className={styles.button}>
                  <i className="fa fa-play fa-2xl" />
                </a>
                <label className={styles.buttonLabel}>Play</label>
              </div>
            )}
            <div className={styles.buttonContainer}>
              <a href={gitHubLink} rel="noreferrer" target="_blank" className={styles.button}>
                <i className="fa-brands fa-github fa-2xl" />
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
