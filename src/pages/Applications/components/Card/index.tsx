import React from "react";
import "./index.scss";

interface ApplicationCardProps {
  name: string;
  description: string;
  anchorLink: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ name, description, anchorLink }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const targetElement = document.getElementById(anchorLink);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
        <button type="button" className="card-button" onClick={handleClick}>
          View
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
