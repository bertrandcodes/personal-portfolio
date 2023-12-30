import React, { useState } from "react";
import { SeoData, ScrollIndicator } from "@components";
import { ApplicationCardsContainer, ApplicationDetails, Modal } from "./components";
import applicationsData from "./applicationsData.json";
import type { ApplicationProps, ModalContentProps } from "./types";

const data: ApplicationProps[] = applicationsData;

export interface ModalStateType extends ModalContentProps {
  visible: boolean;
  name: string;
}

const Applications = () => {
  const [modalState, setModalState] = useState<ModalStateType>({
    visible: false,
    name: "",
    description: null,
    bulletPoints: [],
  });

  return (
    <>
      <Modal modalState={modalState} setModalState={setModalState} />
      <SeoData
        title="Applications | Bertrand Shao"
        content="Check out stuff I made. Many more exciting apps to come."
      />
      <ScrollIndicator />
      <ApplicationCardsContainer data={data} />
      {data.map((app) => (
        <ApplicationDetails key={app.name} data={app} setModalState={setModalState} />
      ))}
    </>
  );
};

export default Applications;
