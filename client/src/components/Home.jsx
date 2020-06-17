import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {

  return (
    <Fragment>
      <div className="background-div">
        <div className="overlay" />
        <video autoplay="true" loop="true" muted="true">
          <source src="typing.mp4" type="video/mp4" />
          <img className="background-image" src="sample.jpg" alt="mountains and lake"></img>
        </video>
        {/* <img className="background-image" src="sample.jpg"></img> */}
        <div className="about-me">
          <p className="line-1 anim-typewriter">Welcome! My name is Bertrand Shao</p>
          <div className="experiences">and I develop web experiences.</div>
        </div>
        <div className="home-button">
          <NavLink className="btn btn-sm animated-button thar-three" to="/about">Enter</NavLink>
          {/* <a href="#" className="btn btn-sm animated-button thar-three">Enter</a>  */}
        </div>

      </div>
    </Fragment>
  );
};