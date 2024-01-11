import React from "react";
import classNames from "classnames";
import "./index.scss";

interface PhoneProps {
  src: string;
  className?: string;
}

const Phone: React.FC<PhoneProps> = ({ src, className }) => (
  <figure className={classNames("iphone", className)}>
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
