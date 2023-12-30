import React from "react";
import { SeoData, ScrollIndicator } from "@components";
import { ApplicationCardsContainer, ApplicationDetails } from "./components";
import applicationsData from "./applicationsData.json";
import type { ApplicationProps } from "./types";

const data: ApplicationProps[] = applicationsData;

const Applications = () => {
  return (
    <>
      <SeoData
        title="Applications | Bertrand Shao"
        content="Check out stuff I made. Many more exciting apps to come."
      />
      <ScrollIndicator />
      <ApplicationCardsContainer data={data} />
      {data.map((app) => (
        <ApplicationDetails key={app.name} data={app} />
      ))}
    </>
  );
};

export default Applications;
