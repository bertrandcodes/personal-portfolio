import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.screen.width <= 800) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="main">
          <Helmet>
            <title>Home | Bertrand Shao</title>
            <meta
              name="description"
              content="Begin your journey here. Find out about the latest creative web projects I've been working on. Try out some cool applications."
            ></meta>
          </Helmet>
          <div className="background-div">
            <div className="overlay" />

            {this.state.mobile ? (
              <img
                className="background-image"
                src="mountainlake.jpg"
                alt="mountains and lake"
              ></img>
            ) : (
              <video className="home-video" autoPlay={true} loop={true} muted={true}>
                <source src="code.mp4" type="video/mp4" />
                <img
                  className="background-image"
                  src="mountainlake.jpg"
                  alt="mountains and lake"
                ></img>
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
                    <div className="button__arrow"></div>
                    <div className="button__border-circle"></div>
                    <div className="button__mask-circle">
                      <div className="button__small-circle"></div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
