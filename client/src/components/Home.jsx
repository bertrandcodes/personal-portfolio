import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {

  return (
    <div className="main">
      <div className="background-div">
        <div className="overlay" />
        {/* <video autoPlay={true} loop={true} muted={true}> */}
          {/* <source src="typing.mp4" type="video/mp4"/> */}
          <img className="background-image" src="sample.jpg" alt="mountains and lake"></img>
        {/* </video> */}
        {/* <img className="background-image" src="sample.jpg"></img> */}

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
              <div className="button__arrow"></div>
              <div className="button__border-circle"></div>
              <div className="button__mask-circle">
                <div className="button__small-circle"></div>
              </div>
            </div>
          </NavLink>
        </div>
        </div>

        {/* <div className="home-button">
          <NavLink className="btn btn-sm animated-button thar-three" to="/about">Enter</NavLink>
        </div> */}


      </div>
    </div>
  );
};