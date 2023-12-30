import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const HomeButton = () => (
  <div className="button_body">
    <NavLink className="button" to="/about">
      <div className="button__text">Enter.</div>
      <div className="button__wrapper">
        <div className="button__arrow" />
        <div className="button__border-circle" />
        <div className="button__mask-circle">
          <div className="button__small-circle" />
        </div>
      </div>
    </NavLink>
  </div>
);

export default HomeButton;
