import React from "react";
import "./style.scss";

interface ApplicationCardProps {
  name: string;
  description: string;
  href: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ name, description, href }) => (
  <div className="card">
    <div className="card-content">
      <h2 className="card-name">{name}</h2>
      <p className="card-description">{description}</p>
      <a href={href}>
        <button className="card-button">View</button>
      </a>
    </div>
  </div>
);

export default ApplicationCard;
