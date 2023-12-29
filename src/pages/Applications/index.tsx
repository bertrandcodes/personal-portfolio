import React from "react";
import { SeoData, ScrollIndicator } from "@components";
import { ApplicationCardsContainer } from "./components";

const Applications = () => {
  return (
    <>
      <SeoData
        title="Applications | Bertrand Shao"
        content="Check out stuff I made. Many more exciting apps to come."
      />
      <ScrollIndicator />
      <ApplicationCardsContainer />
    </>
  );
};

export default Applications;
