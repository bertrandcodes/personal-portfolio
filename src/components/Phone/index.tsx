import React from "react";
import "./index.scss";

interface PhoneProps {
  src: string;
}

const Phone: React.FC<PhoneProps> = ({ src }) => (
  <figure className="iphone">
    <div className="side-buttons" />
    <div className="phone">
      <div className="top">
        <div>
          <span className="camera" />
          <span className="speaker" />
        </div>
      </div>
      <div className="screen">
        <video className="iphone-video" autoPlay loop muted>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className="bottom" />
    </div>
  </figure>
);

export default Phone;
