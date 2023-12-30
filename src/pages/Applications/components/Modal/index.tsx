import React from "react";
import Modal from "react-bootstrap/Modal";

import styles from "./styles.module.scss";
import type { ModalStateType } from "../..";

interface ApplicationModalProps {
  modalState: ModalStateType;
  setModalState: React.Dispatch<React.SetStateAction<ModalStateType>>;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ modalState, setModalState }) => {
  const handleExit = () => {
    setModalState((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  return (
    <div>
      <Modal show={modalState.visible} onHide={handleExit} size="lg" centered>
        <Modal.Header>
          <Modal.Title>{modalState.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalState.description && (
            <div className={styles.description}>{modalState.description}</div>
          )}
          <ul>
            {modalState.bulletPoints.map((node) => (
              <li key={node.substring(0, 5)}>{node}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={handleExit}>
            Exit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApplicationModal;
