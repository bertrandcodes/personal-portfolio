import React from "react";
import is from "is_js";
import { NavLink } from "react-router-dom";
import { SeoData } from "@components";

const Home = () => (
  <div className="main">
    <SeoData
      title="Home | Bertrand Shao"
      name="description"
      content="Begin your journey here. Find out about the latest creative web projects I've been working on. Try out some cool applications."
    />
    <div className="background-div">
      <div className="overlay" />
      {is.mobile() ? (
        <img className="background-image" src="mountainlake.jpg" alt="mountains and lake" />
      ) : (
        <video className="home-video" autoPlay loop muted>
          <source src="code.mp4" type="video/mp4" />
          <img className="background-image" src="mountainlake.jpg" alt="mountains and lake" />
        </video>
      )}
      <div className="home-body">
        <NavLink className="my-face" to="/about" />
        <div className="about-me">
          <p className="line-1 anim-typewriter">Welcome! My name is Bertrand Shao</p>
          <div className="experiences">and I develop web experiences.</div>
        </div>
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
      </div>
    </div>
  </div>
);

export default Home;
